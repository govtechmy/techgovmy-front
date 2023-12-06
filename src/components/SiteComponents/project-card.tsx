import { Project } from "@/resources/projects";
import { FunctionComponent } from "react";
import Card from "../Card";
import { useTranslation } from "@/lib/hooks/useTranslation";
import ProjectTitle from "../Text/project-title";
import Link from "next/link";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ project }) => {
  const { i18n } = useTranslation();

  const content = (
    <Card className="p-6 flex flex-col gap-4.5 hover:border-outline-hover hover:dark:border-outline-hover-dark dark:hover:bg-washed-dark/50 hover:bg-background">
      <ProjectTitle project={project.id} title={project.name} />
      <p className="text-dim dark:text-dim text-sm">
        {i18n.language === "en-GB" ? project.description : project.description_bm}
      </p>
    </Card>
  );

  if (project.url) {
    return (
      <Link href={project.url} target="_blank" rel="noopener noreferrer">
        {content}
      </Link>
    );
  }

  return content;
};

export default ProjectCard;
