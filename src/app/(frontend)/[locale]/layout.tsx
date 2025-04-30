import React from "react";
import { Inter, Poppins } from "next/font/google";
import "@/styles/global.css";
import { cn } from "@/lib/utils";
import LocaleClientLayout from "./layout.client";
import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/lib/i18n/routing";
import { notFound } from "next/navigation";
import { getMessages, setRequestLocale } from "next-intl/server";
import { getPayload } from "payload";
import config from "@payload-config";


function sanitizeData(data: any): any {
  if (!data) return data;
  if (typeof data !== 'object') return data;
  
  if (Array.isArray(data)) {
    return data.map(item => sanitizeData(item));
  }
  
  const sanitized: any = {};
  for (const [key, value] of Object.entries(data)) {
    if (value && typeof value === 'object' && 'buffer' in value) {
      continue;
    }
    sanitized[key] = sanitizeData(value);
  }
  return sanitized;
}


export async function generateMetadata({ params }: ServerPageProps) {
  const { locale } = await params;

  const payload = await getPayload({ config });
  const siteInfo = await payload.findGlobal({
    slug: "site-info",
    locale: locale as "ms-MY" | "en-GB",
  });

  return {
    title: siteInfo["site-meta"]["site-name"] || "Govtech Malaysia",
    description:
      siteInfo["site-meta"]["site-description"] || "Mencipta produk digital untuk rakyat Malaysia",
    openGraph: {
      images: [
        {
          url:
            (typeof siteInfo["site-meta"].og_image !== "string" &&
              siteInfo["site-meta"].og_image.url) ||
            "/default-og.png",
          width: 1200,
          height: 630,
          alt:
            (typeof siteInfo["site-meta"].og_image !== "string" &&
              siteInfo["site-meta"].og_image.alt) ||
            "Default OG image",
        },
      ],
    },
  };
}

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

  const payload = await getPayload({ config });

  const headerData = await payload.findGlobal({
    slug: "navbar",
    locale: locale as "ms-MY" | "en-GB",
    depth: 3,
  });

  const footerData = await payload.findGlobal({
    slug: "footer",
    locale: locale as "ms-MY" | "en-GB",
    depth: 3,
  });

  const siteInfo = await payload.findGlobal({
    slug: "site-info",
    locale: locale as "ms-MY" | "en-GB",
    depth: 3,
  });

  const sanitizedHeaderData = sanitizeData(headerData);
  const sanitizedFooterData = sanitizeData(footerData);
  const sanitizedSiteInfo = sanitizeData(siteInfo);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn(inter.className, inter.variable, poppins.variable)}>
        <NextIntlClientProvider messages={messages}>
          <LocaleClientLayout 
            navbar={sanitizedHeaderData} 
            footer={sanitizedFooterData} 
            siteInfo={sanitizedSiteInfo}
          >
            {children}
          </LocaleClientLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
