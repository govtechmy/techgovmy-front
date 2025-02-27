import React from "react";
import { Inter, Poppins } from "next/font/google";
import "@/styles/global.css";
import { cn } from "@/lib/utils";
import LocaleClientLayout from "./layout.client";
import { ThemeProvider } from "next-themes";

export const metadata = {
  description: "Mencipta produk digital untuk rakyat",
  title: "Govtech Malaysia",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, inter.variable, poppins.variable)}>
        <ThemeProvider attribute={"class"} enableSystem={false}>
          <LocaleClientLayout>{children}</LocaleClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
