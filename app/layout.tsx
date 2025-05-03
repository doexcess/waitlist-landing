import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

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
    images: [
      {
        url: '/images/card.png',
        width: 1200,
        height: 630,
        alt: 'Doexcess platform managing members and digital content',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Doexcess | Digital Member Management Platform',
    description:
      'Onboarding + email automation + course/event management in one system',
    images: '/images/card.png',
  },

  keywords: [
    'member onboarding platform',
    'email automation tools',
    'online course management',
    'event ticket system',
    'SaaS for organizations',
  ],
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
