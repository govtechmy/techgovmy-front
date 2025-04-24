import { Link } from "@/lib/i18n/routing";
import { cn } from "@/lib/utils";
import { Homepage } from "@/payload-types";
import { Button, ButtonIcon } from "@govtechmy/myds-react/button";
import { ArrowForwardIcon } from "@govtechmy/myds-react/icon";
import Image from "next/image";

export const StatisticsSection = ({
  statistics,
}: {
  statistics: Homepage["statistics-section"];
}) => {
  return (
    <div className="lg:px-[109px]">
      <div className="relative flex h-[691px] w-full flex-col gap-8 rounded-xl bg-gradient-to-r from-[#F8FBFF] to-[#C5D9F4] p-8 md:h-[700px] lg:h-full xl:flex-row">
        <div className="z-10 space-y-8 lg:w-[596px]">
          <div className="w-full space-y-4.5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-txt-govtech-600">
              {statistics.headline}
            </p>
            <h2 className="font-heading text-heading-sm font-semibold">{statistics.title}</h2>
            <p className="text-body-md text-txt-black-500">{statistics.description}</p>
          </div>

          <div className="flex w-full flex-wrap items-start gap-6 md:flex-nowrap">
            <div className="flex-1 space-y-3">
              <p className="text-heading-lg font-semibold text-txt-govtech-600">9</p>
              <p className="text-body-md font-medium text-txt-black-500">Projek Keseluruhan</p>
            </div>
            <div className="flex-1 space-y-3">
              <p className="text-heading-lg font-semibold text-txt-govtech-600">3</p>
              <p className="text-body-md font-medium text-txt-black-500">Siap Dibangunkan</p>
            </div>
            <div className="flex-1 space-y-3">
              <p className="text-heading-lg font-semibold text-txt-govtech-600">6</p>
              <p className="text-body-md font-medium text-txt-black-500">Dalam Pembangunan</p>
            </div>
          </div>
        </div>
        <Image
          alt="Image Statistic Desktop"
          src={"/static/images/home/img-bg-statistik-desktop.svg"}
          className="absolute bottom-0 left-0 hidden lg:block lg:opacity-50 xl:opacity-100"
          width={1062}
          height={370}
        />
        <Image
          alt="Image Statistic Tablet"
          src={"/static/images/home/img-bg-statistik-tablet.svg"}
          width={600}
          height={700}
          className="absolute bottom-0 left-0 hidden md:block lg:hidden"
        />
        <Image
          alt="Image Statistic Mobile"
          src={"/static/images/home/img-bg-statistik-mobile.svg"}
          width={394}
          height={691}
          className="absolute bottom-0 left-0 block md:hidden"
        />
      </div>
    </div>
  );
};

export const PagesSection = ({ _pages }: { _pages: Homepage["pages-section"] }) => {
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

  if (!_pages) {
    return null;
  }

  return (
    <div className="flex flex-col gap-12 lg:px-[109px]">
      <div className="flex flex-col gap-12 lg:flex-row">
        {_pages.list &&
          _pages.list?.length > 0 &&
          _pages.list!.map((page, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col items-center gap-6 md:flex-row md:items-start lg:max-w-[322px] lg:flex-col",
              )}
            >
              <div className="relative h-[245px] w-full overflow-hidden rounded-lg border border-gray-200 md:h-[130px] md:w-[208px] lg:h-[200px] lg:w-[321px]">
                <Image
                  alt={page.title}
                  src={(typeof page.image !== "string" && page.image.url) || ""}
                  className="absolute"
                  fill={true}
                />
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-txt-govtech-600">
                  {page.headline}
                </p>

                <p className="flex items-center gap-2 text-body-xl font-semibold">{page.title}</p>

                <p className="text-body-md text-txt-black-500">{page.description}</p>

                {page.link && page.link.reference !== "null" && (
                  <div className="pt-2.5">
                    <Link href={page.link.url || ""}>
                      <Button
                        className="border-bg-black-900 bg-bg-black-800 hover:bg-bg-black-800/80"
                        size={"small"}
                      >
                        {page.link?.label}

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
