# Quick SEO Setup Guide

## 🚀 Immediate Actions (15 minutes)

### 1. Update Your Domain
Find and replace in these files:
```bash
# Files to update:
- app/layout.tsx (line 26)
- app/sitemap.ts (line 3)
- app/robots.ts (line 4)
- app/page.tsx (structured data section)

# Replace this:
https://your-domain.com

# With your actual domain:
https://yourdomain.com
```

### 2. Create Environment File
```bash
cd webapp
cp .env.example .env.local
nano .env.local  # or use your editor
```

Update these values:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_FACEBOOK_URL=https://facebook.com/yourpage
NEXT_PUBLIC_YOUTUBE_URL=https://youtube.com/@yourchannel
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/yourhandle
```

### 3. Add Required Images to /public
Create these images:
- `og-image.jpg` (1200x630px) - For social sharing
- `icon-192.png` (192x192px) - PWA icon
- `icon-512.png` (512x512px) - PWA icon
- `apple-touch-icon.png` (180x180px) - iOS icon

**Quick tip:** Use Canva.com with template "Facebook Post" for og-image.jpg

---

## 📝 After Deployment

### Register with Search Engines
1. **Google Search Console** → https://search.google.com/search-console
   - Add your site
   - Verify ownership (add verification code to layout.tsx)
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`

2. **Bing Webmaster** → https://www.bing.com/webmasters
   - Same process as Google

### Test Your SEO
```bash
# 1. Test Sitemap
curl https://yourdomain.com/sitemap.xml

# 2. Test Robots
curl https://yourdomain.com/robots.txt

# 3. Test Rich Results
# Visit: https://search.google.com/test/rich-results
# Enter your domain
```

### Check Social Previews
- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator
- LinkedIn: https://www.linkedin.com/post-inspector/

---

## ✅ SEO Implementation Summary

**What's Been Optimized:**
- ✅ Unique metadata for all 8 pages
- ✅ Open Graph tags for social media
- ✅ Twitter Card integration
- ✅ JSON-LD structured data (Church schema)
- ✅ Dynamic sitemap.xml
- ✅ Robots.txt configuration
- ✅ Next.js image optimization
- ✅ PWA manifest
- ✅ Performance enhancements
- ✅ Canonical URLs

**Your Action Required:**
- ⏳ Update domain URLs (15 min)
- ⏳ Create social images (30 min)
- ⏳ Register search consoles (20 min)
- ⏳ Setup environment variables (5 min)

---

## 🎯 Expected Results (4-8 weeks)

- 📈 **Search Rankings:** Pages will start appearing in search results
- 🌐 **Rich Snippets:** Enhanced search listings with Church schema
- 📱 **Social Sharing:** Professional previews on all platforms
- ⚡ **Performance:** 90+ Lighthouse scores
- 🔍 **Indexing:** All pages discoverable by search engines

---

## Need Help?

**Full detailed report:** See `SEO-OPTIMIZATION-REPORT.md`

**Common Issues:**
- Images not showing in social previews → Clear cache, wait 24hrs
- Sitemap 404 → Rebuild: `npm run build`
- Metadata not updating → Clear browser cache

**Testing Commands:**
```bash
# Build and test locally
npm run build
npm run start

# Run in dev mode
npm run dev
```

---

**Questions?** Check the full report in SEO-OPTIMIZATION-REPORT.md
