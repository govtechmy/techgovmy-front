import type { CollectionConfig } from 'payload'

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
}
