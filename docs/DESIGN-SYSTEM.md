# DESIGN SYSTEM & SPECIFICATION - Nirosolar / Woolar

**Document Owner:** Product Designer (Company OS)  
**Reference Asset:** `download.jpg` (Seative Digital "Nirusolar - Renewable Solar Energy Landing Page" design concept)  
**Status:** Approved for Implementation (Gate G3 -> G4)  
**Standard Compliance:** WCAG 2.1 AA, Mobile-First Responsive, CSS Custom Properties Design Tokens

---

## 1. Visual Hierarchy & Parity Analysis

The reference design features a clean, airy, high-contrast modern Scandinavian/eco-futuristic visual language characterized by:
- Soft off-white / light slate canvas (`#f8faf9`, `#f1f5f3`) contrasted with deep slate-black text (`#0d1512`, `#141f1a`).
- High-contrast photographic heroes featuring organic curved architecture embedded in lush green landscapes.
- Floating glassmorphism cards with subtle backdrop blurs (`rgba(255, 255, 255, 0.75)`, `backdrop-filter: blur(16px)`).
- Pill-shaped interactive elements with crisp borders and rounded corners (24px - 36px border radii).
- Micro-typography kickers ("More Energy More Savings", "More Power Efficiency") paired with bold, tight-tracking headlines.
- Distinctive circular energy generation speedometer/gauge with animated needle and glow indicators.

---

## 2. Design Tokens Specification

### 2.1 Color Tokens
```css
/* Core Brand & Neutrals */
--color-bg-canvas: #f6f8f7;
--color-bg-surface: #ffffff;
--color-bg-card-soft: #edf2ef;
--color-bg-card-dark: #0f1814;
--color-bg-glass: rgba(255, 255, 255, 0.82);
--color-bg-glass-dark: rgba(15, 24, 20, 0.75);

/* Text & Contrast */
--color-text-primary: #0e1713;
--color-text-secondary: #4a5c53;
--color-text-tertiary: #71847a;
--color-text-inverse: #ffffff;
--color-text-inverse-muted: rgba(255, 255, 255, 0.78);

/* Solar & Eco Accents */
--color-solar-amber: #f59e0b;
--color-solar-gold: #fbbf24;
--color-eco-green: #10b981;
--color-eco-emerald: #059669;
--color-eco-teal: #0d9488;
--color-accent-blue: #0284c7;

/* Borders & Dividers */
--color-border-subtle: rgba(14, 23, 19, 0.08);
--color-border-medium: rgba(14, 23, 19, 0.16);
--color-border-glass: rgba(255, 255, 255, 0.35);
--color-border-glass-dark: rgba(255, 255, 255, 0.12);
```

