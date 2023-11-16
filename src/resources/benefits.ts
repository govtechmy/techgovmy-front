import { FunctionComponent, ReactNode, createElement } from "react";
import {
  BriefcaseIcon,
  CheckBadgeIcon,
  ComputerDesktopIcon,
  CurrencyDollarIcon,
  EnvelopeIcon,
  FireIcon,
  GlobeAsiaAustraliaIcon,
  MapPinIcon,
  ShareIcon,
  TrophyIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";

const benefitList = [
  "currency-dollar",
  "globe-asia-australia",
  "trophy",
  "share",
  "computer-desktop",
  "fire",
  "briefcase",
  "map-pin",
  "check-badge",
  "envelope",
  "user-group",
] as const;

export type BenefitList = (typeof benefitList)[number];

const BenefitIcons: Record<BenefitList, ReactNode> = {
  "currency-dollar": createElement(CurrencyDollarIcon, { className: "h-5 w-5" }),
  "globe-asia-australia": createElement(GlobeAsiaAustraliaIcon, { className: "h-5 w-5" }),
  "trophy": createElement(TrophyIcon, { className: "h-5 w-5" }),
  "share": createElement(ShareIcon, { className: "h-5 w-5" }),
  "computer-desktop": createElement(ComputerDesktopIcon, { className: "h-5 w-5" }),
  "fire": createElement(FireIcon, { className: "h-5 w-5" }),
  "briefcase": createElement(BriefcaseIcon, { className: "h-5 w-5" }),
  "map-pin": createElement(MapPinIcon, { className: "h-5 w-5" }),
  "check-badge": createElement(CheckBadgeIcon, { className: "h-5 w-5" }),
  "envelope": createElement(EnvelopeIcon, { className: "h-5 w-5" }),
  "user-group": createElement(UserGroupIcon, { className: "h-5 w-5" }),
};

type Benefit = {
  title: string;
  description: string;
  icon: ReactNode;
};

export const BENEFITS: Array<Benefit> = [
  {
    title: "Competitive Salary",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    icon: BenefitIcons["currency-dollar"],
  },
  {
    title: "High Impact",
    description: "The entire Malaysia uses the stuff you build. It’s an impact like none other.",
    icon: BenefitIcons["fire"],
  },
  {
    title: "Remote Work",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    icon: BenefitIcons["globe-asia-australia"],
  },
  {
    title: "Culture of Excellence",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    icon: BenefitIcons["trophy"],
  },
  {
    title: "Supportive Environment",
    description:
      "High-quality machines, on-the-job upskilling, you name it - if you need it, we try to give it ",
    icon: BenefitIcons["user-group"],
  },
  {
    title: "Sense of Fulfilment",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    icon: BenefitIcons["check-badge"],
  },
];
