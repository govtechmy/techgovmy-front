import React from "react";
import { getTranslations } from "next-intl/server";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@govtechmy/myds-react/breadcrumb";
import Link from "next/link";
import {
  FlagIcon,
  DatabaseIcon,
  CheckShieldIcon,
  EditIcon,
  ComponentIcon,
  OrgChartIcon,
} from "@govtechmy/myds-react/icon";
import Image from "next/image";
import { getPayload } from "payload";
import config from "@payload-config";

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
  const t = await getTranslations("About");
  const payload = await getPayload({ config });

  // const aboutUs = await fetchGlobal(locale, "about-us");
  const aboutUs = await payload.findGlobal({
    slug: "about-us",
    locale: locale as "en-GB" | "ms-MY",
    depth: 3,
  });
  // const IconComponent = iconMap;

  return (
    <div className="w-full justify-center border-x border-otl-divider">
      <section className="mx-auto grid h-[800px] w-full grid-cols-4 gap-4.5 bg-[url('/static/images/about-us/aboutus-mobile.png')] bg-cover bg-center bg-no-repeat px-4.5 py-6 md:h-[700px] md:grid-cols-8 md:gap-6 md:bg-[url('/static/images/about-us/aboutus-tablet.png')] md:px-6 lg:h-[400px] lg:grid-cols-12 lg:bg-[url('/static/images/about-us/aboutus-header.png')]">
        <div className="col-span-full flex items-start justify-center py-8 lg:col-span-6 lg:items-center">
          <div className="flex max-w-[600px] flex-col gap-[10px] px-[3rem]">
            <div className="text-black-900 text-heading-xl">{aboutUs?.["intro-header"]}</div>
            <div className="text-heading-3xs text-gray-500">{aboutUs?.["intro-description"]}</div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full grid-cols-4 gap-4.5 px-4.5 py-0 md:grid-cols-8 md:gap-6 md:px-6 lg:grid-cols-12">
        <div className="col-span-full m-auto my-[45px] flex min-h-[460px] max-w-[1280px] bg-[#fafafa] px-8 px-[1rem] py-8 lg:bg-[url('/static/images/about-us/card-2.png')] lg:bg-cover lg:bg-center lg:bg-no-repeat">
          <div className="flex w-full flex-col justify-center gap-[10px] lg:w-2/3">
            <div className="text-black-900 text-heading-md">{aboutUs?.["future-header"]}</div>
            <div className="text-heading-3xs text-gray-500">
              {aboutUs?.["future-description"] &&
                aboutUs["future-description"].map((value, index: number) => {
                  return (
                    <p key={`${index}_futue`} className="my-4">
                      {value?.["line-text"]}
                    </p>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl p-6">
        <h3 className="mb-8 text-heading-sm font-semibold text-txt-black-900">
          {t("our_capabilities")}
        </h3>
        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2">
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
                    <p className="text-txt-black-700">{value?.["card-description"]}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
