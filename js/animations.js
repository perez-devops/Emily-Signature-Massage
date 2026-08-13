/**
 * GSAP motion system. Every init*() function guards on its root element(s) so this file can be
 * loaded on both index.html and booking.html without erroring when a section is absent.
 * Reduced-motion and desktop/mobile branching goes through one gsap.matchMedia() instance.
 */
function initAnimations() {
  if (typeof gsap === 'undefined') return;
  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

  var M = window.MOTION;
  var reduceMotion = window.matchMedia(M.bp.reduceMotion).matches;

  initHeroAnimation(reduceMotion);
  initScrollReveals(reduceMotion);
  initImageReveals(reduceMotion);
  initButtonInteractions();
  initPricingEmphasis(reduceMotion);
  initGiftCardHover(reduceMotion);

  var mm = gsap.matchMedia();
  mm.add(
    { isDesktop: M.bp.desktop, isMobile: M.bp.mobile, reduceMotion: M.bp.reduceMotion },
    function (context) {
      var conditions = context.conditions;
      if (conditions.isDesktop && !conditions.reduceMotion) {
        initServiceHover();
        initParallax();
      }
      return function cleanup() {};
    }
  );
}

/* ---------- Masked reveal helper (shared by text + image treatments) ---------- */
function prepareMaskWrapper(el, innerTag) {
  if (!el || el.dataset.maskPrepared === 'true') return el.querySelector('.mask-inner');
  var inner = document.createElement(innerTag || 'span');
  inner.className = 'mask-inner';
  while (el.firstChild) inner.appendChild(el.firstChild);
  el.appendChild(inner);
  el.classList.add('mask-outer');
  el.dataset.maskPrepared = 'true';
  return inner;
}

/* ---------- Hero (brief §6/§7) — absorbs the old hero-video.js fallback/reduced-motion logic ---------- */
function initHeroAnimation(reduceMotion) {
  var hero = document.querySelector('.hero');
  if (!hero) return;
  var M = window.MOTION;

  var video = document.getElementById('hero-video');
  if (video) {
    video.addEventListener('error', hideHeroVideo, true);
    video.querySelectorAll('source').forEach(function (s) { s.addEventListener('error', function () { if (video.readyState === 0) hideHeroVideo(); }); });
    if (reduceMotion) { video.removeAttribute('autoplay'); video.removeAttribute('loop'); video.pause(); }
  }
  function hideHeroVideo() { if (video) video.style.display = 'none'; }

  var media = hero.querySelector('.hero-media');
  var eyebrow = hero.querySelector('.eyebrow');
  var headline = hero.querySelector('.hero-headline');
  var sub = hero.querySelector('.hero-sub');
  var ctaPrimary = hero.querySelector('.hero-actions .btn-primary');
  var ctaSecondary = hero.querySelector('.hero-actions .btn-secondary');
  var trust = hero.querySelector('.hero-trust');

  if (reduceMotion) {
    gsap.set([media, eyebrow, headline, sub, ctaPrimary, ctaSecondary, trust].filter(Boolean), { clearProps: 'all' });
    return;
  }

  var eyebrowInner = prepareMaskWrapper(eyebrow);
  var headlineInner = prepareMaskWrapper(headline, 'span');

  gsap.set([sub, ctaPrimary, ctaSecondary, trust].filter(Boolean), { autoAlpha: 0, y: 14 });
  if (eyebrowInner) gsap.set(eyebrowInner, { yPercent: 100 });
  if (headlineInner) gsap.set(headlineInner, { yPercent: 100 });
  if (media) gsap.set(media, { scale: 1.06 });

  var tl = gsap.timeline({ defaults: { ease: M.ease.out } });
  if (media) tl.to(media, { scale: 1, duration: M.duration.cinematic, ease: M.ease.cinematicOut }, 0);
  if (eyebrowInner) tl.to(eyebrowInner, { yPercent: 0, duration: M.duration.editorial, ease: M.ease.outStrong }, 0.3);
  if (headlineInner) tl.to(headlineInner, { yPercent: 0, duration: M.duration.editorial, ease: M.ease.outStrong }, 0.45);
  if (sub) tl.to(sub, { autoAlpha: 1, y: 0, duration: M.duration.ui }, 0.75);
  if (ctaPrimary) tl.to(ctaPrimary, { autoAlpha: 1, y: 0, duration: M.duration.ui }, 0.9);
  if (ctaSecondary) tl.to(ctaSecondary, { autoAlpha: 1, y: 0, duration: M.duration.ui }, 1.0);
  if (trust) tl.to(trust, { autoAlpha: 1, y: 0, duration: M.duration.ui }, 1.15);
}

/* ---------- Generic scroll reveal — Type A fade/translate (brief §10) ---------- */
function initScrollReveals(reduceMotion) {
  if (typeof ScrollTrigger === 'undefined') return;
  var M = window.MOTION;
  var els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;

  if (reduceMotion) {
    els.forEach(function (el) { gsap.set(el, { clearProps: 'all' }); });
    return;
  }

  gsap.set(els, { autoAlpha: 0, y: 24 });
  ScrollTrigger.batch(els, {
    start: 'top 85%',
    once: true,
    onEnter: function (batch) {
      gsap.to(batch, { autoAlpha: 1, y: 0, duration: M.duration.editorial, ease: M.ease.out, stagger: 0.12, overwrite: true });
    }
  });
}

