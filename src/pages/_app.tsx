import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { AuthProvider } from "@/contexts/AuthContext";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Head>
        <title>Yume Yobi</title>
      </Head>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
