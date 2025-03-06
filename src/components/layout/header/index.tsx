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

export default function Header() {
  const [showMenu, setMenu] = useState<boolean>(false);

  return (
    <Navbar
      showMenu={showMenu}
      background="lg:border-b-0 shadow-button grid grid-cols-4 gap-4.5 px-4.5 md:grid-cols-8 md:gap-6 md:px-6 lg:grid-cols-12 w-full mx-auto"
      className="col-span-full max-w-screen-xl"
    >
      <NavbarContainer>
        <BrandLogo imageSrc="/favicon-color.png">Govtech Malaysia</BrandLogo>

        <NavigationMenuCombo showMenu={showMenu} setMenu={setMenu}>
          <p>hello</p>
        </NavigationMenuCombo>
      </NavbarContainer>

      <NavbarActionGroup showMenu={showMenu} setMenu={setMenu}>
        <ThemeToggle />
        <LocaleSwitch />
      </NavbarActionGroup>
    </Navbar>
  );
}
