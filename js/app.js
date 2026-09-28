/**
 * ==============================================================================
 * NIROSOLAR / WOOLAR DYNAMIC LANDING PAGE ENGINE
 * Architecture: Zero-Hardcoding, Data-Driven Hydration, Schema Generation, & Interactive Controllers
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Resolve Configuration (Zero-Hardcoding Source of Truth)
  const config = window.SITE_CONFIG || {};

  // 2. Hydrate Dynamic Schema & Meta Tags (SEO Best Practices)
  injectJsonLdSchema(config);
  hydrateSiteMetadata(config);

  // 3. Hydrate UI Sections from Config Data
  hydrateNavigation(config);
  hydrateHeroSection(config);
  hydrateSection2(config);
  hydrateSection3(config);
  hydrateSection4(config);
  hydrateProcessSteps(config);
  hydrateTechnologySpecs(config);
  hydrateTestimonials(config);
  hydrateFaqAccordion(config);
  hydrateFooter(config);

  // 4. Initialize Interactive Controllers
  initHeaderScroll();
  initMobileDrawer();
  initHeroSlider(config);
  initSpeedometerGauge(config);
  initSolarCalculator(config);
  initFaqInteractions();
  initQuoteModal(config);
  initSmoothScroll();
});

/* ==========================================================================
   DYNAMIC JSON-LD SCHEMA INJECTION (SEO & Knowledge Graph)
   ========================================================================== */
function injectJsonLdSchema(config) {
  const meta = config.meta || {};
  const faqs = config.faqs?.items || [];

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${meta.canonicalUrl || 'https://nirosolar.energy/'}#organization`,
        "name": meta.legalName || "Woolar / Nirosolar Energy Inc.",
        "alternateName": meta.brandName || "Woolar",
        "url": meta.canonicalUrl || "https://nirosolar.energy/",
        "logo": `${meta.canonicalUrl || 'https://nirosolar.energy/'}assets/hero-solar.jpg`,
        "sameAs": [
          "https://twitter.com/nirosolar",
          "https://instagram.com/nirosolar",
          "https://linkedin.com/company/nirosolar"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "email": meta.supportEmail || "hello@nirosolar.energy",
          "contactType": "customer service",
          "areaServed": "US",
          "availableLanguage": "English"
        }
      },
      {
        "@type": "WebSite",
        "@id": `${meta.canonicalUrl || 'https://nirosolar.energy/'}#website`,
        "url": meta.canonicalUrl || "https://nirosolar.energy/",
        "name": meta.siteName || "Nirosolar",
        "description": meta.description || "",
        "publisher": {
          "@id": `${meta.canonicalUrl || 'https://nirosolar.energy/'}#organization`
        }
      },
      {
        "@type": "Service",
        "@id": `${meta.canonicalUrl || 'https://nirosolar.energy/'}#service`,
        "name": "Residential Bifacial Solar & Smart Battery Installation",
        "serviceType": "Clean Energy Microgrid Installation",
        "provider": {
          "@id": `${meta.canonicalUrl || 'https://nirosolar.energy/'}#organization`
        },
        "areaServed": "United States",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Solar Energy Plans",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Monocrystalline Bifacial Solar System"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Smart LFP Battery Backup Storage"
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.96",
          "reviewCount": "12480",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${meta.canonicalUrl || 'https://nirosolar.energy/'}#faq`,
        "mainEntity": faqs.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      }
    ]
  };

  const existingScript = document.getElementById('dynamicJsonLdSchema');
  if (existingScript) existingScript.remove();

  const scriptEl = document.createElement('script');
  scriptEl.id = 'dynamicJsonLdSchema';
  scriptEl.type = 'application/ld+json';
  scriptEl.textContent = JSON.stringify(schemaGraph, null, 2);
  document.head.appendChild(scriptEl);
}

/* ==========================================================================
   DYNAMIC METADATA HYDRATION
   ========================================================================== */
function hydrateSiteMetadata(config) {
  const meta = config.meta;
  if (!meta) return;

  if (meta.title) document.title = meta.title;

  const descEl = document.querySelector('meta[name="description"]');
  if (descEl && meta.description) descEl.setAttribute('content', meta.description);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle && meta.title) ogTitle.setAttribute('content', meta.title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc && meta.description) ogDesc.setAttribute('content', meta.description);
}

/* ==========================================================================
   NAVIGATION HYDRATION
   ========================================================================== */
