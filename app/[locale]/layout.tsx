import Footer from '@/components/footer';
import Header from '@/components/header';
import ThemeSwitch from '@/components/theme-switch';
import ActiveSectionContextProvider from '@/context/active-section.context';
import ThemeContextProvider from '@/context/theme-context';
import { routing } from '@/i18n/routing';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { DM_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';
import { Toaster } from 'react-hot-toast';
import './globals.css';

const dm_sans = DM_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Catalina Avadani | Frontend Developer',
  description:
    'Catalina Avadani is a front-end developer based in Gothenburg. Explore projects, skills, and experience in web development, React, Next.js, and more.',
  openGraph: {
    title: 'Catalina Avadani | Frontend Developer',
    description:
      'Explore Catalina’s work as a frontend developer specializing in React, Next.js, and accessibility.',
    url: 'https://catalinaavadani.com',
    siteName: 'Catalina Avadani Portfolio',
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className='!scroll-smooth'>
      <head>
        <script
          src='//cdn-4.convertexperiments.com/v1/js/10017264-10017602.js?environment=production'
          async
        />
      </head>
      <body
        className={`${dm_sans.className} bg-slate-50 text-gray-950 relative  pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark: text-opacity-90 `}
      >
        <div className='bg-[#fbe2e3] absolute top-[ -6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#614b4b]'></div>
        <div className='bg-[#dbd7fb] absolute top-[ -1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]'></div>

        <ThemeContextProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Footer />
              <ThemeSwitch />
              <Toaster position='top-center' />
            </ActiveSectionContextProvider>
          </NextIntlClientProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
