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
      name: "join-our-community",
      type: "text",
      label: {
        en: "join-our-community",
        ms: "sertai-komuniti-kami",
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
          name: 'card-header-left',
          type: 'text',
          label: {
            en: "Card Header Left",
            ms: "Kad Header Kiri"
          },
          localized: true
          //relationTo: 'pages', // "pages" is the slug of an existing collection
        },
        {
          name: 'card-description-left',
          type: 'text',
          label: {
            en: "Card Description Left",
            ms: "Kad Diskripsi Kiri"
          },
          localized: true
          //relationTo: 'pages', // "pages" is the slug of an existing collection
        },
        {
          name: 'card-header-right',
          type: 'text',
          label: {
            en: "Card Header Right",
            ms: "Kad Header Kanan"
          },
          localized: true
        },
        {
          name: 'card-description-right',
          type: 'text',
          label: {
            en: "Card Description Right",
            ms: "Kad Diskripsi Kanan"
          },
          localized: true
        },
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
          name: 'card-header-left',
          type: 'text',
          label: {
            en: "Card Header Left",
            ms: "Kad Header Kiri"
          },
          localized: true
        },
        {
          name: 'card-description-left',
          type: 'text',
          label: {
            en: "Card Description Left",
            ms: "Kad Deskripsi Kiri"
          },
          localized: true
        },
        {
          name: 'card-header-right',
          type: 'text',
          label: {
            en: "Card Header Right",
            ms: "Kad Header Kanan"
          },
          localized: true
        },
        {
          name: 'card-description-right',
          type: 'text',
          label: {
            en: "Card Description Right",
            ms: "Kad Deskripsi Kanan"
          },
          localized: true
        },
      ],
    },
  ],
};
