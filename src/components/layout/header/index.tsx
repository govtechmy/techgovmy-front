"use client";

import {
  BrandLogo,
  Navbar,
  NavbarActionGroup,
  NavbarContainer,
  NavigationMenuCombo,
  NavItemsMenu,
} from "@govtechmy/myds-react/navbar";
import { useState } from "react";
import ThemeToggle from "./theme-toggle";
import LocaleSwitch from "./locale-switch";
import { usePathname } from "@/lib/i18n/routing";

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
    // Hide this page.
    // {
    //   name: t("Nav.Header.maintenance"),
    //   href: "/maintenance",
    // },
  ];

  return (
    <Navbar
      showMenu={showMenu}
      background="lg:border-b-0 shadow-button grid grid-cols-4 gap-4.5 px-4.5 md:grid-cols-8 md:gap-6 md:px-6 lg:grid-cols-12 w-full mx-auto"
      className="col-span-full max-w-screen-xl"
    >
      <NavbarContainer>
        <BrandLogo imageSrc="/favicon-color.png">Govtech Malaysia</BrandLogo>

        <NavigationMenuCombo showMenu={showMenu} setMenu={setMenu}>
          {nav_items.map((nav) => (
            <NavItemsMenu key={nav.href} href={nav.href} active={active(nav.href)}>
              {nav.name}
            </NavItemsMenu>
          ))}
        </NavigationMenuCombo>
      </NavbarContainer>

      <NavbarActionGroup showMenu={showMenu} setMenu={setMenu}>
        <ThemeToggle />
        <LocaleSwitch />
      </NavbarActionGroup>
    </Navbar>
  );
}
