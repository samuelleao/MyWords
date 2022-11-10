import type { AppProps } from "next/app";
import { GlobalStyles } from "@styles/stitches.config";

export default function App({ Component, pageProps }: AppProps) {
  GlobalStyles();
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
