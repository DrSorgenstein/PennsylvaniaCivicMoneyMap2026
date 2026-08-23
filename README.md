# South-Central Pennsylvania Public Accountability Graph 7.1

GitHub Pages-ready regional civic research package covering Cumberland, York, Lancaster, Perry, Lebanon, Adams and Franklin Counties.

## Deploy
1. Create a public GitHub repository.
2. Upload every file in this folder to the repository root.
3. Commit to `main`.
4. Settings → Pages → Deploy from branch → `main` → `/ (root)`.

## New in 7.1
- Seven-county selector and comparison view
- Separate county commissioner, planning, elections/campaign, contracts and land nodes
- Verified current commissioner base nodes for six newly added counties
- York–Adams documented joint-governance node
- Franklin County 2026 data-center development-standards node
- Regional source register
- County-filtered ledger and CSV export
- Cumberland’s deeper PAX-1 / governance / campaign-finance dataset retained

## Safeguard
A connection, contribution, appointment or favorable decision does not establish corruption or quid pro quo. Unverified research framework edges remain Grade D until supported by source records.


## LANDEX Integration Hub

Version 7.1 adds:

- county-by-county LANDEX availability
- official land-record source links
- LANDEX Record Alert links where verified
- API/webhook readiness guidance
- Zapier/Make integration architecture
- CSV/manual-import fallback
- downloadable `landex-import-template.csv`
- browser-side CSV preview
- `LANDEX_INTEGRATION.md`
- `landex-config.json`

### Important API caveat

This release does **not** assert that LANDEX provides a public API or webhook. API/webhook integration is displayed as a future/conditional route that requires documented authorization from LANDEX / Optical Storage Solutions.

### GitHub Pages security

Do not place API credentials in `app.js`, `data.js`, GitHub Pages settings, or any public repository file. A future API integration should run server-side or through a private automation credential store.
