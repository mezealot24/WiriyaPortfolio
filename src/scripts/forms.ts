// Lead forms (contact + audit): validation, channel switch, ?package= prefill and submit.
// The <form> keeps a real action/method and native required/type attributes, so it still posts without JS.
// TODO(form handler): /api/contact and /api/audit do not exist yet. See wrangler.jsonc for the Worker → Notion plan.
// TODO(turnstile): load Cloudflare Turnstile lazily (on first focus) and send its token with the form.

type Messages = Record<string, string>;

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^\+?[0-9][0-9\s-]{7,14}$/;

function setup(form: HTMLFormElement) {
  const msg: Messages = JSON.parse(form.dataset.messages ?? "{}");
  const contact = form.querySelector<HTMLInputElement>("[data-field='contact']");
  const contactLabel = form.querySelector<HTMLElement>("[data-contact-label]");
  const submit = form.querySelector<HTMLButtonElement>("button[type='submit']");
  const fail = form.querySelector<HTMLElement>(".form__fail");
  const done = form.querySelector<HTMLElement>(".form__done");
  const channel = () => (form.elements.namedItem("channel") as RadioNodeList | null)?.value ?? "line";

  const setErr = (input: HTMLInputElement | HTMLSelectElement, text: string) => {
    const box = document.getElementById(input.getAttribute("aria-describedby")?.split(" ")[0] ?? "");
    if (text) input.setAttribute("aria-invalid", "true");
    else input.removeAttribute("aria-invalid");
    if (box) {
      box.textContent = text;
      box.classList.toggle("is-on", Boolean(text));
    }
  };

  const check = (input: HTMLInputElement | HTMLSelectElement): boolean => {
    const v = input.value.trim();
    let text = "";
    switch (input.dataset.field) {
      case "url":
        if (!v) text = msg.url ?? "";
        else {
          try {
            const u = new URL(/^https?:\/\//i.test(v) ? v : `https://${v}`);
            if (u.hostname.indexOf(".") < 1) throw new Error("host");
          } catch {
            text = msg.urlInvalid ?? "";
          }
        }
        break;
      case "name":
        if (!v) text = msg.name ?? "";
        break;
      case "interest":
        if (!v) text = msg.interest ?? "";
        break;
      case "contact": {
        const c = channel();
        if (!v) text = msg[c] ?? "";
        else if (c === "email" && !emailRe.test(v)) text = msg.emailInvalid ?? "";
        else if (c === "phone" && !phoneRe.test(v)) text = msg.phoneInvalid ?? "";
        break;
      }
      case "consent":
        if (!(input as HTMLInputElement).checked) text = msg.consent ?? "";
        break;
    }
    setErr(input, text);
    return !text;
  };

  const fields = Array.from(form.querySelectorAll<HTMLInputElement | HTMLSelectElement>("[data-field]"));
  for (const f of fields) {
    const isBox = f instanceof HTMLInputElement && f.type === "checkbox";
    f.addEventListener("blur", () => {
      if (f.value || f.getAttribute("aria-invalid")) check(f);
    });
    f.addEventListener(isBox || f instanceof HTMLSelectElement ? "change" : "input", () => {
      if (f.getAttribute("aria-invalid")) check(f);
    });
  }

  // The next field's label, type and keyboard follow the chosen channel.
  form.querySelectorAll<HTMLInputElement>("input[name='channel']").forEach((radio) => {
    radio.addEventListener("change", () => {
      if (!contact || !contactLabel) return;
      contactLabel.textContent = radio.dataset.label ?? "";
      contact.type = radio.dataset.type ?? "text";
      contact.inputMode = radio.dataset.inputmode ?? "text";
      contact.autocomplete = (radio.dataset.autocomplete ?? "off") as AutoFill;
      setErr(contact, "");
    });
  });

  // /contact/?package=growth-ai-search preselects the package.
  const interest = form.querySelector<HTMLSelectElement>("select[name='interest']");
  const wanted = new URLSearchParams(location.search).get("package");
  if (interest && wanted && Array.from(interest.options).some((o) => o.value === wanted)) interest.value = wanted;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const bad = fields.filter((f) => !check(f));
    if (bad.length) {
      bad[0]?.focus();
      return;
    }
    if (!submit) return;
    const label = submit.textContent;
    submit.disabled = true;
    submit.textContent = form.dataset.sending ?? label;
    fail?.classList.remove("is-on");

    const data = new FormData(form);
    data.set("consent_at", new Date().toISOString());
    data.set("page", location.pathname);
    try {
      const res = await fetch(form.action, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(String(res.status));
      const chosen = form.querySelector<HTMLInputElement>("input[name='channel']:checked");
      const slot = form.querySelector("[data-done-channel]");
      if (slot && chosen) slot.textContent = chosen.dataset.channel ?? "";
      form.classList.add("is-done");
      done?.focus();
    } catch {
      fail?.classList.add("is-on");
      fail?.focus();
    } finally {
      submit.disabled = false;
      submit.textContent = label;
    }
  });
}

document.querySelectorAll<HTMLFormElement>("form[data-lead]").forEach(setup);
