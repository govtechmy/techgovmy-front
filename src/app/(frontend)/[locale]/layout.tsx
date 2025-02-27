import React from "react";
import { Inter, Poppins } from "next/font/google";
import "@/styles/global.css";
import { cn } from "@/lib/utils";
import LocaleClientLayout from "./layout.client";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import { routing } from "@/lib/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages, setRequestLocale } from "next-intl/server";

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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn(inter.className, inter.variable, poppins.variable)}>
        <ThemeProvider attribute={"class"} enableSystem={false}>
          <NextIntlClientProvider messages={messages}>
            <LocaleClientLayout>{children}</LocaleClientLayout>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
