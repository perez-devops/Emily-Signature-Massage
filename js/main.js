/**
 * Entry point. Load order on both pages: GSAP CDN -> motion-tokens.js -> navigation.js ->
 * animations.js -> booking.js (booking.html only) -> content/content.js -> main.js.
 * Each init*() guards on its own root element, so calling all of them on every page is safe.
 */
(function () {
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  if (typeof initNavigation === 'function') initNavigation();
  if (typeof initAnimations === 'function') initAnimations();
  if (typeof initBookingForm === 'function') initBookingForm();

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Web fonts (Fraunces/Inter) swap in after ScrollTrigger has already measured the page on
  // first paint — the font-size/line-height change on swap shifts text height everywhere,
  // leaving every scroll-trigger position stale until refreshed. Without this, scroll-linked
  // animations (parallax, reveals) can fire at the wrong position and look jittery.
  if (typeof ScrollTrigger !== 'undefined' && document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  }
})();
