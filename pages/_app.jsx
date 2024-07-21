import Layout from "@/Layouts/Layout";
import { NextUIProvider } from "@nextui-org/react";
import "@/styles/globals.css"
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push} >
      <Layout>
      <ThemeProvider>
        <Component {...pageProps} />
        </ThemeProvider >
      </Layout>
    </NextUIProvider>);
}
