import { GlobalConfig } from "payload";

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
        en: "intro-header",
        ms: "pengenalan-header",
      },
      localized: true,
    },
    {
      name: "intro-description",
      type: "text",
      label: {
        en: "intro-description",
        ms: "pengenalan-description",
      },
      localized: true,
    },
    {
      name: "card-header-1",
      type: "text",
      label: "card-header-1",
      localized: true,
    },
    {
      name: "card-description-1",
      type: "text",
      label: {
        en: "intro-description",
        ms: "pengenalan-description",
      },
      localized: true,
    },
    {
      name: "card-header-2",
      type: "text",
      label: {
        en: "card-header-2",
        ms: "kad-header-2",
      },
      localized: true,
    },
    {
      name: "card-description-2",
      type: "text",
      label: {
        en: "card-description-2",
        ms: "kad-description-2",
      },
      localized: true,
    },
    {
      name: "card-header-3",
      type: "text",
      label: {
        en: "card-header-3",
        ms: "kad-header-3",
      },
      localized: true,
    },
    {
      name: "card-description-4",
      type: "text",
      label: {
        en: "card-description-4",
        ms: "kad-description-4",
      },
      localized: true,
    },
    {
      name: "card-header-5",
      type: "text",
      label: {
        en: "card-header-5",
        ms: "kad-header-5",
      },
      localized: true,
    },
    {
      name: "card-description-6",
      type: "text",
      label: {
        en: "intro-description",
        ms: "pengenalan-description",
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
    //   {
    //     name: 'logo',
    //     type: 'upload',
    //     relationTo: 'media',
    //     label: 'Site Logo',
    //   },
    // {
    //     name: 'items',
    //     type: 'array',
    //     required: true,
    //     maxRows: 8,
    //     fields: [
    //     {
    //         name: 'page',
    //         type: 'relationship',
    //         relationTo: 'pages', // "pages" is the slug of an existing collection
    //         required: true,
    //     },
    //     ],
    // },
  ],
};
