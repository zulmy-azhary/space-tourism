import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyles from "../components/styles/GlobalStyles";
import { AnimatePresence } from "framer-motion";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<GlobalStyles />
			<AnimatePresence
				mode="wait"
				initial={false}
				onExitComplete={() => window.scrollTo(0, 0)}
			>
				<Component {...pageProps} />
			</AnimatePresence>
		</>
	);
}
