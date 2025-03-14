"use client";

import {
  Navbar,
  NavbarLogo,
  NavbarMenu,
  NavbarMenuItem,
  NavbarAction,
} from "@govtechmy/myds-react/navbar";
import { useState } from "react";
import ThemeToggle from "./theme-toggle";
import LocaleSwitch from "./locale-switch";
import { Link, usePathname } from "@/lib/i18n/routing";

export default function Header() {
  const pathname = usePathname();
  const [showMenu, setMenu] = useState<boolean>(false);

  const active = (href: string) =>
    pathname === href && pathname === "/" ? true : `/${pathname.split("/")[1]}` === href;

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
      <NavbarLogo src="/favicon-color.png" alt="Govtech Logo">
        Govtech Malaysia
      </NavbarLogo>
      <NavbarMenu>
        {nav_items.map((nav) => (
          <NavbarMenuItem key={nav.href} href={nav.href}>
            {nav.name}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>

      <NavbarAction>
        <ThemeToggle />
        <LocaleSwitch />
      </NavbarAction>
    </Navbar>
  );
}
