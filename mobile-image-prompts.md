# Flux Convert — Mobile App Image Generation Prompts

Use these prompts with an image generation tool (DALL-E 3, Midjourney, Stable Diffusion, etc.) to produce premium mobile app screen concepts for **Flux Convert**.

---

## Design Bible (lock this across all screens)

- **Platform:** iOS-native premium
- **Theme:** Deep dark premium monochrome
- **Palette:** #040813 deep navy-black base, #0a1123 elevated surface, #7fb3ff primary accent, #8b8cff secondary accent, #f5f7ff high-contrast text, #90a0bb muted labels
- **Typography:** Inter — clean system-like sans with strong title/body/label contrast
- **Spacing:** Generous, breathable, consistent 8dp rhythm
- **Structure:** Card-led modular with glass-morphism surfaces
- **Texture:** Ultra-subtle film grain + soft gradient atmosphere (not sterile flat)
- **Mockup:** Clean iPhone frame, even 40px canvas margins, subtle soft shadow, content-first
- **Signature components:** Large hero metric card, compact stat strip, bottom action sheet, framed product card stack
- **Decorative assets:** Minimal line icon cluster, soft waveform line
- **Motion-implied:** Springy card lift energy, tab transition calmness

---

## Screen 1 — Welcome / Onboarding

**Prompt:**

