import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "../components/styles/GlobalStyles";
import { AnimatePresence } from "framer-motion";

const MyApp = ({ Component, pageProps, router }: AppProps): JSX.Element => {
  const url = router.route;
  
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
        <Component key={url} {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;