"use client";

import { default as Footer } from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Masthead } from "@govtechmy/myds-react/masthead";

export default function LocaleClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={
        "min-h-screen h-full flex flex-col bg-bg-white text-txt-black-900 text-body-sm font-body"
      }
    >
      <Masthead />
      <Header />
      <main className=" h-full flex-1 flex flex-col divide-y divide-otl-divider">{children}</main>
      <Footer />
    </div>
  );
}
