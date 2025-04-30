"use client";

import { Link } from "@/lib/i18n/routing";
import { Button, ButtonIcon } from "@govtechmy/myds-react/button";
import { ArrowForwardIcon } from "@govtechmy/myds-react/icon";
import Image from "next/image";

export default function ProductList() {
  const products = [
    {
      name: "Kementerian Digital Portal",
      description:
        "This portal is developed as the official website of the Ministry of Digital for reference, information, and official communication",
      slug: "kd-portal",
      launch_date: "7 August 2024",
      status: "Active",
      url: "www.digital.gov.my",
      image: "/static/product-carousel/image-slider.png",
    },
    {
      name: "GoGov",
      description:
        "This portal is developed as the official website of the Ministry of Digital for reference, information, and official communication",
      slug: "gogov",
      launch_date: "18 August 2024",
      status: "Active",
      url: "www.myds.vercel.app",
      image: "/static/product-carousel/image-slider.png",
    },
    {
      name: "MyDS",
      description:
        "The standard design system ensures that all government websites maintain a consistent, clean, and well-designed appearance, enhancing the usability, accessibility, and overall digital presence of Malaysia's government services",
      slug: "myds",
      launch_date: "18 August 2024",
      status: "Active",
      url: "www.myds.vercel.app",
      image: "/static/product-carousel/image-slider.png",
    },

    {
      name: "Parlimen Hansard",
      description:
        "The mission of this portal is simple: To provide you with an easy and engaging way to explore what is being said and done in Parliament",
      slug: "parlimen-hansard",
      launch_date: undefined,
      status: "In Development",
      url: "www.myds.vercel.app",
      image: "/static/product-carousel/image-slider.png",
    },
    {
      name: "Sekolahku",
      description:
        "Sekolahku is the Official School Portal of Malaysia for searching and evaluating school data and statistics",
      slug: "sekolahku",
      launch_date: undefined,
      status: "In Development",
      url: "www.myds.vercel.app",
      image: "/static/product-carousel/image-slider.png",
    },
    {
      name: "DirektoriGovMy",
      description:
        "The Official Government Directory Portal for finding civil servants, policies, and public office addresses",
      slug: "directory-gov-my",
      launch_date: undefined,
      status: "Active",
      url: "www.myds.vercel.app",
      image: "/static/product-carousel/image-slider.png",
    },
    {
      name: "SiaranGovMy",
      description:
        "The leading news source for the latest and verified government press releases and announcements for Malaysians",
      slug: "siaran-gov-my",
      launch_date: undefined,
      status: "Active",
      url: "www.myds.vercel.app",
      image: "/static/product-carousel/image-slider.png",
    },
  ];

  return (
    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
      {products.map((product, index) => (
        <div key={`${product.slug}-${index}`} className="flex w-full flex-col gap-6">
          <div className="relative h-[217.4px] w-full overflow-hidden rounded-lg border border-otl-gray-200 md:h-[178.8px] md:w-[288px] lg:h-[155.3px] lg:w-[250px] xl:h-[200px] xl:w-[322px]">
            <Image alt={product.name} src={product.image} fill={true} className="absolute" />
          </div>

          <div className="flex grow flex-col gap-2">
            <h6 className="text-body-xl font-semibold">{product.name}</h6>
            <p className="line-clamp-3 text-body-md text-txt-black-500">{product.description}</p>

            <div className="flex-1 content-end pt-3">
              <Link href={product.slug}>
                <Button
                  className="border-bg-black-900 bg-bg-black-800 hover:bg-bg-black-800/80"
                  size={"small"}
                >
                  More Details
                  <ButtonIcon>
                    <ArrowForwardIcon />
                  </ButtonIcon>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
