import { FlagIcon } from "@govtechmy/myds-react/icon";
import { useTranslations } from "next-intl";
import TimelineLayout from "./timeline-layout";

export default function TimelineComponent() {
  const t = useTranslations("Product");

  const dataTimeline = {
    "2024-01-15": {
      title: "Project Kickoff",
      short_description: "Initial meeting with stakeholders to align goals and expectations.",
    },
    "2024-03-01": {
      title: "MVP Launch",
      short_description: "Released minimum viable product with core features.",
    },
    "2024-06-10": {
      title: "User Feedback Round",
      short_description: "Conducted usability testing and collected user feedback.",
    },
    "2024-09-05": {
      title: "Phase 2 Development Start",
      short_description: "Began implementing new features based on feedback.",
    },
    "2024-12-20": {
      title: "Final Release",
      short_description: "Launched stable version with complete documentation.",
    },
  };

  // Convert object to array
  const timelineArray = Object.entries(dataTimeline).map(([date, value]) => ({
    date,
    title: value.title,
    desc: value.short_description,
  }));

  return (
    <div className="border-washed-100 grid-cols-12 gap-6 xl:grid xl:border-x">
      <div className="col-span-10 col-start-2 flex flex-col gap-6 max-lg:pt-12 lg:flex-col">
        <div className="top-16 h-fit space-y-4.5 lg:w-1/3 lg:pb-[42px]">
          <div className="flex gap-x-3">
            <FlagIcon className="shrink-0 text-txt-primary" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-txt-primary">
              {t("timeline_overline")}
            </p>
          </div>
          <h2 className="font-poppins text-balance text-heading-sm font-semibold">
            {t("timeline_title")}
          </h2>
          <p className="text-pretty text-bg-black-700">{t("timeline_information")}</p>
        </div>
        <TimelineLayout items={timelineArray} className=""></TimelineLayout>
      </div>
    </div>
  );
}
