import { FunctionComponent, ReactNode } from "react";
import { clx } from "@lib/helper";
import Header from "../Layout/Header";
import useScrollPosition from "@/lib/hooks/useScrollPosition";

type HeroProps = {
  className?: string;
  title: ReactNode | string;
  description: string;
};

const Hero: FunctionComponent<HeroProps> = ({ className, title, description }) => {
  const scrollPosition = useScrollPosition();
  const isFixedHeader = scrollPosition > 50;

  return (
    <div className={`flex h-full w-full justify-center hero-bg relative`}>
      <div className={`h-full w-full max-w-screen-2xl ${className}`}>
        <Header isFixedHeader={isFixedHeader} />
        <div
          className={clx(
            "flex flex-col items-center space-y-8 pb-12 max-w-[800px] px-4 md:px-0 mx-auto pt-[62px]",
            isFixedHeader && "pt-[172px]"
          )}
        >
          {typeof title === "string" ? <h1 className="text-[42px] text-center">{title}</h1> : title}

          <p className="text-dim text-center dark:text-dim">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
