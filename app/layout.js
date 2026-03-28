'use client';

import { Playfair_Display, Nunito } from 'next/font/google';
import { useState } from 'react';
import './globals.css';
import LoadingAnimation from '@/components/LoadingAnimation';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700', '800'],
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({ children }) {
  const [showLoading, setShowLoading] = useState(true);

  const handleLoadComplete = () => {
    setShowLoading(false);
  };

  return (
    <html lang="en" className={`${playfair.variable} ${nunito.variable}`}>
      <head></head>
      <body className="font-nunito">
        {showLoading && <LoadingAnimation onLoadComplete={handleLoadComplete} />}
        {children}
      </body>
    </html>
  );
}