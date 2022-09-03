import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from "../components/styles/GlobalStyles";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}