// Site-wide progressive enhancement. Every page is complete without this script:
// reveals, counts and the chart default to their final state (see global.css `.js` rules).

const d = document;
const root = d.documentElement;
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const $ = <T extends Element = HTMLElement>(s: string, c: ParentNode = d) => c.querySelector<T>(s);
const $$ = <T extends Element = HTMLElement>(s: string, c: ParentNode = d) => Array.from(c.querySelectorAll<T>(s));

/* Theme toggle: <html data-theme> overrides the OS preference; stored per browser. */
$("#themeToggle")?.addEventListener("click", () => {
  const current = root.dataset.theme ?? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem("sw-theme", next);
  } catch {
    /* storage blocked: the choice lasts for this page only */
  }
});

/* Mobile menu: aria-expanded, Escape closes and returns focus. */
const menuBtn = $<HTMLButtonElement>("#menuBtn");
const mnav = $("#mnav");
if (menuBtn && mnav) {
  const setMenu = (open: boolean) => {
    mnav.classList.toggle("is-open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", (open ? menuBtn.dataset.close : menuBtn.dataset.open) ?? "");
  };
  menuBtn.addEventListener("click", () => setMenu(!mnav.classList.contains("is-open")));
  d.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mnav.classList.contains("is-open")) {
      setMenu(false);
      menuBtn.focus();
    }
  });
  mnav.addEventListener("click", (e) => {
    if ((e.target as Element).closest("a")) setMenu(false);
  });
}

/* Header hairline once scrolled. */
const header = $(".header");
const onScroll = () => header?.classList.toggle("is-scrolled", scrollY > 8);
addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* Count-up: the real value is already in the HTML; this only animates it once. */
const fmt = (n: number, dec: number) =>
  n.toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec });
function countUp(el: HTMLElement) {
  const to = parseFloat(el.dataset.count ?? "0");
  const dec = parseInt(el.dataset.decimals ?? "0", 10);
  const dur = 900;
  let t0: number | undefined;
  el.style.display = "inline-block";
  el.style.minWidth = `${el.offsetWidth}px`; // no layout shift
  const tick = (t: number) => {
    t0 ??= t;
    const p = Math.min((t - t0) / dur, 1);
    el.textContent = fmt(to * (1 - Math.pow(1 - p, 4)), dec);
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = fmt(to, dec);
  };
  requestAnimationFrame(tick);
}

if ("IntersectionObserver" in window) {
  /* Reveal, chart draw and count-up share one observer; each element fires once. */
  const io = new IntersectionObserver(
    (entries) => {
      for (const en of entries) {
        if (!en.isIntersecting) continue;
        const el = en.target as HTMLElement;
        io.unobserve(el);
        el.classList.add("is-in");
        if (!reduce && el.hasAttribute("data-count")) countUp(el);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.15 },
  );
  $$("[data-reveal],[data-inview],[data-count]").forEach((el) => io.observe(el));

  /* Mobile LINE bar: on once the hero CTA has scrolled away, off while a full LINE CTA is on screen. */
  const bar = $("#lineBar");
  const start = $("[data-bar-start]");
  if (bar) {
    let past = !start;
    const stops = new Set<Element>();
    const sync = () => bar.classList.toggle("is-on", past && stops.size === 0);
    if (start) {
      new IntersectionObserver(([e]) => {
        if (!e) return;
        past = !e.isIntersecting && e.boundingClientRect.top < 0;
        sync();
      }).observe(start);
    }
    const stopIo = new IntersectionObserver(
      (entries) => {
        for (const e of entries) e.isIntersecting ? stops.add(e.target) : stops.delete(e.target);
        sync();
      },
      { threshold: 0.3 },
    );
    $$("[data-bar-stop]").forEach((el) => stopIo.observe(el));
    sync();
  }
} else {
  $$("[data-reveal],[data-inview]").forEach((el) => el.classList.add("is-in"));
}

/* Magnetic LINE CTA: mouse only, at most 6px, off under reduced motion. */
if (!reduce && matchMedia("(hover: hover) and (pointer: fine)").matches) {
  $$("[data-magnetic]").forEach((b) => {
    b.addEventListener("pointermove", (e) => {
      const r = b.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 12;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 12;
      b.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px)`;
    });
    b.addEventListener("pointerleave", () => {
      b.style.transform = "";
    });
  });
}

/* Click-to-copy email. */
$$<HTMLButtonElement>("[data-copy]").forEach((b) => {
  const state = $(".copy__state", b);
  let timer: number | undefined;
  b.addEventListener("click", () => {
    const done = (ok: boolean) => {
      if (state) state.textContent = (ok ? b.dataset.copied : b.dataset.failed) ?? "";
      b.classList.add("is-copied");
      clearTimeout(timer);
      timer = window.setTimeout(() => b.classList.remove("is-copied"), 1800);
    };
    const text = b.dataset.copy ?? "";
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(text).then(() => done(true), () => done(false));
    else done(false);
  });
});
