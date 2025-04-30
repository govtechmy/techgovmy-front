import link from "@/lib/fields/link";
import { GlobalConfig } from "payload";
import { revalidate } from "@/lib/revalidate"

// Globals for About Us Page
export const FooterGlobals: GlobalConfig = {
  slug: "footer",
  label: "Footer",
  access: {
    read: () => true, // Allow public read access
    //   update: ({ req }) => req.user?.role === 'admin', // Only admins can update
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "social_label",
          label: "Social Media Section Label",
          type: "text",
          required: true,
          localized: true,
          admin: {
            placeholder: "Follow Us",
            width: "50%",
          },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "govtech_label",
          label: "Govtech Section Label",
          type: "text",
          required: true,
          localized: true,
          admin: {
            placeholder: "Govtech Malaysia",
            width: "50%",
          },
        },
      ],
    },

    {
      name: "govtech_route",
      label: "Govtech Routes",
      type: "array",
      fields: [link({ labelPlaceholder: "Hubungi Kami", localizedLabel: true })],
    },

    {
      type: "row",
      fields: [
        {
          name: "opensource_label",
          label: "Open Source Section Label",
          type: "text",
          required: true,
          localized: true,
          admin: {
            width: "50%",
            placeholder: "Open Source",
          },
        },
      ],
    },

    {
      name: "open_source",
      label: "Open Source Links",
      type: "array",
      fields: [link({ labelPlaceholder: "Repo GitHub", localizedLabel: true })],
    },

    {
      name: "copyright",
      type: "text",
      label: "Copyright Text",
      admin: {
        placeholder: "All Right Reserved",
      },
      localized: true,
    },
  ],
  hooks: {
    afterChange: [
      async () => {
        await revalidate("");
      },
    ]
  }
};
