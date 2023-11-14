import Container from "@components/Container";
import { useTranslation } from "@lib/hooks/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, ReactNode } from "react";
import SiteIcons from "../SiteIcons";
import Nav from "../Nav";
import ThemeToggle from "../Nav/theme";
import Dropdown from "../Dropdown";
import { useLanguage } from "@/lib/hooks/useLanguage";
import { languages } from "@/lib/constants";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const { t, i18n } = useTranslation(["common"]);
  const { language, onLanguageChange } = useLanguage();

  return (
    <div className="w-full">
      <Container
        background="bg-transparent dark:bg-transparent"
        className="flex items-center gap-4 py-12"
      >
        <div className="flex w-full justify-between items-center gap-4 relative">
          <Link href="/">
            <SiteIcons />
          </Link>

          <Nav>
            {close => (
              <>
                <Nav.Item
                  title={t("common:nav.about_us")}
                  link="/about-us"
                  key="/about-us"
                  onClick={close}
                />
                <Nav.Item
                  title={t("common:nav.our_work")}
                  key="/our-work"
                  link="/our-work"
                  onClick={close}
                />
                <Nav.Item
                  title={t("common:nav.join_us")}
                  key="/join-us"
                  link="/join-us"
                  onClick={close}
                />
                <Nav.Item
                  title={t("common:nav.contact_us")}
                  key="/contact-us"
                  link="/contact-us"
                  onClick={close}
                />
              </>
            )}
          </Nav>

          <div className="hidden w-fit gap-4 lg:flex">
            <ThemeToggle />
            <Dropdown
              width="w-fit"
              selected={languages.find(lang => lang.value === language)}
              onChange={onLanguageChange}
              options={languages}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
