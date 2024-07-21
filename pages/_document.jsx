import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      {/* <link
        rel="preload"
        href="../font/NanumGothic.woff2"
        as="font"
        crossOrigin=""
        type="font/woff2"
      /> */}
      </Head>
      <body className="flex justify-center">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
