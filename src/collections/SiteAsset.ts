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
    {
      name: 'location',
      type: 'select',
      required: true,
      options: [
        { label: 'Homepage', value: 'homepage' },
        { label: 'About Us', value: 'about-us' },
        { label: 'Contact Us', value: 'contact-us' },
      ],
    },
  ],
  upload: true,
}
