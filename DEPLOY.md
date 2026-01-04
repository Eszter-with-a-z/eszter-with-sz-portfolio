# Deploying to GitHub Pages

This portfolio website is configured to be deployed to GitHub Pages. Follow these steps:

## Setup Steps

1. **Create a GitHub Repository**
   - Go to GitHub and create a new repository
   - Name it `portfolio` (or whatever you prefer)
   - Don't initialize with README, .gitignore, or license

2. **Push Your Code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. **Update `next.config.mjs`**
   - Open `next.config.mjs`
   - Change the `basePath` and `assetPrefix` to match your repository name
   - For example, if your repo is `portfolio`, use `/portfolio`
   - If deploying to `username.github.io`, remove the `basePath` and `assetPrefix` entirely

4. **Enable GitHub Actions**
   - Create `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: '20'
             cache: 'npm'
         - run: npm ci
         - run: npm run build
         - uses: actions/upload-pages-artifact@v3
           with:
             path: ./out

     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - id: deployment
           uses: actions/deploy-pages@v4
   ```

5. **Configure GitHub Pages**
   - Go to your repository on GitHub
   - Click Settings → Pages
   - Under "Source", select "GitHub Actions"
   - Save the settings

6. **Deploy**
   - Push any changes to the `main` branch
   - GitHub Actions will automatically build and deploy your site
   - Your site will be available at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## Local Testing

To test the production build locally:

```bash
npm run build
npx serve@latest out
```

## Troubleshooting

- **Images not loading**: Make sure `images.unoptimized` is set to `true` in `next.config.mjs`
- **404 errors**: Verify your `basePath` matches your repository name
- **Routing issues**: GitHub Pages only supports static exports, which we've configured with `output: 'export'`

## Customization

Before deploying, make sure to:
- Replace all placeholder content with your actual information
- Update the LinkedIn, email, and phone numbers in the footer
- Replace project images and descriptions with your real projects
- Customize the color scheme in `globals.css` if desired
