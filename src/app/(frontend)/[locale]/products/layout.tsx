import { ReactNode } from "react";
import ProductProvider from "./context";

export default function ProductPageLayout({
  children,
  sidebar,
}: {
  children: ReactNode;
  sidebar: ReactNode;
}) {
  const sidebarContent = {
    Active: [
      {
        name: "GoGov",
        slug: "gogov",
        launch_date: "18 August 2024",
        status: "Active",
        url: "www.myds.vercel.app",
        icon: "/favicon-color.png",
      },
      {
        name: "MyDS",
        slug: "myds",
        launch_date: "18 August 2024",
        status: "Active",
        url: "www.myds.vercel.app",
        icon: "/favicon-color.png",
      },
    ],
    "In Development": [
      {
        name: "Parlimen Hansard",
        slug: "parlimen-hansard",
        launch_date: undefined,
        status: "In Development",
        url: "www.myds.vercel.app",
        icon: "/favicon-color.png",
      },
      {
        name: "Sekolahku",
        slug: "sekolahku",
        launch_date: undefined,
        status: "In Development",
        url: "www.myds.vercel.app",
        icon: "/favicon-color.png",
      },
      {
        name: "GoGov",
        slug: "gogov",
        launch_date: undefined,
        status: "Active",
        url: "www.myds.vercel.app",
        icon: "/favicon-color.png",
      },
      {
        name: "MyDS",
        slug: "myds",
        launch_date: undefined,
        status: "Active",
        url: "www.myds.vercel.app",
        icon: "/favicon-color.png",
      },
      {
        name: "Sekolahku",
        slug: "sekolahku",
        launch_date: undefined,
        status: "In Development",
        url: "www.myds.vercel.app",
        icon: "/favicon-color.png",
      },
      {
        name: "GoGov",
        slug: "gogov",
        launch_date: undefined,
        status: "Active",
        url: "www.myds.vercel.app",
        icon: "/favicon-color.png",
      },
      {
        name: "MyDS",
        slug: "myds",
        launch_date: undefined,
        status: "Active",
        url: "www.myds.vercel.app",
        icon: "/favicon-color.png",
      },
    ],
    Maintenance: [
      {
        name: "Kementerian Digital Portal",
        slug: "kd-portal",
        launch_date: "7 August 2024",
        status: "Active",
        url: "www.digital.gov.my",
        icon: "/favicon-color.png",
      },
    ],
  };
  return (
    <ProductProvider data={sidebarContent}>
      <div className="flex-1 flex max-w-screen-xl mx-auto w-full h-full">
        {sidebar}
        {children}
      </div>
    </ProductProvider>
  );
}
