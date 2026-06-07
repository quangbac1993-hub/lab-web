# Inorganic Materials Lab Website

Static, bilingual website for an inorganic materials laboratory.

## Structure

- `index.html` - homepage
- `pages/research.html` - research directions
- `pages/people.html` - people and group members
- `pages/publications.html` - publications and outputs
- `pages/activities.html` - news/activities
- `pages/contact.html` - contact page
- `content.js` - all Vietnamese and English text content
- `styles.css` - visual design and responsive layout
- `script.js` - language switcher, navigation, reveal animation
- `assets/` - SVG illustrations

## How to edit content

Most text is in `content.js`.

- Edit `siteContent.vi` for Vietnamese.
- Edit `siteContent.en` for English.
- Update arrays such as `researchItems`, `peopleList`, `publicationList`, and `activitiesList` to add or remove cards.

## Run locally

```bash
cd inorganic-lab-site
python3 -m http.server 8000
```

Open `http://localhost:8000`.

## Free hosting and free subdomains

Easy options:

1. GitHub Pages
   - Create a GitHub repository.
   - Upload this folder.
   - Go to Settings > Pages.
   - Select branch `main` and root folder.
   - Free URL format: `https://username.github.io/repository-name/`.

2. Netlify
   - Drag and drop the `inorganic-lab-site` folder at `https://app.netlify.com/drop`.
   - Free URL format: `https://your-site-name.netlify.app`.
   - You can rename the free subdomain in Site settings.

3. Vercel
   - Import from GitHub.
   - Framework preset: Other.
   - Free URL format: `https://project-name.vercel.app`.

4. Cloudflare Pages
   - Connect GitHub repository.
   - Build command: leave empty.
   - Output directory: `/`.
   - Free URL format: `https://project-name.pages.dev`.

For the simplest route, use Netlify drag-and-drop first. For long-term updates, use GitHub Pages or Cloudflare Pages connected to a GitHub repository.
