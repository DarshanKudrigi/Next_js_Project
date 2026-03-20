import { Playfair_Display, Nunito } from 'next/font/google';
import './globals.css';

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

export const metadata = {
  title: 'QuickSale - Shop fast. Shop smart.',
  description: 'Welcome to QuickSale - Your trusted e-commerce platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${nunito.variable}`}>
      <head></head>
      <body className="font-nunito">{children}</body>
    </html>
  );
}