import { clx } from "@/lib/helper";
import useScrollPosition from "@/lib/hooks/useScrollPosition";
import { useTranslation } from "@/lib/hooks/useTranslation";
import { useTheme } from "next-themes";
import Image from "next/image";
import { FunctionComponent } from "react";

type SiteIconsProps = {
  height: number;
};

const SiteIcons: FunctionComponent<SiteIconsProps> = ({ height }) => {
  const { t, i18n } = useTranslation();
  const { theme } = useTheme();
  const scrollPosition = useScrollPosition();
  const isFixedHeader = scrollPosition > 50;

  if (theme === "dark") {
    return (
      <div
        className={clx(
          "flex items-center gap-1.5 tracking-[3px] transition-all duration-200",
          isFixedHeader && "tracking-widest"
        )}
      >
        <>
          <div className={clx("w-[42px]", height ? `h-[${height}px]` : "h-[36px]")}>
            <Image
              src={"/static/images/icons/tiger-dark.png"}
              alt="GovTech Icon Dark"
              width={height * 1.167 ?? 42}
              height={height ?? 36}
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
    <div
      className={clx(
        "flex items-center gap-1.5 tracking-[3px] transition-all duration-200",
        isFixedHeader && "tracking-widest"
      )}
    >
      <>
        <div className={clx("w-[42px]", height ? `h-[${height}px]` : "h-[36px]")}>
          <Image
            src={"/static/images/icons/tiger-white.png"}
            alt="GovTech Icon"
            width={height * 1.167 ?? 42}
            height={height ?? 36}
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
