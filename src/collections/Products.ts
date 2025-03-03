import type { CollectionConfig } from "payload";

export const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "picture",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "url",
      type: "text",
      required: true,
    },
    {
      name: "status",
      type: "select",
      required: true,
      options: [
        {
          label: "Live",
          value: "LIVE",
        },
        {
          label: "Work in Progress",
          value: "WIP",
        },
      ],
      defaultValue: "WIP",
    },
  ],
};
