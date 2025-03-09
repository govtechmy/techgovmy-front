
import React from "react";
import { getTranslations } from "next-intl/server";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@govtechmy/myds-react/breadcrumb"
import { fetchGlobal } from "@/utils/globals";
import Link from "next/link";

export default async function AboutPage({ params }: { params: { locale: string } }) {

  const t = await getTranslations("About");
  const aboutUs = await fetchGlobal(params.locale, "about-us")

    return (
      <div className="w-full border-otl-divider border-x justify-center">
        <div className="h-[166px] px-4 py-6">
          <div className="max-w-5xl m-auto">
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  {t('home')}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbPage>{aboutUs?.title}</BreadcrumbPage>
            </Breadcrumb>
            <div className="text-3xl font-semibold my-2 text-txt-black-900">
              <h1>{aboutUs?.title}</h1>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl p-6">
          <figure className="w-full text-center py-8 flex flex-col items-center">
            <img src="/static/images/aboutus.png" alt={aboutUs?.intro_header || "About Us"} className="h-auto w-full m-auto rounded" />
            <figcaption className="mt-2 text-center text-gray-600">{/* Caption */}</figcaption>
          </figure>

          <div className="flex flex-col gap-[24px] my-6">
            <h2 className="font-semibold text-3xl text-txt-black-900">{aboutUs?.["intro-header"]}</h2>
            <div className="font-normal text-base leading-[26px] text-txt-black-700">
              {aboutUs?.["intro-description"]}
            </div>
          </div>

          {/* Our Mission & Vision */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 my-12">
            {aboutUs["vision-and-mission"].map((value: {[key: string]: string}, index: number) => (
              <div key={`misivisi_${index}`} className="p-6 border border-gray-200 rounded-lg shadow-sm">
                <div className="flex items-center justify-start w-auto h-20 bg-orange-100 rounded-full mb-4">
                  <img src={value?.["image-link"]} className="icon" alt={value?.["card-header"]} />
                </div>
                <h3 className="my-4 text-xl font-semibold text-txt-black-900">{value?.["card-header"]}</h3>
                <p className="text-txt-black-700 text-base font-normal leading-normal">
                  {value?.["card-description"]}
                </p>
              </div>
            ))}
          </div>

          {/* Our Values */}
          <h3 className="mb-2 text-xl font-semibold text-txt-black-900">{aboutUs?.our_values}</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 sm:grid-cols-2 mb-12">
            {aboutUs["our-values"].map((value: {[key: string]: string}, index: number) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg shadow-sm flex flex-row gap-4">
                <div className="flex items-start justify-center w-[48px] h-auto bg-orange-100 rounded-full mb-4">
                  <img src={value?.["image-link"]} className="icon" alt={value?.["card-header"]} />
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-semibold text-txt-black-900">{value?.["card-header"]}</h3>
                  <p className="text-txt-black-700">
                    {value?.["card-description"]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Our Community */}
          <section className="max-w-6xl mx-auto px-4 pt-8 text-left">
            <h2 className="text-3xl font-semibold mb-2 text-txt-black-900">{t('our_community')}</h2>
          </section>

          <section className="max-w-6xl mx-auto px-4 py-12">
            <div className="overflow-x-auto">
              <div className="grid grid-cols-3 gap-8 sm:grid-cols-3 justify-center text-center min-w-max">
                {aboutUs.community.map((value: {[key: string]: string}, index: number) => (
                  <Link key={`community_${index}`} href={value?.["href"]}>
                    <KadKommuniti 
                      community_text={value?.["card-title"]}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
}


const KadKommuniti=async({community_text}: { community_text: string })=>{

    return <div className="flex flex-col items-center">
        <img
            src="/static/images/komuniti.png"
            alt={community_text}
            className="rounded-md border-2 border-orange-500"
        />
        <div
            className="mt-4 inline-flex items-center text-txt-black-900 font-medium"
        >
          {community_text}
          <span className="ml-1">→</span>
        </div>
</div>
}