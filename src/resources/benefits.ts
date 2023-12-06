import { FunctionComponent, createElement } from "react";
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
import { clx } from "@/lib/helper";

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

const IconList: Record<BenefitList, FunctionComponent<{ className?: string }>> = {
  "competitive_salary": CurrencyDollarIcon,
  "remote_work": GlobeAsiaAustraliaIcon,
  "culture_excellence": TrophyIcon,
  "share": ShareIcon,
  "computer-desktop": ComputerDesktopIcon,
  "high_impact": FireIcon,
  "briefcase": BriefcaseIcon,
  "map-pin": MapPinIcon,
  "fulfilment": CheckBadgeIcon,
  "envelope": EnvelopeIcon,
  "supportive_env": UserGroupIcon,
};

type Benefit = {
  key: BenefitList;
};

export const BENEFITS: Array<Benefit> = [
  {
    key: "competitive_salary",
  },
  {
    key: "high_impact",
  },
  {
    key: "remote_work",
  },
  {
    key: "culture_excellence",
  },
  {
    key: "supportive_env",
  },
  {
    key: "fulfilment",
  },
];

interface IBenefitIcon {
  benefit: BenefitList;
  className?: string;
}

export const BenefitIcon: FunctionComponent<IBenefitIcon> = ({ benefit, className }) => {
  const Icon = IconList[benefit];

  if (typeof Icon !== "undefined") {
    return createElement(Icon, { className: clx("h-5 w-5", className) });
  }
  return null;
};
