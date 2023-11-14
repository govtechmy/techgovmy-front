import "@/styles/globals.css";
import { body, header } from "@/lib/configs/fonts";
import { ReactNode } from "react";
import { AppPropsLayout } from "@/lib/types";
import { clx } from "@/lib/helper";
import { ThemeProvider } from "next-themes";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppPropsLayout) {
  const layout =
    Component.layout ||
    ((page: ReactNode) => <Layout className={clx(body.variable, "font-sans")}>{page}</Layout>);
  return (
    <div className={clx(body.variable, header.variable, "font-sans dark:bg-zinc-900")}>
      <ThemeProvider attribute="class" enableSystem={false} forcedTheme={Component.theme}>
        {layout(<Component {...pageProps} />, pageProps)}
      </ThemeProvider>
    </div>
  );
}
