import { getTranslations } from "next-intl/server";
import React from "react";
import { Tag } from "@govtechmy/myds-react/tag";
import { ChevronRightIcon } from "@govtechmy/myds-react/icon";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { StatisticsSection } from "./sections";

export default async function HomePage() {
  const t = await getTranslations();

  const sections = [
    { content: <StatisticsSection /> },
    { content: "hello 2" },
    { content: "hello 3" },
    { content: "hello 4" },
    { content: "hello 5" },
    { content: "hello 6" },
  ];
  return (
    <>
      <section
        className="grid grid-cols-4 gap-4.5 px-4.5 md:grid-cols-8 md:gap-6 md:px-6 lg:grid-cols-12 w-full mx-auto lg:h-[628px] md:h-[933px] h-[825px] bg-[#FFFBF4]"
        style={{ backgroundImage: `url('./theme/hero-pattern.svg')` }}
      >
        <div className="max-w-[1280px] mx-auto w-full col-span-full flex items-center gap-6 py-16">
          <div className="flex-1 flex-col flex gap-4.5">
            <Tag
              className="w-fit mb-3 hover:cursor-pointer"
              variant="primary"
              size="small"
              mode="pill"
            >
              Peluncuran Portal Rasmi MYDS
              <ChevronRightIcon className="w-3 h-3" />
            </Tag>
            <h1 className="font-heading text-heading-lg tracking-tighter font-semibold">
              Kami bina produk digital untuk meningkatkan{" "}
              <span className="text-txt-govtech-600">kemudahan rakyat</span>
              <span className="text-govtech-700"> |</span>
            </h1>
            <p className="text-body-lg text-txt-black-500">
              Kami mahu mewujudkan ruang dalam sektor awam yang boleh menjadi tempat para bakat
              terbaik Malaysia berkembang.
            </p>
          </div>
          <div className="flex-1 w-full h-full relative">
            <Image
              className="absolute"
              alt="Govtech Malaysia Hero Image"
              src={"./theme/gtm-hero-img.svg"}
              fill={true}
            />
          </div>
        </div>
      </section>

      {sections.map((section, index) => (
        <section
          key={index}
          className={cn(
            "grid grid-cols-4 gap-4.5 px-4.5 md:grid-cols-8 md:gap-6 md:px-6 lg:grid-cols-12 w-full mx-auto flex-1",
            index === 4
              ? "bg-bg-white border-b border-otl-divider"
              : index === 5
                ? "bg-bg-white"
                : "even:bg-bg-white odd:bg-bg-gray-50",
          )}
        >
          <div className="max-w-[1280px] mx-auto w-full col-span-full py-16">{section.content}</div>
        </section>
      ))}
    </>
  );
}
