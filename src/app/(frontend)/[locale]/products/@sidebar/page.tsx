import { Link } from "@/lib/i18n/routing";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC, Fragment } from "react";

interface ProductPageSidebarProps {}

const ProductPageSidebar: FC<ProductPageSidebarProps> = ({}) => {
  const sidebar = {
    Active: [
      {
        name: "GoGov",
        status: "Active",
        url: "www.myds.vercel.app",
        icon: "/favicon-color.png",
      },
      {
        name: "MyDS",
        status: "Active",
        url: "www.myds.vercel.app",
        icon: "/favicon-color.png",
      },
    ],
    "In Development": [
      {
        name: "Parlimen Hansard",
        status: "In Development",
        url: "www.myds.vercel.app",
        icon: "/favicon-color.png",
      },
      {
        name: "Sekolahku",
        status: "In Development",
        url: "www.myds.vercel.app",
        icon: "/favicon-color.png",
      },
      {
        name: "GoGov",
        status: "Active",
        url: "www.myds.vercel.app",
        icon: "/favicon-color.png",
      },
      {
        name: "MyDS",
        status: "Active",
        url: "www.myds.vercel.app",
        icon: "/favicon-color.png",
      },
    ],
    Maintenance: [
      {
        name: "Kementerian Digital Portal",
        status: "Active",
        url: "www.digital.gov.my",
        icon: "/favicon-color.png",
      },
    ],
  };

  return (
    <div className="w-full lg:w-[300px] lg:min-h-fit flex flex-col gap-3 sticky max-h-full overflow-scroll pb-12 hide-scrollbar">
      {Object.entries(sidebar).map(([type, content], index) => (
        <Fragment key={index}>
          <p className="pt-8 pb-1 gap-4.5 text-body-xl font-semibold">{type}</p>
          {content.map((ct, idx2) => {
            const content = (
              <div
                className={cn(
                  "p-3 gap-4 border border-otl-gray-200 rounded-md bg-bg-dialog flex items-center",
                  type === "In Development" && "grayscale",
                )}
              >
                <div className="relative flex w-12 h-12 items-center justify-center bg-bg-dialog-active border border-otl-gray-200 rounded-xs shadow-card">
                  <Image alt={ct.name} src={ct.icon} width={32} height={32} className="absolute" />
                </div>
                <div>
                  <p className="text-body-md font-semibold">{ct.name}</p>
                  <p className="text-bg-black-500">{ct.url}</p>
                </div>
              </div>
            );

            if (type === "In Development") {
              return <Fragment key={`${ct.name}-${idx2}`}>{content}</Fragment>;
            }

            return (
              <Link key={`${ct.name}-${idx2}`} href={"/products"}>
                {content}
              </Link>
            );
          })}
        </Fragment>
      ))}
    </div>
  );
};

export default ProductPageSidebar;