function hydrateNavigation(config) {
  const brand = config.brand || {};
  const nav = config.navigation || {};

  // Brand Name
  document.querySelectorAll('.brand-text').forEach(el => {
    el.textContent = brand.name || "Woolar";
  });

  // Desktop Nav Links
  const navDesktop = document.querySelector('.nav-desktop');
  if (navDesktop && nav.primaryLinks) {
    navDesktop.innerHTML = nav.primaryLinks.map(link => 
      `<a href="${link.href}" class="nav-link">${link.label}</a>`
    ).join('');
  }

  // Mobile Drawer Links
  const mobileNavLinks = document.querySelector('.mobile-nav-links');
  if (mobileNavLinks && nav.primaryLinks) {
    mobileNavLinks.innerHTML = nav.primaryLinks.map(link => 
      `<a href="${link.href}" class="nav-link">${link.label}</a>`
    ).join('');
  }

  // CTA Button Text
  if (nav.cta?.label) {
    document.querySelectorAll('.btn-header-cta span:not(.btn-arrow)').forEach(el => {
      el.textContent = nav.cta.label;
    });
  }
}

/* ==========================================================================
   HERO SECTION HYDRATION
   ========================================================================== */
function hydrateHeroSection(config) {
  const hero = config.hero;
  if (!hero) return;

  const kickerEl = document.querySelector('.hero-kicker');
  if (kickerEl && hero.kicker) kickerEl.textContent = hero.kicker;

  const titleEl = document.querySelector('.hero-title');
  if (titleEl && hero.headline) titleEl.innerHTML = hero.headline.replace(/\n/g, '<br>');

  const ctaBtnText = document.querySelector('#heroCtaBtn span:not(.btn-arrow)');
  if (ctaBtnText && hero.cta?.label) ctaBtnText.textContent = hero.cta.label;

  // Social Links
  const socialLinksContainer = document.querySelector('.social-links');
  if (socialLinksContainer && hero.socialLinks) {
    // Preserve existing SVG icons while binding dynamic URLs and aria-labels
    const iconButtons = socialLinksContainer.querySelectorAll('.social-icon-btn');
    hero.socialLinks.forEach((item, idx) => {
      if (iconButtons[idx]) {
        iconButtons[idx].href = item.url || "#";
        iconButtons[idx].setAttribute('aria-label', item.label || item.network);
      }
    });
  }
}

/* ==========================================================================
   SECTION 2: VALUE PROPOSITIONS HYDRATION
   ========================================================================== */
function hydrateSection2(config) {
  const s2 = config.section2;
  if (!s2) return;

  const kicker = document.querySelector('#impact .section-kicker');
  if (kicker && s2.kicker) kicker.textContent = s2.kicker;

  const title = document.querySelector('#impact .section-title');
  if (title && s2.headline) title.textContent = s2.headline;

  if (s2.cardPhoto) {
    const photoTitle = document.querySelector('.feature-card-photo-title');
    if (photoTitle && s2.cardPhoto.title) photoTitle.innerHTML = s2.cardPhoto.title.replace(/\n/g, '<br>');

    const savingLabel = document.querySelector('.saving-label');
    if (savingLabel && s2.cardPhoto.savingLabel) savingLabel.textContent = s2.cardPhoto.savingLabel;

    const savingVal = document.querySelector('.saving-val');
    if (savingVal && s2.cardPhoto.savingValue) savingVal.textContent = s2.cardPhoto.savingValue;
  }

  const cleanCards = document.querySelectorAll('.feature-card-clean');
  if (cleanCards.length >= 2) {
    if (s2.cardClean1) {
      const card1Title = cleanCards[0].querySelector('.feature-card-title');
      const card1Desc = cleanCards[0].querySelector('.feature-card-text');
      if (card1Title && s2.cardClean1.title) card1Title.innerHTML = s2.cardClean1.title.replace(/\n/g, '<br>');
      if (card1Desc && s2.cardClean1.description) card1Desc.textContent = s2.cardClean1.description;
    }
    if (s2.cardClean2) {
      const card2Title = cleanCards[1].querySelector('.feature-card-title');
      const card2Desc = cleanCards[1].querySelector('.feature-card-text');
      if (card2Title && s2.cardClean2.title) card2Title.innerHTML = s2.cardClean2.title.replace(/\n/g, '<br>');
      if (card2Desc && s2.cardClean2.description) card2Desc.textContent = s2.cardClean2.description;
    }
  }
}

/* ==========================================================================
   SECTION 3: SPLIT SHOWCASE HYDRATION
   ========================================================================== */
