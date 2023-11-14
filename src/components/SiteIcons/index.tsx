import { useTranslation } from "@/lib/hooks/useTranslation";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FunctionComponent } from "react";

type SiteIconsProps = {};

const SiteIcons: FunctionComponent<SiteIconsProps> = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();

  if (theme === "dark") {
    return (
      <div className="flex items-center gap-1.5 tracking-[3px]">
        <>
          <div className="w-[42px] h-[36px]">
            <Image
              src={"/static/images/icons/tiger-dark.png"}
              alt="GovTech Icon Dark"
              width={42}
              height={36}
            />
          </div>

          <div className="uppercase">
            {i18n.language === "en-GB" && (
              <>
                <p className="font-bold leading-tight text-lg dark:text-white">
                  GOV<span className="font-medium">TECH</span>
                </p>
                <p className="font-semibold text-xs text-orange">Solutions</p>
              </>
            )}
            {i18n.language === "ms-MY" && (
              <>
                <p className="font-semibold text-xs text-orange">Peneraju</p>
                <p className="font-bold leading-tight text-lg">
                  GOV<span className="font-medium">TECH</span>
                </p>
              </>
            )}
          </div>
        </>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5 tracking-[3px]">
      <>
        <div className="w-[42px] h-[36px]">
          <Image
            src={"/static/images/icons/tiger-white.png"}
            alt="GovTech Icon"
            width={42}
            height={36}
          />
        </div>
        <div className="uppercase">
          {i18n.language === "en-GB" && (
            <>
              <p className="font-bold leading-tight text-lg">
                GOV<span className="font-medium">TECH</span>
              </p>
              <p className="font-semibold text-xs text-dim">Solutions</p>
            </>
          )}
          {i18n.language === "ms-MY" && (
            <>
              <p className="font-semibold text-xs text-dim">Peneraju</p>
              <p className="font-bold leading-tight text-lg">
                GOV<span className="font-medium">TECH</span>
              </p>
            </>
          )}
        </div>
      </>
    </div>
  );
};

export default SiteIcons;
