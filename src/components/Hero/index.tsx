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
  const isFixedHeader = scrollPosition >= 50;

  return (
    <div className={`flex h-full w-full justify-center hero-bg relative`}>
      <div className={`h-full w-full max-w-screen-2xl ${className}`}>
        <Header isFixedHeader={isFixedHeader} />
        <div
          className={clx(
            "flex flex-col items-center space-y-6 pb-20 max-w-[800px] mx-auto pt-12",
            isFixedHeader && "pt-[150px]"
          )}
        >
          {typeof title === "string" ? <h1 className="text-[42px]">{title}</h1> : title}

          <p className="text-dim">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
