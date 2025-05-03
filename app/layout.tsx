import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Doexcess',
  description: 'Streamline and automate essential business processes.',
  icons: {
    icon: 'icons/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`font-gilroy bg-white dark:bg-gray-900`}>
        {children}
      </body>
    </html>
  );
}
