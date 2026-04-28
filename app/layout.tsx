export const metadata = {
  title: 'Headstone Design & Stonemason Quotes | Pillaar',
  description: 'Design your headstone or memorial online in 3D. Compare quotes from verified local stonemasons and commission with complete peace of mind. Free to use.',
  keywords: 'headstone design, memorial stone, gravestone quotes, stonemason near me, buy a headstone, headstone prices UK, memorial designer, granite headstone',
  metadataBase: new URL('https://pillaar.com'),
  openGraph: {
    title: 'Headstone Design & Stonemason Quotes | Pillaar',
    description: 'Design your headstone or memorial online in 3D. Compare quotes from verified local stonemasons and commission with complete peace of mind.',
    url: 'https://pillaar.com',
    siteName: 'Pillaar',
    locale: 'en_GB',
    type: 'website',
    images: [{ url: '/og-image.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Headstone Design & Stonemason Quotes | Pillaar',
    description: 'Design your headstone or memorial online in 3D. Compare quotes from verified local stonemasons and commission with complete peace of mind.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://pillaar.com',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
