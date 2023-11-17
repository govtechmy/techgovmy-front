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
      <div className="flex w-full flex-col items-center gap-8">
        {/* LOGO */}
        <div className="flex gap-2 items-center">
          <div className="w-12">
            <Image src="/static/images/jata_logo.png" width={48} height={36} alt="jata negara" />
          </div>

          <p className="font-bold uppercase">{t("common:nav.gov")}</p>
        </div>

        {/* NAV */}
        <div className="flex flex-col gap-4.5">
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 justify-center">
            <p className="font-medium">{t("common:nav.open_source")}:</p>
            <At className="link-dim" external href="https://github.com/data-gov-my/datagovmy-front">
              {t("common:nav.frontend")}
            </At>
            <At
              className="link-dim"
              external
              href="https://www.figma.com/file/6iNojR8hO5bWvH0c3rvGD4"
            >
              {t("common:nav.uiux")}
            </At>
          </div>

          <div className="flex flex-col md:flex-row gap-3 items-center justify-center md:gap-6">
            <At className="link-dim" external href="https://github.com/data-gov-my/datagovmy-front">
              {t("common:nav.about_us")}
            </At>
            <At className="link-dim" external href="https://github.com/data-gov-my/datagovmy-front">
              {t("common:nav.our_work")}
            </At>
            <At className="link-dim" external href="https://github.com/data-gov-my/datagovmy-front">
              {t("common:nav.contact_us")}
            </At>
            <At className="link-dim" external href="https://github.com/data-gov-my/datagovmy-front">
              {t("common:nav.join_us")}
            </At>
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
