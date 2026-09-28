/**
 * ==============================================================================
 * NIROSOLAR / WOOLAR SITE CONFIGURATION (Zero-Hardcoding Master Data Layer)
 * Reads all parameters, brand metadata, math rates, and contacts from window.getEnv()
 * ==============================================================================
 */

(function () {
  'use strict';

  // Environment accessor shorthand
  const e = (key, fallback) => (typeof window.getEnv === 'function' ? window.getEnv(key, fallback) : fallback);

  window.SITE_CONFIG = {
    meta: {
      siteName: e("SITE_NAME", "Nirosolar"),
      brandName: e("BRAND_NAME", "Woolar"),
      legalName: e("LEGAL_NAME", "Woolar / Nirosolar Energy Inc."),
      tagline: e("TAGLINE", "Experience the Future of Solar Power"),
      title: e("SITE_TITLE", "Nirosolar — Experience the Future of Solar Power | Renewable Energy Solutions"),
      description: e("SITE_DESCRIPTION", "Harness next-generation solar energy with Nirosolar. Tier-1 monocrystalline bifacial solar panels, smart battery storage, and up to $32,000+ in 25-year energy savings. Calculate your solar quote today."),
      canonicalUrl: e("CANONICAL_URL", "https://nirosolar.energy/"),
      ogImage: e("OG_IMAGE", "assets/hero-solar.jpg"),
      themeColor: e("THEME_COLOR", "#0e1713"),
      twitterHandle: e("TWITTER_HANDLE", "@nirosolar"),
      supportEmail: e("SUPPORT_EMAIL", "hello@nirosolar.energy"),
      securityEmail: e("SECURITY_EMAIL", "security@nirosolar.energy")
    },

    navigation: {
      primaryLinks: [
        { id: "impact", label: "Impact", href: "#impact" },
        { id: "calculator", label: "Calculator", href: "#calculator" },
        { id: "technology", label: "Technology", href: "#technology" },
        { id: "about", label: "About us", href: "#about" }
      ],
      cta: {
        label: e("HERO_CTA_LABEL", "Get Started"),
        action: "openModal"
      }
    },

    hero: {
      kicker: e("HERO_KICKER", "More Power Efficiency"),
      headline: e("HERO_HEADLINE", "Experience the future of Solar Power."),
      cta: {
        label: e("HERO_CTA_LABEL", "Get Started"),
        action: "openModal"
      },
      socialLinks: [
        { network: "Twitter", url: e("TWITTER_URL", "https://twitter.com/nirosolar"), label: "Twitter / X" },
        { network: "Instagram", url: e("INSTAGRAM_URL", "https://instagram.com/nirosolar"), label: "Instagram" },
        { network: "LinkedIn", url: e("LINKEDIN_URL", "https://linkedin.com/company/nirosolar"), label: "LinkedIn" }
      ],
      slides: [
        {
          id: 1,
          title: "Experience the future\nof Solar Power.",
          image: "assets/mission-energy.jpg",
          cta: e("HERO_CTA_LABEL", "Get Started")
        },
        {
          id: 2,
          title: "Next-Gen Monocrystalline\nBifacial Cells.",
          image: "assets/aerial-solar.jpg",
          cta: "Learn More"
        },
        {
          id: 3,
          title: "Zero Grid Outages with\nSmart LFP Storage.",
          image: "assets/timber-solar-home.jpg",
          cta: "View Storage"
        },
        {
          id: 4,
          title: "AI Generation Forecasting &\nMicroinverters.",
          image: "assets/serenity-steppe.jpg",
          cta: "Explore Tech"
        },
        {
          id: 5,
          title: "Over $32,000 in Cumulative\n25-Year Savings.",
          image: "assets/echoes-yurt.jpg",
          cta: "Calculate"
        }
      ]
    },

    section2: {
      kicker: "More Energy More Savings",
      headline: "Experience the future of Solar Power.",
      cardPhoto: {
        title: "Making Everything\nFrom " + e("SITE_NAME", "Nirosolar"),
        savingLabel: e("GAUGE_SAVING_LABEL", "Saving-"),
        savingValue: e("GAUGE_SAVING_VALUE", "610 kv"),
        gaugeTargetAngle: Number(e("GAUGE_TARGET_ANGLE", 62)),
        gaugeProgressValue: Number(e("GAUGE_PROGRESS_VALUE", 68))
      },
      cardClean1: {
        icon: "sun",
        title: "Solar Energy Best\nProduction",
        description: "Solar energy is the radiant light and heat emitted by the sun, harnessed through various technologies to generate electricity or heat. It's a renewable energy source, meaning it won't run out as long as the sun shines, making it more."
      },
      cardClean2: {
        icon: "house",
        title: "We Are Building\nBetter Future",
        description: "Solar energy is the radiant light and heat emitted by the sun, harnessed through various technologies to generate electricity or heat. It's a renewable energy source, meaning it won't run out as long as the sun shines, making it more."
      }
    },

    section3: {
      kicker: "More Energy More Savings",
      headline: "Energy Savings\nMade Easy With\nThe Solar",
      description: "Solar energy is the radiant light and heat emitted by the sun, harnessed through various technologies to generate electricity or heat. It's a renewable energy source, meaning it won't run out as long as the sun shines, making it more.",
      checklist: [
        "Provides insights into budget performance.",
        "Real-time microinverter production telemetry."
      ],
      cta: {
        label: e("HERO_CTA_LABEL", "Get Started"),
        action: "openModal"
      },
      visualImage: "assets/timber-solar-home.jpg",
      floatingWidget: {
        label: "Total Savings",
        number: e("FLOAT_WIDGET_TOTAL_SAVINGS", "700"),
        unit: e("FLOAT_WIDGET_UNIT", "/kv"),
        subtext: e("FLOAT_WIDGET_SUBTEXT", "Making everything of nirosolar")
      }
    },

    section4: {
      kicker: "More Energy More Savings",
      headline: "Transform Your Home's A Powerful Of The Force.",
      projects: [
        {
          id: "mission-energy",
          image: "assets/mission-energy.jpg",
          badgeIcon: "sun",
          title: "The Mission Of Energy",
          description: "Renew Home is working with leading brands making there everything thermostats..."
        },
        {
          id: "serenity-steppe",
          image: "assets/serenity-steppe.jpg",
          badgeIcon: "house",
          title: "Serenity Of The Steppe",
          description: "Nestled in the vast, open grasslands, a traditional yurt stands as a symbol of nomadic heritage and..."
        },
        {
          id: "echoes-past",
          image: "assets/echoes-yurt.jpg",
          badgeIcon: "wind",
          title: "Echoes Of The Past",
          description: "A dusty rural road stretches into the horizon, flanked by weathered houses and towering utility..."
        }
      ]
    },

    calculator: {
      kicker: e("CALCULATOR_KICKER", "Interactive Energy Estimation"),
      headline: e("CALCULATOR_HEADLINE", "Calculate Your 25–Year Solar Savings"),
      subtitle: e("CALCULATOR_SUBTITLE", "Accurate estimation calculated from regional solar irradiation and historical utility inflation."),
      parameters: {
        defaultMonthlyBill: Number(e("CALCULATOR_DEFAULT_MONTHLY_BILL", 180)),
        minBill: Number(e("CALCULATOR_MIN_BILL", 40)),
        maxBill: Number(e("CALCULATOR_MAX_BILL", 800)),
        step: Number(e("CALCULATOR_BILL_STEP", 5)),
        averageUtilityRatePerKWh: Number(e("CALCULATOR_AVG_UTILITY_RATE", 0.185)),
        annualUtilityInflationRate: Number(e("CALCULATOR_ANNUAL_UTILITY_INFLATION", 0.038)),
        federalTaxCreditRate: Number(e("CALCULATOR_FEDERAL_TAX_CREDIT", 0.30)),
        annualSunHoursPerDay: Number(e("CALCULATOR_ANNUAL_SUN_HOURS_PER_DAY", 4.8)),
        costPerWattInstalled: Number(e("CALCULATOR_COST_PER_WATT_INSTALLED", 2.85)),
        solarCoverageRatio: Number(e("CALCULATOR_SOLAR_COVERAGE_RATIO", 0.95)),
        annualPanelDegradationRate: Number(e("CALCULATOR_ANNUAL_PANEL_DEGRADATION", 0.005))
      }
    },

    process: {
      kicker: "Fast & Frictionless Deployment",
      headline: "Your Pathway To Clean Energy Autonomy",
      steps: [
        {
          number: "01",
          title: "Instant Satellite Assessment",
          description: "High-resolution LIDAR scans map roof pitch, shade vectors, and solar irradiance."
        },
        {
          number: "02",
          title: "Custom Microgrid Design",
          description: "Bespoke engineering layout pairing Tier-1 panels with smart battery backup."
        },
        {
          number: "03",
          title: "1-Day Certified Installation",
          description: "Master electricians mount, wire, and seal with a 10-year roof warranty."
        },
        {
          number: "04",
          title: "Activation & 24/7 Monitoring",
          description: "PTO utility interconnect approval and continuous real-time production tracking."
        }
      ]
    },

    technology: {
      kicker: "Hardware Architecture",
      headline: "Tier-1 Clean Energy Infrastructure",
      specs: [
        {
          badge: e("TECH_PANEL_WATTAGE", "440W BIFACIAL"),
          title: e("TECH_PANEL_TITLE", "N-Type TOPCon Panels"),
          description: "Dual-glass architecture capturing ambient reflected ground light with 22.8% module efficiency.",
          specs: {
            "Cell Tech": "N-Type TOPCon",
            "Efficiency": e("TECH_PANEL_EFFICIENCY", "22.8% Peak"),
            "Warranty": e("TECH_PANEL_WARRANTY", "25-Yr Performance")
          }
        },
        {
          badge: "LFP STORAGE",
          title: e("TECH_BATTERY_TITLE", "Smart Hybrid Battery"),
          description: "Cobalt-free Lithium Iron Phosphate chemistry with 10ms microsecond grid failover.",
          specs: {
            "Capacity": e("TECH_BATTERY_CAPACITY", "13.5 kWh Modular"),
            "Chemistry": e("TECH_BATTERY_CHEMISTRY", "Safe LFP"),
            "Failover": e("TECH_BATTERY_FAILOVER", "<10ms Instant")
          }
        },
        {
          badge: "MICROINVERTER",
          title: e("TECH_INVERTER_TITLE", "Per-Panel IQ8+ Optimization"),
          description: "Eliminates single-point system failures with panel-level MPPT tracking.",
          specs: {
            "Architecture": e("TECH_INVERTER_ARCHITECTURE", "Decentralized"),
            "Safety": "Rapid Shutdown",
            "Telemetry": e("TECH_INVERTER_TELEMETRY", "Per-Second Mesh")
          }
        }
      ]
    },

    testimonials: {
      kicker: "Verified Customer Experiences",
      headline: "Trusted By Over " + e("TRUST_HOMES_COUNT", "12,000+") + " Clean Energy Homes",
      items: [
        {
          name: "Marcus Vance",
          location: "Boulder, CO",
          quote: "Our monthly utility bill went from $340 to the $14 grid-connection minimum. The app makes monitoring solar production addictive.",
          system: "11.4 kW Bifacial + 20 kWh Battery"
        },
        {
          name: "Elena Rostova",
          location: "Austin, TX",
          quote: "When the grid went down last winter, our house had heat and power without a stutter. Seamless installation team.",
          system: "8.8 kW Solar Array"
        },
        {
          name: "David Chen",
          location: "San Diego, CA",
          quote: "The 25-year ROI calculator was within 4% of our actual first-year savings. Nirosolar handled all utility permits effortlessly.",
          system: "14.2 kW Solar + Dual Battery"
        }
      ]
    },

    faqs: {
      kicker: "Clarity & Transparency",
      headline: "Frequently Asked Questions",
      items: [
        {
          q: "How much can I realistically save by switching to solar?",
          a: "Most residential customers save between 65% and 92% on their monthly electricity bills. Over 25 years, accounting for historical 3.8% annual utility inflation, average homeowner net savings exceed $32,000 to $54,000 depending on roof irradiance and system capacity."
        },
        {
          q: "What happens on cloudy days or during a winter freeze?",
          a: "Modern N-Type bifacial solar panels capture ambient diffuse radiation even through dense clouds, typically generating 20% to 40% of their peak output in overcast conditions. If paired with an integrated battery, stored daytime energy continues powering your home seamlessly."
        },
        {
          q: "How does the 30% Federal Clean Energy Tax Credit work?",
          a: "Under current clean energy legislation, homeowners who purchase a qualified residential solar system and battery storage receive a dollar-for-dollar tax credit equal to 30% of the entire system cost against their federal income tax liability."
        },
        {
          q: "Will solar panels damage my roof or cause leaks?",
          a: "No. Our mounting systems utilize engineered watertight flashing and lag bolts sealed with commercial-grade polyurethane membrane. In fact, panels actually shield your shingles from UV degradation and weather wear, extending roof life. We back every install with a 10-year roof penetration warranty."
        }
      ]
    },

    ctaBanner: {
      title: "Ready To Power Your Future?",
      subtitle: "Get an instant 3D roof analysis and tailored solar proposal delivered in under 60 seconds with zero commitment.",
      placeholder: "Enter your ZIP code or street address",
      buttonText: e("HERO_CTA_LABEL", "Get Started")
    },

    footer: {
      description: "Pioneering clean energy independence through intelligent bifacial solar engineering and smart residential microgrids.",
      gridUptime: e("SYSTEM_UPTIME", "99.98% System Uptime"),
      copyright: e("COPYRIGHT_TEXT", "© 2026 Woolar / Nirosolar Energy Inc. All rights reserved.")
    },

    api: {
      baseUrl: e("API_BASE_URL", "https://api.nirosolar.energy/v1"),
      leadEndpoint: e("LEAD_SUBMIT_ENDPOINT", "/leads/quote")
    }
  };
})();
