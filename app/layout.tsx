import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

// export const metadata: Metadata = {
//   title: 'Doexcess',
//   description: 'Streamline and automate essential business processes.',
//   icons: {
//     icon: 'icons/icon.png',
//   },
// };

export const metadata: Metadata = {
  title: {
    default: 'Doexcess | All-in-One Member Onboarding & Digital Management',
    template: '%s | Doexcess',
  },
  description:
    'Streamline member onboarding, email communications, and digital offerings (courses, event tickets) through a unified SaaS platform.',

  openGraph: {
    title: 'Doexcess: Simplify Member Management',
    description:
      'End-to-end solutions for onboarding, email automation, and digital offering management',
    url: 'https://doexcess.com',
    siteName: 'Your Site Name',
    images: [
      {
        url: '/images/preview-image.jpg', // Path to your image
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Website Name',
    description: 'Your awesome website description',
    images: ['/images/preview-image.jpg'],
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
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
