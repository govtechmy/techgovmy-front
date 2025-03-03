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
      name: 'unit',
      type: 'relationship',
      relationTo: 'units',
      required: true,
    },
  ],
};
