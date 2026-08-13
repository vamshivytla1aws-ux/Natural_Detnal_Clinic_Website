# SEO Phase 1: Technical and Local Search Foundation

This document tracks the technical SEO implementation for the Natural Dental Clinic website, ensuring a clean and Google-friendly foundation.

## 1. Canonical Domain Configuration
- **Production URL**: `https://naturaldental.in`
- All temporary (`railway.app` / `naturaldetnalclinicwebsite-production`) domains have been completely purged from public SEO metadata.
- **Root Canonical**: Explicitly defined on the homepage.
- **Page Canonicals**: Dynamically injected on all indexable pages (e.g., `/doctor` → `https://naturaldental.in/doctor`).

## 2. Core Metadata Rules
- **Homepage Title**: `Natural Dental Clinic | Dentist in Ramachandrapuram, Hyderabad`
- **Homepage Description**: `Visit Natural Dental Clinic in Ramachandrapuram, Hyderabad for personalized dental care with Dr. Vandana Vytla, Dental Surgeon. Explore treatments, reviews, clinic information and directions.`
- **Title Template**: `%s | Natural Dental Clinic`
- **Open Graph**: Global site settings defined with clinic details.

## 3. Implemented Schemas (JSON-LD)
- **Dentist Schema**: Injected on the homepage with verified name, URL, telephone, postal address, and accurate opening hours.
- **Person Schema**: Injected on the `/doctor` page covering Dr. Vandana Vytla's title and credentials.
- **Service Schema**: Dynamically injected on all individual treatment pages (`/services/[slug]`) including the service type and `areaServed` attributes linking it to Ramachandrapuram, Hyderabad.

## 4. Crawlability & Indexability
- **Sitemap**: `/sitemap.xml` dynamically generated using `sitemap.ts`. It includes the homepage, doctor, services, reviews, contact, privacy-policy, terms, and all dynamic service routes.
- **Robots.txt**: `/robots.txt` dynamically generated to allow crawling (`Allow: /`) and providing the absolute sitemap URL.

## 5. Local Search Consistency
- **NAP Consistency**: Enforced via central configuration (`src/lib/config.ts`).
  - Name: `Natural Dental Clinic`
  - Address: `H No 4, 46/10/9/A, Road, Backside South India Shopping Mall, Sai Nagar Colony, Ramachandrapuram, Hyderabad, Telangana 502032`
  - Phone: `+91 8121860609`
- **Local Service Content**: A custom CTA was injected at the bottom of every service treatment page encouraging users to book a consultation in Ramachandrapuram.

## Next Steps for Clinic Owner
1. **Google Search Console**: Verify `https://naturaldental.in`. You can use DNS TXT verification or an HTML file upload. Once verified, submit `https://naturaldental.in/sitemap.xml`.
2. **Google Business Profile**: Ensure the website link on your Google profile is exactly `https://naturaldental.in`.
