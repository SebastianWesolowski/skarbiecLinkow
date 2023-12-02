import { Head, Html, Main, NextScript } from "next/document";
import config from "@/configs/config";

export default function Document() {
  return (
    <Html className="h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']" lang={config.SEO.locale}>
      <Head />
      <body className='flex h-full flex-col'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
