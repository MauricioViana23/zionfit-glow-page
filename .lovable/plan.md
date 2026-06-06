## Changes

### 1. New component: `src/components/zionfit/PremiumBenefitsSection.tsx`
Editorial mobile-first section with the exact specs requested:
- Background `#F9F5F3`, container `max-w-[420px]`, padding 72/24px
- Eyebrow "— BENEFÍCIOS" in `#D06A8B`, 12px, tracking 0.25em
- Two-line title "Um pequeno ritual." / "Uma grande diferença." (italic line in `#C07A93`), Playfair Display, 46px, line-height 0.95
- 3 stacked cards (white, radius 24px, soft shadow, mb 28px):
  - 1:1 image on top
  - Floating 56px circular pink icon overlapping image/content
  - Centered title (Playfair 38px) + description (20px, #5B5558)
  - Card 1: leaf icon — "Mais leveza." 
  - Card 2: bolt icon — "Mais disposição."
  - Card 3: heart icon — "Mais bem-estar."
- Lucide icons (`Leaf`, `Zap`, `Heart`)
- Fade-up on scroll using IntersectionObserver, 700ms, 120ms stagger
- Desktop hover: `translateY(-4px)` + larger shadow; no hover on mobile

Image sources: reuse existing assets that match the brief
- Card 1 → `zionfit-benefit-espelho.png` (or `zionfit-hero-praia.png` — woman outdoors)
- Card 2 → `zionfit-hero-ritual.png` (after-workout/ritual vibe)
- Card 3 → `zionfit-benefit-espelho.png` (woman/mirror)

I will pick the best-matching existing assets — no new image generation unless you want it.

### 2. `src/routes/index.tsx`
- Remove `<ProblemSection />` import + usage
- Remove `<HowItWorksPhases />` import + usage
- Replace `<BenefitsSection />` with `<PremiumBenefitsSection />` placed directly below `<HeroSection />`

(Keeps old `BenefitsSection.tsx` / `HowItWorksPhases.tsx` / `ProblemSection.tsx` files on disk in case you want them back; just unmounted.)

### Final section order
Hero → **PremiumBenefitsSection** → HowToUse → Ingredients → RealResults → SocialProofNumbers → Testimonials → Comparison → FAQ → FinalCTA → Footer → StickyBar

Want me to also generate fresh photography for the 3 cards, or reuse existing assets?
