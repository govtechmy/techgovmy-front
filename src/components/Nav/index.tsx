import { useLanguage } from "@lib/hooks/useLanguage";
import { clx } from "@lib/helper";
import { languages } from "@lib/constants";
import At from "../At";
import Dropdown from "../Dropdown";
import ThemeToggle from "./theme";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";
import { FunctionComponent, ReactNode, useState } from "react";

type NavRootProps = {
  children: (close: () => void) => ReactNode;
  stateSelector?: ReactNode;
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
  const { pathname } = useRouter();
  return (
    <div className="flex flex-col">
      <At
        href={link}
        scroll={false}
        onClick={onClick}
        className={clx(
          "flex items-center gap-2 rounded-none px-2 py-2 text-sm font-medium transition hover:cursor-pointer md:rounded-md ",
          className
        )}
        external={external}
      >
        {icon}
        {title}
      </At>
      {pathname.startsWith(link) && link !== "/" ? (
        <div className="h-1 rounded-[4px] w-1/4 self-center bg-orange" />
      ) : (
        <div className="h-1" />
      )}
    </div>
  );
};

const Nav: NavFunctionComponent = ({ children, stateSelector }) => {
  const [showMobile, setShowMobile] = useState<boolean>(false);
  const { language, onLanguageChange } = useLanguage();

  const close = () => setShowMobile(false);
  const open = () => setShowMobile(true);

  return (
    <div className="flex absolute left-1/2 -translate-x-1/2">
      {/* Desktop */}
      <div className="hidden w-fit gap-1 lg:flex">{children(close)}</div>

      {/* Mobile - Header*/}
      <div className="flex w-full items-center justify-end gap-3 lg:hidden">
        {stateSelector}
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
          "dark:divide-washed-dark shadow-floating fixed left-0 top-[57px] flex w-full flex-col gap-0 divide-y bg-white px-4 py-2 backdrop-blur-md dark:bg-black/80 lg:hidden lg:gap-1 lg:divide-y-0 lg:p-1",
          showMobile ? "flex" : "hidden"
        )}
      >
        {children(close)}
      </div>
    </div>
  );
};

Nav.Item = Item;

export default Nav;
