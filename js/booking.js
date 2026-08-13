/**
 * Booking form: validation logic unchanged from the original implementation. Status
 * (idle/submitting/success/error) and field-error messages cross-fade via GSAP instead of an
 * instant CSS class toggle — falls back to instant show/hide if GSAP isn't loaded, so the form
 * still works with no motion library present.
 *
 * Flow: submit -> validate -> confirmation modal (booking fee + payment method) -> Cancel
 * (back to form, nothing sent) or Confirm -> real POST to Web3Forms, which emails the booking
 * details to whatever address is registered to WEB3FORMS_ACCESS_KEY below. Nothing opens on the
 * visitor's device; the email is sent server-side by Web3Forms.
 *
 * Access key is registered to hello@emilysignaturemassage.com. The key is meant to live in public
 * frontend code (Web3Forms validates by key + registered domain, not a secret token), so
 * committing it here is the documented normal usage, not a leak — consider restricting it to your
 * domain in the Web3Forms dashboard once the site is live, so it can't be reused elsewhere.
 */
var WEB3FORMS_ACCESS_KEY = 'a2794a75-9d79-4123-bd77-44b879e41792';

function initBookingForm() {
  var form = document.getElementById('booking-form');
  if (!form) return;

  var M = window.MOTION || { duration: { micro: 0.3, ui: 0.6 }, ease: { out: 'power2.out' }, bp: { reduceMotion: '(prefers-reduced-motion: reduce)' } };
  var hasGsap = typeof gsap !== 'undefined';
  var reduceMotion = window.matchMedia(M.bp.reduceMotion).matches;

  var serviceSelect = document.getElementById('service');
  var statusBox = document.getElementById('form-status');
  var submitBtn = document.getElementById('submit-btn');
  var submitLabel = document.getElementById('submit-label');

  var modalOverlay = document.getElementById('booking-modal-overlay');
  var modalPanel = document.getElementById('booking-modal');
  var modalSummary = document.getElementById('booking-modal-summary');
  var cancelBtn = document.getElementById('modal-cancel-btn');
  var confirmBtn = document.getElementById('modal-confirm-btn');

  // Populate service options from the centralized content file.
  var services = (window.EMILY_CONTENT && window.EMILY_CONTENT.services) || [];
  services.forEach(function (service) {
    var opt = document.createElement('option');
    opt.value = service.slug;
    opt.textContent = service.name + ' (' + service.duration + ')';
    serviceSelect.appendChild(opt);
  });

  function serviceLabelFromSlug(slug) {
    var match = services.filter(function (s) { return s.slug === slug; })[0];
    return match ? match.name + ' (' + match.duration + ')' : slug;
  }

  var validators = {
    name: function (v) { return v.trim().length > 0; },
    phone: function (v) { return /^[\d\s\-()+]{7,}$/.test(v.trim()); },
    email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()); },
    service: function (v) { return v.trim().length > 0; },
    date: function (v) { return v.trim().length > 0; },
    time: function (v) { return v.trim().length > 0; }
  };

  function animateFieldError(errorEl, show) {
    if (!errorEl) return;
    if (!hasGsap || reduceMotion) { errorEl.style.visibility = show ? 'visible' : 'hidden'; errorEl.style.opacity = show ? 1 : 0; return; }
    gsap.to(errorEl, { autoAlpha: show ? 1 : 0, duration: M.duration.micro, ease: M.ease.out, overwrite: 'auto' });
  }

  function setFieldError(fieldName, hasError) {
    var wrapper = document.getElementById('field-' + fieldName);
    if (!wrapper) return;
    wrapper.classList.toggle('has-error', hasError);
    animateFieldError(wrapper.querySelector('.field-error'), hasError);
  }

  function validateForm(data) {
    var isValid = true;
    Object.keys(validators).forEach(function (fieldName) {
      var fieldValid = validators[fieldName](data[fieldName] || '');
      setFieldError(fieldName, !fieldValid);
      if (!fieldValid) isValid = false;
    });
    return isValid;
  }

  var statusVisible = false;
  function showStatus(type, message) {
    statusBox.textContent = message;
    statusBox.className = 'form-status is-visible ' + type;
    statusVisible = true;
    if (!hasGsap || reduceMotion) return;
    gsap.fromTo(statusBox, { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: M.duration.ui, ease: M.ease.out, overwrite: 'auto' });
  }

  function hideStatus() {
    if (!statusVisible) return;
    statusVisible = false;
    if (!hasGsap || reduceMotion) { statusBox.className = 'form-status'; return; }
    gsap.to(statusBox, { autoAlpha: 0, y: 8, duration: M.duration.micro, ease: M.ease.out, overwrite: 'auto', onComplete: function () { statusBox.className = 'form-status'; } });
  }

  function setLoading(isLoading) {
    submitBtn.setAttribute('data-loading', String(isLoading));
    submitBtn.disabled = isLoading;
    submitLabel.textContent = isLoading ? 'Sending request…' : 'Send my request';
  }

  /**
   * Real submission: POSTs to Web3Forms, which emails the booking details to the inbox
   * registered to WEB3FORMS_ACCESS_KEY (see file-level note). No redirect, no visitor-side
   * email client involved — this happens entirely in the background.
   */
  function submitBookingRequest(data, paymentMethod) {
    var payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: 'New booking request — ' + data.name,
      from_name: data.name,
      replyto: data.email,
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: serviceLabelFromSlug(data.service),
      date: data.date,
      time: data.time,
      message: data.message ? data.message : '—',
      booking_fee: '$100',
      payment_method: paymentMethod
    };

    return fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(function (res) { return res.json(); })
      .then(function (result) { return { ok: !!result.success }; })
      .catch(function () { return { ok: false }; });
  }

  function performSubmission(data, paymentMethod) {
    setLoading(true);
    submitBookingRequest(data, paymentMethod)
      .then(function (result) {
        setLoading(false);
        if (result.ok) {
          showStatus('success', 'Thanks, ' + data.name.split(' ')[0] + ' — your request and $100 booking fee confirmation (' + paymentMethod + ') are in. We\'ll confirm your appointment by phone or email shortly.');
          form.reset();
        } else {
          showStatus('error', 'Something went wrong sending your request. Please call the studio to book directly.');
        }
      })
      .catch(function () {
        setLoading(false);
        showStatus('error', 'Something went wrong sending your request. Please call the studio to book directly.');
      });
  }

  /* ---------- Confirmation modal ---------- */
  var pendingBookingData = null;
  var lastFocusedEl = null;

  function renderModalSummary(data) {
    modalSummary.innerHTML = '';
    var rows = [
      ['Name', data.name],
      ['Service', serviceLabelFromSlug(data.service)],
      ['Date', data.date],
      ['Time', data.time]
    ];
    rows.forEach(function (row) {
      var div = document.createElement('div');
      var dt = document.createElement('dt');
      dt.textContent = row[0] + ': ';
      var dd = document.createElement('dd');
      dd.textContent = row[1];
      div.appendChild(dt);
      div.appendChild(dd);
      modalSummary.appendChild(div);
    });
  }

  function trapFocus(e) {
    if (e.key !== 'Tab') return;
    var focusable = modalPanel.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (!focusable.length) return;
    var first = focusable[0], last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  function onModalKeydown(e) {
    if (e.key === 'Escape') { closeBookingModal(); return; }
    trapFocus(e);
  }

  function openBookingModal(data) {
    pendingBookingData = data;
    renderModalSummary(data);
    lastFocusedEl = document.activeElement;

    modalOverlay.hidden = false;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onModalKeydown);

    var firstRadio = modalPanel.querySelector('input[name="payment-method"]:checked') || modalPanel.querySelector('input, button');
    if (firstRadio) firstRadio.focus();

    if (!hasGsap || reduceMotion) return;
    gsap.fromTo(modalOverlay, { autoAlpha: 0 }, { autoAlpha: 1, duration: M.duration.micro, ease: M.ease.out });
    gsap.fromTo(modalPanel, { autoAlpha: 0, y: 12, scale: 0.97 }, { autoAlpha: 1, y: 0, scale: 1, duration: M.duration.ui, ease: M.ease.out });
  }

  function closeBookingModal() {
    document.removeEventListener('keydown', onModalKeydown);
    document.body.style.overflow = '';
    if (lastFocusedEl) lastFocusedEl.focus();

    if (!hasGsap || reduceMotion) { modalOverlay.hidden = true; return; }
    gsap.to(modalPanel, { autoAlpha: 0, y: 12, scale: 0.97, duration: M.duration.micro, ease: M.ease.out });
    gsap.to(modalOverlay, { autoAlpha: 0, duration: M.duration.micro, ease: M.ease.out, onComplete: function () { modalOverlay.hidden = true; } });
  }

  cancelBtn.addEventListener('click', function () {
    pendingBookingData = null;
    closeBookingModal();
  });

  modalOverlay.addEventListener('click', function (e) {
    if (e.target === modalOverlay) closeBookingModal();
  });

  confirmBtn.addEventListener('click', function () {
    if (!pendingBookingData) return;
    var checkedRadio = modalPanel.querySelector('input[name="payment-method"]:checked');
    var paymentMethod = checkedRadio ? checkedRadio.value : 'Electronic Transfer';
    var data = pendingBookingData;
    pendingBookingData = null;

    closeBookingModal();
    performSubmission(data, paymentMethod);
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    hideStatus();

    var formData = new FormData(form);
    var data = Object.fromEntries(formData.entries());

    if (!validateForm(data)) {
      showStatus('error', 'Please fix the highlighted fields and try again.');
      var firstInvalid = form.querySelector('.field.has-error input, .field.has-error select, .field.has-error textarea');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    openBookingModal(data);
  });
}
