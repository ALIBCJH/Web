import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: 'swap',
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  display: 'swap',
});

// Professional SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'), // Replace with your actual domain
  title: {
    default: "Ministry of Repentance and Holiness | Prepare The Way",
    template: "%s | Repentance and Holiness", // This allows sub-pages to look like "About Us | Repentance and Holiness"
  },
  description: "Official Altar of the Ministry of Repentance and Holiness. Preparing a glorious church without spot, wrinkle, or blemish for the coming of the Messiah.",
  keywords: ["Repentance", "Holiness", "Messiah is Coming", "End Time Revival", "Prophetic Visitation", "Church", "Ministry", "Christian Faith", "Prayer", "Worship"],
  authors: [{ name: "Ministry of Repentance and Holiness" }],
  creator: "Ministry of Repentance and Holiness",
  publisher: "Ministry of Repentance and Holiness",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Verification tags for search engines
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  
  // Open Graph (WhatsApp, Facebook, LinkedIn)
  openGraph: {
    title: "Ministry of Repentance and Holiness",
    description: "The Lord is calling the nations to repentance and absolute holiness. Prepare the way, the Messiah is coming.",
    url: "https://your-domain.com", // Replace with your actual domain
    siteName: "Repentance and Holiness",
    images: [
      {
        url: "/og-image.jpg", // Create a high-quality 1200x630 image and put it in /public
        width: 1200,
        height: 630,
        alt: "The Altar of the Lord",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter/X Card
  twitter: {
    card: "summary_large_image",
    title: "Ministry of Repentance and Holiness",
    description: "Preparing the Way for the Messiah.",
    images: ["/og-image.jpg"],
    creator: "@your-ministry-handle", // Add your Twitter handle
  },

  // Icons (Favicons)
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  
  // Manifest for PWA
  manifest: "/manifest.json",
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                document.documentElement.classList.add(theme);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${dancing.variable} font-sans antialiased bg-white dark:bg-[#0B0F19] text-slate-900 dark:text-white transition-colors duration-300`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}