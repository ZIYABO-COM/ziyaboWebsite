# Ziyabo website — expanded company and portfolio edition

Updated 2 October 2026 using the owner’s confirmed business information, the supplied Business Capability Showcase, the approved logo and images/careers content from ziyabo.com.

## Preview

Extract the ZIP and open `ziyabo-website/index.html`. No build step or dependency installation is required.

For a local web-server preview, run from this folder:

```sh
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## What is included

- Homepage with live flagship solutions, eight capabilities, AI/cloud expertise, customer feedback, wider portfolio, delivery process, culture and careers.
- `services.html` — Custom Software, Enterprise Applications, Artificial Intelligence, Cloud & DevOps, Mobile Technology, Data & Analytics, Web Engineering and Technology Consulting.
- `work.html` — EasyLift ERP and GymBinary, live usage and ongoing enhancement, customer feedback and seven additional portfolio solutions.
- `about.html` — combined team capability, culture and India/UAE presence.
- `careers.html` — experienced-professional and fresher/internship routes, resume email links and work culture.
- `contact.html` — business and product email addresses, both offices, and a project brief that prepares email or WhatsApp messages.
- `privacy.html`, `404.html`, `robots.txt`, `sitemap.xml`.
- Locally hosted logo, fonts, photos, shared CSS and JavaScript.

## Confirmed information reflected in this revision

- EasyLift ERP and GymBinary are LIVE with business users. Parallel customisation and enhancements do not imply pre-launch status.
- AI and cloud are team capabilities, alongside application development, architecture, consulting and support. General marketing copy is technology-neutral and contains no .NET/React stack restriction.
- Flagship prominence belongs to EasyLift ERP and GymBinary. Wider portfolio: WorkflowAI, Academic CRM, FMCG Van Sales, BoutiquePOS, AuditReady, Cognanatic Solutions and ClinicAssist. No unsupported live status is assigned to the other solutions.
- India: Shornur, Palakkad, Kerala; +91 8129905061.
- UAE: Zahrath Al Madan Bldg., Near DIB Bank, Al Qusais 2, Dubai — UAE; +971 52 184 8128.
- Business and careers email: contact@ziyabo.com.
- GymBinary email: contact@gymbinary.com.

The most recent message listed the UAE number as +971 52 184 812, missing the final digit. This package uses +971 52 184 8128, matching both the supplied PDF and the existing public website. It is used consistently in display, telephone links and structured data.

## Customer feedback

Arun and Riyas Alikkal have dedicated customer-feedback cards on the homepage and their respective work sections. Wording is an attributed third-person summary of feedback provided by the owner; it is not presented as a verbatim quote or audio/video transcript. Arun’s role and bodybuilding credentials are taken from the user’s supplied information. Review the final wording with the customers before promoting it as their direct quotation. No star ratings, invented portraits or unrelated anonymous testimonials are used.

## Contact functionality

The project form validates the required fields and prepares a message locally in the browser. The visitor reviews it before choosing a delivery method:

- Email: opens the visitor’s configured email app. GymBinary selections go to contact@gymbinary.com; all other selections go to contact@ziyabo.com.
- WhatsApp: opens the prepared message to the existing Indian Ziyabo number. The visitor must press Send in WhatsApp.
- Career links: open email drafts to contact@ziyabo.com with different subjects for experienced applicants and freshers/internships. The applicant attaches a resume before sending.

No message is sent automatically. The site contains no server-side form submission, lead database, email service credentials or resume upload endpoint. A visitor without a configured email client can copy the displayed address into webmail or use WhatsApp for a project enquiry. The site does not claim an enquiry or application has been submitted.

The form stores no browser data. Privacy copy describes the actual behaviour. If you later add analytics, an email delivery API, CRM or upload service, update the implementation and privacy notice together.

## Images and typography

The approved supplied logo is preserved unchanged. Representative industry and collaboration photos are reused from the image URLs on ziyabo.com, downloaded and served locally. They are identified as representative/illustrative; they are not represented as actual EasyLift assets, product screenshots, PureFitness premises or Ziyabo employees.

The supplied logo is 437 × 230 pixels. It is used at restrained display sizes without reconstructing its lettering. An approved vector master can replace it later.

Manrope is locally hosted at regular, semibold and bold weights, with its SIL Open Font License in `assets/Manrope-LICENSE.txt`. No external font requests are made. Image and font sources are recorded in `ASSET_SOURCES.md`.

## Hosting

Upload the contents of `ziyabo-website/` to the root of your existing static hosting project. This package does not change the live website or DNS.

- Canonical URLs and sitemap assume https://ziyabo.com/.
- HTML paths include `.html` for direct preview and static-host portability.
- Configure the preferred domain, HTTPS and alternative-domain redirects with your host.
- Configure the supplied 404 page if your host does not recognise it automatically.
- HTTP security headers belong in the host configuration. Any CSP must accommodate the inline enhancement script and JSON-LD, or move/hash them appropriately.
- Keep the exact registered legal entity name current in legal/footer content. The customer-facing company name here is Ziyabo Technologies.

## Maintenance

Shared styles and behaviour are in `assets/styles.css` and `assets/site.js`. HTML pages are standalone; update repeated headers, footers and structured data consistently.

The package preserves mobile navigation, keyboard access, reduced-motion handling, project enquiry preparation, responsive layouts, search metadata, privacy page and sitemap. It adds careers, email preparation, offices, real industry images and wider content.

Production hosting configuration, mailbox delivery and external account availability are separate from local website checks. No test messages or resumes were sent.

## Verification completed

- Internal file and fragment links, local assets, unique IDs and page headings checked.
- Old pre-launch status wording and stack-limiting technology references removed from public HTML.
- JavaScript syntax validated.
- Seven main pages checked in Chromium at 1440, 768, 390 and 320 pixel widths: no horizontal overflow and all images decoded successfully.
- Mobile menu, Escape-to-close behaviour and navigation with JavaScript disabled checked.
- Project topic preselection, message preview, URL encoding, and clearing stale previews after edits checked.
- GymBinary email route, general enquiry email route and both resume email subjects checked.
- Homepage, Work, Contact and Careers renders reviewed, including mobile customer feedback.
- No browser JavaScript errors during checks; no messages or applications sent.

Homepage desktop and mobile previews are provided in the ZIP’s `previews/` folder. They are review images, not files you need to deploy.
