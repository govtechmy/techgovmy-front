import { Project } from "@/resources/projects";
import { FunctionComponent } from "react";
import Card from "../Card";
import { useTranslation } from "@/lib/hooks/useTranslation";
import { useRouter } from "next/router";
import ProjectTitle from "../Text/project-title";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: FunctionComponent<ProjectCardProps> = ({ project }) => {
  const { i18n } = useTranslation();
  const router = useRouter();
  return (
    <Card onClick={project.url ? () => {} : undefined} className="p-6 flex flex-col gap-4.5">
      <ProjectTitle project={project.id} title={project.name} />
      <p className="text-dim dark:text-dim text-sm">
        {i18n.language === "en-GB" ? project.description : project.description_bm}
      </p>
    </Card>
  );
};

export default ProjectCard;
