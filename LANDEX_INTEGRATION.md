# LANDEX Integration Guide — South-Central PA Accountability Graph 7.1

## Purpose

LANDEX is used by several Pennsylvania county Recorder/Register offices for online land-record access. This package treats LANDEX as a **source system** for deeds and related recorded instruments, not as an automatically available API.

## Verified county status in this build

- Cumberland — confirmed LANDEX
- York — confirmed LANDEX
- Perry — confirmed LANDEX
- Lebanon — confirmed LANDEX
- Franklin — confirmed LANDEX
- Adams — county uses a different public-record search interface; LANDEX is not assumed
- Lancaster — county uses its own Recorder search/GIS stack; LANDEX is not assumed

## Connection modes

### 1. API / webhook — preferred only if LANDEX documents it

Before building an API integration, obtain from LANDEX / Optical Storage Solutions:

- developer/API documentation
- authentication method
- permitted endpoints and fields
- webhook/event support, if any
- rate limits
- pricing
- licensing and redistribution terms
- whether automated downloading/scraping is permitted
- whether public-record images may be cached or republished

**This package does not claim that a public LANDEX API or webhook exists.**

### 2. Zapier / Make / similar automation

An automation platform can bridge LANDEX to a CRM, database, email system or research pipeline **only when there is an authorized trigger**, such as:

- a documented LANDEX webhook
- a documented API endpoint
- a permitted email/record-alert trigger
- an approved CSV/file export placed in a watched folder

Example architecture:

LANDEX / county record source  
→ authorized API, webhook, email alert or CSV export  
→ Zapier / Make  
→ normalization step  
→ spreadsheet / database / CRM  
→ Accountability Graph ingestion queue

Do not configure a scraper or automated browser workflow unless the service terms and applicable law permit it.

### 3. CSV export / manual import — current safe fallback

Use `landex-import-template.csv`.

Recommended fields:

- county
- parcel_id
- instrument_number
- book
- page
- recorded_date
- document_type
- grantor
- grantee
- sale_price
- property_address
- municipality
- source_url
- notes

The website's LANDEX Integration Hub can preview this CSV locally in the browser. The file is not uploaded anywhere by the static site.

## Recommended normalization

Create stable IDs such as:

`LAND-{COUNTY}-{INSTRUMENT_NUMBER}`

Then link:

Person / LLC  
→ recorded instrument  
→ parcel  
→ prior owner / new owner  
→ project  
→ municipality  
→ planning decision

Keep the deed transaction separate from any political or governmental relationship.

## Data-quality safeguards

- Preserve the original instrument number/book/page.
- Store the source URL and retrieval date.
- Do not infer beneficial ownership from an LLC name alone.
- Do not treat sale price, deed transfer or mortgage as evidence of political influence.
- Do not republish paid document images unless licensing permits it.
- Where a county uses a non-LANDEX system, use that county's official source instead.

## Future API adapter

If LANDEX later provides documented API access, add a server-side ingestion process. Do not place API secrets in GitHub Pages JavaScript because GitHub Pages is public/static.

Suggested pipeline:

LANDEX API  
→ serverless function / private ETL job  
→ validation  
→ normalized JSON/CSV  
→ reviewed evidence queue  
→ `data.js`

