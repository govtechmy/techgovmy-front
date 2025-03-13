import type { CollectionConfig } from "payload";

export const Jobs: CollectionConfig = {
  slug: "jobs",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "employmentType", "location", "category"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Job Title",
    },
    {
      name: "employmentType",
      type: "select",
      required: true,
      options: [
        {
          label: "Full Time",
          value: "full-time",
        },
        {
          label: "Part Time",
          value: "part-time",
        },
      ],
    },
    {
      name: "location",
      type: "text",
      required: true,
      label: "Job Location",
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        {
          label: "Design",
          value: "design",
        },
        {
          label: "Backend",
          value: "backend",
        },
        {
          label: "Frontend",
          value: "frontend",
        },
        {
          label: "Data Science",
          value: "data-science",
        },
        {
          label: "Cyber Security",
          value: "cyber-security",
        },
        {
          label: "Full Stack",
          value: "full-stack",
        },
        {
          label: "AI/ML",
          value: "ai-ml",
        },
      ],
    },
    {
      name: "description",
      type: "text",
      required: true,
      label: "Job Description",
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "draft",
      options: [
        {
          label: "Open",
          value: "open",
        },
        {
          label: "Closed",
          value: "closed",
        },
      ],
    },
  ],
};
