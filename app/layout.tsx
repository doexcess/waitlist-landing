import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: {
    default: 'Doexcess | Automate Business Processes & Streamline Workflows',
    template: '%s | Workflow Automation by Doexcess',
  },
  description:
    'Streamline member onboarding, course management, and event ticketing with our workflow automation platform.',

  openGraph: {
    title: 'Doexcess: Simplify Your Workflows',
    description:
      'Automate repetitive tasks and manage digital operations in one place.',
    images: [
      {
        url: 'https://doexcess.com/images/card.png',
        width: 1200,
        height: 630,
        alt: 'Doexcess workflow management interface',
      },
    ],
    url: 'https://www.doexcess.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reduce Manual Work with Doexcess',
    description: 'Workflow automation for member and content management.',
    images: 'https://doexcess.com/images/card.png',
  },

  keywords: [
    'workflow automation',
    'business process management',
    'member onboarding software',
    'course management system',
    'event ticketing platform',
    'SaaS for organizations',
    'email automation tools',
  ],

  metadataBase: new URL('https://www.doexcess.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/icons/icon.png' />
        <meta property='og:image' content='/icons/icon.png' />
        <meta name='twitter:image' content='/icons/icon.png' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Doexcess',
              url: 'https://doexcess.com',
              logo: 'https://doexcess.com/icons/icon.png',
              sameAs: [
                'https://twitter.com/doexcess',
                'https://www.linkedin.com/company/doexcess',
              ],
            }),
          }}
        />
      </head>
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
