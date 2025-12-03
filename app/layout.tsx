import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const siteUrl = 'https://react-3d-button-demo.vercel.app';
const siteName = 'React 3D Button';
const siteDescription =
  'Beautiful 3D button component for React and Next.js with realistic press effects, toggle mode, 5 pre-built themes, TypeScript support, and mobile optimization. Easy to customize with CSS variables. Perfect for modern web applications.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'React 3D Button - Beautiful 3D Buttons for React & Next.js',
    template: '%s | React 3D Button',
  },
  description: siteDescription,
  keywords: [
    'react 3d button',
    '3d button react',
    'react button component',
    'nextjs button',
    '3d press effect',
    'react ui component',
    'button component react',
    'react animated button',
    'nextjs 3d button',
    'react button library',
    'tactile button',
    'interactive button react',
    '3d button component',
    'react-3d-button',
    'material design button',
    'glassmorphism button',
    'neumorphism button',
    'react typescript button',
    'button themes react',
    'customizable button react',
    'react toggle button',
    '3d toggle switch',
    'toggle button component',
    'react switch component',
    'animated toggle react',
  ],
  authors: [{ name: 'Furkan Boran', url: 'https://github.com/boranfurkan' }],
  creator: 'Furkan Boran',
  publisher: 'Furkan Boran',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName,
    title: 'React 3D Button - Beautiful 3D Buttons for React & Next.js',
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'React 3D Button - Interactive demo and documentation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'React 3D Button - Beautiful 3D Buttons for React & Next.js',
    description: siteDescription,
    images: [`${siteUrl}/og-image.png`],
    creator: '@boranfurkan',
  },
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
  alternates: {
    canonical: siteUrl,
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'React 3D Button',
    description:
      'Beautiful 3D button component for React and Next.js with realistic press effects, toggle mode, multiple themes, and TypeScript support',
    url: 'https://react-3d-button-demo.vercel.app',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Person',
      name: 'Furkan Boran',
      url: 'https://github.com/boranfurkan',
    },
    sameAs: [
      'https://github.com/boranfurkan/react-3d-button',
      'https://www.npmjs.com/package/react-3d-button',
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
