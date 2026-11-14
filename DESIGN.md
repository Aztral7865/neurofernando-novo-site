---
name: Dr. Fernando Topanotti Tarabay
description: Single-page site of a neurologist in Criciúma/SC, in the Aura Neurologia identity, phone first.
colors:
  azure: "#096bad"
  navy: "#144487"
  slate: "#445159"
  navy-deep: "#0d2c57"
  ink: "#12305c"
  text: "#3a464e"
  muted: "#5a6872"
  line: "#d8e1ea"
  line-strong: "#b9c8d6"
  ice: "#f2f6fa"
  azure-wash: "#e7f0f8"
  paper: "#ffffff"
  on-dark-text: "#d6e3f0"
  on-dark-muted: "#a9c6e2"
  error: "#b42318"
typography:
  display:
    fontFamily: "Fira Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(42px, 11.6vw, 96px)"
    fontWeight: 600
    lineHeight: 0.92
    letterSpacing: "-0.012em"
  headline:
    fontFamily: "Fira Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(36px, 3.2vw + 22px, 60px)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.01em"
  title-xl:
    fontFamily: "Fira Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(30px, 2.4vw + 20px, 52px)"
    fontWeight: 600
    lineHeight: 1
  title:
    fontFamily: "Fira Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(22px, 0.6vw + 19px, 26px)"
    fontWeight: 600
    lineHeight: 1.12
  title-lg:
    fontFamily: "Fira Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "26px"
    fontWeight: 600
    lineHeight: 1.08
  title-sm:
    fontFamily: "Fira Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.12
  lead:
    fontFamily: "Fira Sans, system-ui, sans-serif"
    fontSize: "clamp(19px, 1.2vw + 14px, 22px)"
    fontWeight: 400
    lineHeight: 1.5
  body-lg:
    fontFamily: "Fira Sans, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.7
  body:
    fontFamily: "Fira Sans, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Fira Sans, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
  small:
    fontFamily: "Fira Sans, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.4
  label:
    fontFamily: "Fira Sans, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  pill: "99px"
spacing:
  s-1: "4px"
  s-2: "8px"
  s-3: "12px"
  s-4: "16px"
  s-5: "24px"
  s-6: "32px"
  s-7: "48px"
  s-8: "64px"
  s-9: "96px"
  s-10: "128px"
components:
  button-primary:
    backgroundColor: "{colors.azure}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "0 22px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    rounded: "{rounded.md}"
    padding: "0 22px"
    height: "52px"
  button-ghost-hover:
    backgroundColor: "{colors.azure-wash}"
    textColor: "{colors.navy}"
  article-row:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.text}"
    padding: "24px 0"
  input-field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "12px 14px"
    height: "52px"
  panel-ice:
    backgroundColor: "{colors.ice}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: Dr. Fernando Topanotti Tarabay

## Overview

**Creative North Star: "Malha Aura"**

The Aura Neurologia brain is a triangulated mesh, and this system treats that mesh as wiring, not wallpaper. Every credential, area of practice, dated qualification and section is a node; thin azure edges connect the nodes in lists, timelines and the menu, and the edges lead the eye toward one action, booking on WhatsApp. The mesh itself appears as a faint field only behind the doctor's portrait in the opening screen.

The surface is calm, white and exact: real studio photographs of Dr. Fernando, navy condensed headlines, slate body text at a generous size for older readers, and a single signal colour. Sections alternate white and ice-blue grounds, with one deep navy band, for the interviews only. The old site's rounded, playful, multi-coloured cards are the confirmed anti-reference.

**Key Characteristics:**
- One signal colour (Aura azure) for edges, nodes, links and the single filled button style.
- Nodes and edges as the list grammar: 12px azure rings joined by 1px azure lines.
- Condensed display type (Fira Sans Extra Condensed 600) over a humanist text face (Fira Sans).
- Flat surfaces; depth only from ground changes, hairlines and photographs.
- Phone first: every pattern is designed at 360–430px and grows.

## Colors

A restrained Aura palette: white and ice grounds, navy ink, one azure signal.

