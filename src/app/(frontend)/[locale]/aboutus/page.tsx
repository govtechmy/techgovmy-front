import { getTranslations } from "next-intl/server";
import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@govtechmy/myds-react/breadcrumb"

export default async function AboutPage() {
  const t = await getTranslations();
  return (
    <div className="flex-1 container mx-auto px-4.5 lg:px-6 border-otl-divider border-x">
        <div className="bg-[#FFFBF4] border border-2 border-[#F4F4F5] h-[166px] px-4 py-6">
            <Breadcrumb>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">
                        Home
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbPage />
            </Breadcrumb>
            <div className="text-3xl font-semibold my-2">
                Tentang Kami
            </div>
        </div>
        <div className="mx-auto max-w-4xl p-6">
            <figure className="w-full text-center py-8 flex flex-col items-center">
                <img src="/static/images/aboutus.png" alt="" className="h-[567px] w-auto m-auto rounded" />
                <figcaption className="mt-2 text-center text-gray-600">
                    adsfasfasdf afdsf asfd  asdfasfa sfa f a
                </figcaption>
            </figure>
            <div className="flex flex-col gap-[24px] my-16">
                <h2 className="font-semibold text-2xl">Siapakah GovTech?</h2>
                <div className="font-normal text-base leading-[26px]">
                    afadf asdf asdfasfa asfasf saf asf safas fasf asfasdfasf
                    11111 22222
                </div>

            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 my-12">
                <div className="p-6 border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                        <svg
                            className="w-6 h-6 text-orange-600"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </div>

                    <h3 className="mb-2 text-xl font-semibold text-gray-800">Misi Kami</h3>
                    <p className="text-gray-600">
                        Untuk memacu penggunaan digital dalam sektor awam, menjadikan perkhidmatan
                        kerajaan lebih cekap, mudah diakses dan mengutamakan rakyat.
                    </p>
                </div>


                <div className="p-6 border border-gray-200 rounded-lg shadow-sm">
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                        <svg
                            className="w-6 h-6 text-orange-600"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <circle cx="12" cy="12" r="3" />
                            <path d="M2.05 12a10 10 0 0 1 19.9 0" />
                        </svg>
                    </div>

                    <h3 className="mb-2 text-xl font-semibold text-gray-800">Visi Kami</h3>
                    <p className="text-gray-600">
                        Malaysia di mana teknologi menjadikan perkhidmatan kerajaan lancar, cekap
                        dan telus—memperkasakan kedua-dua rakyat dan kemajuan negara.
                    </p>
                </div>
            </div>

            <h3 className="mb-2 text-xl font-semibold text-gray-800">Nilai Kami</h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mb-12">
                <div className="p-6 border border-gray-200 rounded-lg shadow-sm flex flex-rows gap-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                        <svg
                            className="w-6 h-6 text-orange-600"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </div>
                    <div className="">
                        <h3 className="mb-2 text-xl font-semibold text-gray-800">Misi Kami</h3>
                        <p className="text-gray-600">
                            Untuk memacu penggunaan digital dalam sektor awam, menjadikan perkhidmatan
                            kerajaan lebih cekap, mudah diakses dan mengutamakan rakyat.
                        </p>
                    </div>
                </div>


                <div className="p-6 border border-gray-200 rounded-lg shadow-sm flex flex-rows gap-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                        <svg
                            className="w-6 h-6 text-orange-600"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </div>
                    <div className="">
                        <h3 className="mb-2 text-xl font-semibold text-gray-800">Misi Kami</h3>
                        <p className="text-gray-600">
                            Untuk memacu penggunaan digital dalam sektor awam, menjadikan perkhidmatan
                            kerajaan lebih cekap, mudah diakses dan mengutamakan rakyat.
                        </p>
                    </div>
                </div>
            </div>

            <section className="max-w-6xl mx-auto px-4 py-8">
                <h2 className="text-2xl font-semibold mb-2">Komuniti Kami</h2>
                <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                    veniam, quis nostrud exercitation ullamco laboris nisi ut.
                </p>
            </section>

            <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">

        <div className="flex flex-col items-start">
          <img
            src="/path-to-image1.png"
            alt="Komuniti GovTech"
            className="rounded-md border-2 border-orange-500"
          />

          <a
            href="#"
            className="mt-4 inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
          >
            Komuniti GovTech 
            <span className="ml-1">→</span>
          </a>
        </div>


        <div className="flex flex-col items-start">
          <img
            src="/path-to-image2.png"
            alt="GovTech Telegram"
            className="rounded-md border-2 border-orange-500"
          />
          <a
            href="#"
            className="mt-4 inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
          >
            GovTech Telegram
            <span className="ml-1">→</span>
          </a>
        </div>


        <div className="flex flex-col items-start">
          <img
            src="/path-to-image3.png"
            alt="Developer Kaki"
            className="rounded-md border-2 border-orange-500"
          />
          <a
            href="#"
            className="mt-4 inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
          >
            Developer Kaki
            <span className="ml-1">→</span>
          </a>
        </div>

      </div>
    </section>
            
        </div>
    </div>
  );
}
