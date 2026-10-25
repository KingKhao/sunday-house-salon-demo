# Sunday House — salon sales demo

A fictional Dandridge, Tennessee salon example for Clinch Valley Digital. This standalone demo is hosted separately from the production CVD website.

- Live demo: https://sunday-house-salon-demo.vercel.app/
- Private source repository: https://github.com/KingKhao/sunday-house-salon-demo
- Vercel project: `wkb-projects/sunday-house-salon-demo`, connected to the GitHub repository for deployments from `main`.
- Published October 25, 2026. Public HTML/CSS/JavaScript and the single-file edition returned HTTP 200; live booking and gift controls passed a production smoke check. Demo search indexing remains disabled.

## Preview in five lines
1. Open `Sunday-House.html` in a current Chrome, Edge, Firefox or Safari browser.
2. Keep an internet connection for the Unsplash photographs and optional Fontshare font.
3. Click Book now and use fictional contact details to explore the whole booking flow.
4. Try the gallery filters, comparison slider, gift card checkout and waitlist.
5. Resize the window to see the mobile booking bar; no server, account, installation or build is required.

Alternatively keep `index.html`, `styles.css` and `app.js` together and open `index.html`. The single-file and three-file editions contain the same code. The single-file edition embeds the complete CSS and JavaScript; photography and the optional web font remain remote.

## Problems and included features

| Salon problem | What the demo shows | Limits |
|---|---|---|
| 1. Phone-only booking and missed after-hours inquiries | Four-part booking: service, stylist, visual calendar/time, details; sticky desktop and mobile booking actions | Front-end simulation only; no appointment is created |
| 2. No-shows and late cancellations | $25 mock deposit applied to service total, explicit 24-hour policy and required acknowledgement | No actual payment, enforcement or reminder automation |
| 3. Unclear prices | Eleven services, category tabs, full prices, duration, consultation and finish details; prices reused from one data array | Fictional fixed pricing, not a real quote |
| 4. Depending only on social platforms | A complete owned-site example: descriptive title, location, services, hours, alt text and visit information | Demo intentionally uses noindex/nofollow. It cannot establish real Google visibility. A real client would need authentic details, indexable deployment and their business profile |
| 5. Clients leave with a stylist | Shared studio identity, three fictional stylist profiles, specialty notes, first-available option, studio continuity explanation | Shared client notes are an explained future integration, not a database feature |
| 6. Portfolio trapped on Instagram | Six inspiration entries, service filters, keyboard lightbox, previous/next controls, draggable color comparison | Stock imagery, not a real salon portfolio; comparison is an illustrative filter treatment of one image, not a real transformation |
| 7. Gift cards only sold in the shop | $50/$75/$100/$150/$200 choices, friend name/email and note, mock checkout and explicit confirmation | No card issued, charge taken or email sent |
| 8. Empty chairs on quiet days | Date-aware sample opening board, claim-chair flow with preselected appointment and a waitlist for a sample fully booked day | Fictional schedule, not a connected availability system |
| 9. Missing reminders and policy communication | Optional mock SMS in a phone preview, policy before confirmation, FAQ | No SMS sent; no phone numbers retained |
| 10. Walk-in confusion | Sample 25-minute wait, hours, appointment priority, parking/access notes and FAQ | Static illustrative queue; not a live estimate |

## Fictional business facts

- Name: Sunday House. Setting: Dandridge, Tennessee.
- Address: 18 Sunday Lane, Dandridge, TN 37725 — invented street address, clearly labeled. Map is a CSS illustration, not directions.
- Tuesday–Friday 9 AM–6 PM; Saturday 9 AM–3 PM; Sunday–Monday closed. All appointment times Eastern.
- Signature cut $58 / 60 min; Express cut $38 / 30 min; Curly cut $78 / 75 min.
- Root refresh $85 / 90 min; Full color $120 / 120 min; Lived-in balayage $185 / 180 min.
- Signature blowout $42 / 45 min; Occasion styling $85 / 75 min.
- Shine gloss $55 / 45 min; Repair ritual $35 / 30 min; Hair consultation $0 / 15 min.
- $25 example deposit for paid services, applied to the total; no deposit for a free consultation. Late cancellations within 24 hours and no-shows would forfeit the deposit. No payment is collected here.
- Wren, June and Ellis are fictional stylist identities. Jamie and Alex are invented review names. Their portraits are stock photographs of people who are not being identified as actual salon staff.