> Premium iOS mobile app welcome screen for "Flux Convert" — a luxury currency and crypto converter. Deep dark navy-black background (#040813) with soft radial gradient fog in electric blue (#7fb3ff) and indigo (#8b8cff). Ultra-subtle film grain texture across the surface. Centered composition inside a clean iPhone 15 Pro mockup with titanium frame, soft shadow, evenly padded canvas.
>
> Screen content: Top-safe-area clean. Minimal line-art icon cluster of currency symbols and conversion arrows at the top. Large display typography "Convert fiat and crypto" in Inter ExtraBold, white, tight tracking. Below: short supporting line "Fast search, clear results. A polished flow for modern money." in muted blue-gray. One primary CTA pill button "Open Converter" with gradient fill from #7fb3ff to #8b8cff. Clean calm whitespace. No clutter, no pills, no tags, no fake stats. First-screen cleanliness is paramount. Typography must be comfortably readable. Glass-morphism surfaces are minimal and restrained.

---

## Screen 2 — Converter Home (Main Screen)

**Prompt:**

> Premium iOS mobile app home screen for "Flux Convert" — a luxury currency and crypto converter. Deep dark navy-black (#040813) background with soft gradient atmosphere and ultra-subtle film grain. Clean iPhone 15 Pro mockup with titanium frame, soft shadow, even outer margins. Content-first presentation.
>
> Screen content: Standard iOS safe-area layout. Clean top app bar with brand mark (hexagon icon + "Flux Convert" in Inter 700), left-aligned. Below: a large glass-morphism converter card with rounded 28px corners, subtle border gradient from white at 28% opacity to transparent, soft inner glow. Inside card: "Converter" label in small-caps accent blue, headline "Choose a pair and convert" in Inter 600. Two input shells with search icons — "From" (USD · US Dollar) and "To" (EUR · Euro) — soft glass surfaces, 16px inner radius. Swap button centered between them, circular, subtle glass background. Result box below with gradient background from rgba(127,179,255,0.16) to rgba(139,140,255,0.10), showing "0.00" in large Inter 700 and supporting text "Select currencies to continue". Quick-pair chips at bottom: "USD → EUR", "BTC → USD", "RUB → USD" — pill-shaped, muted glass background, accent-blue active state. Bottom home indicator visible. Generous spacing, strong hierarchy, no nested-card clutter, no fake chart spam, no random floating widgets. Text comfortably readable.

---

## Screen 3 — Conversion Result Detail

**Prompt:**

> Premium iOS mobile app conversion result detail screen for "Flux Convert" — a luxury currency and crypto converter. Deep dark navy-black (#040813) background with soft gradient atmosphere and film grain. Clean iPhone 15 Pro mockup, even margins, soft shadow, content-first.
>
> Screen content: iOS safe-area respected. Top app bar with back chevron, title "Result" in Inter 600, share icon on right. Below: a large hero metric card — glass surface with soft gradient border. Inside: converted amount displayed prominently in Inter 800 (e.g., "92.45 EUR") with exchange rate metadata in muted text ("1 USD = 0.9245 EUR · Updated just now"). Below the card: a compact stat strip showing 24h change (+0.34% in soft green), 7d high/low range, and last updated timestamp — clean small labels, no decorative pills. Bottom sheet rising: "Save to favorites" and "Share conversion" actions, iOS sheet docking zone respected. Typography hierarchy strong, spacing generous, no clutter. Decorative accent: soft waveform line behind the metric card, fading into background. No generic fintech dashboard spam.

---

## Screen 4 — Favorites / Pairs List

**Prompt:**

> Premium iOS mobile app favorites screen for "Flux Convert" — a luxury currency and crypto converter. Deep dark navy-black (#040813) with soft gradient atmosphere and ultra-subtle grain. Clean iPhone 15 Pro mockup, balanced outer spacing, soft shadow.
>
> Screen content: iOS safe-area. Top app bar with "Favorites" title in Inter 700, edit icon right. Below: clean tab bar (Converter, Favorites, Settings) — three icons, "Favorites" active with accent blue. List-led utility structure: each row is a framed pair card with soft glass background, rounded 16px, subtle border. Row content: currency pair code (USD → EUR) in Inter 700, full names in muted text, last rate in accent blue, small trend arrow. One "star" icon per row, filled for active favorites. Bottom: empty state illustration (minimal line icon cluster) if no favorites — clean, calm. No random avatars, no meaningless badges, no fake system markers. Spacing breathable, type readable, structure firm but calm. Glass surfaces controlled, not overwhelming.

---

## Screen 5 — Settings / Profile

**Prompt:**

> Premium iOS mobile app settings screen for "Flux Convert" — a luxury currency and crypto converter. Deep dark navy-black (#040813) with soft gradient atmosphere and film grain. Clean iPhone 15 Pro mockup, even margins, soft shadow, content-first.
>
> Screen content: iOS safe-area. Top app bar with "Settings" title, back chevron. Below: layered profile header — small avatar area (minimal line icon), app version, premium badge. Then: settings group cells — "Default currencies", "Refresh rate", "Notifications", "Appearance", "Language" — each in a soft glass card with 16px radius, chevron right, muted label text, bold value text. "Language" row shows "English" with a subtle accent indicator. Bottom: restore purchases / sign out action in muted red-gray. No decorative toggles without product meaning, no meaningless status elements. Clean list-and-card discipline, calm density, strong task hierarchy. Premium productivity feel. Typography deliberate, not loud.

---

## Consistency Checklist

Before generating, verify all screens share:
- Same deep dark palette (#040813, #0a1123, #7fb3ff, #8b8cff, #f5f7ff, #90a0bb)
- Same Inter type scale rhythm
- Same 28px card radius / 16px input radius logic
- Same glass-morphism surface treatment (backdrop blur 22-24px, border gradient)
- Same ultra-subtle grain texture
- Same soft shadow language
- Same iPhone 15 Pro mockup frame, scale, and outer margin discipline
- Same safe-area awareness
- Same clean navigation patterns
- Same accent-blue primary action logic

---

## Anti-AI-Tell Guardrails

Strictly avoid:
- Generic purple-blue fintech gradients (use only the specified #7fb3ff / #8b8cff)
- Random glass cards everywhere (glass is intentional and controlled)
- Ambient blobs with no purpose
- Fake neon premium look
- Oversized corner radii on everything
- Tiny unreadable text
- Fake chart dashboard spam
- Repeated stat cards without product reason
- Generic dribbble-style floating widgets
- Filler phrases like "elevate your life", "next-gen finance", "seamless control"
- Generic icon-library iconography

---

## Generation Tips

- Use DALL-E 3 or Midjourney v6 for best typography and UI coherence
- Specify "iOS native, premium, dark mode, glass morphism, Inter font" in every prompt
- If text renders poorly, regenerate with emphasis on "large comfortable readable typography"
- Maintain the design bible — if a screen drifts, regenerate it
- Generate screens in the listed order for flow coherence
