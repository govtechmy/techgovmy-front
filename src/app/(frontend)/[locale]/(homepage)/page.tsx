import React from "react";
import { Tag } from "@govtechmy/myds-react/tag";
import { ChevronRightIcon } from "@govtechmy/myds-react/icon";
import HomepageClient from "./page.client";
import { cn } from "@/lib/utils";

export default async function HomePage() {
  return (
    <>
      <section
        className={cn(
          "grid grid-cols-4 gap-4.5 px-10 md:grid-cols-8 md:gap-6 md:px-[84px] lg:grid-cols-12 w-full mx-auto lg:h-[628px] md:h-[900px] h-[850px]",
          // Image background
          "bg-cover bg-no-repeat bg-center lg:bg-[url('/static/images/home/img-bg-hero-desktop.svg')] md:bg-[url('/static/images/home/img-bg-hero-tablet.svg')] bg-[url('/static/images/home/img-bg-hero-mobile.svg')]",
        )}
      >
        <div className="max-w-[350px] md:max-w-[600px] lg:max-w-screen-xl lg:mx-auto w-full col-span-full flex flex-col lg:flex-row items-center gap-6 py-16">
          <div className="lg:max-w-[680px] w-full lg:flex-1 flex-col flex gap-4.5">
            <Tag
              className="w-fit mb-3 hover:cursor-pointer"
              variant="primary"
              size="small"
              mode="pill"
            >
              Peluncuran Portal Rasmi MYDS
              <ChevronRightIcon className="w-3 h-3" />
            </Tag>
            <h1 className="font-heading text-heading-md md:text-heading-lg lg:tracking-tighter font-semibold">
              Kami bina produk digital untuk meningkatkan{" "}
              <span className="text-txt-govtech-600">kemudahan rakyat</span>
              <span className="text-govtech-700"> |</span>
            </h1>
            <p className="text-body-lg text-txt-black-500">
              Kami mahu mewujudkan ruang dalam sektor awam yang boleh menjadi tempat para bakat
              terbaik Malaysia berkembang.
            </p>
          </div>
        </div>
      </section>

      <HomepageClient />
    </>
  );
}
