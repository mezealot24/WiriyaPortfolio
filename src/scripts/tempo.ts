// 120 BPM: one beat is 500ms. Mirrors the tempo tokens in seconds, which Motion expects.
export const BEAT = 0.5;

export const tempo = {
  thirtySecond: BEAT / 8,
  sixteenth: BEAT / 4,
  eighth: BEAT / 2,
  beat: BEAT,
  half: BEAT * 2,
  bar: BEAT * 4,
} as const;

export const ease = {
  out: [0.16, 1, 0.3, 1],
  inOut: [0.65, 0, 0.35, 1],
  in: [0.7, 0, 0.84, 0],
} as const satisfies Record<string, readonly [number, number, number, number]>;

export const still = (): boolean => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
