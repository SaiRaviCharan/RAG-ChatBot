import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Navigation } from "@/components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RAG Chatbot - AI Document Intelligence by Sai Ravi Charan",
  description: "Transform your documents into intelligent conversations. Upload PDFs and chat with your content using advanced RAG (Retrieval-Augmented Generation) AI technology. Built by Sai Ravi Charan, AI Engineer & Full-Stack Developer.",
  keywords: ["RAG", "AI Chatbot", "Document Intelligence", "PDF Chat", "Retrieval Augmented Generation", "Vector Search", "Sai Ravi Charan", "AI Engineer", "Machine Learning", "Next.js", "Google Gemini"],
  authors: [
    {
      name: "Sai Ravi Charan",
      url: "https://www.linkedin.com/in/sai-ravi-charan-neerumalla-b04740278/",
    }
  ],
  creator: "Sai Ravi Charan",
  publisher: "Sai Ravi Charan",
  robots: "index, follow",
  
  // Open Graph metadata for social media sharing
  openGraph: {
    title: "RAG Chatbot - AI Document Intelligence",
    description: "Transform your documents into intelligent conversations using advanced RAG AI technology. Built by Sai Ravi Charan.",
    url: "https://your-domain.com", // Replace with your actual domain
    siteName: "RAG Chatbot by Sai Ravi Charan",
    images: [
      {
        url: "/og-image.png", // We'll create this
        width: 1200,
        height: 630,
        alt: "RAG Chatbot - AI Document Intelligence by Sai Ravi Charan",
      }
    ],
    locale: "en_US",
    type: "website",
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "RAG Chatbot - AI Document Intelligence",
    description: "Transform your documents into intelligent conversations using advanced RAG AI technology. Built by Sai Ravi Charan.",
    creator: "@sairavicharan", // Replace with your Twitter handle
    images: ["/og-image.png"],
  },
  
  // Additional metadata
  category: "Artificial Intelligence",
  classification: "AI Application",
  
  // Verification and analytics (add your own IDs)
  verification: {
    google: "your-google-verification-code", // Replace with your Google verification
  },
  
  // App-specific metadata
  applicationName: "RAG Chatbot",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Manifest for PWA
  manifest: "/manifest.json",
  
  // Additional tags
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "RAG Chatbot",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#3b82f6",
    "theme-color": "#3b82f6",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "RAG Chatbot - AI Document Intelligence",
              "description": "Transform your documents into intelligent conversations using advanced RAG AI technology",
              "url": "https://your-domain.com",
              "applicationCategory": "ProductivityApplication",
              "operatingSystem": "All",
              "creator": {
                "@type": "Person",
                "name": "Sai Ravi Charan",
                "jobTitle": "AI Engineer & Full-Stack Developer",
                "url": "https://www.linkedin.com/in/sai-ravi-charan-neerumalla-b04740278/"
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "featureList": [
                "PDF Document Upload",
                "AI-Powered Chat Interface", 
                "Vector Search Technology",
                "Retrieval-Augmented Generation",
                "Real-time Responses"
              ],
              "screenshot": "https://your-domain.com/screenshot-desktop.png"
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider>
          <Navigation />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
