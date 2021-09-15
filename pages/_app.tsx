import "tailwindcss/tailwind.css";
import Head from "next/head";
import App from "next/app";
import type { AppProps } from "next/app";
import { Layout } from "@components/core/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Simple & Awesome Notepad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
