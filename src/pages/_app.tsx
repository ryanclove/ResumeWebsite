/* eslint-disable object-curly-spacing */
/* eslint-disable simple-import-sort/imports */
import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type { AppProps } from 'next/app';
import { memo, useEffect } from 'react';
import Script from 'next/script';
import { useRouter } from 'next/router';

const GA_ID = 'G-97D20ESGE5';

// Tell TypeScript that window.gtag exists
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

const sections = ['hero', 'resume', 'medals', 'collegecommit', 'contact'];

const MyApp = memo(({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  // Track page views on route change
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (window.gtag) {
        window.gtag('config', GA_ID, {
          page_path: url,
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  // Track scrolling to sections
  useEffect(() => {
    if (!window.gtag) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (sections.includes(id)) {
              window.gtag('event', 'section_view', {
                section: id,
              });
            }
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of section is visible
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {process.env.NODE_ENV === 'production' && (
        <>
          {/* Load GA script */}
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      <div className="w-full min-h-screen bg-gray-800 dark:bg-black text-white">
        <Component {...pageProps} />
      </div>
    </>
  );
});

export default MyApp;