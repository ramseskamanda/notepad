import "tailwindcss/tailwind.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { Layout } from "@components/core/Layout";
import { Atom, Provider } from "jotai";
import { NotesAtom } from "@atoms/notes";

function MyApp({ Component, pageProps }: AppProps) {
  const { initialState } = pageProps;
  const initialValues: [Atom<unknown>, unknown] = [NotesAtom, initialState];
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
