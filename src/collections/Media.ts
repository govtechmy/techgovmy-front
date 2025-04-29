import type { CollectionConfig } from "payload";
import { revalidate } from "@/utils/revalidation";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "text",
      required: false,
    },
  ],
  upload: true,
};
