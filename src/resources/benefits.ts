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
  "competitive_salary",
  "remote_work",
  "culture_excellence",
  "high_impact",
  "fulfilment",
  "supportive_env",
  // BELOW ARE CURRENTLY NOT IN USE
  "share",
  "computer-desktop",
  "briefcase",
  "map-pin",
  "envelope",
] as const;

export type BenefitList = (typeof benefitList)[number];

export const BenefitIcons: Record<BenefitList, ReactNode> = {
  "competitive_salary": createElement(CurrencyDollarIcon, { className: "h-5 w-5" }),
  "remote_work": createElement(GlobeAsiaAustraliaIcon, { className: "h-5 w-5" }),
  "culture_excellence": createElement(TrophyIcon, { className: "h-5 w-5" }),
  "share": createElement(ShareIcon, { className: "h-5 w-5" }),
  "computer-desktop": createElement(ComputerDesktopIcon, { className: "h-5 w-5" }),
  "high_impact": createElement(FireIcon, { className: "h-5 w-5" }),
  "briefcase": createElement(BriefcaseIcon, { className: "h-5 w-5" }),
  "map-pin": createElement(MapPinIcon, { className: "h-5 w-5" }),
  "fulfilment": createElement(CheckBadgeIcon, { className: "h-5 w-5" }),
  "envelope": createElement(EnvelopeIcon, { className: "h-5 w-5" }),
  "supportive_env": createElement(UserGroupIcon, { className: "h-5 w-5" }),
};

type Benefit = {
  key: BenefitList;
  icon: ReactNode;
};

export const BENEFITS: Array<Benefit> = [
  {
    key: "competitive_salary",
    icon: BenefitIcons["competitive_salary"],
  },
  {
    key: "high_impact",
    icon: BenefitIcons["high_impact"],
  },
  {
    key: "remote_work",
    icon: BenefitIcons["remote_work"],
  },
  {
    key: "culture_excellence",
    icon: BenefitIcons["culture_excellence"],
  },
  {
    key: "supportive_env",
    icon: BenefitIcons["supportive_env"],
  },
  {
    key: "fulfilment",
    icon: BenefitIcons["fulfilment"],
  },
];
