/**
 * ==============================================================================
 * NIROSOLAR / WOOLAR RUNTIME ENVIRONMENT LOADER (js/env.js)
 * Manages all environment variables from .env with zero hardcoding.
 * Exposes window.ENV and window.getEnv(key, fallback)
 * ==============================================================================
 */

(function () {
  'use strict';

  // 1. Initial Embedded Environment Definition (Mirrors .env)
  const defaultEnv = {
    SITE_NAME: "Nirosolar",
    BRAND_NAME: "Woolar",
    LEGAL_NAME: "Woolar / Nirosolar Energy Inc.",
    TAGLINE: "Experience the Future of Solar Power",
    SITE_TITLE: "Nirosolar — Experience the Future of Solar Power | Renewable Energy Solutions",
    SITE_DESCRIPTION: "Harness next-generation solar energy with Nirosolar. Tier-1 monocrystalline bifacial solar panels, smart battery storage, and up to $32,000+ in 25-year energy savings. Calculate your solar quote today.",
    SITE_KEYWORDS: "solar power, renewable energy, solar panels, nirosolar, clean energy, residential solar, solar battery storage",
    CANONICAL_URL: "https://nirosolar.energy/",
    OG_IMAGE: "assets/hero-solar.jpg",
    THEME_COLOR: "#0e1713",

    SUPPORT_EMAIL: "hello@nirosolar.energy",
    SECURITY_EMAIL: "security@nirosolar.energy",
    TWITTER_HANDLE: "@nirosolar",
    TWITTER_URL: "https://twitter.com/nirosolar",
    INSTAGRAM_URL: "https://instagram.com/nirosolar",
    LINKEDIN_URL: "https://linkedin.com/company/nirosolar",

    HERO_KICKER: "More Power Efficiency",
    HERO_HEADLINE: "Experience the future of Solar Power.",
    HERO_CTA_LABEL: "Get Started",

    CALCULATOR_KICKER: "Interactive Energy Estimation",
    CALCULATOR_HEADLINE: "Calculate Your 25–Year Solar Savings",
    CALCULATOR_SUBTITLE: "Accurate estimation calculated from regional solar irradiation and historical utility inflation.",

    CALCULATOR_DEFAULT_MONTHLY_BILL: 180,
    CALCULATOR_MIN_BILL: 40,
    CALCULATOR_MAX_BILL: 800,
    CALCULATOR_BILL_STEP: 5,

    CALCULATOR_AVG_UTILITY_RATE: 0.185,
    CALCULATOR_ANNUAL_UTILITY_INFLATION: 0.038,
    CALCULATOR_FEDERAL_TAX_CREDIT: 0.30,

    CALCULATOR_ANNUAL_SUN_HOURS_PER_DAY: 4.8,
    CALCULATOR_COST_PER_WATT_INSTALLED: 2.85,
    CALCULATOR_SOLAR_COVERAGE_RATIO: 0.95,
    CALCULATOR_ANNUAL_PANEL_DEGRADATION: 0.005,

    GAUGE_SAVING_LABEL: "Saving-",
    GAUGE_SAVING_VALUE: "610 kv",
    GAUGE_TARGET_ANGLE: 62,
    GAUGE_PROGRESS_VALUE: 68,

    FLOAT_WIDGET_TOTAL_SAVINGS: "700",
    FLOAT_WIDGET_UNIT: "/kv",
    FLOAT_WIDGET_SUBTEXT: "Making everything of nirosolar",

    TECH_PANEL_WATTAGE: "440W BIFACIAL",
    TECH_PANEL_TITLE: "N-Type TOPCon Panels",
    TECH_PANEL_EFFICIENCY: "22.8% Peak",
    TECH_PANEL_WARRANTY: "25-Yr Performance",

    TECH_BATTERY_TITLE: "Smart Hybrid Battery",
    TECH_BATTERY_CAPACITY: "13.5 kWh Modular",
    TECH_BATTERY_CHEMISTRY: "Safe LFP",
    TECH_BATTERY_FAILOVER: "<10ms Instant",

    TECH_INVERTER_TITLE: "Per-Panel IQ8+ Optimization",
    TECH_INVERTER_ARCHITECTURE: "Decentralized",
    TECH_INVERTER_TELEMETRY: "Per-Second Mesh",

    TRUST_HOMES_COUNT: "12,000+",
    SYSTEM_UPTIME: "99.98% System Uptime",
    COPYRIGHT_TEXT: "© 2026 Woolar / Nirosolar Energy Inc. All rights reserved.",

    API_BASE_URL: "https://api.nirosolar.energy/v1",
    LEAD_SUBMIT_ENDPOINT: "/leads/quote"
  };

  // Expose global environment object
  window.ENV = Object.assign({}, defaultEnv);

  /**
   * Safe getter for environment variables with type casting
   */
  window.getEnv = function (key, fallback) {
    if (window.ENV && key in window.ENV) {
      return window.ENV[key];
    }
    return fallback;
  };

  /**
   * Helper to parse string values into numbers/booleans where applicable
   */
  function parseEnvValue(rawVal) {
    if (rawVal === undefined || rawVal === null) return rawVal;
    let trimmed = rawVal.trim();
    // Strip surrounding quotes
    if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
      trimmed = trimmed.substring(1, trimmed.length - 1);
    }
    // Booleans
    if (trimmed.toLowerCase() === 'true') return true;
    if (trimmed.toLowerCase() === 'false') return false;
    // Numbers
    if (!isNaN(trimmed) && trimmed !== '') {
      return Number(trimmed);
    }
    return trimmed;
  }

  /**
   * Parses .env text format into key-value pairs
   */
  function parseDotEnv(text) {
    const result = {};
    const lines = text.split(/\r?\n/);
    for (let line of lines) {
      line = line.trim();
      if (!line || line.startsWith('#')) continue;
      const eqIdx = line.indexOf('=');
      if (eqIdx !== -1) {
        const key = line.substring(0, eqIdx).trim();
        const value = line.substring(eqIdx + 1);
        result[key] = parseEnvValue(value);
      }
    }
    return result;
  }

  /**
   * Asynchronously fetches and parses the live /.env file if served over HTTP
   */
  window.ENV_LOADED = (async function loadLiveEnv() {
    try {
      const response = await fetch('.env');
      if (response.ok) {
        const text = await response.text();
        const parsed = parseDotEnv(text);
        Object.assign(window.ENV, parsed);
      }
    } catch (err) {
      // In file:// or cross-origin scenarios, fallback to defaultEnv without throwing
      console.info('Loaded environment from pre-compiled runtime bundle.');
    }
    return window.ENV;
  })();

})();
