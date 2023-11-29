import { withi18n } from "@/lib/decorator";
import { Page } from "@/lib/types";
import { GetStaticProps } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/SiteComponents/project-card";
import { LAUNCHED_PROJECTS, UPCOMING_PROJECTS } from "@/resources/projects";
import { useTranslation } from "@/lib/hooks/useTranslation";

const OurWork: Page = () => {
  const { t } = useTranslation(["our-work"]);
  return (
    <>
      <Hero title={t("hero.title")} description={t("hero.description")} />
      <Container>
        <Section className="max-w-[800px] mx-auto py-16">
          <div className="gap-16 pb-5 flex flex-col">
            {/* Title */}
            <div className="flex flex-col gap-6 px-0 md:px-[50px]">
              <p className="text-orange dark:text-orange font-semibold uppercase">
                {t("section.our_projects")}
              </p>
              <div className="flex flex-col gap-3">
                <h2 className="font-semibold">{t("section.story.title")}</h2>
                <p className="text-outline-hover-dark dark:text-dim">
                  {t("section.story.paragraph", { context: 1 })}
                </p>
                <p className="text-outline-hover-dark dark:text-dim">
                  {t("section.story.paragraph", { context: 2 })}
                </p>
              </div>
            </div>
            {/* Launched Project */}
            <div className="flex flex-col gap-6 px-0 md:px-[50px]">
              <h4 className="font-semibold">{t("section.launched.title")}</h4>
              <div className="md:grid-cols-2 grid gap-4.5">
                {LAUNCHED_PROJECTS.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
            {/* Upcoming Project */}
            <div className="flex flex-col gap-6 px-0 md:px-[50px]">
              <h4 className="font-semibold">{t("section.upcoming.title")}</h4>
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
