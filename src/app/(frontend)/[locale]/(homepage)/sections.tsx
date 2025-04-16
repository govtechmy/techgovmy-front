import { Link } from "@/lib/i18n/routing";
import { cn } from "@/lib/utils";
import { Button, ButtonIcon } from "@govtechmy/myds-react/button";
import { ArrowForwardIcon } from "@govtechmy/myds-react/icon";
import Image from "next/image";
import { FC, ReactNode } from "react";

export const StatisticsSection = () => {
  return (
    <div className="lg:px-[109px]">
      <div className="w-full bg-gradient-to-r from-[#F8FBFF] to-[#C5D9F4] relative rounded-xl p-8 gap-8 flex xl:flex-row flex-col h-[691px] md:h-[700px] lg:h-full">
        <div className="lg:w-[596px] space-y-8 z-10">
          <div className="space-y-4.5 w-full">
            <p className="text-txt-govtech-600 text-sm tracking-[0.2em] font-semibold uppercase">
              Statistik
            </p>
            <h2 className="font-heading text-heading-sm font-semibold">
              Masa Depan Digital Malaysia, Selangkah Kehadapan
            </h2>
            <p className="text-txt-black-500 text-body-md">
              Seiring dengan perkembangan kami, orang ramai boleh mengikuti kemajuan yang membentuk
              transformasi digital kami.
            </p>
          </div>

          <div className="flex items-start flex-wrap md:flex-nowrap gap-6 w-full">
            <div className="space-y-3 flex-1">
              <p className="text-heading-lg text-txt-govtech-600 font-semibold">9</p>
              <p className="text-txt-black-500 text-body-md font-medium">Projek Keseluruhan</p>
            </div>
            <div className="space-y-3 flex-1">
              <p className="text-heading-lg text-txt-govtech-600 font-semibold">3</p>
              <p className="text-txt-black-500 text-body-md font-medium">Siap Dibangunkan</p>
            </div>
            <div className="space-y-3 flex-1">
              <p className="text-heading-lg text-txt-govtech-600 font-semibold">6</p>
              <p className="text-txt-black-500 text-body-md font-medium">Dalam Pembangunan</p>
            </div>
          </div>
        </div>
        <Image
          alt="Image Statistic Desktop"
          src={"/static/images/home/img-bg-statistik-desktop.svg"}
          className="lg:block hidden absolute bottom-0 left-0 lg:opacity-50 xl:opacity-100"
          width={1062}
          height={370}
        />
        <Image
          alt="Image Statistic Tablet"
          src={"/static/images/home/img-bg-statistik-tablet.svg"}
          width={600}
          height={700}
          className="hidden md:block lg:hidden absolute bottom-0 left-0"
        />
        <Image
          alt="Image Statistic Mobile"
          src={"/static/images/home/img-bg-statistik-mobile.svg"}
          width={394}
          height={691}
          className="block md:hidden absolute bottom-0 left-0"
        />
      </div>
    </div>
  );
};

export const PagesSection = () => {
  const pages = [
    {
      headline: "Siapa Kami",
      title: "Government Technology Malaysia (GovTech)",
      description:
        "GovTech Malaysia ialah pasukan dalaman yang menumpukan pada peningkatan perkhidmatan digital dalam sektor awam.",
      img_url: "./static/images/home/gtm-our-products.svg",
      route: { href: "/about-us", label: "Tentang GovTech" },
    },
    {
      headline: "Usaha Kami",
      title: "Teknologi untuk Kebaikan Rakyat",
      description:
        "Kami mengembangkan idea-idea baru untuk menyelesaikan cabaran awam melalui teknologi digital.",
      img_url: "./static/images/home/gtm-join-us.svg",
      route: { href: "/products", label: "Kenali Produk Kami" },
    },
    {
      headline: "Penyelesaian Berimpak",
      title: "Memperkasa Rakyat",
      description:
        "Penyelesaian kami menjadikan perkhidmatan kerajaan lebih mudah diakses, efisien, dan mesra pengguna untuk semua.",
      img_url: "./static/images/home/gtm-our-community.svg",
      route: null,
    },
  ];

  return (
    <div className="flex flex-col gap-12 lg:px-[109px]">
      <div className="flex gap-12 lg:flex-row flex-col">
        {pages.map((page, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col md:flex-row items-center md:items-start lg:flex-col gap-6",
            )}
          >
            <div className="relative w-full h-[245px] md:w-[208px] md:h-[130px] lg:w-[321px] lg:h-[200px] overflow-hidden rounded-lg border border-gray-200">
              <Image alt={page.title} src={page.img_url} className="absolute" fill={true} />
            </div>
            <div className="space-y-2 flex-1">
              <p className="text-xs font-semibold tracking-[0.2em] text-txt-govtech-600 uppercase">
                {page.headline}
              </p>

              <p className="text-body-xl font-semibold flex items-center gap-2">{page.title}</p>

              <p className="text-body-md text-txt-black-500">{page.description}</p>

              {page.route && (
                <div className="pt-2.5">
                  <Link href={page.route.href}>
                    <Button
                      className="bg-bg-black-800 border-bg-black-900 hover:bg-bg-black-800/80"
                      size={"small"}
                    >
                      {page.route?.label}

                      <ButtonIcon>
                        <ArrowForwardIcon />
                      </ButtonIcon>
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
