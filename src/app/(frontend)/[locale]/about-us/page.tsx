import React from "react";
import {
  FlagIcon,
  DatabaseIcon,
  CheckShieldIcon,
  EditIcon,
  ComponentIcon,
  OrgChartIcon,
} from "@govtechmy/myds-react/icon";
import { getPayload } from "payload";
import config from "@payload-config";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  flag: FlagIcon,
  database: DatabaseIcon,
  "org-chart": OrgChartIcon,
  "check-shield": CheckShieldIcon,
  edit: EditIcon,
  component: ComponentIcon,
};

export default async function AboutPage({ params }: ServerPageProps) {
  const { locale } = await params;
  const payload = await getPayload({ config });

  const aboutUs = await payload.findGlobal({
    slug: "about-us",
    locale: locale as "en-GB" | "ms-MY",
    depth: 3,
  });

  return (
    <>
      <section
        className={cn(
          "mx-auto grid h-[800px] w-full grid-cols-4 gap-4.5 px-4.5 md:h-[700px] md:grid-cols-8 md:gap-6 md:px-6 lg:h-[400px] lg:grid-cols-12",
          // Image background
          "bg-[url('/static/images/about-us/aboutus-mobile.png')] bg-cover bg-center bg-no-repeat md:bg-[url('/static/images/about-us/aboutus-tablet.png')] lg:bg-[url('/static/images/about-us/aboutus-header.png')]",
        )}
      >
        <div className="col-span-full flex w-full max-w-[350px] flex-col items-center py-16 md:max-w-[600px] lg:mx-auto lg:max-w-screen-xl lg:flex-row lg:pl-[109px]">
          <div className="flex w-full flex-col gap-4.5 lg:max-w-[519px] lg:flex-1">
            <h1 className="text-black-900 font-heading text-heading-md font-semibold md:text-heading-lg">
              {aboutUs?.["intro-header"]}
            </h1>
            <p className="font-body text-body-md text-gray-500">{aboutUs?.["intro-description"]}</p>
          </div>
        </div>
      </section>

      <section
        className={cn(
          "mx-auto grid w-full grid-cols-4 gap-4.5 px-4.5 md:grid-cols-8 md:gap-6 md:px-6 lg:grid-cols-12",
        )}
      >
        <div className="col-span-full mx-auto flex w-full max-w-[394px] flex-col items-center py-12 md:max-w-[600px] lg:mx-auto lg:max-w-screen-xl lg:flex-row lg:px-[109px] lg:py-16">
          <div className="flex rounded-lg bg-bg-white-hover p-4.5 md:p-8 lg:bg-[url('/static/images/about-us/card-2.png')] lg:bg-cover lg:bg-center lg:bg-no-repeat">
            <div className="flex w-full flex-col justify-center gap-[10px] lg:w-2/3">
              <h2 className="text-black-900 font-heading text-heading-sm font-semibold">
                {aboutUs?.["future-header"]}
              </h2>

              {aboutUs?.["future-description"] &&
                aboutUs["future-description"].map((value, index) => {
                  return (
                    <p
                      key={`${index}_futue`}
                      className={cn("text-body-md text-txt-black-500", index !== 0 && "my-2")}
                    >
                      {value?.["line-text"]}
                    </p>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      <section
        className={cn(
          "mx-auto grid w-full grid-cols-4 gap-4.5 px-4.5 md:grid-cols-8 md:gap-6 md:px-6 lg:grid-cols-12",
        )}
      >
        <div className="col-span-full mx-auto flex w-full max-w-[350px] flex-col pt-16 md:max-w-[600px] lg:mx-auto lg:max-w-screen-xl lg:px-[109px]">
          <h3 className="mb-12 text-heading-sm font-semibold text-txt-black-900">
            {aboutUs["our-capabilities-title"]}
          </h3>
          <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
            {aboutUs["our-capabilities"] &&
              aboutUs["our-capabilities"].map((value, index: number) => {
                const IconComponent = iconMap[value?.icon || "flag"] || "span";
                return (
                  <div
                    key={index}
                    className="shadow-sm flex flex-row gap-4 rounded-lg border border-gray-200 p-6"
                  >
                    <div className="bg-orange-100 mb-4 flex h-auto w-[48px] items-start justify-center rounded-full">
                      <div className="flex h-[48px] w-[48px] items-center justify-center rounded bg-govtech-50 text-govtech-700">
                        <IconComponent className="h-[28px] w-[28px]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-body-xl font-semibold text-txt-black-900">
                        {value?.["card-header"]}
                      </h3>
                      <p className="text-body-md leading-7 text-txt-black-700">
                        {value?.["card-description"]}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
