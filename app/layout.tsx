import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MenuComponent from '@/components/Menu';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Movie Search Application',
  description: 'Movie Search Application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <MenuComponent />
        {children}
      </body>
    </html>
  );
}
