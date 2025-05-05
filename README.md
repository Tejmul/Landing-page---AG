# AssuredGig Landing Page

A modern, SEO-optimized landing page for AssureGig, built with React, TypeScript, and Tailwind CSS.

## Features

- Responsive design
- SEO optimized with proper meta tags
- Blog section for content freshness
- Social media integration
- Countdown timer for launch
- Visitor counter
- Google Analytics integration
- User engagement tracking

## SEO Setup Instructions

### Google Search Console Setup

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (https://assuregig.com)
3. Choose the HTML file verification method
4. Download the verification file and replace the content in `public/google-site-verification.html` with your verification code
5. Upload the sitemap.xml to Google Search Console
   - Go to Sitemaps section
   - Enter "sitemap.xml" in the field
   - Click "Submit"

### Google Analytics Setup

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property for AssureGig
3. Get your Measurement ID (G-XXXXXXXXXX)
4. Replace the placeholder in `src/main.tsx`:
   ```typescript
   const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your actual ID
   ```

### Additional SEO Tips

1. **Create Backlinks**:

   - Submit to business directories (Google Business, Crunchbase, etc.)
   - Create guest posts on industry blogs
   - Engage in forums and communities
2. **Content Strategy**:

   - Regularly update the blog with new content
   - Create case studies and success stories
   - Share industry insights and trends
3. **Technical SEO**:

   - Ensure fast loading times
   - Make sure the site is mobile-friendly
   - Use descriptive URLs for blog posts
4. **Social Media**:

   - Share blog posts on social media
   - Engage with followers
   - Create shareable content

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## License

MIT
