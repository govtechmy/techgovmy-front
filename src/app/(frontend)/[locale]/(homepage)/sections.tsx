"use client";
import { cn } from "@/lib/utils";
import { Button } from "@govtechmy/myds-react/button";
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
