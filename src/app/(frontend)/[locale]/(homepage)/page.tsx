import React from "react";
import { Tag } from "@govtechmy/myds-react/tag";
import { ChevronRightIcon } from "@govtechmy/myds-react/icon";
import HomepageClient from "./page.client";
import { cn } from "@/lib/utils";
import config from "@payload-config";
import { getPayload } from "payload";

export default async function HomePage({ params }: ServerPageProps) {
  const { locale } = await params;
  const payload = await getPayload({ config });

  const homepage = await payload.findGlobal({
    slug: "homepage",
    locale: locale as "en-GB" | "ms-MY",
    depth: 3,
  });
  const siteInfo = await payload.findGlobal({
    slug: "site-info",
    locale: locale as "en-GB" | "ms-MY",
    depth: 3,
  });

  const products = await payload.find({
    collection: "products",
    locale: locale as "en-GB" | "ms-MY",
    pagination: false,
  });

  return (
    <>
      <section
        className={cn(
          "mx-auto grid h-[850px] w-full grid-cols-4 gap-4.5 px-10 md:h-[900px] md:grid-cols-8 md:gap-6 md:px-[84px] lg:h-[628px] lg:grid-cols-12",
          // Image background
          "bg-[url('/static/images/home/img-bg-hero-mobile.svg')] bg-cover bg-center bg-no-repeat md:bg-[url('/static/images/home/img-bg-hero-tablet.svg')] lg:bg-[url('/static/images/home/img-bg-hero-desktop.svg')]",
        )}
      >
        <div className="col-span-full flex w-full max-w-[350px] flex-col items-center gap-6 py-16 md:max-w-[600px] lg:mx-auto lg:max-w-screen-xl lg:flex-row">
          <div className="flex w-full flex-col gap-4.5 lg:max-w-[680px] lg:flex-1">
            {/* <Tag
              className="mb-3 w-fit hover:cursor-pointer"
              variant="primary"
              size="small"
              mode="pill"
            >
              Peluncuran Portal Rasmi MYDS
              <ChevronRightIcon className="h-3 w-3" />
            </Tag> */}
            <h1 className="font-heading text-heading-md font-semibold md:text-heading-lg lg:tracking-tighter">
              {homepage["hero-title"]}{" "}
              {/* Since not using typewriter effect, this text is here, so use first item in the array */}
              <span className="text-txt-govtech-600">
                {homepage["hero-typewriter-text"] &&
                  homepage["hero-typewriter-text"].length > 0 &&
                  homepage["hero-typewriter-text"][0].text}
              </span>
              <span className="text-govtech-700"> |</span>
            </h1>
            <p className="text-body-lg text-txt-black-500">{homepage["hero-description"]}</p>
          </div>
        </div>
      </section>

      <HomepageClient homepage={homepage} siteInfo={siteInfo} products={products.docs} />
    </>
  );
}
