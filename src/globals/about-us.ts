import { GlobalConfig } from "payload";
import type { Field } from 'payload'
import { revalidate } from "@/utils/revalidation";

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
      name: "future-header",
      type: "text",
      label: {
        en: "Future Header",
        ms: "Masa Depan Header",
      },
      localized: true,
    },
    {
      name: 'future-description',
      type: 'array',
      label: {
        en: "Future Description",
        ms: "Masa Depan Deskripsi"
      },
      localized: true,
      fields: [
        {
          name: 'line-text',
          type: 'text',
          label: {
            en: "Text",
            ms: "Ayat"
          },
          localized: true
        },
      ],
    },
    // {
    //   name: "future-description_p1",
    //   type: "text",
    //   label: {
    //     en: "Future Description Paragraph 1",
    //     ms: "Masa Depan Deskripsi Perenggan 1",
    //   },
    //   localized: true,
    // },
    // {
    //   name: "future-description_p2",
    //   type: "text",
    //   label: {
    //     en: "Future Description Paragraph 2",
    //     ms: "Masa Depan Deskripsi Perenggan 2",
    //   },
    //   localized: true,
    // },
    // {
    //   name: "future-description_p3",
    //   type: "text",
    //   label: {
    //     en: "Future Description Paragraph 3",
    //     ms: "Masa Depan Deskripsi Perenggan 3",
    //   },
    //   localized: true,
    // },
    {
      name: 'our-capabilities',
      type: 'array',
      label: {
        en: "Our Capabilities",
        ms: "Keupayaan Kami"
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
            'database',
            'check-shield',
            'org-chart',
            'flag',
            'edit',
            'component'
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
  ],
  hooks: {
    afterChange: [
      async () => {
        await revalidate("about-us");
      },
    ]
  }
};