/* ---------- Image reveals — Type B mask (hero excluded, handled separately) + Type D scale + gift ---------- */
function initImageReveals(reduceMotion) {
  if (typeof ScrollTrigger === 'undefined') return;
  var M = window.MOTION;

  var maskEls = document.querySelectorAll('[data-reveal-type="mask"]');
  maskEls.forEach(function (el) {
    var inner = prepareMaskWrapper(el, 'span');
    inner.style.display = 'block';
    inner.style.width = '100%';
    inner.style.height = '100%';
    if (reduceMotion) { gsap.set(inner, { clearProps: 'all' }); return; }
    gsap.set(inner, { scale: 1.15, autoAlpha: 0.001 });
    gsap.to(inner, {
      scale: 1,
      autoAlpha: 1,
      duration: M.duration.cinematic,
      ease: M.ease.cinematicOut,
      scrollTrigger: { trigger: el, start: 'top 85%', once: true }
    });
  });

  var scaleEls = document.querySelectorAll('[data-reveal-type="scale"]');
  if (scaleEls.length) {
    if (reduceMotion) {
      scaleEls.forEach(function (el) { gsap.set(el, { clearProps: 'all' }); });
    } else {
      gsap.set(scaleEls, { autoAlpha: 0, scale: 0.96 });
      ScrollTrigger.batch(scaleEls, {
        start: 'top 88%',
        once: true,
        onEnter: function (batch) {
          gsap.to(batch, { autoAlpha: 1, scale: 1, duration: M.duration.editorial, ease: M.ease.out, stagger: 0.1, overwrite: true });
        }
      });
    }
  }

  var giftEl = document.querySelector('[data-reveal-type="scale-gift"]');
  if (giftEl) {
    if (reduceMotion) {
      gsap.set(giftEl, { clearProps: 'all' });
    } else {
      gsap.set(giftEl, { autoAlpha: 0, scale: 0.97, rotation: -2 });
      gsap.to(giftEl, {
        autoAlpha: 1, scale: 1, rotation: 0,
        duration: M.duration.cinematic, ease: M.ease.cinematicOut,
        scrollTrigger: { trigger: giftEl, start: 'top 85%', once: true }
      });
    }
  }
}

/* ---------- Buttons (brief §9/§30) ---------- */
function initButtonInteractions() {
  var M = window.MOTION;
  var buttons = document.querySelectorAll('.btn');
  buttons.forEach(function (btn) {
    var hoverTween = gsap.to(btn, { scale: 1.025, duration: M.duration.micro, ease: M.ease.out, paused: true });
    btn.addEventListener('mouseenter', function () { hoverTween.play(); });
    btn.addEventListener('mouseleave', function () { hoverTween.reverse(); });
    btn.addEventListener('mousedown', function () { gsap.to(btn, { scale: 0.98, duration: 0.12, ease: M.ease.out, overwrite: true }); });
    btn.addEventListener('mouseup', function () { hoverTween.progress(1); });
  });
}

/* ---------- Pricing (brief §15/§16) ---------- */
function initPricingEmphasis(reduceMotion) {
  var popular = document.querySelector('.pricing-row.is-popular');
  if (!popular || reduceMotion || typeof ScrollTrigger === 'undefined') return;
  var M = window.MOTION;
  gsap.set(popular, { scale: 1 });
  gsap.fromTo(popular,
    { scale: 0.985 },
    {
      scale: 1, duration: M.duration.ui, ease: M.ease.out, delay: 0.3,
      scrollTrigger: { trigger: '.pricing-table', start: 'top 80%', once: true }
    }
  );

  document.querySelectorAll('.pricing-row').forEach(function (row) {
    row.addEventListener('mouseenter', function () { gsap.to(row, { y: -2, duration: M.duration.micro, ease: M.ease.out }); });
    row.addEventListener('mouseleave', function () { gsap.to(row, { y: 0, duration: M.duration.micro, ease: M.ease.out }); });
  });
}

/* ---------- Gift card hover (brief §18) ---------- */
function initGiftCardHover(reduceMotion) {
  var card = document.querySelector('.gift-section');
  if (!card || reduceMotion) return;
  var M = window.MOTION;
  card.addEventListener('mouseenter', function () { gsap.to(card, { y: -4, duration: M.duration.ui, ease: M.ease.out }); });
  card.addEventListener('mouseleave', function () { gsap.to(card, { y: 0, duration: M.duration.ui, ease: M.ease.out }); });
}

/* ---------- Service row hover (brief §13/§14) — desktop only, called from matchMedia ---------- */
function initServiceHover() {
  var rows = document.querySelectorAll('.service-row');
  if (!rows.length) return;
  var M = window.MOTION;

  rows.forEach(function (row) {
    var media = row.querySelector('.service-row-media img, .service-row-media .mask-inner');
    row.addEventListener('mouseenter', function () {
      if (media) gsap.to(media, { scale: 1.04, duration: M.duration.ui, ease: M.ease.out });
      rows.forEach(function (other) {
        if (other !== row) gsap.to(other, { autoAlpha: 0.65, duration: M.duration.ui, ease: M.ease.out });
      });
    });
    row.addEventListener('mouseleave', function () {
      if (media) gsap.to(media, { scale: 1, duration: M.duration.ui, ease: M.ease.out });
      rows.forEach(function (other) { gsap.to(other, { autoAlpha: 1, duration: M.duration.ui, ease: M.ease.out }); });
    });
  });
}

/* ---------- Parallax (brief §29) — hero video only, desktop, sparing (~8%) ---------- */
function initParallax() {
  var media = document.querySelector('.hero-media');
  if (!media || typeof ScrollTrigger === 'undefined') return;
  gsap.to(media, {
    yPercent: 8,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
  });
}
