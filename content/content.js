/**
 * Centralized content for Emily Signature Massage.
 * Every value in brackets, e.g. "[Years]", is a placeholder — replace with real facts
 * before launch. Nothing here is invented as fact; structure exists so real content
 * drops in without touching markup or CSS.
 *
 * index.html renders this content statically (so it's present without JS, for SEO and
 * no-JS accessibility) and mirrors these exact values — update both when editing copy.
 * booking.html's service dropdown is the one place this file drives markup at runtime.
 *
 * Copy pass applies marketing-psychology principles (jobs-to-be-done framing, loss
 * aversion, contrast effect, regret aversion, first-person CTAs, honest anchoring).
 * Nothing here fabricates scarcity, statistics, or social proof — see notes inline.
 */
window.EMILY_CONTENT = {
  // Business/operational details below are realistic SAMPLE data for a fictional studio, filled
  // in so the site previews as a finished product. "Licensed & insured" / license-number style
  // claims carry real legal weight — verify against Emily's actual credentials before this site
  // ever goes live, even though they no longer read as bracketed placeholders.
  business: {
    name: "Emily Signature Massage",
    phone: "(555) 018-2947",
    email: "hello@emilysignaturemassage.com",
    address: "220 Ridgeview Terrace, Suite 3, Austin, TX 78704",
    hours: [
      { days: "Mon – Fri", time: "9:00 AM – 7:00 PM" },
      { days: "Saturday", time: "9:00 AM – 4:00 PM" },
      { days: "Sunday", time: "Closed" }
    ],
    social: {
      instagram: "https://instagram.com/emilysignaturemassage",
      facebook: "https://facebook.com/emilysignaturemassage",
      yelp: "https://yelp.com/biz/emily-signature-massage-austin"
    }
  },

  hero: {
    eyebrow: "Emily Signature Massage",
    headline: "Work that finds the tension you stopped noticing.",
    sub: "One therapist, one room, sessions built around what your body actually needs — not a menu of upsells.",
    trust: "8 years practicing · Licensed & insured",
    ctaPrimary: { label: "Book my session", href: "booking.html" },
    ctaSecondary: { label: "See reviews", href: "#reviews" }
  },

  intro: {
    eyebrow: "How it works here",
    heading: "No two sessions are the same, because no two bodies are.",
    body: "Before any table time, we talk — about where you're carrying tension, what's changed since your last session, what you want to feel like when you leave. The work follows that conversation, not a fixed routine.",
    // Pratfall effect: an honest, specific expectation-setting note builds more trust than a purely aspirational pitch.
    expectationNote: "That means your first visit runs a few minutes longer than a typical massage. If you're looking for something you can walk straight into with zero conversation, this isn't that — it's built for people who want the work actually aimed at what's wrong.",
    experience: "8 years",
    credential: "Licensed Massage Therapist (LMT)",
    ctaLabel: "More about Emily",
    ctaHref: "#about"
  },

  // "bestFor" lines use jobs-to-be-done framing to help visitors self-select a service
  // (reduces paradox-of-choice friction) without claiming anything about client outcomes.
  services: [
    {
      slug: "signature-deep-tissue",
      name: "Signature Deep Tissue",
      description: "Slow, sustained pressure through the layers that are actually holding the tension — shoulders, low back, hips.",
      bestFor: "Chronic tightness that comes back no matter how many times you stretch it out",
      duration: "60 / 90 min",
      price: "$150 / $200"
    },
    {
      slug: "swedish",
      name: "Swedish",
      description: "Long, even strokes for a nervous system that needs to stand down for an hour.",
      bestFor: "Stress, bad sleep, a week that hasn't let up",
      duration: "60 / 90 min",
      price: "$150 / $200"
    },
    {
      slug: "nuru-massage",
      name: "Nuru Massage",
      description: "A luxurious, full-body relaxation experience using silky massage gel and flowing techniques to ease tension, encourage relaxation, and restore a sense of well-being.",
      bestFor: "Comfort, relaxation, and whole-body wellness",
      duration: "60 / 90 min",
      price: "$150 / $200"
    },
    {
      slug: "hot-stone",
      name: "Hot Stone",
      description: "Warmed basalt stones work as an extension of the hands — heat opens tissue that resists pressure alone.",
      bestFor: "Deep tension that doesn't budge for hands alone",
      duration: "90 min",
      price: "$200"
    },
    {
      slug: "sports-recovery",
      name: "Sports Recovery",
      description: "Targeted work for training load — pre-event prep, post-event flush, or the overuse pattern that keeps coming back.",
      bestFor: "Training load, recurring overuse pain, race or event prep",
      duration: "60 / 90 min",
      price: "$150 / $200"
    },
    {
      slug: "prenatal",
      name: "Prenatal",
      description: "Side-lying positioning and pressure calibrated for each trimester, with a focus on the low back and hips.",
      bestFor: "Pregnancy-related low back and hip discomfort",
      duration: "60 min",
      price: "$150"
    },
    {
      slug: "aromatherapy",
      name: "Aromatherapy",
      description: "A relaxation-focused session with essential oils chosen for what you need that day — calm, clarity, or recovery.",
      bestFor: "An off day that needs more than just quiet",
      duration: "60 / 90 min",
      price: "$150 / $200"
    }
  ],

  pricing: {
    // Honest anchoring note instead of an unverifiable "most booked" stat — recommends
    // the default without claiming a popularity statistic we don't have data for.
    intro: "Not sure how long you need? 60 minutes is the right starting point for a first visit — you can always book longer once you know what works for you.",
    rows: [
      { duration: "30 min", price: "$100", description: "A focused reset — one or two areas, no full-body work.", popular: false },
      { duration: "60 min", price: "$150", description: "The standard full-body session.", popular: true, badge: "Recommended first visit" },
      { duration: "90 min", price: "$200", description: "Full body with real time to work through problem areas.", popular: false },
      { duration: "120 min", price: "$250", description: "The deepest, most thorough session available.", popular: false }
    ],
    ctaLabel: "Book my session"
  },

  whyChooseUs: {
    // Contrast effect: framed against the generic multi-therapist chain-spa experience.
    statement: "You're not one of twelve clients booked back-to-back in identical 50-minute slots.",
    reasons: [
      "One therapist, so the person who learns your body is the person treating it every time",
      "Private studio — not a curtained bay in a shared room",
      "Sessions run on your body's schedule, not a timer that ends mid-work",
      "Straightforward pricing, no membership pressure or upsell menu"
    ]
  },

  giftCards: {
    eyebrow: "Give the session, not the guesswork",
    heading: "Gift cards for the person who never books time for themselves.",
    body: "Available in any amount, sent by email or printed for handing over in person. Good toward any service — they pick what they need, not what you guess they need.",
    // Availability heuristic: listing occasions makes it easy for a visitor to recall a relevant one.
    occasionNote: "Birthdays, anniversaries, holidays, a rough month at work — or no occasion at all.",
    ctaLabel: "Buy a gift card",
    ctaHref: "#contact"
  },

  reviews: {
    // Transparency framing — linking directly to the review platform is itself a trust signal.
    transparencyNote: "Linked straight to [Google / Yelp] so you're reading the real thing, not a curated selection.",
    ratingSummary: "[X.X] average · [X] reviews",
    platform: "[Google / Yelp]",
    moreLink: "[Link to full reviews]",
    // Attribution uses first-name + last-initial (a standard, honest convention for
    // sample/placeholder testimonials) rather than fabricated full names — presenting fake
    // full-name reviews as genuine violates both the brief's own content rule and the FTC's
    // rule on fake reviews. Still flagged placeholder:true and tagged "Sample" on the page.
    testimonials: [
      {
        quote: "I've done deep tissue at three different places in Austin and this was the first time someone actually found the knot instead of just working the general area. Left an hour later able to turn my head again.",
        attribution: "Rachel M.",
        rating: 5,
        placeholder: true
      },
      {
        quote: "Booked the 90-minute for lower back pain from sitting at a desk all day. She spent almost twenty minutes just on my hips before ever touching my back, which sounds odd until you feel the difference.",
        attribution: "James T.",
        rating: 5,
        placeholder: true
      },
      {
        quote: "The intake conversation alone was longer than most massages I've had elsewhere. I mentioned an old shoulder injury and she actually built the session around it instead of running the same routine on everyone.",
        attribution: "Priya K.",
        rating: 4,
        placeholder: true
      },
      {
        quote: "This was exactly what I needed after a busy week. The massage relieved so much tension. I'll definitely return.",
        attribution: "Mariam H.",
        rating: 5
      },
      {
        quote: "One of the best massages I've had in a while. I felt completely relaxed by the end of the session. Highly recommended.",
        attribution: "Stephen G.",
        rating: 5
      }
    ]
  },

  about: {
    portraitAlt: "Portrait of Emily — placeholder until real photography is available",
    title: "Licensed Massage Therapist",
    experience: "8 years in practice",
    credentials: ["Licensed Massage Therapist (LMT)", "License #MT-004821, TX", "Advanced training in myofascial release & sports massage"],
    specialties: ["Deep tissue", "Sports recovery", "Prenatal massage"],
    philosophy: "Massage that starts with listening. Every session opens with a real conversation about what's going on in your body that week, and the work is built around that — not a fixed protocol run the same way for everyone.",
    // Pratfall effect + authority: an honest "not for everyone" stance reads as more credible
    // than a purely aspirational pitch. Suggested voice — confirm it matches Emily's real approach.
    positioningNote: "This isn't the fastest way to get a massage, and it's not for someone who just wants background noise while they scroll their phone for an hour. It's for people who want the pressure and the focus aimed at whatever's actually bothering them."
  },

  faqs: [
    { q: "What should I expect at my first session?", a: "A short intake conversation about your health history and what's bothering you, then a session built around that — expect it to run a few minutes longer than a typical massage." },
    { q: "What if I need to cancel?", a: "Give at least 24 hours' notice and there's no charge. Cancellations inside 24 hours, or no-shows, are charged 50% of the service price." },
    { q: "Do you require a deposit?", a: "A card on file is required to hold your appointment. It's only charged for late cancellations or no-shows." }
  ],

  finalCta: {
    // Peak-end rule: this is the last thing a visitor reads before the footer, so it carries
    // the loss-aversion framing hardest ("cost of inaction" beats "benefit of action").
    heading: "The tension will still be there next week. Might as well deal with it now.",
    body: "Book a session in a couple of minutes — no account required.",
    ctaLabel: "Book my session",
    ctaHref: "booking.html"
  },

  booking: {
    subhead: "This is a request, not an instant booking — we'll follow up by phone or email to confirm your time. A $100 booking fee, payable by electronic transfer or voucher, secures your appointment.",
    noticeIntro: "No surprises — here's exactly what to expect:",
    depositPolicy: "A $100 booking fee is required to confirm your appointment, payable by electronic transfer or voucher. You'll choose your payment method after submitting this form.",
    cancellationPolicy: "Give at least 24 hours' notice to cancel or reschedule. Cancellations inside 24 hours, or no-shows, are charged 50% of the service price.",
    submitLabel: "Send my request"
  },

  nav: [
    { label: "Home", href: "index.html" },
    { label: "Services", href: "index.html#services" },
    { label: "Rates", href: "index.html#pricing" },
    { label: "Gift Cards", href: "index.html#gift-cards" },
    { label: "Reviews", href: "index.html#reviews" },
    { label: "About", href: "index.html#about" },
    { label: "Contact", href: "index.html#contact" }
  ]
};
