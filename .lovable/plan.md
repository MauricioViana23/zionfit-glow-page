
# ZionFit Product Page — Implementation Plan

## Overview
Build a complete, mobile-first, high-converting product landing page for ZionFit Shot Matinal in React + Tailwind, following the exact section order, copy, design system, and CRO logic provided.

## Design System Setup
- Update `styles.css` with ZionFit brand colors (#C94475, #F5A623, #FBF9F6, etc.) and custom CSS variables
- Import Playfair Display + DM Sans from Google Fonts in `__root.tsx`
- Set radius to 14px

## Component Architecture
All sections will be built as separate React components in `src/components/zionfit/`:

1. **TopBar** — Black scrolling announcement bar with highlighted accent spans
2. **HeroSection** — Two-column layout with interactive gallery + buy box
   - `ImageGallery` — Main image + 6 clickable thumbnails, badge overlay
   - `BuyBox` — Rating, H1, bullets, bundle selector (3 radio options), price block, CTA, guarantee, payment icons
   - Bundle selection state updates price, savings, installments, and sticky bar
3. **ProblemSection** — Two-column with image + accordion (one-open-at-a-time)
4. **BenefitsSection** — 3 alternating image/text rows with ingredient pills
5. **HowItWorksPhases** — 3-step horizontal timeline with numbered circles + connector line
6. **HowToUse** — 3 stacked steps with images + testimonial card + mini CTA
7. **IngredientsSection** — 4 ingredient cards with emoji, tags, benefit pills + certification badges
8. **ResultsTimeline** — 4 dark cards showing weekly progress + approval percentages
9. **SocialProofNumbers** — 3 stat cards + 2x2 safety grid + disclaimer
10. **TestimonialsSection** — 3 objection-targeting testimonial cards
11. **ComparisonTable** — Dark bg, 5-column scrollable table with checkmarks
12. **FAQSection** — 7-question accordion (one open at a time)
13. **FinalCTA** — Dark gradient CTA section with guarantee note
14. **Footer** — 3-column grid with company info, links, contact + bottom bar
15. **StickyBar** — Mobile-only fixed bottom bar, appears when hero scrolls out of view

## Interactive State
- **Bundle selector**: shared state (via useState in index) drives price display, savings text, installments, and sticky bar content
- **Gallery**: local state for active thumbnail/main image swap
- **Accordions**: controlled one-open-at-a-time for both Problem and FAQ sections
- **Sticky bar**: IntersectionObserver on hero section to show/hide on mobile
- **CTA buttons**: smooth scroll to buy box anchor

## Images
- All product/lifestyle images referenced as placeholders in `public/images/` — using colored placeholder divs with labels until real assets are provided

## Route
- Replace the placeholder `src/routes/index.tsx` with the full ZionFit page
- Update `__root.tsx` meta tags (title, description, og tags) for ZionFit branding

## CRO Compliance
All 10 CRO rules will be followed: rating in buy box, social proof pill above fold, guarantee adjacent to CTA, visible OFF badges, middle bundle default, no fake urgency, 44px touch targets, mobile-only sticky bar, objection-targeted testimonials, semantic HTML layout.
