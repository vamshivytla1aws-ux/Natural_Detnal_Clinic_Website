# SEO Phase 2: Local Ranking & Treatment Content Optimization

## Objective

Strengthen Natural Dental Clinic's relevance for genuine local dental searches around **Ramachandrapuram, Hyderabad**, without compromising healthcare accuracy, user trust, premium design, or content authenticity.

---

## Keyword Map (Editorial Reference — Not a Stuffing Guide)

| Page | Primary Intent |
|------|---------------|
| Homepage (`/`) | dentist in Ramachandrapuram / dental clinic in Ramachandrapuram |
| Services Hub (`/services`) | dental treatments in Ramachandrapuram / dental clinic near me |
| Root Canal (`/services/root-canal-treatment`) | root canal treatment in Ramachandrapuram |
| Dental Implants (`/services/dental-implants`) | dental implants in Ramachandrapuram |
| Braces (`/services/braces-orthodontics`) | braces in Ramachandrapuram |
| Children's Dentistry (`/services/pediatric-dentistry`) | children's dentist in Ramachandrapuram |
| Teeth Whitening (`/services/teeth-whitening`) | teeth whitening in Ramachandrapuram |
| Wisdom Tooth (`/services/wisdom-tooth-removal`) | wisdom tooth removal in Ramachandrapuram |
| Gum Treatment (`/services/gum-treatment`) | gum treatment in Ramachandrapuram |
| Crowns & Bridges (`/services/crowns-bridges`) | crowns and bridges in Ramachandrapuram |
| General Dentistry (`/services/general-dentistry`) | dental check-up in Ramachandrapuram |
| Doctor (`/doctor`) | Dr. Vandana Vytla / dental surgeon Ramachandrapuram |
| Reviews (`/reviews`) | Natural Dental Clinic patient reviews |
| Contact (`/contact`) | Natural Dental Clinic contact / directions |

---

## Changes Made

### 1. `src/lib/services-data.ts`
- Added `localCta` field: unique, page-specific local CTA text for each service
- Added `relatedSlugs` field: 2–3 contextually relevant related service slugs per treatment
- Expanded `description` fields with location context for all 9 services
- Enriched `overview` fields with clinical context and Ramachandrapuram references
- Expanded FAQs to 5 questions per service with more specific patient-relevant questions
- Updated `pediatric-dentistry` title to "Children's Dental Care" for better search alignment

### 2. `src/app/services/page.tsx`
- **Fixed critical bug**: hardcoded `tel:+1234567890` replaced with `CLINIC.contact.phoneHref`
- Updated intro paragraph to name Ramachandrapuram and specific treatments
- Added `CLINIC` import from config

### 3. `src/app/services/[slug]/page.tsx`
- Replaced if-else chain with `titleMap` and `descriptionMap` lookup tables
- Added missing title/description entries for: `gum-treatment`, `crowns-bridges`, `general-dentistry`
- All titles now follow format: `[Treatment] in Ramachandrapuram | Natural Dental Clinic`
- All descriptions are unique and page-specific
- Upgraded `serviceSchema` from `Service` → `MedicalProcedure` with full address block
- Added `BreadcrumbList` schema: Home > Dental Treatments > [Service Name]
- Added `breadcrumbSchema` script tag injection
- Replaced generic static local CTA with `service.localCta` — unique per page
- Updated Related Treatments to use `service.relatedSlugs` (contextual) instead of arbitrary first 3
- Updated section heading: "Other Services" → "Related Treatments"
- Updated anchor text: "Learn More" → "Learn about [shortTitle]"

### 4. `src/app/reviews/page.tsx`
- Added recommended introductory paragraph mentioning Ramachandrapuram
- Added clarifying line confirming reviews are unmodified Google reviews

### 5. `src/lib/gallery-data.ts`
- Updated alt text for all 8 gallery images with location-aware descriptions
- Location context used where natural (not repeated on every image)

### 6. `src/components/home/LocationSection.tsx`
- Added landmark trust paragraph: "...located in Sai Nagar Colony, Ramachandrapuram, behind South India Shopping Mall"

### 7. `src/components/home/ServicesPreview.tsx`
- Updated intro copy to include "in Ramachandrapuram, Hyderabad" with specific treatment names
- Changed anchor text from "Learn More" → "About [shortTitle]" for better internal link descriptiveness
- Changed hub link text from "View All Services" → "View All Treatments"

### 8. `src/app/doctor/page.tsx`
- Changed H2 "About Dr. Vandana" → "About Dr. Vandana Vytla" (full name)
- Added "Visiting the Clinic" card in sidebar connecting Dr. Vandana to Ramachandrapuram location