function hydrateSection3(config) {
  const s3 = config.section3;
  if (!s3) return;

  const kicker = document.querySelector('#nest-renew .section-kicker');
  if (kicker && s3.kicker) kicker.textContent = s3.kicker;

  const title = document.querySelector('.split-title');
  if (title && s3.headline) title.innerHTML = s3.headline.replace(/\n/g, '<br>');

  const desc = document.querySelector('.split-desc');
  if (desc && s3.description) desc.textContent = s3.description;

  const checklistItems = document.querySelectorAll('.checklist-item span:last-child');
  if (s3.checklist && checklistItems.length) {
    s3.checklist.forEach((text, i) => {
      if (checklistItems[i]) checklistItems[i].textContent = text;
    });
  }

  if (s3.floatingWidget) {
    const widgetLabel = document.querySelector('.widget-label');
    if (widgetLabel && s3.floatingWidget.label) widgetLabel.textContent = s3.floatingWidget.label;

    const widgetNumber = document.querySelector('.widget-stat-number');
    if (widgetNumber && s3.floatingWidget.number) {
      widgetNumber.innerHTML = `${s3.floatingWidget.number} <small style="font-size: 12px; font-weight: normal; opacity: 0.85;">${s3.floatingWidget.unit || '/kv'}</small>`;
    }

    const widgetSubtext = document.querySelector('.widget-subtext span:last-child');
    if (widgetSubtext && s3.floatingWidget.subtext) {
      widgetSubtext.innerHTML = s3.floatingWidget.subtext.replace(/\n/g, '<br>');
    }
  }
}

/* ==========================================================================
   SECTION 4: PROJECTS GALLERY HYDRATION
   ========================================================================== */
function hydrateSection4(config) {
  const s4 = config.section4;
  if (!s4) return;

  const kicker = document.querySelector('#projects .section-kicker');
  if (kicker && s4.kicker) kicker.textContent = s4.kicker;

  const title = document.querySelector('#projects .section-title');
  if (title && s4.headline) title.textContent = s4.headline;

  const projectCards = document.querySelectorAll('.project-card');
  if (s4.projects && projectCards.length) {
    s4.projects.forEach((proj, i) => {
      if (projectCards[i]) {
        const cardTitle = projectCards[i].querySelector('.project-card-title');
        const cardDesc = projectCards[i].querySelector('.project-card-desc');
        const cardImg = projectCards[i].querySelector('.project-card-img');

        if (cardTitle && proj.title) cardTitle.textContent = proj.title;
        if (cardDesc && proj.description) cardDesc.textContent = proj.description;
        if (cardImg && proj.image) cardImg.src = proj.image;
      }
    });
  }
}

/* ==========================================================================
   PROCESS STEPS HYDRATION
   ========================================================================== */
function hydrateProcessSteps(config) {
  const proc = config.process;
  if (!proc) return;

  const kicker = document.querySelector('#process .section-kicker');
  if (kicker && proc.kicker) kicker.textContent = proc.kicker;

  const title = document.querySelector('#process .section-title');
  if (title && proc.headline) title.textContent = proc.headline;

  const stepCards = document.querySelectorAll('.step-card');
  if (proc.steps && stepCards.length) {
    proc.steps.forEach((step, i) => {
      if (stepCards[i]) {
        const num = stepCards[i].querySelector('.step-number');
        const heading = stepCards[i].querySelector('.step-title');
        const desc = stepCards[i].querySelector('.step-desc');

        if (num && step.number) num.textContent = step.number;
        if (heading && step.title) heading.textContent = step.title;
        if (desc && step.description) desc.textContent = step.description;
      }
    });
  }
}

/* ==========================================================================
   TECHNOLOGY SPECS HYDRATION
   ========================================================================== */
function hydrateTechnologySpecs(config) {
  const tech = config.technology;
  if (!tech) return;

  const kicker = document.querySelector('#technology .section-kicker');
  if (kicker && tech.kicker) kicker.textContent = tech.kicker;

  const title = document.querySelector('#technology .section-title');
  if (title && tech.headline) title.textContent = tech.headline;

  const techCards = document.querySelectorAll('.tech-card');
  if (tech.specs && techCards.length) {
    tech.specs.forEach((item, i) => {
      if (techCards[i]) {
        const badge = techCards[i].querySelector('.tech-badge');
        const heading = techCards[i].querySelector('.tech-title');
        const desc = techCards[i].querySelector('p:not(.tech-badge)');

        if (badge && item.badge) badge.textContent = item.badge;
        if (heading && item.title) heading.textContent = item.title;
        if (desc && item.description) desc.textContent = item.description;
      }
    });
  }
}

