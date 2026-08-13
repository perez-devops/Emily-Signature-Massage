/**
 * Header scroll state (GSAP-driven, replaces the old CSS-class jump), mobile menu toggle.
 * Colors below mirror css/tokens.css (--paper #F4EEE4, --space-3 1.5rem, --space-1 0.5rem) —
 * kept as literals here because GSAP tweens the actual computed values, not the custom properties.
 */
function initNavigation() {
  var header = document.getElementById('site-header');
  var toggle = document.getElementById('nav-toggle');
  var menu = document.getElementById('mobile-menu');
  var hasGsap = typeof gsap !== 'undefined';
  var reduceMotion = window.matchMedia(window.MOTION.bp.reduceMotion).matches;

  if (header) {
    var scrolled = false;
    // backgroundColor/boxShadow only — never padding/height. The header's size is now constant
    // across scroll states on purpose: a sticky header that resizes mid-scroll invalidates every
    // GSAP ScrollTrigger position beneath it (parallax, reveals) until the next refresh, which
    // was the actual cause of the jittery/"shaking" scroll behavior, not just visual jank on the
    // header itself.
    var scrolledVars = { backgroundColor: '#F4EEE4', boxShadow: '0 1px 0 #C7B9A6' };
    var topVars = { backgroundColor: 'rgba(244,238,228,0)', boxShadow: '0 1px 0 rgba(0,0,0,0)' };

    var setState = function (isScrolled, animate) {
      if (isScrolled === scrolled) return;
      scrolled = isScrolled;
      // Class toggle is a no-JS/no-GSAP fallback only (css/components.css handles that case);
      // when GSAP is present the inline styles below take precedence via higher specificity.
      header.classList.toggle('is-scrolled', isScrolled);
      var vars = isScrolled ? scrolledVars : topVars;
      if (hasGsap && animate && !reduceMotion) {
        gsap.to(header, Object.assign({}, vars, { duration: window.MOTION.duration.ui, ease: window.MOTION.ease.out, overwrite: 'auto' }));
      } else if (hasGsap) {
        gsap.set(header, vars);
      }
    };

    setState(window.scrollY > 24, false);
    window.addEventListener('scroll', function () {
      setState(window.scrollY > 24, true);
    }, { passive: true });
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
        document.body.style.overflow = '';
      });
    });
  }
}
