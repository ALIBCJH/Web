/**
 * SEO Best Practices Component
 * Provides reusable SEO utilities and structured data helpers
 */

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };
}

export function generateArticleSchema(
  title: string,
  description: string,
  author: string,
  datePublished: string,
  imageUrl: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "author": {
      "@type": "Person",
      "name": author,
    },
    "datePublished": datePublished,
    "image": imageUrl,
  };
}

export function generateEventSchema(
  name: string,
  description: string,
  startDate: string,
  endDate: string,
  location: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": name,
    "description": description,
    "startDate": startDate,
    "endDate": endDate,
    "location": {
      "@type": "Place",
      "name": location,
    },
  };
}

// Canonical URL helper
export function getCanonicalUrl(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com';
  return `${baseUrl}${path}`;
}

// Meta tags generator
export function generateMetaTags(
  title: string,
  description: string,
  keywords: string[],
  imageUrl?: string
) {
  return {
    title,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title,
      description,
      images: imageUrl ? [{ url: imageUrl }] : [],
    },
    twitter: {
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}
