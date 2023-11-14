import { FunctionComponent, ReactNode, useMemo } from "react";
import Container from "../../components/Container";
import { clx } from "@lib/helper";
import Header from "../Layout/Header";

type HeroProps = {
  background?: "gray" | "blue" | "red" | "purple" | "green" | "orange" | string;
  className?: string;
  title: ReactNode | string;
  description: string;
};

const Hero: FunctionComponent<HeroProps> = ({
  background = "orange",
  className,
  title,
  description,
}) => {
  const background_style = useMemo<string>(() => {
    switch (background) {
      case "blue":
        return "bg-gradient-radial from-[#A1BFFF] to-background dark:from-[#203053] dark:to-black";
      case "red":
        return "bg-gradient-radial from-[#FFE1E1] to-background dark:from-[#492424] dark:to-black";
      case "purple":
        return "bg-gradient-radial from-[#C4B5FD] to-background dark:from-[#281843] dark:to-black";
      case "green":
        return "bg-gradient-radial from-[#CFFCCC] to-background dark:from-[#1B2C1A] dark:to-black";
      case "orange":
        return "bg-gradient-radial from-[#FFE5CD] to-background dark:from-[#EF4E23] dark:to-black";
      case "gray":
        return "bg-gradient-radial from-[#E2E8F0] to-background dark:from-[#3F3F46] dark:to-black";
      default:
        return background;
    }
  }, [background]);

  return (
    <Container
      background={clx("hero", "relative")}
      className={clx("px-0 lg:px-0 divide-y-0", className)}
    >
      <Header />
      <div className="flex flex-col items-center space-y-6 pb-20 max-w-[800px] mx-auto">
        {typeof title === "string" ? <h1 className="text-[42px]">{title}</h1> : title}

        <p className="text-dim">{description}</p>
      </div>
    </Container>
  );
};

export default Hero;
