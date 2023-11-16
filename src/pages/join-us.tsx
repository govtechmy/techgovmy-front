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

const JoinUs: Page = () => {
  const [showJob, setShowJob] = useState(false);
  const tableConfig: TableConfig[] = [
    {
      accessorKey: "section",
      id: "section",
      header: "Section",
    },
    {
      accessorKey: "position",
      id: "position",
      header: "Position",
    },
    {
      accessorKey: "status",
      id: "status",
      className: "",
      header: "Status",
      cell: ({ row, getValue }) => (
        <p
          className={clx(getValue() ? "text-success dark:text-success" : "text-dim dark:text-dim")}
        >
          {getValue() ? "Available" : "Unavailable"}
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
          Apply
        </Button>
      ),
    },
  ];
  return (
    <>
      <Hero
        title={"Join the GovTech Nucleus Unit!"}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
      />
      <Container>
        <Section className="max-w-[800px] mx-auto py-16">
          <div className="gap-16 pb-5 flex flex-col">
            {/* Title */}
            <div className="flex flex-col gap-6 px-[50px]">
              <p className="text-orange dark:text-orange font-semibold uppercase">Join Us</p>
              <div className="flex flex-col gap-3">
                <h2 className="font-semibold">Come build for the nation</h2>
                <p className="text-outline-hover-dark dark:text-dim">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            {/* Our People */}
            <div className="flex flex-col gap-6 px-[50px]">
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold">Our People</h3>
                <p className="text-outline-hover-dark dark:text-dim">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>

              <div className="grid-cols-2 grid gap-4.5">
                {PEOPLE.map((people, index) => (
                  <PeopleCard key={index} people={people} />
                ))}
              </div>
            </div>
            {/* Benefits */}
            <div className="flex flex-col gap-3 px-[50px]">
              <h4 className="font-semibold">Benefits</h4>

              <div className="grid-cols-2 grid gap-8 bg-background dark:bg-washed-dark p-6 rounded-xl">
                {BENEFITS.map((benefit, index) => (
                  <div key={index} className="flex flex-col gap-3">
                    {benefit.icon}
                    <p className="font-medium">{benefit.title}</p>
                    <p className="text-outline-hover dark:text-dim text-sm">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* Available Roles */}
            <div className="flex flex-col gap-3 px-[50px]">
              <h4 className="font-semibold">Roles available</h4>
              <p className="text-outline-hover-dark dark:text-dim">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
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

export const getStaticProps: GetStaticProps = withi18n(["join-us"], async () => {
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
