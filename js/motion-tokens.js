/**
 * Shared motion vocabulary for the GSAP system. Load before navigation.js/animations.js/booking.js.
 * Durations follow the micro (0.2-0.4s) / UI (0.4-0.8s) / editorial (0.8-1.5s) / cinematic (1.2-2.5s+)
 * hierarchy from the motion-design brief — do not invent one-off durations elsewhere.
 */
window.MOTION = {
  duration: {
    micro: 0.3,
    ui: 0.6,
    editorial: 1.1,
    cinematic: 1.8
  },
  ease: {
    out: "power2.out",
    outStrong: "power3.out",
    inOut: "power2.inOut",
    cinematicOut: "power4.out"
  },
  bp: {
    desktop: "(min-width: 60rem)",
    mobile: "(max-width: 59.99rem)",
    reduceMotion: "(prefers-reduced-motion: reduce)"
  }
};
