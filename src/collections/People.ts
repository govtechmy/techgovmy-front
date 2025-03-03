import type { CollectionConfig } from "payload";

export const People: CollectionConfig = {
  slug: "people",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "email",
      required: true,
    },
    {
      name: "picture",
      type: "upload",
      relationTo: "media",
      required: false,
    },
    {
      name: "level",
      type: "select",
      required: true,
      options: [
        { label: "L1", value: "L1" },
        { label: "L2", value: "L2" },
        { label: "L3", value: "L3" },
        { label: "L4", value: "L4" },
        { label: "L5", value: "L5" },
      ],
    },
    {
      name: "role",
      type: "select",
      required: true,
      options: [
        { label: "Full-stack Developer", value: "Full-stack Developer" },
        { label: "Data Scientist", value: "Data Scientist" },
        { label: "Designer", value: "Designer" },
        { label: "Project Manager", value: "Project Manager" },
        { label: "DevOps Engineer", value: "DevOps Engineer" },
        { label: "AI/ML Engineer", value: "AI/ML Engineer" },
      ],
    },
    // {
    //   name: 'unit',
    //   type: 'relationship',
    //   relationTo: 'units',
    //   required: true,
    // },
  ],
};
