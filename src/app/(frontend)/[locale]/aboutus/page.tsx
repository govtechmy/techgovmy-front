import { getTranslations } from "next-intl/server";
import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@govtechmy/myds-react/breadcrumb"

export default async function AboutPage() {
  const t = await getTranslations("About");
  return (
    <div className="flex-1 w-full border-otl-divider border-x">
        <div className="bg-[#FFFBF4] border border-2 border-[#F4F4F5] h-[166px] px-4 py-6">
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">
                        {t('home')}
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbPage>{t('title')}</BreadcrumbPage>
            </Breadcrumb>
            <div className="text-3xl font-semibold my-2">
                {t('title')}
            </div>
        </div>
        <div className="mx-auto max-w-4xl p-6">
            <figure className="w-full text-center py-8 flex flex-col items-center">
                <img src="/static/images/aboutus.png" alt={t('title')} className="h-auto w-full m-auto rounded" />
                <figcaption className="mt-2 text-center text-gray-600">
                    adsfasfasdf afdsf asfd  asdfasfa sfa f a
                </figcaption>
            </figure>
            <div className="flex flex-col gap-[24px] my-16">
                <h2 className="font-semibold text-2xl">{t('intro_header')}</h2>
                <div className="font-normal text-base leading-[26px]">
                    {t('intro_description')}
                </div>

            </div>

            {/* Our Mission Our Vision */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 my-12">
                <div className="p-6 border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                        <img src="/static/images/misikami.png" className="icon" />
                    </div>

                    <h3 className="mb-2 text-xl font-semibold text-gray-800">{t('card1_title')}</h3>
                    <p className="text-gray-600">
                        {t('card1_description')}
                    </p>
                </div>


                <div className="p-6 border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                        <img src="/static/images/visikami.png" className="icon" />
                    </div>

                    <h3 className="mb-2 text-xl font-semibold text-gray-800">{t('card2_title')}</h3>
                    <p className="text-gray-600">
                        {t('card2_description')} 
                    </p>
                </div>
            </div>

            {/* Our Values */}
            <h3 className="mb-2 text-xl font-semibold text-gray-800">{t('our_values')} </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 sm:grid-cols-2 mb-4">
                <div className="p-6 border border-gray-200 rounded-lg shadow-sm flex flex-row gap-3">
                    <div className="flex items-start justify-center w-[48px] h-auto bg-orange-100 rounded-full mb-4">
                        <img src="/static/images/inovasi.png" className="icon" />
                    </div>
                    <div className="flex-1">
                        <h3 className="mb-2 text-xl font-semibold text-gray-800">{t('value_card1_title')}</h3>
                        <p className="text-gray-600">
                            {t('value_card1_description')}
                        </p>
                    </div>
                </div>


                <div className="p-6 border border-gray-200 rounded-lg shadow-sm flex flex-row gap-3">
                    <div className="flex items-start justify-center w-[48px] h-auto bg-orange-100 rounded-full mb-4">
                        <img src="/static/images/berpusatkanpengguna.png" className="icon" />
                    </div>
                    <div className="flex-1">
                        <h3 className="mb-2 text-xl font-semibold text-gray-800">{t('value_card2_title')}</h3>
                        <p className="text-gray-600">
                            {t('value_card2_description')}
                        </p>
                    </div>
                </div>
                
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 sm:grid-cols-2 mb-12">
                <div className="p-6 border border-gray-200 rounded-lg shadow-sm flex flex-row gap-3">
                    <div className="flex items-start justify-center w-[48px] h-auto bg-orange-100 rounded-full mb-4">
                        <img src="/static/images/ketelusan.png" className="icon" />
                    </div>
                    <div className="flex-1">
                        <h3 className="mb-2 text-xl font-semibold text-gray-800">{t('value_card3_title')}</h3>
                        <p className="text-gray-600">
                            {t('value_card3_description')}
                        </p>
                    </div>
                </div>


                <div className="p-6 border border-gray-200 rounded-lg shadow-sm flex flex-row gap-3">
                    <div className="flex items-start justify-center w-[48px] h-auto bg-orange-100 rounded-full mb-4">
                        <img src="/static/images/kerjasama.png" className="icon" />
                    </div>
                    <div className="flex-1">
                        <h3 className="mb-2 text-xl font-semibold text-gray-800">{t('value_card4_title')}</h3>
                        <p className="text-gray-600">
                            {t('value_card4_description')}
                        </p>
                    </div>
                </div>
                
            </div>

            <section className="max-w-6xl mx-auto px-4 py-8 text-center">
                <h2 className="text-2xl font-semibold mb-2">{t('our_community')}</h2>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-12">
        
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 justify-center text-center">

                    <div className="flex flex-col items-center">
                    <img
                        src="/static/images/komuniti.png"
                        alt={t('community1_text')}
                        className="rounded-md border-2 border-orange-500"
                    />
                        <a
                            href="#"
                            className="mt-4 inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                        >
                            {t('community1_text')}
                            <span className="ml-1">→</span>
                        </a>
                    </div>


                    <div className="flex flex-col items-center">
                    <img
                        src="/static/images/komuniti.png"
                        alt={t('community2_text')}
                        className="rounded-md border-2 border-orange-500"
                    />
                        <a
                            href="#"
                            className="mt-4 inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                        >
                            {t('community2_text')}
                            <span className="ml-1">→</span>
                        </a>
                    </div>


                    <div className="flex flex-col items-center">
                    <img
                        src="/static/images/komuniti.png"
                        alt={t('community3_text')}
                        className="rounded-md border-2 border-orange-500"
                    />
                        <a
                            href="#"
                            className="mt-4 inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                        >
                            {t('community3_text')}
                            <span className="ml-1">→</span>
                        </a>
                    </div>

                </div>
            </section>
        </div>
    </div>
  );
}
