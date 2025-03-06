"use client";

import { Button, ButtonIcon } from "@govtechmy/myds-react/button";
import { AboutGovtechSection, NewsSection, PagesSection, StatisticsSection } from "./sections";
import { cn } from "@/lib/utils";
import { ArrowForwardIcon } from "@govtechmy/myds-react/icon";

export default function HomepageClient() {
  const sections = [
    { content: <StatisticsSection /> },
    {
      content: (
        <AboutGovtechSection
          image_url="./theme/gtm-img-1.svg"
          title="Government Technology Malaysia (GovTech)"
          category="Siapa Kami"
          description="GovTech Malaysia ialah pasukan dalaman yang menumpukan pada peningkatan perkhidmatan digital dalam sektor awam."
          action={
            <Button className="h-10 bg-bg-black-800 border-bg-black-900" size={"medium"}>
              Tentang Govtech
              <ButtonIcon>
                <ArrowForwardIcon />
              </ButtonIcon>
            </Button>
          }
        />
      ),
    },
    {
      content: (
        <AboutGovtechSection
          reverse_row={true}
          image_url="./theme/gtm-img-2.svg"
          title="Teknologi untuk Kebaikan Rakyat"
          category="Usaha Kami"
          description="Kami mengembangkan idea-idea baru untuk menyelesaikan cabaran awam melalui teknologi digital."
          action={
            <Button className="h-10 bg-bg-black-800 border-bg-black-900" size={"medium"}>
              Kenali Produk Kami
              <ButtonIcon>
                <ArrowForwardIcon />
              </ButtonIcon>
            </Button>
          }
        />
      ),
    },
    {
      content: (
        <AboutGovtechSection
          image_url="./theme/gtm-img-3.svg"
          title="Memperkasa Rakyat"
          category="Penyelesaian Berimpak"
          description="Penyelesaian kami menjadikan perkhidmatan kerajaan lebih mudah diakses, efisien, dan mesra pengguna untuk semua."
          action={
            <Button className="h-10 bg-bg-black-800 border-bg-black-900" size={"medium"}>
              Tentang Govtech
              <ButtonIcon>
                <ArrowForwardIcon />
              </ButtonIcon>
            </Button>
          }
        />
      ),
    },
    { content: <PagesSection /> },
    { content: <NewsSection /> },
  ];

  return (
    <>
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
          <div className="max-w-[350px] md:max-w-[600px] lg:max-w-screen-xl mx-auto w-full col-span-full py-16">
            {section.content}
          </div>
        </section>
      ))}
    </>
  );
}
