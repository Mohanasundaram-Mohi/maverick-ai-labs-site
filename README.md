# Maverick AI Labs — static website

A no-build, vanilla HTML/CSS/JavaScript marketing site for Maverick_Qwen and Maverick_Llama. It has no paid AI API dependency and is suitable for Cloudflare Pages static hosting.

## Project contents
- `index.html` — homepage
- `products.html`, `maverick-qwen.html`, `maverick-llama.html`, `pricing.html`
- `about.html`, `contact.html`, `support.html`, `faq.html`, `privacy.html`, `terms.html`
- `assets/styles.css`, `assets/main.js`, `assets/config.js`, `assets/favicon.svg`
- `robots.txt`, `sitemap.xml`, `_headers`

## Run locally
Open `index.html` in a browser, or use a local static server from this directory:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`. No build command is required.

## Customize before launch
1. Edit `assets/config.js` and add a monitored contact email. Do not put secrets here; this file is public.
2. Confirm product descriptions, model names, actual features, tested Windows versions, CPU/RAM/storage requirements, licence terms, refund policy and support process.
3. Replace the sample UI mockup with real screenshots only when available and approved.
4. Replace `YOUR-DOMAIN.example` in `robots.txt` and `sitemap.xml` with the real HTTPS domain.
5. Review Privacy and Terms with qualified counsel for your actual practices and jurisdiction.
6. Connect the forms to a real provider (for example, a form endpoint you control) before collecting leads. Current forms explicitly state that nothing was sent. Do not collect sensitive data before a privacy review.
7. Set a real pricing model and licence policy. Current pricing is deliberately marked unannounced.

## Deploy to Cloudflare Pages (Git integration)
1. Create a GitHub account if needed and create a new repository, e.g. `maverick-ai-labs-site`.
2. Upload the entire contents of this folder to the repository root. Do not upload `.env` files or secrets.
3. Sign in to Cloudflare and open **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
4. Authorize GitHub and select the repository.
5. Configure: production branch `main`; framework preset `None`; build command leave blank; build output directory `/` (repository root).
6. Deploy. Cloudflare should provide a `*.pages.dev` URL. Open it and test all pages on mobile and desktop.
7. For a custom domain, open the Pages project → **Custom domains** → **Set up a domain**. Follow Cloudflare's instructions for your domain/DNS. A domain registered elsewhere can be connected by following the DNS steps Cloudflare shows. Do not change nameservers blindly; preserve existing DNS records.
8. After every change, commit and push to GitHub; Cloudflare will deploy the new version automatically.

## Security and privacy notes
- This is a public static site. Never store API keys, private certificates, payment credentials, or private licence data in it.
- CSP and security headers are included in `_headers`; verify them in browser developer tools after deployment.
- Contact and lead forms are demo-only. They do not transmit data, store submissions, or pretend to send email.
- Payment processing, analytics, automated licence delivery, and a protected download portal are future integrations.
- Static hosting does not make desktop app binaries or their source code private. Publish only signed, reviewed release files and use a suitable licensing/update mechanism.

## QA checklist
- Check all navigation links and page titles.
- Test keyboard-only navigation, focus visibility, zoom to 200%, and mobile menu.
- Test form validation and confirm the form displays its no-send notice.
- Check browser console/network panel for errors and missing files.
- Run an accessibility audit (e.g. Lighthouse/axe) and validate sitemap/robots on the production domain.
- Check the deployed security headers and add a verified canonical URL / social sharing image when ready.
