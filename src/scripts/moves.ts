import { animate, inView, press, stagger } from "motion";
import { ease, tempo } from "./tempo";

// The four moves from the design system: Draw, Rise, Reveal, Pluck.
// Content is visible without script; each move starts from a visible state or plays within one beat.

const [x1, y1, x2, y2] = ease.out;
const out: [number, number, number, number] = [x1, y1, x2, y2];

export function playPage(): void {
  animate("[data-draw] > i", { scaleX: [0, 1] }, { duration: tempo.beat, ease: out, delay: stagger(tempo.thirtySecond) });

  animate(
    "[data-rise] .wr-line > span",
    { y: ["110%", "0%"] },
    { duration: tempo.beat, ease: out, delay: stagger(tempo.sixteenth, { startDelay: tempo.sixteenth }) },
  );

  inView(
    "[data-reveal]",
    (element) => {
      animate(element, { opacity: [0, 1], y: [24, 0] }, { duration: tempo.beat, ease: out });
    },
    { amount: 0.2 },
  );

  press("[data-pluck]", (element) => {
    animate(element, { scale: 0.96 }, { type: "spring", visualDuration: tempo.sixteenth, bounce: 0 });
    return () => {
      animate(element, { scale: 1 }, { type: "spring", visualDuration: tempo.eighth, bounce: 0.4 });
    };
  });
}