## Privacy and interactions

No backend, APIs, keys, cookies, analytics, localStorage or sessionStorage. Form entries stay in page memory and are cleared on closing their dialog. Forms do not submit data to a server. Third-party requests for public images and fonts occur while browsing, independently of the forms. Use fictional details only. Normal external CVD links navigate to the agency website.

Native HTML dialogs provide focus containment and Escape-to-close. Service tabs support arrow keys/Home/End. Gallery lightbox supports arrows. The comparison uses a keyboard-operable range input. Required fields use native validation, plus a simple phone format check. The calendar omits past dates, disables Sunday/Monday and limits selections to 60 days; appointment duration respects the Saturday 3 PM / weekday 6 PM closing time. The example booking starts tomorrow or later, avoiding stale same-day time slots.

## Design and motion

Selected Taste direction: Photographs at uneven sizes, seed 1312825232. Rose-grey/green palette, Sentient display face with Arial for UI. The subject's promise of a Sunday-like pause becomes a lookbook of moments that can be reserved in a chair. The live interaction is the complete appointment builder. The dealt coastal images were replaced with salon imagery because the brief explicitly requires Unsplash salon photographs; no coastal images are used. Dark green and neutral paper fields extend the palette for booking, visit and gift scenes.

Motion uses CSS/vanilla JS only: masked headline rise, staggered IntersectionObserver entrances, subtle image drift, hover/press feedback, moving marquee, tab content entrances, animated booking progress and confirmation. Native vertical scrolling is preserved. Reduced-motion mode removes travel; the pause control pauses decorative CSS animations and reveals all pending content. No autoplay video or heavy animation library is needed for this photo-led mobile demo.

## Verification

- Browser suite: 28 passing checks in Chrome. Booking, validation, reminder preview, safe rendering of angle brackets, field clearing, direct chair selection, waitlist, gift recipient/amount, no submission requests, gallery filters/lightbox/arrows, comparison, FAQ, pause control, loaded photos, focus containment and reduced motion.
- No horizontal document overflow at 1440, 768, 390 or 320 pixels.
- JavaScript syntax and source lint pass. Source lint notes legitimate zero-padding for dates.
- Responsive design inspection at 1440, 768 and 390 pixels: zero failures and five style warnings after documented exceptions for the requested sticky controls and the illustrative-map caption. See `DESIGN-REVIEW.md` for the visual critique, exceptions and remaining limitations. No claim is made that every possible overlap is impossible.
- This is desktop browser testing/emulation. Real-device touch feel, safe areas and phone keyboard behavior still need a device check. Direct file navigation was blocked by the test browser's protocol policy, so functional checks ran through a localhost-only static server. The delivered files use classic scripts and relative CSS without imports or fetch, and are designed to open directly.

## Image sources

All images use `https://images.unsplash.com/` with responsive crop/quality parameters as requested. They illustrate the fictional demo, not authentic results, team members or premises. Footer credits identify Unsplash; source IDs below preserve provenance. Photographer names have not been independently verified. Review the current Unsplash terms and likeness suitability before repurposing for an actual business.

| Source ID | Use |
|---|---|
| photo-1562322140-8baeececf3df | Hero salon process; styling inspiration |
| photo-1521590832167-7bcbfaa6381f | Interior inspiration |
| photo-1605497788044-5a32c7078486 | Services process; cut inspiration |
| photo-1580489944761-15a19d654956 | Stock portrait for fictional Wren |
| photo-1524250502761-1ac6f2e30d43 | Stock portrait for fictional June |
| photo-1506794778202-cad84cf45f1d | Stock portrait for fictional Ellis |
| photo-1519699047748-de8e457a634e | Curl inspiration and illustrative comparison |
| photo-1524504388940-b1c1722653e1 | Loose styling inspiration |
| photo-1522337360788-8b13dee7a37e | Blonde color inspiration |
| photo-1526510747491-58f928ec870f | Copper color inspiration |

Optional font stylesheet: https://api.fontshare.com/v2/css?f[]=sentient@300,400,500&display=swap. Georgia/Arial remain as fallbacks.

## Before a real client launch

Replace fictional identity, staff, address, hours, menu, sample reviews and stock inspiration with verified client content. Only then connect approved booking/payment/reminder services, privacy/consent behavior and real availability. Remove the demo noindex directive only for an authentic business site. None of those production changes are included or implied by this demo.
