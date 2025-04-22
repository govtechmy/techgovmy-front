"use client";

import { Navbar, NavbarMenu, NavbarMenuItem, NavbarAction } from "@govtechmy/myds-react/navbar";
import ThemeToggle from "./theme-toggle";
import LocaleSwitch from "./locale-switch";
import { Suspense } from "react";
import { Link } from "@/lib/i18n/routing";
import Image from "next/image";

export default function Header() {
  const nav_items: Array<{ name: string; href: string }> = [
    {
      name: "Tentang Kami",
      href: "/about-us",
    },
    {
      name: "Produk",
      href: "/products",
    },
    {
      name: "Contact Us",
      href: "/contact-us",
    },
  ];

  return (
    <Navbar className="">
      <Link href={"/"}>
        <Image
          src="/static/images/icons/img-logo-govtech.svg"
          alt="Govtech Logo"
          width={91}
          height={32}
          className="aspect-auto select-none object-contain"
        />
      </Link>
      <NavbarMenu>
        {nav_items.map((nav) => (
          <NavbarMenuItem key={nav.href} href={nav.href} asChild>
            <Link href={nav.href}>{nav.name}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      <NavbarAction>
        <Suspense>
          {/* <ThemeToggle /> */}
          <LocaleSwitch />
        </Suspense>
      </NavbarAction>
    </Navbar>
  );
}
