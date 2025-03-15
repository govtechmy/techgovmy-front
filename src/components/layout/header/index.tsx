"use client";

import {
  Navbar,
  NavbarLogo,
  NavbarMenu,
  NavbarMenuItem,
  NavbarAction,
} from "@govtechmy/myds-react/navbar";
import ThemeToggle from "./theme-toggle";
import LocaleSwitch from "./locale-switch";
import { Suspense } from "react";

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
        <Suspense>
          <ThemeToggle />
          <LocaleSwitch />
        </Suspense>
      </NavbarAction>
    </Navbar>
  );
}
