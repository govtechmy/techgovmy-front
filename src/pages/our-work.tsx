import { withi18n } from "@/lib/decorator";
import { Page } from "@/lib/types";
import { GetStaticProps } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/SiteComponents/project-card";
import { LAUNCHED_PROJECTS, UPCOMING_PROJECTS } from "@/resources/projects";

const OurWork: Page = () => {
  return (
    <>
      <Hero title={"Our Work"} description="List of projects GovTech team have done in the past." />
      <Container>
        <Section className="max-w-[800px] mx-auto py-16">
          <div className="gap-16 pb-5 flex flex-col">
            {/* Title */}
            <div className="flex flex-col gap-6 px-0 md:px-[50px]">
              <p className="text-orange dark:text-orange font-semibold uppercase">Our Projects</p>
              <div className="flex flex-col gap-3">
                <h2 className="font-semibold">We build for the nation&apos;s benefit</h2>
                <p className="text-outline-hover-dark dark:text-dim">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="text-outline-hover-dark dark:text-dim">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
            {/* Launched Project */}
            <div className="flex flex-col gap-6 px-0 md:px-[50px]">
              <h4 className="font-semibold">Launched</h4>
              <div className="md:grid-cols-2 grid gap-4.5">
                {LAUNCHED_PROJECTS.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
            {/* Upcoming Project */}
            <div className="flex flex-col gap-6 px-0 md:px-[50px]">
              <h4 className="font-semibold">Under Development</h4>
              <div className="md:grid-cols-2 grid gap-4.5">
                {UPCOMING_PROJECTS.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          </div>
        </Section>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = withi18n(["our-work"], async () => {
  try {
    return {
      notFound: false,
      props: {
        meta: {
          id: "our-work",
          type: "misc",
        },
      },
    };
  } catch (error: any) {
    console.error(error.message);
    return { notFound: true };
  }
});

export default OurWork;
