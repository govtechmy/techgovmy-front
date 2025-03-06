import { Link } from "@/lib/i18n/routing";
import { cn } from "@/lib/utils";
import { Button, ButtonIcon } from "@govtechmy/myds-react/button";
import { ArrowForwardIcon } from "@govtechmy/myds-react/icon";
import Image from "next/image";
import { FC, ReactNode } from "react";

export const StatisticsSection = () => {
  return (
    <div className="flex flex-col gap-12 px-[109px]">
      <div className="flex flex-col gap-4.5">
        <p className="text-txt-govtech-600 tracking-[0.2em] font-semibold uppercase">Statistik</p>
        <h2 className="font-heading text-heading-sm font-semibold">
          Masa Depan Digital Malaysia, Selangkah Kehadapan
        </h2>
        <p className="text-txt-black-500 text-body-md">
          Seiring dengan perkembangan kami, orang ramai boleh mengikuti kemajuan yang membentuk
          transformasi digital kami.
        </p>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex flex-col gap-3 lg:w-[247.5px]">
          <p className="text-heading-lg text-txt-govtech-600">1</p>
          <p className="text-txt-black-500 text-body-md font-medium">Projek Dilancarkan</p>
        </div>
        <div className="flex flex-col gap-3 lg:w-[247.5px]">
          <p className="text-heading-lg text-txt-govtech-600">9</p>
          <p className="text-txt-black-500 text-body-md font-medium"> Projek Dalam Pembangunan</p>
        </div>
        <div className="flex flex-col gap-3 lg:w-[247.5px]">
          <p className="text-heading-lg text-txt-govtech-600">15</p>
          <p className="text-txt-black-500 text-body-md font-medium">Ahli Pasukan</p>
        </div>
      </div>
    </div>
  );
};

interface AboutGovtechSectionProps {
  reverse_row?: boolean;
  image_url: string;
  title: string;
  description: string;
  category: string;
  action: ReactNode;
}

export const AboutGovtechSection: FC<AboutGovtechSectionProps> = ({
  reverse_row,
  image_url,
  action,
  category,
  description,
  title,
}) => {
  return (
    <div
      className={cn(
        "flex gap-[133px] items-center w-full lg:h-[400px] px-[109px]",
        reverse_row ? "flex-row-reverse" : "flex-row",
      )}
    >
      <div className="lg:w-[410px] h-fit flex flex-col justify-center gap-4.5">
        <p className="text-txt-govtech-600 tracking-[0.2em] font-semibold uppercase">{category}</p>
        <h2 className="font-heading text-heading-sm font-semibold">{title}</h2>
        <p className="text-txt-black-500 text-body-md">{description}</p>
        <div className="pt-3">{action}</div>
      </div>
      <div className="relative flex items-center flex-1 h-[519px]">
        <Image src={image_url} alt={`${category}-${title}`} fill={true} className="absolute" />
      </div>
    </div>
  );
};

export const PagesSection = () => {
  const pages = [
    {
      title: "Produk Kami",
      description: "Kenali produk digital yang telah kami hasilkan untuk rakyat dan pegawai awam.",
      img_url: "./theme/gtm-our-products.svg",
      blur: false,
    },
    {
      title: "Sertai Pasukan Kami",
      description: "Bina produk dan perkhidmatan digital yang beri impak untuk Malaysia!",
      img_url: "./theme/gtm-join-us.svg",
      blur: false,
    },
    {
      title: "Komuniti GovTech",
      description:
        "Sertai komuniti developer, peminat teknologi dan pegawai awam dalam memacu transformasi digital.",
      img_url: "./theme/gtm-our-community.svg",
      blur: true,
    },
  ];

  return (
    <div className="flex flex-col gap-12 px-[109px]">
      <h2 className="text-heading-sm font-semibold">Selesaikan masalah rakyat dan pegawai awam</h2>
      <div className="flex gap-12">
        {pages.map((page, index) => (
          <div key={index} className={cn("flex flex-col gap-6", page.blur && "opacity-20")}>
            <div className="relative w-[322px] h-[200px] overflow-hidden rounded-lg border border-gray-200">
              <Image alt={page.title} src={page.img_url} className="absolute" fill={true} />
            </div>
            <div className="space-y-2">
              <Link href={"/"}>
                <p className="text-body-xl font-semibold flex items-center gap-2">
                  {page.title} <ArrowForwardIcon className="w-5 h-5" />
                </p>
              </Link>
              <p className="text-body-md text-txt-black-500">{page.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const NewsSection = () => {
  const pages = [
    {
      title: "Produk Kami",
      description: "Kenali produk digital yang telah kami hasilkan untuk rakyat dan pegawai awam.",
      img_url: "./theme/gtm-our-products.svg",
    },
    {
      title: "Sertai Pasukan Kami",
      description: "Bina produk dan perkhidmatan digital yang beri impak untuk Malaysia!",
      img_url: "./theme/gtm-join-us.svg",
    },
    {
      title: "Komuniti GovTech",
      description:
        "Sertai komuniti developer, peminat teknologi dan pegawai awam dalam memacu transformasi digital.",
      img_url: "./theme/gtm-our-community.svg",
    },
    {
      title: "Komuniti GovTech",
      description:
        "Sertai komuniti developer, peminat teknologi dan pegawai awam dalam memacu transformasi digital.",
      img_url: "./theme/gtm-our-community.svg",
    },
  ];

  return (
    <div className="flex flex-col gap-12 px-[109px]">
      <h2 className="text-heading-sm font-semibold">Berita Govtech</h2>
      <div className="flex gap-6">
        {pages.map((page, index) => (
          <div
            key={index}
            className={cn(
              "flex flex-col h-full gap-4.5 border border-gray-200 bg-bg-dialog p-3 rounded-lg",
            )}
          >
            <div className="relative w-[223.5px] h-[115.6px] overflow-hidden rounded-sm">
              <Image
                alt={page.title}
                src={page.img_url}
                className="absolute object-cover"
                fill={true}
              />
            </div>
            <div className="space-y-2 h-[116px] px-3">
              <p className="font-semibold">{page.title}</p>
              <p className="text-body-md text-txt-black-500 line-clamp-3">{page.description}</p>
            </div>
            <p className="text-gray-500 px-3 pb-2">6 March 2025</p>
          </div>
        ))}
      </div>
      <Button className="h-10 bg-bg-black-800 border-bg-black-900" size={"medium"}>
        Semua Berita
        <ButtonIcon>
          <ArrowForwardIcon />
        </ButtonIcon>
      </Button>
    </div>
  );
};
