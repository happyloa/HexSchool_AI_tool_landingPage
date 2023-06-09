// 引入 Bootstrap 的樣式檔案
import "bootstrap/dist/css/bootstrap.css";
// 引入 React Slick 的樣式檔案
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 引入全域樣式
import "@/styles/globals.css";

import { useEffect } from "react";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  // 引入 Bootstrap 的程式碼檔案
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.js");
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
