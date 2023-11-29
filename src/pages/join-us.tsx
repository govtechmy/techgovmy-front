import { withi18n } from "@/lib/decorator";
import { Page } from "@/lib/types";
import { GetStaticProps } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { PEOPLE } from "@/resources/people";
import PeopleCard from "@/components/SiteComponents/people-card";
import { BENEFITS } from "@/resources/benefits";
import Table, { TableConfig } from "@/components/Table";
import { JOB_OPENINGS } from "@/resources/job-opening";
import { clx } from "@/lib/helper";
import Button from "@/components/Button";
import { useState } from "react";
import { JobOpeningModal } from "@/components/SiteComponents/job-opening-modal";
import { t } from "i18next";
import { useTranslation } from "@/lib/hooks/useTranslation";

const JoinUs: Page = () => {
  const { t } = useTranslation(["join-us", "benefit"]);

  const [showJob, setShowJob] = useState(false);
  const tableConfig: TableConfig[] = [
    {
      accessorKey: "section",
      id: "section",
      header: t("avai_roles.table.section"),
    },
    {
      accessorKey: "position",
      id: "position",
      header: t("avai_roles.table.position"),
    },
    {
      accessorKey: "status",
      id: "status",
      className: "",
      header: t("avai_roles.table.status"),
      cell: ({ row, getValue }) => (
        <p
          className={clx(getValue() ? "text-success dark:text-success" : "text-dim dark:text-dim")}
        >
          {getValue() ? t("avai_roles.table.available") : t("avai_roles.table.unavailable")}
        </p>
      ),
    },
    {
      accessorKey: "apply",
      id: "apply",
      header: "",
      enableSorting: false,
      cell: ({ row, getValue }) => (
        <Button
          disabled={!row.original.status}
          onClick={() => setShowJob(true)}
          className="text-primary disabled:text-outline-hover"
          variant="ghost"
        >
          {t("avai_roles.table.apply")}
        </Button>
      ),
    },
  ];
  return (
    <>
      <Hero title={t("hero.title")} description={t("hero.description")} />
      <Container>
        <Section className="max-w-[800px] mx-auto py-16">
          <div className="gap-16 pb-5 flex flex-col">
            {/* Title */}
            <div className="flex flex-col gap-6 px-0 md:px-[50px]">
              <p className="text-orange dark:text-orange font-semibold uppercase">
                {t("section.join_us")}
              </p>
              <div className="flex flex-col gap-3">
                <h2 className="font-semibold">{t("section.story.title")}</h2>
                <p className="text-outline-hover-dark dark:text-dim">
                  {t("section.story.paragraph", { context: 1 })}
                </p>
              </div>
            </div>

            {/* Our People */}
            <div className="flex flex-col gap-6 px-0 md:px-[50px]">
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold">{t("section.our_people.title")}</h3>
                <p className="text-outline-hover-dark dark:text-dim">
                  {t("section.our_people.paragraph", { context: 1 })}
                </p>
              </div>

              <div className="md:grid-cols-2 grid gap-4.5">
                {PEOPLE.map((people, index) => (
                  <PeopleCard key={index} people={people} />
                ))}
              </div>
            </div>
            {/* Benefits */}
            <div className="flex flex-col gap-3 px-0 md:px-[50px]">
              <h4 className="font-semibold">Benefits</h4>

              <div className="md:grid-cols-2 grid gap-8 bg-background dark:bg-washed-dark p-6 rounded-xl">
                {BENEFITS.map((benefit, index) => (
                  <div key={index} className="flex flex-col gap-3">
                    {benefit.icon}
                    <p className="font-medium">{t(`benefit:${benefit.key}.title`)}</p>
                    <p className="text-outline-hover dark:text-dim text-sm">
                      {t(`benefit:${benefit.key}.description`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* Available Roles */}
            <div className="flex flex-col gap-3 px-0 md:px-[50px]">
              <h4 className="font-semibold">{t("avai_roles.title")}</h4>
              <p className="text-outline-hover-dark dark:text-dim">
                {t("avai_roles.paragraph", { context: 1 })}
              </p>

              <div className="">
                <Table
                  className="md:mx-auto lg:w-full"
                  data={JOB_OPENINGS}
                  enablePagination={false}
                  config={tableConfig}
                />
              </div>
            </div>
          </div>
        </Section>
      </Container>
      <JobOpeningModal
        show={showJob}
        hide={() => {
          setShowJob(false);
        }}
      />
    </>
  );
};

export const getStaticProps: GetStaticProps = withi18n(["join-us", "benefit"], async () => {
  try {
    return {
      notFound: false,
      props: {
        meta: {
          id: "join-us",
          type: "misc",
        },
      },
    };
  } catch (error: any) {
    console.error(error.message);
    return { notFound: true };
  }
});

export default JoinUs;
