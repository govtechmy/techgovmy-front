import type { CollectionConfig } from 'payload'
import { revalidate } from "@/utils/revalidation";

export const ProductAsset: CollectionConfig = {
  slug: 'product-asset',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: false,
    },
  ],
  upload: true,
  hooks: {
    afterChange: [
      async () => {
        await revalidate("", true);
      },
    ]
  }
}
