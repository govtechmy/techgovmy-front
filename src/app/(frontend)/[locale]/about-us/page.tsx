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
  StarIcon,
  EyeShowIcon,
  ThumbsUpIcon,
  UserGroupIcon,
} from "@govtechmy/myds-react/icon";
import Image from "next/image";
import { getPayload } from "payload";
import config from "@payload-config";

const iconMap: Record<string, React.ElementType> = {
  flag: FlagIcon,
  star: StarIcon,
  eye: EyeShowIcon,
  thumbsUp: ThumbsUpIcon,
  userGroup: UserGroupIcon,
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
    <div className="w-full border-otl-divider border-x justify-center">
      <section
        className="grid grid-cols-4 gap-4.5 px-4.5 py-6 md:grid-cols-8 md:gap-6 md:px-6 lg:grid-cols-12 w-full mx-auto lg:h-[400px] md:h-[700px] h-[800px] 
        lg:bg-[url('/static/images/aboutus-header.png')] bg-cover bg-no-repeat bg-center
        md:bg-[url('/static/images/aboutus-tablet.png')]
        bg-[url('/static/images/aboutus-mobile.png')]"
      >
        <div className="col-span-full lg:col-span-6 flex items-center justify-center lg:justify-end">
          <div className="max-w-[600px] px-[3rem] flex flex-col gap-[10px]">
            <div className="text-heading-xl text-black-900">
              {aboutUs?.["intro-header"]}
            </div>
            <div className="text-heading-3xs text-gray-500">
              {aboutUs?.["intro-description"]}
            </div>
          </div>
        </div>
      </section>


      <section
        className="grid grid-cols-4 gap-4.5 py-0 px-4.5 md:grid-cols-8 md:gap-6 md:px-6 lg:grid-cols-12 w-full mx-auto"
      >
        <div className="max-w-[1280px] px-[1rem] lg:mx-[6rem] lg:my-[1rem] col-span-full 
          h-[720px] md:h-[518px] lg:h-[446px]
          lg:bg-[url('/static/images/card-2.png')] lg:bg-cover lg:bg-no-repeat lg:bg-center
          flex"
        >
          <div className="w-full lg:w-2/3 flex flex-col gap-[10px] justify-center">
            <div className="text-heading-md text-black-900">
              {aboutUs?.["future-header"]}
            </div>
            <div className="text-heading-3xs text-gray-500">
              {aboutUs?.["future-description"] &&
                aboutUs["future-description"].map((value, index: number) => {
                  return <p key={`${index}_futue`} className="my-4">{value?.["line-text"]}</p>
                })
              }
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl p-6">


        <h3 className="mb-8 text-heading-sm font-semibold text-txt-black-900">{t("our_capabilities")}</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 sm:grid-cols-2 mb-12">
          {aboutUs["our-capabilities"] &&
            aboutUs["our-capabilities"].map((value, index: number) => {
              const IconComponent = iconMap[value?.icon || "flag"];
              return (
                <div
                  key={index}
                  className="p-6 border border-gray-200 rounded-lg shadow-sm flex flex-row gap-4"
                >
                  <div className="flex items-start justify-center w-[48px] h-auto bg-orange-100 rounded-full mb-4">
                    <div className="bg-txt-govtech-600 w-[48px] h-[48px] flex items-center justify-center rounded text-govtech-700">
                      <IconComponent className="w-[28px] h-[28px] " />
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

        {/* <section className="max-w-6xl mx-auto px-4 pt-8 text-left">
          <h2 className="text-heading-sm font-semibold mb-2 text-txt-black-900">
            {t("our_community")}
          </h2>
        </section> */}

        {/* <section className="max-w-6xl mx-auto px-4 py-12">
          <div className="overflow-x-auto">
            <div className="grid grid-cols-3 gap-8 sm:grid-cols-3 justify-center text-center min-w-max">
              {aboutUs.community &&
                aboutUs.community.map((value, index: number) => (
                  <Link key={`community_${index}`} href={value?.["href"] || "#"}>
                    <KadKommuniti community_text={value?.["card-title"] || ""} />
                  </Link>
                ))}
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}

const KadKommuniti = async ({ community_text }: { community_text: string }) => {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/static/images/komuniti.png"
        alt={community_text}
        height={200}
        width={200}
        className="rounded-md border-2 border-orange-500"
      />
      <div className="mt-4 inline-flex items-center text-txt-black-900 font-medium text-body-xl">
        {community_text}
        <span className="ml-1">→</span>
      </div>
    </div>
  );
};
