import Container from "@components/Container";
import { useTranslation } from "@lib/hooks/useTranslation";
import Link from "next/link";
import { FunctionComponent } from "react";
import SiteIcons from "../SiteIcons";
import Nav from "../Nav";
import ThemeToggle from "../Nav/theme";
import Dropdown from "../Dropdown";
import { useLanguage } from "@/lib/hooks/useLanguage";
import { languages } from "@/lib/constants";
import { clx } from "@/lib/helper";

interface HeaderProps {
  isFixedHeader: boolean;
}

const Header: FunctionComponent<HeaderProps> = ({ isFixedHeader }) => {
  const { t } = useTranslation(["common"]);
  const { language, onLanguageChange } = useLanguage();

  return (
    <div className={clx("w-full", isFixedHeader ? "fixed left-0 top-0" : "block")}>
      <Container
        background={clx(
          "bg-white bg-opacity-0 dark:bg-transparent transition-all duration-700",
          isFixedHeader && "bg-opacity-100 dark:bg-black"
        )}
        className={clx(
          "flex items-end gap-4 h-[106px] max-w-screen-2xl",
          isFixedHeader && "pt-1 h-[50px] items-center"
        )}
      >
        <div
          className={clx(
            "flex w-full justify-between items-center gap-4 relative",
            isFixedHeader && "h-full"
          )}
        >
          <Link href="/">
            <SiteIcons height={isFixedHeader ? 32 : 36} />
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
