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
      <div className="h-[166px] px-4 py-6">
        <div className="max-w-5xl m-auto">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">{t("home")}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbPage>{aboutUs?.title}</BreadcrumbPage>
          </Breadcrumb>
          <div className="text-heading-md font-semibold my-2 text-txt-black-900">
            <h1>{aboutUs?.title}</h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl p-6">
        <figure className="w-full text-center py-8 flex flex-col items-center">
          <Image
            src="/static/images/aboutus.png"
            alt={aboutUs?.["intro-header"] || "About Us"}
            className="h-auto w-full m-auto rounded"
            height={566}
            width={845}
          />
          <figcaption className="mt-2 text-center text-gray-600"></figcaption>
        </figure>

        <div className="flex flex-col gap-[24px] my-6">
          <h2 className="font-semibold text-heading-sm text-txt-black-900">
            {aboutUs?.["intro-header"]}
          </h2>
          <div className="font-normal text-heading-2xs leading-[26px] text-txt-black-700">
            {aboutUs?.["intro-description"]}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 my-12">
          {aboutUs["vision-and-mission"] &&
            aboutUs["vision-and-mission"].map((value, index: number) => {
              const IconComponent = iconMap[value?.icon || "flag"];
              return (
                <div
                  key={`misivisi_${index}`}
                  className="p-6 border border-gray-200 rounded-lg shadow-sm"
                >
                  <div className="flex items-center justify-start w-auto h-20 bg-orange-100 rounded-full mb-4">
                    <div className="bg-[#FFF7EA] w-[84px] h-[84px] flex items-center justify-center rounded-[50%] text-txt-govtech-600">
                      <IconComponent className="w-[42px] h-[42px] " />
                    </div>
                  </div>
                  <h3 className="my-4 text-heading-xs font-semibold text-txt-black-900">
                    {value?.["card-header"]}
                  </h3>
                  <p className="text-txt-black-700 text-heading-2xs font-normal leading-normal">
                    {value?.["card-description"]}
                  </p>
                </div>
              );
            })}
        </div>

        <h3 className="mb-2 text-heading-sm font-semibold text-txt-black-900">{t("our_values")}</h3>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 sm:grid-cols-2 mb-12">
          {aboutUs["our-values"] &&
            aboutUs["our-values"].map((value, index: number) => {
              const IconComponent = iconMap[value?.icon || "flag"];
              return (
                <div
                  key={index}
                  className="p-6 border border-gray-200 rounded-lg shadow-sm flex flex-row gap-4"
                >
                  <div className="flex items-start justify-center w-[48px] h-auto bg-orange-100 rounded-full mb-4">
                    <div className="bg-[#FFF7EA] w-[48px] h-[48px] flex items-center justify-center rounded text-txt-govtech-600">
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

        <section className="max-w-6xl mx-auto px-4 pt-8 text-left">
          <h2 className="text-heading-sm font-semibold mb-2 text-txt-black-900">
            {t("our_community")}
          </h2>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-12">
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
        </section>
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
