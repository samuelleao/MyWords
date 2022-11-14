import type { AppProps } from "next/app";
import { GlobalStyles } from "@styles/stitches.config";
import FavoritesWordsProvider from "@providers/wordsProvider";

export default function App({ Component, pageProps }: AppProps) {
  GlobalStyles();
  return (
    <FavoritesWordsProvider>
      <Component {...pageProps} />
    </FavoritesWordsProvider>
  );
}
