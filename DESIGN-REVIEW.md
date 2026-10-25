# Visual review

Direction: Photographs at uneven sizes, seed 1312825232. All final inspector screenshots at desktop, tablet and mobile were opened and visually reviewed. Mobile booking was separately captured after its entrance animation finished, using the packaged single-file edition.

ROUND 1
Seen in one second: A large serif hair-day promise and a real salon process photograph.
Idea (one sentence): Sunday House turns the promise of a small pause into a lookbook with a chair the visitor can reserve.
Live thing: Appointment builder with fixed service pricing, stylist selection, calendar and reminder preview.
Layout words by section: hero=uneven collage / services=photo-and-menu / booking=dark-field ticket / stylists=staggered portraits / gallery=lookbook / comparison=drag reveal / openings=board / gifts=tilted card / reviews=offset quotations / visit=illustrative map / FAQ=accordion / footer=large wordmark.
Scores: design 7.5 · usability 7 · creativity 7 · content 7.5 → overall 7.3.
Caps applied: Initial tablet title wrap and small-screen header problem required repair before delivery; initial inspector failures meant the first version was not ready.
Top three problems (most visible first), each with the screenshot it shows in and the fix:
1. tablet-fold.jpg: headline was three lines. Expanded its grid area and set a tablet-specific size; final title is two lines.
2. mobile-page-01.jpg and desktop-page-01.jpg: small running copy lost hierarchy beside large display type. Increased paragraphs to 16px while retaining smaller metadata and captions.
3. Small-screen functional check: transient/narrow header fit at 320px. Tightened header action spacing and removed the secondary wordmark line at the narrowest breakpoint; no document overflow in final tests.

ROUND 2 — FINAL
Seen in one second: Good hair days, a green booking action, and an actual salon scene.
Idea (one sentence): Sunday House's unhurried photographic moments become a bookable pause in the visitor's week.
Live thing: Complete demo appointment builder, with separate gift and waitlist demonstrations.
Layout words by section: same compositions as above, with stronger body sizing and calmer photo captions.
Scores: design 8 · usability 8 · creativity 7 · content 7.5 → overall 7.8 (self-assessment, not an external award).
Caps applied: Real-phone usability remains unverified. The comparison is openly illustrative, not proof of a real hair transformation. Stock portrait lighting remains varied.
Top three remaining limitations:
1. desktop-page-01.jpg / mobile-page-01.jpg: portrait lighting varies; a real client's cohesive staff shoot would improve this.
2. desktop-page-02.jpg / mobile-page-02.jpg: the comparison demonstrates an interactive reveal using color treatment, not authentic before/after photos. It is labeled honestly.
3. tablet-fold.jpg: the staggered small photograph creates a quieter lower corner. This is intentional within the uneven-photo direction, but a client-specific interior image would carry more meaning.

## Inspector exceptions and warnings

Final inspector: zero FAIL, five WARN, with two explicit exceptions. No claim is made that all heuristic style preferences were satisfied without exceptions.

- `covered-text`: the brief explicitly requests a sticky nav and mobile booking bar. The overlap heuristic detects these passing across content during scrolling. They are bounded, readable controls; anchor scroll padding, footer padding and scrollable native dialogs preserve access. Screenshot review found no permanent content loss.
- `eyebrow`: the remaining flagged text was “Dandridge, Tennessee · Illustrative map” beneath the map, near the following visit heading on phones. It is a contextual caption/disclosure, not an eyebrow decorating a headline; keeping the disclosure is appropriate for a fictional location.
- Mixed-font heuristic: the price/date/booking UI uses Arial inside a serif-led editorial composition. Display headlines themselves do not switch to an italic accent word.
- Card-row heuristic: service/stylist selectors and the availability board intentionally repeat affordances so comparison and selection remain predictable. The page's section compositions vary.
- Warm-paper warning: low-chroma neutral paper is retained because the user requested warm neutrals; accent remains green, not terracotta.
- Font-size warning: the page has display sizes, responsive interpolated headings, prices and compact UI metadata beyond the skill's ideal five values. This is a documented refinement opportunity rather than a functional defect.
- No-footage warning: the requested real photographs remain light and use subtle movement. No video dependency was added to a mobile-first, framework-free demo.

Final verification: 28 browser checks passed; every used photo loaded; no form-submission network request or browser storage writes; no horizontal overflow at 1440, 768, 390 or 320px. Packaged single-file edition also reached the booking details screen successfully. Direct file navigation could not be exercised in the automated browser because of its protocol policy; localhost static serving was used.


## October 25, 2026 — reference-led art refinement

Source: https://www.vagaro.com/pro/booking-website-builder

Studied the six displayed previews: Imo Aesthetics (dark/gold and angled photo details), Rich in Flesh (graphic contrast), Era Aesthetics (green, organic crops and linework), House of Darlins (texture and large serif type), Humble Bee (scrapbook framing), and It Girl (arched portrait, layered photography and sun details). The closest fit was the green/organic framing of Era and It Girl, with restrained postcard warmth from Humble Bee. These are visual observations, not claims about those businesses or their functionality. No reference photographs, logos or template code were copied. Existing Unsplash assets and original inline SVG artwork are used.

The longer 78-second video was visually sampled at 0, 7, 14 ... 77 seconds. It demonstrates builder styling choices and service/staff/shop modules. Audio was not transcribed. Existing demo interactions already address the relevant service and booking concepts; this update adds no backend.

The new composition uses a forest-green hero, arched hair imagery and postcard overlap, a sun emblem, flowing strand linework, warm rose and sage section fields, ticket-style booking illustration, varied dark lookbook, and gift-card art. User-requested richer art justifies thin decorative frames, limited print-like shadows and organic shapes. Warm paper, editorial type sizes and photo-led presentation are intentional; a video loop was not added because no authentic salon footage was supplied.

Browser review: all 28 existing interaction checks passed after the styling change. Screenshots of the full page at desktop, tablet and phone sizes were reviewed. Corrections include stronger small-text/button contrast, a single-line mobile Book now button, readable postcard caption, improved tablet gift-column balance and smaller mobile review text. Existing fictional-content labels, no-submission behavior, reduced-motion controls and noindex deployment remain intact. Real phone hardware testing remains outstanding.
