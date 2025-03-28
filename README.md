
# Deployment Guide

## Local Development
1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

## Building for Production
1. Build the application:
```bash
npm run build
```

This will:
- Build the React frontend with Vite
- Bundle the Express backend
- Output to `dist/public` directory

## Deployment
The app is configured for deployment with:
- Build command: `npm run build`
- Output directory: `dist/public`
- Automatic routing for SPA
- Security headers configured

The `netlify.toml` handles:
- Build settings
- Redirect rules for SPA routing
- Security headers
- Function directory configuration
