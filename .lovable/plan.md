# Replace gallery and testimonial images

## Images to swap
1. **Treino** (currently `zionfit-barriga-treino.png` in hero gallery slot 1) → new image `b41c1094...png`
2. **Laptop** (currently `zionfit-garrafa-tenis.png` in hero gallery slot 2) → new image `d289851c...png`
3. **Barriga** (currently `zionfit-espelho.png` in hero gallery slot 3) → new image `6b6d8647...png`
4. **Beijo testimonial** (currently `zionfit-beijo.png` in `HowToUse.tsx` testimonial card) → new image `Mulher_sorrindo_com_bebida_rosada.png`

## Steps
1. Copy the 4 uploaded files into `src/assets/` with descriptive names:
   - `zionfit-treino-novo.png`
   - `zionfit-laptop-novo.png`
   - `zionfit-barriga-novo.png`
   - `zionfit-mulher-bebida.png`
2. In `src/components/zionfit/HeroSection.tsx`, update the three import statements (`imgBarrigaTreino`, `imgGarrafaTenis`, `imgEspelho`) to point to the new asset files. Keep variable names so the `GALLERY_IMAGES` array continues to work without further changes.
3. In `src/components/zionfit/HowToUse.tsx`, update the `imgBeijo` import to point to `zionfit-mulher-bebida.png`. The testimonial card markup stays the same.

## Blocker
Only `Mulher_sorrindo_com_bebida_rosada.png` was attached to this message. The three UUID-named files (`b41c1094...`, `d289851c...`, `6b6d8647...`) need to be re-uploaded before I can complete steps 1–2 for those images. I can swap the testimonial (#4) immediately and do the other three as soon as you re-upload them.
