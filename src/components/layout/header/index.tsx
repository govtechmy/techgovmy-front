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

export default function Header() {
  const [showMenu, setMenu] = useState<boolean>(false);

  return (
    <Navbar showMenu={showMenu} background="dark:border-otl-gray-200" className="px-4">
      <NavbarContainer>
        <BrandLogo imageSrc="/favicon-color.png">Govtech Malaysia</BrandLogo>

        <NavigationMenuCombo showMenu={showMenu} setMenu={setMenu}>
          <p>hello</p>
        </NavigationMenuCombo>
      </NavbarContainer>

      <NavbarActionGroup showMenu={showMenu} setMenu={setMenu}>
        {/* <ThemeToggle /> */}
        {/* <LocaleSwitch /> */}
      </NavbarActionGroup>
    </Navbar>
  );
}
