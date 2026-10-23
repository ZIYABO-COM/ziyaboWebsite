# Ziyabo corporate website — Equipro product edition

Updated 23 October 2026.

## Open locally

Extract the ZIP, then open `ziyabo-website/index.html`. The website uses static HTML, CSS and JavaScript; no npm install or build is required.

For a local web-server preview, run from the website folder:

```sh
python3 -m http.server 8080
```

Open http://localhost:8080.

## Product and case-study hierarchy

- **Ziyabo Equipro** is the product: **Fleet & Equipment Operations ERP**.
- Product message: **One platform. Every operation. Complete control.**
- **EasyLift** is a live client implementation, presented under **Case Studies**.
- **GymBinary** remains a separate live SaaS product.
- Other portfolio solutions remain secondary to Equipro and GymBinary.

No “Book a demo” or other demo CTA is included. Equipro uses “Discuss your requirements”, email enquiries and capability exploration. The product page describes module scope without implying every planned function is already deployed for every client.

## Navigation and pages

The shared navigation contains:

- Services — grouped mega-menu covering existing eight capabilities and delivery/support.
- Products — Ziyabo Equipro, GymBinary and the wider portfolio.
- Industries — equipment/crane rental, fleet/transport, fitness and additional portfolio domains.
- Case Studies — index and dedicated EasyLift implementation page.
- Insights — three original practical perspectives, each with a complete article page.
- Company — About, Life at Ziyabo and delivery approach.
- Careers — experienced professionals, freshers and internship enquiries.
- Contact — India/UAE offices and email/WhatsApp enquiry preparation.

New key pages:

- `equipro.html` — product landing page, capability tabs, industry fit, implementation and FAQs.
- `products.html` — flagship product index and wider solution portfolio.
- `gymbinary.html` — dedicated GymBinary product page.
- `case-studies.html` — client implementation index.
- `easylift-case-study.html` — EasyLift business context, live implementation, coverage and feedback.
- `industries.html` — industry needs and relevant solutions.
- `approach.html` — discovery through ongoing support.
- `insights.html` — perspective index.
- `connected-rental-operations.html`, `phased-erp-implementation.html`, `practical-ai-workflows.html` — complete perspective articles.

Existing About, Careers, Contact, Privacy and 404 pages are retained. `work.html` remains a compatibility page so earlier `#easylift`, `#gymbinary` and `#portfolio` links still lead visitors to the correct content.

## Interaction

- Services/product/industry/company menus use native disclosure elements, with keyboard access, Escape closure and outside-click handling.
- Mobile navigation retains the previous menu behaviour.
- Equipro capability tabs support click, arrow keys, Home and End. All capability text remains available without JavaScript.
- Product FAQs use native accessible disclosures.
- The contact form supports preselected “Ziyabo Equipro” enquiries.
- An enquiry is prepared locally for review. Email opens a draft to contact@ziyabo.com; GymBinary enquiries use contact@gymbinary.com. WhatsApp prepares a message to the existing Indian number. The visitor must send the message.
- Resume links open email drafts; visitors attach and send their own resumes.

There is no backend email delivery, CRM, analytics, tracking cookie or automatic sending. No credentials are included.

## Deploy to the existing website

Upload the contents of `ziyabo-website/` to the root of the current static host, preserving the `assets/` folder and all HTML filenames. This delivery does not change the live domain or hosting.

After deployment, the intended product URL is:

`https://ziyabo.com/equipro.html`

Use this in product outreach only after confirming the deployed page opens correctly. The case-study URL is `https://ziyabo.com/easylift-case-study.html`.

Canonical URLs and sitemap assume https://ziyabo.com/. Hosting controls HTTPS, redirects, 404 handling and security headers. If your host changes URLs to extensionless routes, update links, canonicals and sitemap together. If adding a strict CSP, account for or refactor the small inline enhancement and structured-data scripts.

## Design and assets

- Approved Ziyabo logo preserved unchanged.
- Manrope served locally with its open-source licence.
- Equipro uses a coordinated navy, teal and amber presentation; the master company brand remains consistent.
- Existing approved industry photos are reused. They represent the sector, not actual EasyLift assets or application screenshots.
- Existing customer-feedback summaries, culture and career information remain in place.
- No founding date, decade-long company history, fabricated certification, client count or numerical outcome is invented.

The techcarrot screenshot informed the grouped navigation structure, not Ziyabo’s service claims or branding.

## Maintain the code

- `assets/styles.css`: retained base design and existing responsive components.
- `assets/corporate.css`: grouped navigation, corporate homepage, Equipro and new page styles.
- `assets/site.js`: menu, enquiry, disclosure and capability-tab behaviour.

Pages are standalone. Keep repeated navigation/footer and metadata consistent when editing. All imagery and fonts are local.

See `IMPROVEMENTS.md` for the next useful content and conversion upgrades.

## Verification completed

- All 19 HTML pages checked at 1440, 1024, 768, 390 and 320 pixel widths: no horizontal overflow; local images loaded successfully.
- Internal file/fragment links, unique IDs and one main heading per page verified.
- No demo wording remains in public HTML.
- Desktop and mobile disclosure menus checked, including Escape and outside-click handling.
- Equipro tabs checked with pointer, arrow keys and Home; FAQs checked.
- Equipro/GymBinary contact preselection and email destinations checked; edited briefs clear stale previews.
- Navigation and complete module content remain accessible with JavaScript disabled.
- Desktop/mobile homepage and Equipro renders and the services mega-menu visually reviewed.
- No JavaScript errors observed; no messages sent.

External mailbox delivery, live hosting configuration and production publication were not performed by these local checks.
