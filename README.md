# Woolar / Nirosolar — Renewable Energy Landing Page & Design System

A modern, high-converting solar energy landing page built in adherence with the **Company OS** (Articles I–X, Design Tokens, Thinking Pipeline, and Verification Standards).

Based on the original design concept from Seative Digital (`download.jpg`), fully realized with complete design tokens, photorealistic architectural imagery, and missing high-conversion product sections.

---

## 🌟 Key Features

1. **Pixel-Perfect Visual Parity:**
   - Sticky header with glassmorphism on scroll and responsive mobile drawer navigation.
   - Cinematic hero section with custom photorealistic curved solar pavilion architecture.
   - Floating story card carousel with interactive slide counter (`1/5`).
   - Value propositions with live SVG generation speedometer (`Saving- 610 kv`).
   - Split section with Scandinavian timber solar home and floating `Total Savings 700 /kv` badge.
   - Projects transformation gallery (`The Mission Of Energy`, `Serenity Of The Steppe`, `Echoes Of The Past`).

2. **Added Production-Ready Conversion Engines:**
   - **Interactive Solar ROI Calculator:** Dynamic monthly bill slider ($60–$600), roof composition selectors, recommended system sizing (kW), 1st-year savings, 25-year cumulative savings, mature trees planted equivalent, and SVG spend comparison bars.
   - **How It Works:** 4-step seamless white-glove installation journey.
   - **Hardware Excellence:** Technical specifications for N-Type Bifacial Monocrystalline panels (22.8% efficiency), Smart Microinverters, and LFP home battery backup.
   - **Trust & Social Proof:** Verified homeowner reviews and industry trust badges (NABCEP, 25-Year Linear Power Warranty, 4.9/5 Trustpilot).
   - **FAQ Accordion:** Interactive expandable Q&A addressing net metering, battery storage, and 30% clean energy tax credits.
   - **Instant Solar Blueprint Modal:** Multi-step quote request dialog with real-time estimation delivery.
   - **Full Production Footer:** Comprehensive navigation, live 99.98% grid uptime monitor, legal links, and carbon neutrality pledge.

---

## 📁 Project Structure

```text
├── index.html              # Semantic, accessible HTML5 application
├── css/
│   ├── tokens.css          # CSS Custom Properties (Colors, Typography, Spacing, Elevation)
│   └── style.css           # Fluid layout, responsive design, micro-interactions
├── js/
│   └── app.js              # Vanilla ES6 reactive controller (Calculator, Gauge, Slider, Modal)
├── assets/                 # High-resolution photorealistic imagery & icons
│   ├── hero-solar.jpg
│   ├── aerial-solar.jpg
│   ├── timber-solar-home.jpg
│   ├── mission-energy.jpg
│   ├── serenity-steppe.jpg
│   └── echoes-yurt.jpg
└── docs/                   # Company OS Governance & Design Specs
    ├── DESIGN-SYSTEM.md    # Design tokens, typography hierarchy, component contracts
    ├── LAZYWEB-AUDIT.md    # Lazyweb UI/UX audit: floating glass pill nav & optical icon alignment
    ├── REUSE-LEDGER.md     # Article IV compliance ($0 external cost)
    ├── LEARNING-LOG.md     # Gate close lessons and takeaways
    └── DECISION-LEDGER.md   # Settled architectural decisions
```

---

## 🚀 Running Locally

You can serve the project using Python's built-in HTTP server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.
