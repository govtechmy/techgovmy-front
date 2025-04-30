import type { CollectionConfig } from 'payload'

export const SiteAsset: CollectionConfig = {
  slug: 'site-asset',
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
