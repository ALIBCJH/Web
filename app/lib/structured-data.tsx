import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ministry of Repentance and Holiness | Prepare The Way",
  description: "Official Altar of the Ministry of Repentance and Holiness. Preparing a glorious church without spot, wrinkle, or blemish for the coming of the Messiah.",
  keywords: ["Repentance", "Holiness", "Messiah is Coming", "End Time Revival", "Prophetic Visitation", "Church", "Ministry"],
  openGraph: {
    title: "Ministry of Repentance and Holiness - Prepare The Way",
    description: "The hour of preparation is now. Return to repentance. Walk in holiness.",
    type: "website",
  },
};

export default function HomePage() {
  // JSON-LD Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Church",
    "name": "Ministry of Repentance and Holiness",
    "description": "Preparing a glorious church without spot, wrinkle, or blemish for the coming of the Messiah.",
    "url": "https://your-domain.com",
    "logo": "https://your-domain.com/logo.png",
    "image": "https://your-domain.com/image.png",
    "sameAs": [
      "https://facebook.com/your-ministry",
      "https://youtube.com/@your-ministry",
      "https://twitter.com/your-ministry"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KE",
      "addressLocality": "Your City"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Church Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sunday Morning Worship",
            "description": "Traditional worship service"
          }
        }
      ]
    }
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Rest of your existing HomePage component */}
    </>
  );
}
