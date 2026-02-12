import {Head, Html, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html className="scroll-smooth bg-gray-800 dark:bg-black m-0 p-0" lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta content="notranslate" name="google" />
      </Head>
      <body className="bg-gray-800 dark:bg-black text-white m-0 p-0">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
