"use client";

import "@/styles/global.css";
import { cn } from "@/lib/utils";
import { Inter, Poppins } from "next/font/google";
import { Button, ButtonIcon } from "@govtechmy/myds-react/button";
import { ArrowBackIcon } from "@govtechmy/myds-react/icon";
import { useRouter } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
});

export default function NotFound() {
  const router = useRouter();
  return (
    <html lang="en-GB">
      <body className={cn(inter.className, inter.variable, poppins.variable)}>
        <div className="flex min-h-screen flex-col items-center justify-center gap-10 font-heading">
          <div className="flex w-full flex-col items-center justify-center gap-6">
            <h2 className="text-[100px] leading-[100px] text-bg-black-400">404</h2>
            <p className="text-heading-sm text-txt-black-900">Halaman tidak dijumpai</p>
            <p className="flex flex-col text-center text-body-lg text-txt-black-700">
              <span>Page not found</span>
              <span>页面未找到</span>
              <span>பக்கம் காணப்படவில்லை</span>
            </p>
          </div>
          <Button onClick={() => router.push("/")} className="mt-6" variant={"default-outline"}>
            <ButtonIcon>
              <ArrowBackIcon />
            </ButtonIcon>
            <span>Kembali ke halaman utama</span>
          </Button>
        </div>
      </body>
    </html>
  );
}