### 2.2 Typography Scale
- Primary Font: `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- Display / Accent Font: `'Outfit', sans-serif`
- Typographic Scale:
  - Display Hero: `clamp(2.5rem, 5vw + 1rem, 4.5rem)` / Weight: 700 / Line Height: 1.08 / Tracking: -0.03em
  - Section Headline: `clamp(2rem, 3.5vw + 0.5rem, 3.25rem)` / Weight: 700 / Line Height: 1.15 / Tracking: -0.025em
  - Card Headline: `1.5rem (24px)` / Weight: 600 / Line Height: 1.25 / Tracking: -0.015em
  - Subtitle Kicker: `0.875rem (14px)` / Weight: 600 / Line Height: 1.4 / Uppercase / Tracking: 0.06em
  - Body Large: `1.125rem (18px)` / Weight: 400 / Line Height: 1.6
  - Body Standard: `0.9375rem (15px)` / Weight: 400 / Line Height: 1.6
  - Caption / Micro: `0.8125rem (13px)` / Weight: 500 / Line Height: 1.4

### 2.3 Spacing & Layout Tokens
- `--space-1`: 4px
- `--space-2`: 8px
- `--space-3`: 12px
- `--space-4`: 16px
- `--space-6`: 24px
- `--space-8`: 32px
- `--space-12`: 48px
- `--space-16`: 64px
- `--space-24`: 96px
- Container Max Width: `1280px`
- Section Padding: `clamp(4rem, 8vw, 7rem) 1.5rem`

### 2.4 Border Radii
- `--radius-pill`: 9999px
- `--radius-card-lg`: 28px
- `--radius-card-md`: 20px
- `--radius-card-sm`: 14px

### 2.5 Shadows & Elevation
- `--shadow-card`: 0 10px 30px -5px rgba(10, 20, 15, 0.06), 0 4px 12px -2px rgba(10, 20, 15, 0.04);
- `--shadow-elevated`: 0 20px 40px -10px rgba(10, 20, 15, 0.12), 0 8px 16px -4px rgba(10, 20, 15, 0.06);
- `--shadow-glass`: 0 8px 32px 0 rgba(0, 0, 0, 0.18);

---

## 3. Recreated Elements (from `download.jpg`)
1. **Sticky Header / Navigation**:
   - Logo: Woolar / Nirosolar brand mark with radiant sun symbol.
   - Primary Nav: Impact, Nest Renew, Technology, Projects, About Us.
   - Action Buttons: "Calculate Savings" + "Get Started →" pill button.
2. **Hero Section**:
   - Background: Curved solar pavilion in rolling green meadows with wind turbines.
   - Floating badge: "More Power Efficiency".
   - Main Headline: "Experience the future of Solar Power."
   - Primary CTA + Social links row (X/Twitter, Instagram, LinkedIn).
   - Hero Floating Card widget: "Experience the future of Solar Power." with 1/5 slider control and preview thumbnail.
3. **Section 2: Value Propositions**:
   - Kicker: "More Energy More Savings".
   - Headline: "Experience the future of Solar Power."
   - Card 1: Photographic card "Making Everything From Nirosolar" with real-time generation gauge (610 kv).
   - Card 2: "Solar Energy Best Production" with sun icon.
   - Card 3: "We Are Building Better Future" with smart home icon.
4. **Section 3: Split Section (Savings & Analytics)**:
   - Left side: Kicker, bold heading "Energy Savings Made Easy With The Solar", descriptive copy, two verified bullet points, CTA.
   - Right side: Architectural photography of modern timber solar home with pasture sheep, floating glassmorphic widget showing "Total Savings 700 /kv" with lightning bolt and Nirosolar insignia.
5. **Section 4: Case Studies / Projects Gallery**:
   - Headline: "Transform Your Home With The Power Of Solar Energy".
   - Card 1: "The Mission Of Energy" (Wind & solar farm).
   - Card 2: "Serenity Of The Steppe" (Rural grid modernization).
   - Card 3: "Echoes Of The Past" (Autonomous off-grid yurt energy).

---

## 4. Added Missing Features (Complete Product Requirements)
To turn the partial mockup into an industry-leading, high-converting product landing page:
1. **Interactive Solar Savings & ROI Calculator**:
   - Monthly utility bill slider ($50 - $600/month).
   - Live calculations: Recommended Solar System Size (kW), Estimated Annual Savings ($), 25-Year Cumulative Savings ($), CO2 Offset in metric tons and equivalent trees planted.
   - Interactive breakdown graph.
2. **How It Works / 4-Step Installation Pipeline**:
   - 1. Free Satellite 3D Roof Scan
   - 2. Custom Engineering & City Permitting
   - 3. 1-Day Precision White-Glove Installation
   - 4. App-Connected 25-Year Solar Generation & Grid Buyback
3. **Hardware Architecture & Tech Specs**:
   - Tier-1 Bifacial N-Type Monocrystalline Panels (22.8% efficiency).
   - Microinverters with 99.5% MPPT efficiency.
   - Lithium-Iron-Phosphate (LFP) Battery Backup Storage.
4. **Verified Social Proof & Warranties**:
   - 25-Year Linear Performance Warranty guarantee badge.
   - 4.9/5 Trustpilot & NABCEP certified installer trust marks.
   - Real customer testimonials with verified homeowner metrics.
5. **Interactive FAQ Accordion**:
   - Common questions regarding net metering, cloudy weather performance, federal tax credits (30% Clean Energy Credit), and installation timeframes.
6. **Lead Capture / Instant Quote Modal**:
   - Step-by-step interactive quote dialog with real-time solar estimate calculation.
7. **Complete Production Footer**:
   - Comprehensive navigation, regulatory disclosures, carbon neutrality pledge, newsletter signup, and copyright.

---

## 5. Accessibility & Contrast Verification
- All primary text on canvas exceeds WCAG AA 4.5:1 ratio (Dark slate `#0e1713` on `#f6f8f7` yields 15.2:1).
- Buttons provide visible focus states with 2px offset rings.
- All interactive controls have keyboard accessibility (`tabindex`, `aria-label`, `aria-expanded`).
