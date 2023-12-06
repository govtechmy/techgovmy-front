import { useLanguage } from "@lib/hooks/useLanguage";
import { clx } from "@lib/helper";
import { languages } from "@lib/constants";
import At from "../At";
import Dropdown from "../Dropdown";
import ThemeToggle from "./theme";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import { FunctionComponent, ReactNode, useState } from "react";
import useScrollPosition from "@/lib/hooks/useScrollPosition";

type NavRootProps = {
  children: (close: () => void) => ReactNode;
};

type NavItemProps = {
  icon?: ReactNode;
  title: string;
  link: string;
  onClick: () => void;
  className?: string;
  external?: boolean;
};

type NavFunctionComponent = FunctionComponent<NavRootProps> & {
  Item: typeof Item;
};

const Item: FunctionComponent<NavItemProps> = ({
  link,
  onClick,
  className,
  icon,
  title,
  external = false,
}) => {
  const { asPath } = useRouter();

  return (
    <div className="flex flex-col">
      <At
        href={link}
        scroll={false}
        onClick={onClick}
        className={clx(
          "flex items-center gap-2 rounded-none px-2 py-2 text-sm font-medium transition hover:cursor-pointer md:rounded-md flex-1 text-black/50 dark:text-white/50",
          asPath === link && "text-black dark:text-white",
          className
        )}
        external={external}
      >
        {icon}
        {title}
      </At>
      {asPath === link ? (
        <div className="h-1 rounded-[4px] w-1/4 self-center bg-orange hidden lg:block" />
      ) : (
        <div className="h-1 w-1/4" />
      )}
    </div>
  );
};

const Nav: NavFunctionComponent = ({ children }) => {
  const [showMobile, setShowMobile] = useState<boolean>(false);
  const { language, onLanguageChange } = useLanguage();
  const scrollPosition = useScrollPosition();
  const isFixedHeader = scrollPosition > 50;

  const close = () => setShowMobile(false);
  const open = () => setShowMobile(true);

  return (
    <div className="flex h-full absolute right-0 lg:right-1/2 lg:translate-x-1/2">
      {/* Desktop */}
      <div className="hidden w-fit gap-1 lg:flex">{children(close)}</div>

      {/* Mobile - Header*/}
      <div className="flex w-full items-center justify-end gap-3 lg:hidden">
        <ThemeToggle />
        <Dropdown
          width="w-fit"
          selected={languages.find(lang => lang.value === language)}
          onChange={onLanguageChange}
          options={languages}
        />
        {showMobile ? (
          <XMarkIcon
            className="box-content block h-5 w-5 text-black dark:text-white lg:hidden"
            onClick={close}
          />
        ) : (
          <Bars3BottomRightIcon
            className="box-content block h-5 w-5 text-black dark:text-white lg:hidden"
            onClick={open}
          />
        )}
      </div>
      {/* Mobile - Menu */}
      <div
        className={clx(
          "dark:divide-washed-dark shadow-floating fixed left-0  flex w-full flex-col gap-0 divide-y bg-white px-4 py-2 backdrop-blur-md dark:bg-black/80 lg:hidden lg:gap-1 lg:divide-y-0 lg:p-1",
          showMobile ? "flex" : "hidden",
          isFixedHeader ? "top-[58px]" : "top-[108px]"
        )}
      >
        {children(close)}
      </div>
    </div>
  );
};

Nav.Item = Item;

export default Nav;