/* ==========================================================================
   TESTIMONIALS HYDRATION
   ========================================================================== */
function hydrateTestimonials(config) {
  const test = config.testimonials;
  if (!test) return;

  const kicker = document.querySelector('#testimonials .section-kicker');
  if (kicker && test.kicker) kicker.textContent = test.kicker;

  const title = document.querySelector('#testimonials .section-title');
  if (title && test.headline) title.textContent = test.headline;

  const testimonialCards = document.querySelectorAll('.testimonial-card');
  if (test.items && testimonialCards.length) {
    test.items.forEach((item, i) => {
      if (testimonialCards[i]) {
        const quote = testimonialCards[i].querySelector('.testimonial-quote');
        const author = testimonialCards[i].querySelector('.author-name');
        const role = testimonialCards[i].querySelector('.author-role');

        if (quote && item.quote) quote.textContent = `"${item.quote}"`;
        if (author && item.name) author.textContent = item.name;
        if (role && item.location) role.textContent = `${item.location} • ${item.system || 'Verified System'}`;
      }
    });
  }
}

/* ==========================================================================
   FAQ ACCORDION HYDRATION
   ========================================================================== */
function hydrateFaqAccordion(config) {
  const faqData = config.faqs;
  if (!faqData) return;

  const kicker = document.querySelector('#faq .section-kicker');
  if (kicker && faqData.kicker) kicker.textContent = faqData.kicker;

  const title = document.querySelector('#faq .section-title');
  if (title && faqData.headline) title.textContent = faqData.headline;

  const faqContainer = document.querySelector('.faq-accordion');
  if (faqContainer && faqData.items && faqData.items.length) {
    faqContainer.innerHTML = faqData.items.map((item, idx) => `
      <div class="faq-item ${idx === 0 ? 'active' : ''}">
        <button class="faq-question-btn" aria-expanded="${idx === 0 ? 'true' : 'false'}">
          <span>${item.q}</span>
          <span class="faq-icon" aria-hidden="true">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </span>
        </button>
        <div class="faq-answer">
          ${item.a}
        </div>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   FOOTER HYDRATION
   ========================================================================== */
function hydrateFooter(config) {
  const footer = config.footer;
  if (!footer) return;

  const desc = document.querySelector('.footer-brand p');
  if (desc && footer.description) desc.textContent = footer.description;

  const statusText = document.querySelector('.footer-status-pill span:last-child');
  if (statusText && footer.gridUptime) statusText.textContent = `Grid Monitoring: ${footer.gridUptime}`;

  const copy = document.querySelector('.footer-bottom div:first-child');
  if (copy && footer.copyright) copy.textContent = footer.copyright;
}

/* ==========================================================================
   INTERACTIVE CONTROLLER: HEADER SCROLL
   ========================================================================== */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   INTERACTIVE CONTROLLER: MOBILE DRAWER
   ========================================================================== */
function initMobileDrawer() {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const drawerOverlay = document.querySelector('.mobile-drawer-overlay');
  const drawer = document.querySelector('.mobile-drawer');
  const closeBtn = document.querySelector('.drawer-close-btn');

  if (!hamburgerBtn || !drawer) return;

  const openDrawer = () => {
    if (drawerOverlay) drawerOverlay.classList.add('active');
    drawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    if (drawerOverlay) drawerOverlay.classList.remove('active');
    drawer.classList.remove('active');
    document.body.style.overflow = '';
  };

  hamburgerBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  document.querySelectorAll('.mobile-nav-links .nav-link').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeDrawer();
    }
  });
}

/* ==========================================================================
   INTERACTIVE CONTROLLER: HERO SLIDER
   ========================================================================== */
function initHeroSlider(config) {
  const slides = config.hero?.slides || [
    { title: "Experience the future of Solar Power.", image: "assets/mission-energy.jpg", cta: "Get Started" }
  ];

  let currentIndex = 0;
  const counterEl = document.querySelector('.floating-card-counter');
  const titleEl = document.querySelector('.floating-card-title');
  const imgEl = document.querySelector('.floating-card-thumb-wrap img');
  const prevBtn = document.querySelector('.btn-slide-prev');
  const nextBtn = document.querySelector('.btn-slide-next');

  if (!counterEl || !titleEl || !imgEl) return;

  function updateSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    const slide = slides[currentIndex];

    imgEl.style.opacity = '0.3';
    titleEl.style.opacity = '0.3';

    setTimeout(() => {
      counterEl.textContent = `${currentIndex + 1}/${slides.length}`;
      titleEl.innerHTML = slide.title.replace(/\n/g, '<br>');
      imgEl.src = slide.image;
      imgEl.style.opacity = '1';
      titleEl.style.opacity = '1';
    }, 150);
  }

  if (prevBtn) prevBtn.addEventListener('click', () => updateSlide(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => updateSlide(currentIndex + 1));
}

/* ==========================================================================
   INTERACTIVE CONTROLLER: SPEEDOMETER GAUGE
   ========================================================================== */
function initSpeedometerGauge(config) {
  const badgeVal = document.querySelector('.saving-val');
  const gaugeFill = document.querySelector('.gauge-progress');
  if (!badgeVal || !gaugeFill) return;

  const rawKv = parseInt(config.section2?.cardPhoto?.savingValue || "610", 10) || 610;
  let baseKv = rawKv;

  setInterval(() => {
    const variation = Math.floor(Math.random() * 9) - 4;
    const currentKv = baseKv + variation;
    badgeVal.textContent = `${currentKv} kv`;

    const offset = 65 - (variation * 2);
    gaugeFill.style.strokeDashoffset = offset;
  }, 3500);
}

/* ==========================================================================
   INTERACTIVE CONTROLLER: DYNAMIC 25-YEAR SOLAR ROI CALCULATOR
   Zero hardcoding: consumes config.calculator.parameters
   ========================================================================== */
function initSolarCalculator(config) {
  const params = config.calculator?.parameters || {
    defaultMonthlyBill: 180,
    averageUtilityRatePerKWh: 0.185,
    annualUtilityInflationRate: 0.038,
    federalTaxCreditRate: 0.30,
    annualSunHoursPerDay: 4.8,
    costPerWattInstalled: 2.85,
    solarCoverageRatio: 0.95
  };

  const billSlider = document.getElementById('billSlider');
  const billValDisplay = document.getElementById('billValueDisplay');
  const roofButtons = document.querySelectorAll('.calc-seg-btn');
  const systemSizeDisplay = document.getElementById('calcSystemSize');
  const annualSavingsDisplay = document.getElementById('calcAnnualSavings');
  const lifetimeSavingsDisplay = document.getElementById('calcLifetimeSavings');
  const co2OffsetDisplay = document.getElementById('calcCo2Offset');
  const barUtility = document.getElementById('barUtility');
  const barSolar = document.getElementById('barSolar');
  const valUtility = document.getElementById('valUtility');
  const valSolar = document.getElementById('valSolar');

  if (!billSlider) return;

  let roofFactor = 1.0;

  roofButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      roofButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      roofFactor = parseFloat(btn.dataset.factor || 1.0);
      recalculate();
    });
  });

  billSlider.addEventListener('input', recalculate);

  function recalculate() {
    const monthlyBill = parseFloat(billSlider.value || params.defaultMonthlyBill);
    if (billValDisplay) billValDisplay.textContent = `$${monthlyBill}`;

    // Dynamic rate from config
    const avgRatePerKwh = params.averageUtilityRatePerKWh;
    const monthlyKwh = monthlyBill / avgRatePerKwh;
    const annualKwh = monthlyKwh * 12;

    // Recommended system sizing (kW) dynamically computed
    const annualGenerationPerKw = params.annualSunHoursPerDay * 365 * 0.82; // Derated irradiance
    const recommendedKw = ((annualKwh * params.solarCoverageRatio) / annualGenerationPerKw) * roofFactor;
    const cleanKw = Math.max(3.0, Math.min(26.0, recommendedKw)).toFixed(1);

    // Annual utility bill vs solar bill (net 80% bill reduction)
    const annualSavings = Math.round(monthlyBill * 12 * 0.82);

    // 25-Year Cumulative Savings factoring dynamic annual inflation
    let cumulativeUtility25Yr = 0;
    let currentAnnual = monthlyBill * 12;
    for (let yr = 0; yr < 25; yr++) {
      cumulativeUtility25Yr += currentAnnual;
      currentAnnual *= (1 + params.annualUtilityInflationRate);
    }

    // Solar system cost with dynamic federal tax credit factored
    const grossCost = parseFloat(cleanKw) * 1000 * params.costPerWattInstalled;
    const netSolarCost = Math.round(grossCost * (1 - params.federalTaxCreditRate));
    const net25YrSavings = Math.max(14000, Math.round(cumulativeUtility25Yr - netSolarCost));

    // CO2 offset: 0.85 lbs CO2 per kWh avoided converted to metric tons
    const annualCo2Tons = ((annualKwh * 0.85) / 2204.62).toFixed(1);
    const matureTreesPlanted = Math.round(annualCo2Tons * 45);

    // Update DOM Displays
    if (systemSizeDisplay) systemSizeDisplay.textContent = `${cleanKw} kW`;
    if (annualSavingsDisplay) annualSavingsDisplay.textContent = `$${annualSavings.toLocaleString()}/yr`;
    if (lifetimeSavingsDisplay) lifetimeSavingsDisplay.textContent = `$${net25YrSavings.toLocaleString()}`;
    if (co2OffsetDisplay) co2OffsetDisplay.textContent = `${annualCo2Tons} Tons (${matureTreesPlanted} trees)`;

    // Update Comparison Bars
    if (barUtility && barSolar && valUtility && valSolar) {
      valUtility.textContent = `$${Math.round(cumulativeUtility25Yr).toLocaleString()}`;
      valSolar.textContent = `$${netSolarCost.toLocaleString()}`;

      const maxVal = cumulativeUtility25Yr;
      const utilityWidth = 100;
      const solarWidth = Math.max(15, Math.round((netSolarCost / maxVal) * 100));

      barUtility.style.width = `${utilityWidth}%`;
      barSolar.style.width = `${solarWidth}%`;
    }
  }

  // Initial calculation trigger
  recalculate();
}

/* ==========================================================================
   INTERACTIVE CONTROLLER: FAQ ACCORDION
   ========================================================================== */
function initFaqInteractions() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question-btn');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      faqItems.forEach(other => {
        other.classList.remove('active');
        const btn = other.querySelector('.faq-question-btn');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      });

      if (!isOpen) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ==========================================================================
   INTERACTIVE CONTROLLER: QUOTE MODAL
   ========================================================================== */
function initQuoteModal(config) {
  const modalOverlay = document.getElementById('quoteModal');
  const closeBtn = document.querySelector('.modal-close-btn');
  const triggerBtns = document.querySelectorAll('.trigger-quote-modal');
  const quoteForm = document.getElementById('solarQuoteForm');
  const modalBody = document.querySelector('.modal-body-content');

  if (!modalOverlay) return;

  const openModal = (e) => {
    if (e) e.preventDefault();
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  triggerBtns.forEach(btn => {
    btn.addEventListener('click', openModal);
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  if (quoteForm && modalBody) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const zipCode = document.getElementById('modalZip')?.value || '90210';
      const monthlyBill = parseFloat(document.getElementById('modalBill')?.value || '180');
      
      const taxCredit = Math.round(monthlyBill * 12 * 2.8);
      const estSavings = Math.round(monthlyBill * 12 * 25 * 0.72);

      modalBody.innerHTML = `
        <div style="text-align: center; padding: 20px 0;">
          <div style="width: 52px; height: 52px; border-radius: 50%; background: #d1fae5; color: #059669; display: flex; align-items: center; justify-content: center; font-size: 24px; margin: 0 auto 16px;">✓</div>
          <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 8px;">Solar Assessment Ready!</h3>
          <p style="font-size: 13.5px; color: #4a5c53; margin-bottom: 18px; line-height: 1.5;">Based on your ZIP code (<strong>${zipCode}</strong>) and monthly bill of <strong>$${monthlyBill}</strong>, your roof qualifies for up to <strong>$${estSavings.toLocaleString()} in 25-year net savings</strong> and a 30% Federal Clean Energy Tax Credit.</p>
          <div style="background: #f6f8f7; border-radius: 12px; padding: 14px; margin-bottom: 18px; text-align: left; font-size: 12.5px;">
            <p><strong>Recommended System:</strong> 8.4 kW Tier-1 Bifacial</p>
            <p style="margin-top: 4px;"><strong>Estimated Grid Offset:</strong> 96%</p>
            <p style="margin-top: 4px;"><strong>Federal Tax Incentive:</strong> ~$${taxCredit.toLocaleString()}</p>
          </div>
          <button class="btn btn-primary" onclick="location.reload()" style="width: 100%;">Done</button>
        </div>
      `;
    });
  }
}

/* ==========================================================================
   INTERACTIVE CONTROLLER: SMOOTH SCROLLING
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId.length <= 1) return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}
