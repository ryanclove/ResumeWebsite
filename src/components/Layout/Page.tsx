import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { memo, PropsWithChildren } from 'react';

import { HomepageMeta } from '../../data/dataDef';

const SITE_URL = 'https://coachryantutu.vercel.app';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({ children, title, description, ogImageUrl }) => {
  const { asPath: pathname } = useRouter();
  const canonicalUrl = `${SITE_URL}${pathname}`;
  const ogImage = ogImageUrl ?? DEFAULT_OG_IMAGE;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <link href={canonicalUrl} key="canonical" rel="canonical" />

        {/* Open Graph */}
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={canonicalUrl} property="og:url" />
        <meta content={ogImage} property="og:image" />
        <meta content="1200" property="og:image:width" />
        <meta content="630" property="og:image:height" />
        <meta content="website" property="og:type" />

        {/* Twitter / X card */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
        <meta content={ogImage} name="twitter:image" />
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;