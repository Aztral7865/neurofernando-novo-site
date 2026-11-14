# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static output). The user chose "use a framework" and left the pick to us: Astro builds plain static HTML for GitHub Pages, optimises the photographs at build time (the originals are 8 to 15 MB each) and ships almost no JavaScript to phones. Deploy target: GitHub Pages on the custom domain neurofernando.com.br (CNAME), built by a GitHub Action. Nothing is committed or pushed until Dr. Fernando approves the redesign.

## Users

Patients aged 12 and over (and the relatives who book for them) in Criciúma/SC and the surrounding region, most of them on a phone, arriving from Instagram, Google or after seeing Dr. Fernando in a TV, radio or podcast interview. They are often worried about a symptom (headache, numbness, memory, sleep, pain, a stroke in the family) and want to check who the doctor is, what he treats and how to book, then book.

## Product Purpose

The personal site of Dr. Fernando Topanotti Tarabay, neurologist. It shows his training, roles and areas of practice, publishes his patient-education articles, gathers his interviews and press, and turns visits into appointments. Success: a visitor on a phone trusts him within seconds and books a consultation on WhatsApp.

## Positioning

A Criciúma neurologist who coordinates the Stroke Unit (Unidade do AVC) at Hospital São José, teaches neurology residents there, is co-founder and technical director of Aura Neurologia, holds postgraduate training in vascular neurology, pain and neurological ultrasound, and regularly explains neurology on regional TV, radio and podcasts.

## Operating Context

- Booking happens on WhatsApp (+55 48 99114-0848), usually with a pre-filled message; the contact form also opens WhatsApp with the visitor's details.
- Consultations at Aura Neurologia, Rua Antônio de Lucca, 148, sala 111, Pio Corrêa, Criciúma/SC, 88811-503, and at Hospital São José.
- Media appearances live on YouTube and news sites; videos open on YouTube in a new tab (user's choice).
- Articles are read inside the site (single page); no article images (user's choice: editorial layout).

## Capabilities and Constraints

- One single page: no device-detection redirects, no separate desktop/mobile/article HTML files.
- All factual content from the previous site stays as written: names, CRM/SC 22270, RQE 18727, training, experience, specialties, articles, address, phone, social accounts, every media item (17).
- Medical advertising in Brazil (CFM rules) requires the CRM and RQE beside the doctor's name; no promises of cure, no before/after, no testimonials of results.
- Mobile UX has the highest priority; the site must hold at every width with no layout breaks.
- Keep CNAME (neurofernando.com.br) and the Google Search Console verification file.

## Brand Commitments

- Colours follow the Aura Neurologia identity manual: azure #096BAD (RGB 9, 107, 173), royal navy #144487 (RGB 20, 68, 135), slate #445159 (RGB 68, 81, 89); dark applications on charcoal and deep navy.
- Aura typography: Gobold (condensed display, the wordmark) and Fira Sans (text). The user allowed adjusting fonts.
- The Aura brain symbol (imagens/tstLogo.png) may appear when referring to the clinic; never distorted, recoloured or outlined.
- The old site's look (Poppins, tabs, splash screen, rounded cards) is the anti-reference: it read as childish and amateur.

## Evidence on Hand

- Studio portraits of Dr. Fernando: imagens/ftFernando.jpg, imagens/img8.jpg, imagens/prfl.png (cut-out); with his wife Vanessa: imagens/img9.jpg; family: imagens/ftFernando2.png; team at Aura reception: imagens/ftFernando3.png.
- 17 media items with thumbnails (imagens/midia1 to midia17): 9 YouTube interviews, ND+ TV interview, Mais Sul article, 6 Hospital São José stroke-care recognitions (G1 and hsjose.com.br).
- 6 articles (data/articles.json).
- No testimonials, ratings, patient counts or prices: none may be invented.

## Product Principles

1. Credentials before claims: CRM, RQE, roles and institutions do the persuading.
2. Booking is one tap away on every screen, on WhatsApp.
3. Patient language first: plain Portuguese, no jargon without a gloss.
4. Show his public work (interviews, articles) as proof of expertise, never as decoration.
5. Calm and exact, never alarming: visitors may be anxious.

## Accessibility & Inclusion

Many visitors are older adults or relatives of patients with neurological conditions: generous text size (16px minimum, 17 to 18px for reading), strong contrast (WCAG AA at least), large tap targets, reduced-motion support, works with screen readers.
