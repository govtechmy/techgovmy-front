import type { CollectionConfig } from "payload";

export const Unit: CollectionConfig = {
  slug: "units",
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
      name: "acronym",
      type: "text",
      required: true,
    },
  ],
};
