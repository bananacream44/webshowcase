# GitHub Deployment Instructions

This portfolio is ready for deployment to  GitHub Pages as a static site. All animations, images, and functionality are preserved.

## Setup Instructions

1. **Create a new GitHub repository** for your portfolio
2. **Push this code** to your GitHub repository
3. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Under "Source", select "GitHub Actions"
4. **Push to main branch** - the workflow will automatically build and deploy your site

## Important Files for GitHub

### Required Files
- `.github/workflows/pages.yml` - GitHub Actions workflow for deployment
- `vite.github.config.ts` - Vite configuration optimized for static deployment
- `client/` directory - Contains all your React components and assets
- `package.json` - Dependencies (keep the current one)

### Files NOT Needed on GitHub
- `server/` directory - Backend Express server
- `shared/` directory - Database schemas
- `drizzle.config.ts` - Database configuration

## Deployment Types

The workflow automatically handles two types of GitHub Pages:

1. **Project Pages** (`username.github.io/repository-name`)
   - Sets base URL to `/repository-name/`
   
2. **User/Organization Pages** (`username.github.io`)
   - Sets base URL to `/`

## Verification

After deployment, verify:
- All images load correctly
- Animations work properly
- Project modals open/close
- Navigation scrolling functions
- No 404 errors in browser console

## Customization

To change the repository name used in URLs:
- The workflow automatically uses `${{ github.event.repository.name }}`
- For custom domains, modify the base URL in the workflow

Your portfolio will be available at:
- `https://username.github.io/repository-name` (project pages)
- `https://username.github.io` (user pages)
