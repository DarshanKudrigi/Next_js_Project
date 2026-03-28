'use client';

import { Playfair_Display, Nunito } from 'next/font/google';
import { useEffect, useState } from 'react';
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <html lang="en" className={`${playfair.variable} ${nunito.variable}`}>
      <head></head>
      <body className="font-nunito">
        {mounted && <LoadingAnimation />}
        {children}
      </body>
    </html>
  );
}