### 9. `src/app/contact/page.tsx`
- Added "Visiting Natural Dental Clinic" section between the contact info and map
- Includes landmark description and inline address for local search context

---

## Title Tag Audit — Final State

| Page | Title |
|------|-------|
| `/` | Natural Dental Clinic — Dentist in Ramachandrapuram, Hyderabad |
| `/services` | Dental Treatments in Ramachandrapuram \| Natural Dental Clinic |
| `/services/root-canal-treatment` | Root Canal Treatment in Ramachandrapuram \| Natural Dental Clinic |
| `/services/dental-implants` | Dental Implants in Ramachandrapuram \| Natural Dental Clinic |
| `/services/braces-orthodontics` | Braces Treatment in Ramachandrapuram \| Natural Dental Clinic |
| `/services/teeth-whitening` | Teeth Whitening in Ramachandrapuram \| Natural Dental Clinic |
| `/services/wisdom-tooth-removal` | Wisdom Tooth Removal in Ramachandrapuram \| Natural Dental Clinic |
| `/services/pediatric-dentistry` | Children's Dental Care in Ramachandrapuram \| Natural Dental Clinic |
| `/services/gum-treatment` | Gum Treatment in Ramachandrapuram \| Natural Dental Clinic |
| `/services/crowns-bridges` | Crowns & Bridges in Ramachandrapuram \| Natural Dental Clinic |
| `/services/general-dentistry` | Dental Check-up & General Dentistry in Ramachandrapuram \| Natural Dental Clinic |
| `/doctor` | Dr. Vandana Vytla \| Dental Surgeon in Ramachandrapuram |
| `/reviews` | Patient Reviews — Natural Dental Clinic, Ramachandrapuram |
| `/contact` | Contact & Appointments — Natural Dental Clinic, Ramachandrapuram |

---

## Internal Linking Added

| Source | Destination | Anchor |
|--------|-------------|--------|
| `/services/root-canal-treatment` | `/services/crowns-bridges` | Learn about Crowns & Bridges |
| `/services/root-canal-treatment` | `/services/general-dentistry` | Learn about General Dental |
| `/services/root-canal-treatment` | `/services/gum-treatment` | Learn about Gum Care |
| `/services/dental-implants` | `/services/crowns-bridges` | Learn about Crowns & Bridges |
| `/services/dental-implants` | `/services/gum-treatment` | Learn about Gum Care |
| `/services/pediatric-dentistry` | `/services/braces-orthodontics` | Learn about Braces |
| `/services/gum-treatment` | `/services/dental-implants` | Learn about Implants |
| All service pages | `/services` | View All Treatments |
| `/doctor` | `/contact` | Get directions & contact details |
| Homepage services grid | each `/services/[slug]` | About [shortTitle] |

---

## FAQ Schema Applied

FAQPage structured data is injected on every service page (`/services/[slug]`). Each service now has 4–5 specific patient-focused questions. The schema reflects visible, rendered page content.

---

## Schema Summary

| Page | Schema Types |
|------|-------------|
| `/` | Dentist |
| `/doctor` | Physician → worksFor MedicalClinic |
| `/about` | LocalBusiness |
| `/services/[slug]` | FAQPage + MedicalProcedure + BreadcrumbList |
| Global (JsonLd.tsx) | Dentist with full address + openingHoursSpecification |

---

## Google Business Profile — Service Alignment Reference

The following services are confirmed on the website and should be aligned in GBP after video re-verification:

1. Dental check-up (General Dentistry)
2. Root canal treatment
3. Dental implants
4. Braces / orthodontic treatment
5. Teeth whitening
6. Crowns and bridges
7. Tooth extraction (Wisdom tooth)
8. Wisdom tooth care
9. Children's dental care
10. Gum treatment
11. Dental fillings (listed under General Dentistry)
12. Preventive dental care

---

## Pages to Request Indexing (Post Deployment)

After Railway deployment, the clinic owner may request indexing for the following substantially updated pages:

- `/services/root-canal-treatment`
- `/services/dental-implants`
- `/services/braces-orthodontics`
- `/services/pediatric-dentistry`
- `/services/gum-treatment`
- `/services/crowns-bridges`
- `/services/general-dentistry`
- `/services/teeth-whitening`
- `/services/wisdom-tooth-removal`
- `/reviews`
- `/contact`
- `/doctor`

Do NOT repeatedly request indexing for the same pages without meaningful content change.

---

## Health Content Disclaimer

All treatment pages include the footer disclaimer:

> "Treatment suitability, duration and outcomes vary depending on individual clinical conditions. A dental examination is required before recommending treatment."

No absolute claims, guaranteed results, or unverified credentials have been added.
