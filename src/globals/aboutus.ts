import { GlobalConfig } from "payload";
import type { Field } from 'payload'

// Globals for About Us Page
export const AboutUsGlobals: GlobalConfig = {
  slug: "about-us",
  label: "About Us",
  access: {
    read: () => true, // Allow public read access
    //   update: ({ req }) => req.user?.role === 'admin', // Only admins can update
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: {
        en: "Title",
        ms: "Tajuk",
      },
      localized: true,
    },
    {
      name: "intro-header",
      type: "text",
      label: {
        en: "Intro Header",
        ms: "Pengenalan Header",
      },
      localized: true,
    },
    {
      name: "intro-description",
      type: "text",
      label: {
        en: "Intro Description",
        ms: "Pengenalan Description",
      },
      localized: true,
    },
    {
      name: 'vision-and-mission',
      type: 'array',
      label: {
        en: "Vision and Mission",
        ms: "Visi dan Misi"
      },
      localized: true,
      fields: [
        {
          name: 'card-header',
          type: 'text',
          label: {
            en: "Card Header",
            ms: "Kad Header"
          },
          localized: true
          //relationTo: 'pages', // "pages" is the slug of an existing collection
        },
        {
          name: 'icon',
          type: 'select',
          label: {
            en: "Icon name",
            ms: "Nama Ikon"
          },
          localized: true,
          options: [
            'flag',
            'eye',
            'thumbsUp',
            'userGroup',
            'star'
          ]
        },
        {
          name: 'card-description',
          type: 'text',
          label: {
            en: "Card Description",
            ms: "Kad Diskripsi"
          },
          localized: true
          //relationTo: 'pages', // "pages" is the slug of an existing collection
        }
      ],
    },
    {
      name: 'our-values',
      type: 'array',
      label: {
        en: "Our Values",
        ms: "Nilai Kami"
      },
      localized: true,
      fields: [
        {
          name: 'card-header',
          type: 'text',
          label: {
            en: "Card Header",
            ms: "Kad Header"
          },
          localized: true
        },
        {
          name: 'icon',
          type: 'select',
          label: {
            en: "Icon name",
            ms: "Nama Ikon"
          },
          localized: true,
          options: [
            'flag',
            'eye',
            'thumbsUp',
            'userGroup',
            'star'
          ]
        },
        {
          name: 'card-description',
          type: 'text',
          label: {
            en: "Card Description",
            ms: "Kad Deskripsi"
          },
          localized: true
        }
      ],
    },
    {
      name: 'community',
      type: 'array',
      label: {
        en: "Community Card",
        ms: "Kad Kommunitiy"
      },
      localized: true,
      fields: [
        {
          name: 'card-title',
          type: 'text',
          label: {
            en: "Card Title",
            ms: "Tajuk Kad"
          },
          localized: true
        },
        {
          name: 'href',
          type: 'text',
          label: {
            en: "Card Link",
            ms: "Pautan Kad"
          },
          localized: true
        }
      ],
    },
  ],
};
