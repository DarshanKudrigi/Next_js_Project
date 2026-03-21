import './globals.css';

export const metadata = {
  title: 'QuickSale - Shop fast. Shop smart.',
  description: 'Welcome to QuickSale - Your trusted e-commerce platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  );
}