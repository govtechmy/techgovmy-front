"use client";

import { PagesSection, StatisticsSection } from "./sections";
import { cn } from "@/lib/utils";

export default function HomepageClient() {
  const sections = [{ content: <StatisticsSection /> }, { content: <PagesSection /> }];

  return (
    <>
      {sections.map((section, index, arr) => (
        <section
          key={index}
          className={cn(
            "mx-auto grid w-full flex-1 grid-cols-4 gap-4.5 bg-bg-white px-4.5 md:grid-cols-8 md:gap-6 md:px-6 lg:grid-cols-12",
          )}
        >
          <div
            className={cn(
              "col-span-full mx-auto w-full max-w-[390px] pt-16 md:max-w-[600px] lg:max-w-screen-xl",
              index === arr.length - 1 && "py-16",
            )}
          >
            {section.content}
          </div>
        </section>
      ))}
    </>
  );
}
