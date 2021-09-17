import "tailwindcss/tailwind.css";
import Head from "next/head";
import { Notes } from "@atoms";
import { Layout } from "@components";
import { Atom, Provider } from "jotai";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const { initialState } = pageProps;
  const initialValues: [Atom<unknown>, unknown] = [Notes, initialState];
  return (
    <Provider initialValues={[initialValues]}>
      <Head>
        <title>Simple & Awesome Notepad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
