import type { AppProps } from "next/app";
import { Analytics } from "@/utils";
import { AppProvider } from "@organisms";

import "@/styles/tailwind.scss";
import "@/styles/global.scss";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import "@fontsource/lexend/400.css";
import "@fontsource/lexend/500.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppProvider {...pageProps}>
        <Analytics />
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}
