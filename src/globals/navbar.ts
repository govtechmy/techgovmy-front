import { GlobalConfig } from "payload";

// Globals for About Us Page
export const NavBarGlobals: GlobalConfig = {
  slug: "navbar",
  label: "Navbar",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navbar-items',
      type: 'array',
      label: {
        en: "Navbar Items",
        ms: "Perkara Navbar"
      },
      localized: true,
      fields: [
        {
            name: 'title',
            type: 'text',
            label: {
                en: "Title",
                ms: "Tajuk"
            },
            localized: true,
        },
        {
          name: 'link',
          type: 'text',
          label: {
            en: "Link",
            ms: "Pautan"
          },
        },
      ],
    },
  ],
};
