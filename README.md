# Darshit Shekhda - consulting portfolio

React + Vite single-page site, deployed to GitHub Pages by GitHub Actions.

## 1. Edit your content
All text lives in `src/content.js`. Change wording, add case studies.

## 2. Contact details
The site is fully static: no form, no backend. Visitors reach you by email or LinkedIn. To also show a phone/WhatsApp number, set `phone` in `src/content.js`.

## 3. Run locally
```bash
npm install
npm run dev
```

## 4. Publish on github.io
1. Create a GitHub repository named `<your-username>.github.io` (this gives you the URL `https://<your-username>.github.io`).
   A repo with any other name also works; the URL becomes `https://<your-username>.github.io/<repo-name>/`.
2. Push this folder to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git push -u origin main
   ```
3. In the repo go to **Settings > Pages** and set **Source** to **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and deploys on every push. Check the **Actions** tab for progress.

## Optional
- Custom domain: Settings > Pages > Custom domain.
- Update the `<title>`, description and JSON-LD block in `index.html` if you change your positioning.
