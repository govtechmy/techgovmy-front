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
            "grid grid-cols-4 gap-4.5 px-4.5 md:grid-cols-8 md:gap-6 md:px-6 lg:grid-cols-12 w-full mx-auto flex-1 bg-bg-white",
          )}
        >
          <div
            className={cn(
              "max-w-[390px] md:max-w-[600px] lg:max-w-screen-xl mx-auto w-full col-span-full pt-16",
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