### Primary
- **Aura Azure** (#096bad): the only signal colour. Edges and nodes, links, the primary button, focus rings, the hero role line, timeline years. White text on it passes 5.6:1.

### Secondary
- **Aura Royal Navy** (#144487): the button hover state, secondary button text, the cerebellum of the Aura symbol, active menu items.
- **Deep Navy** (#0d2c57): the one dark band (interviews and press); the "monochrome negative" application of the Aura manual. The footer stays white.

### Neutral
- **Ink Navy** (#12305c): every headline and strong label.
- **Slate Text** (#3a464e): running text, 9.7:1 on white. Derived from the Aura slate (#445159), which stays the brand reference.
- **Muted Slate** (#5a6872): dates, counts, CRM line and meta, 5.8:1 on white.
- **Ice** (#f2f6fa): alternate section ground and the hero portrait band.
- **Azure Wash** (#e7f0f8): small state fills (ghost button hover, "desde 2020" pills).
- **Hairline** (#d8e1ea) and **Strong Hairline** (#b9c8d6): 1px dividers and field borders.
- **On-dark Text** (#d6e3f0) and **On-dark Muted** (#a9c6e2): text on the deep navy band.

### Named Rules
**The One Signal Rule.** Azure is the only saturated colour on the page. It marks what is connected or actionable; nothing decorative is azure except the mesh field behind the portrait.

**The Brand-Exact Rule.** Azure #096bad, navy #144487 and slate #445159 come from the Aura identity manual and are never shifted, tinted toward violet or replaced.

## Typography

**Display Font:** Fira Sans Extra Condensed 600 (with Arial Narrow, sans-serif)
**Body Font:** Fira Sans 400 and 500 (with system-ui, sans-serif)

**Character:** The condensed display echoes the Aura wordmark (Gobold) while staying in the Fira family the manual names for text, so headlines and copy read as one voice.

### Hierarchy
- **Display** (600, clamp(42px, 11.6vw, 96px), 0.92; capped at clamp(60px, 6.6vw, 96px) from 1024px): the doctor's name in the opening screen only.
- **Headline** (600, clamp(36px, 3.2vw + 22px, 60px), 0.98): one per section, and the article title in the reader.
- **Title XL** (600, clamp(30px, 2.4vw + 20px, 52px), 1): the newest article in the index, the featured interview, the menu sheet's links.
- **Title** (600, clamp(22px, 0.6vw + 19px, 26px), 1.12): group headings (h3).
- **Title LG** (600, 26px, 1.08): timeline years, article sub-heads, the footer name.
- **Title SM** (600, 22px, 1.12): area titles, article rows, article sub-sub-heads.
- **Lead** (400, clamp(19px, 1.2vw + 14px, 22px), 1.5): section intros, the "about" summary and the hero role line, max 60ch.
- **Body LG** (400, 18px, 1.7): the article reader and training/role titles (500).
- **Body** (400, 17px, 18px from 1024px, 1.6): running text, max 64ch.
- **Body SM** (400, 16px, 1.55): descriptions, nav and footer links.
- **Small** (500, 15px, 1.4): meta lines, interview descriptions, credential nodes on phones.
- **Label** (500, 14px): dates, counts, the wordmark's role line. Sentence case, never tracked capitals.

### Named Rules
**The Readable Patient Rule.** Text people read is 16px or larger (17px body on phones); nothing is smaller than 13px. Many readers are older patients or worried relatives.

**The Two Weights Rule.** Display at 600 only; text at 400 and 500 only. No bold-and-big.

## Layout

A single page in a 1200px wrap with fluid side gutters (clamp(20px, 5vw, 64px)). Sections pad 96px top and bottom on phones and 128px from 1024px; heading groups sit 48px (64px desktop) above their content. Spacing uses the 4-based scale only (4, 8, 12, 16, 24, 32, 48, 64, 96, 128).

Phone first. Breakpoints: 560px (header booking button appears, phone bar retires), 640px (hero lead before the buttons, buttons side by side), 720px (areas open as two columns, about photos stack beside the text, interviews three-up), 900px (training timeline beside roles), 1024px (hero splits text left and full portrait right; articles split into lead plus list), 1100px (desktop nav replaces the menu; contact in two columns with the channels as a four-column strip).

On phones the hero opens with the name, role, CRM line and the booking button inside the first screen; then an ice band carries the mesh, the portrait at the right and the three credential nodes on one edge at the left; the supporting sentence follows. Areas of practice collapse to tappable titles under 720px. A fixed booking bar appears on phones once the hero button scrolls away and hides over the contact section and footer.

## Elevation & Depth

Flat. There are no drop shadows on cards, buttons or the header. Depth comes from ground changes (white, ice, deep navy), 1px hairlines and photographs. The only soft glows are state signals: a 4px azure ring (18% azure) around a lit node and a 3px focus halo on form fields.

### Named Rules
**The Light Is the State Rule.** Hover, focus and the current section fill the node with azure and raise its edge to full strength. Nothing lifts with a shadow.

## Shapes

Gently rounded: 10px for buttons, fields and the menu button; 16px for cards, panels and photographs; 6px for small press thumbnails and the skip link; full pills only for the small "desde 2020" markers. Nodes are 12–14px circles with a 2px azure stroke. The mesh is straight lines only; no curves.

## Components

### Buttons
- **Shape:** gently rounded (10px), 52px tall (44px in the header, 58px for the contact call to action).
- **Primary:** Aura azure with white 17px/500 label and the WhatsApp mark; one filled style for every booking action.
- **Hover / Press:** navy fill on hover (pointer devices only); scale 0.97 on press, 160ms strong ease-out.
- **Ghost:** transparent with a strong hairline border and navy label; azure wash and azure border on hover.

### Cards / Containers
- **Article index (not cards):** ruled rows on one azure edge; each row is a node, "date · N min de leitura", a 22px condensed title and a two-line excerpt, the whole row tappable. The newest article leads: on desktop it spans 7 of 12 columns under a 2px azure rule with a large title, the full summary and "Ler o artigo"; the other five run as the ruled list in the remaining columns.
- **Exams panel:** white panel with hairline on the ice ground, 16px radius.
- **Contact form:** white panel with hairline, 16px radius, 24–32px padding.

### Inputs / Fields
- **Style:** white, strong hairline border, 10px radius, 52px tall, 17px text, visible label above.
- **Focus:** azure border plus 3px azure halo (22%).
- **Error:** red border (#b42318) and the message under the field, checked on submit only.

### Navigation
- **Desktop (1100px+):** sticky white header with hairline; the Aura symbol (42px wide) and the doctor's name at left, six section links (16px/500 slate) and the booking button at right. The current section's link turns ink and gains a 1.5px azure underline edge.

### Brand marks
- **Aura symbol** (`public/marca/aura-simbolo.svg`): the polygonal brain, vectorised from the clinic's artwork in the manual's exact colours (cerebrum #096BAD, cerebellum #144487). Used beside the doctor's name in the header and the menu sheet, as the favicon (`favicon.svg`/`.ico`, on a white rounded square), the iPhone and Android icons and the share image. Width fixed, height from its proportion.
- **Aura Neurologia logo** (`public/marca/aura-neurologia.svg`): symbol plus "AURA" (#144487) and "NEUROLOGIA" (#445159). Used once, in the footer beside the clinic's address, 152px wide, linking to auraneurologia.com.
- **Phone and tablet:** 44px menu button opens a full-screen sheet: section names at 30–40px condensed, each on a node, all joined by one vertical azure edge; the current section's node is filled. Booking button and phone at the foot.

### Node list (signature)
A list whose items hang on one 1px azure edge, each item marked by a 12px azure ring. Used for hero credentials, areas of practice, the training timeline (2px edge, dated nodes, the present filled), roles and the mobile menu. Under 720px an area item is a button that opens its description.

### Article reader
A native dialog: full-screen sheet on phones (slides up 32px, 380ms drawer curve), centred 820px panel from 720px on a 55% deep navy backdrop. Sticky bar with "Artigos" and a 44px close button; the URL follows the article (#artigo-id) and the back button closes it.

## Do's and Don'ts

### Do:
- **Do** keep azure (#096bad) as the only signal colour and use it for every booking action.
- **Do** keep the deep navy band to one section (the interviews); every other ground is white or ice.
- **Do** show CRM/SC 22270 and RQE 18727 beside the doctor's name wherever the name is presented as a credential.
- **Do** use real photographs of Dr. Fernando, his team and his clinic.
- **Do** build new lists on the node-and-edge grammar (12px ring, 1px azure edge).
- **Do** gate hover styles behind `(hover: hover) and (pointer: fine)` and give every tappable element a pressed state.

### Don't:
- **Don't** use stock or AI-generated illustrations; the article images of the old site were dropped for that reason.
- **Don't** add drop shadows, gradients over photographs or glass effects.
- **Don't** set text people read below 16px or labels below 13px.
- **Don't** return to the old site's look: Poppins, tabs that hide sections, a splash screen, rounded multi-coloured icon cards.
- **Don't** recolour, outline, stretch or redraw the Aura symbol or logo; always use the SVGs in `public/marca`, never a screenshot of them.
