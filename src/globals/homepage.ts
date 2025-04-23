import { GlobalConfig } from "payload";

// Globals for Homepage Page
export const HomepageGlobals: GlobalConfig = {
  slug: "homepage",
  label: "Homepage",
  access: {
    read: () => true, // Allow public read access
    //   update: ({ req }) => req.user?.role === 'admin', // Only admins can update
  },
  fields: [
    {
      name: "hero-title",
      type: "text",
      label: {
        en: "Hero Title",
        ms: "Tajuk Hero",
      },
      localized: true,
    },
  ],
};
