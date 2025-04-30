import type { CollectionConfig } from "payload";
import { revalidate } from "@/app/(actions)/revalidate"

export const Products: CollectionConfig = {
  slug: "products",
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
      name: "logo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "status",
      type: "select",
      required: true,
      options: [
        {
          label: "Active",
          value: "Active",
        },
        {
          label: "Under Development",
          value: "Under Development",
        },
        {
          label: "Discontinued",
          value: "Discontinued",
        },
        {
          label: "Beta",
          value: "Beta",
        },
        {
          label: "Maintenance",
          value: "Maintenance",
        },
      ],
      defaultValue: "Under Development",
    },
    {
      name: "url",
      type: "text",
      required: false,
    },
  ],
  hooks: {
    afterChange: [
      async () => {
        await revalidate("");
      },
    ]
  }
};
