import type { ProjectList } from "@/resources/projects";
import { FunctionComponent } from "react";
import ProjectIcon from "../SiteIcons/project-icons";

type ProjectTitleProp = {
  project: ProjectList;
  title: string;
};

const ProjectTitle: FunctionComponent<ProjectTitleProp> = ({ project, title }) => {
  const base = (project: ProjectList) => {
    switch (project) {
      case "datagovmy-docs":
        return (
          <>
            <p className="font-bold">{title}</p>
            <p className="px-1.5 py-0.5 border-2 rounded-md text-xs font-bold">API</p>
          </>
        );

      default:
        return <p className="font-bold">{title}</p>;
    }
  };

  return (
    <div className="flex items-center gap-2">
      <ProjectIcon project={project} />
      {base(project)}
    </div>
  );
};

export default ProjectTitle;
