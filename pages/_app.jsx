import Layout from "@/Layouts/Layout";
import { NextUIProvider } from "@nextui-org/react";
import "@/styles/globals.css"
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  
  return (
    <NextUIProvider className="mx-4">
      <Layout>
      <ThemeProvider>
        <Component {...pageProps} />
        </ThemeProvider >
      </Layout>
    </NextUIProvider>);
}
