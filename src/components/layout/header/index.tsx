"use client";

import { Navbar, NavbarMenu, NavbarMenuItem, NavbarAction } from "@govtechmy/myds-react/navbar";
import ThemeToggle from "./theme-toggle";
import LocaleSwitch from "./locale-switch";
import { Suspense } from "react";
import { Link } from "@/lib/i18n/routing";
import Image from "next/image";
import { Navbar as NavbarType } from "@/payload-types";

export default function Header({ headerData }: { headerData: NavbarType }) {
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
        {headerData["navbar-items"].map((nav) => (
          <NavbarMenuItem key={nav.id} href={nav.link.reference || nav.link.url || "/"} asChild>
            <Link
              target={nav.link.newTab ? "_blank" : "_self"}
              href={nav.link.reference || nav.link.url || "/"}
            >
              {nav.link.label}
            </Link>
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
