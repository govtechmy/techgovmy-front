import Image from "next/image";
import { useTranslation } from "next-i18next";
import Container from "../../components/Container";
import { FunctionComponent, ReactNode } from "react";
import At from "../At";

interface FooterProps {
  title?: ReactNode;
  children?: ReactNode;
}

const Footer: FunctionComponent<FooterProps> = ({ title, children }) => {
  const { t } = useTranslation();

  return (
    <Container background="bg-background dark:bg-black border-t dark:border-washed-dark border-outline pt-12 pb-16 z-10">
      <div className="flex flex-col gap-6">
        <div className="flex w-full flex-col md:flex-row justify-between gap-8">
          {/* LOGO */}
          <div className="flex gap-x-2.5 h-fit items-center">
            <Image
              src="/static/images/jata_logo.png"
              width={28}
              height={28}
              className="select-none items-center"
              alt="jata negara"
            />

            <p className="whitespace-nowrap font-poppins font-semibold uppercase">
              {t("common:nav.kd")}
            </p>
          </div>

          {/* NAV */}
          <div className="flex flex-col md:flex-row gap-6 text-sm">
            <div className="flex flex-col gap-3">
              <p className="font-medium">{t("common:nav.about")}</p>
              <At className="link-dim" href="/">
                {t("common:nav.about")}
              </At>
              <At className="link-dim" href="/our-work">
                {t("common:nav.our_work")}
              </At>
              <At className="link-dim" href="/join-us">
                {t("common:nav.join_us")}
              </At>
              <At className="link-dim" href="contact-us">
                {t("common:nav.contact_us")}
              </At>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-medium">{t("common:nav.open_source")}</p>
              <At
                className="link-dim"
                external
                href="https://github.com/govtech-malaysia/techgovmy-front"
              >
                {t("common:nav.frontend")}
              </At>
              <At
                className="link-dim"
                external
                href="https://www.figma.com/file/VUDZ7IbrRLoTssGwSIwFDL"
              >
                {t("common:nav.uiux")}
              </At>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-outline dark:bg-washed-dark" />

        <p className="text-dim text-sm">
          © {new Date().getFullYear()} {t("common:nav.gov")}
        </p>
      </div>
    </Container>
  );
};

export default Footer;
