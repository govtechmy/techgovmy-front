import link from "@/lib/fields/link";
import { GlobalConfig } from "payload";

export const SiteInfoGlobal: GlobalConfig = {
  slug: "site-info",
  label: "Site Info",
  access: {
    read: () => true, // Allow public read access
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "site_name",
          label: "Site Name",
          type: "text",
          required: true,
          localized: true,
          admin: {
            width: "50%",
          },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "address",
          type: "textarea",
          label: {
            "en-GB": "Office Address",
            "ms-MY": "Alamat Pejabat",
          },
          admin: {
            rows: 5,
            width: "50%",
          },
          required: true,
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "google_maps_url",
          type: "text",
          label: {
            en: "Google Maps URL",
            ms: "URL Google Maps",
          },
          admin: {
            width: "50%",
          },
          required: true,
        },
        {
          name: "waze_url",
          type: "text",
          label: {
            en: "Waze URL",
            ms: "URL Waze",
          },
          admin: {
            width: "50%",
          },
          required: true,
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "google_embed_url",
          type: "text",
          label: {
            en: "Google Maps Embedded URL",
            ms: "URL Embedded Google Maps",
          },
          admin: {
            width: "100%",
          },
          required: true,
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "email",
          type: "text",
          label: {
            en: "Email Address",
            ms: "Alamat Email",
          },
          admin: {
            width: "50%",
          },
          required: true,
        },
        {
          name: "phone",
          type: "text",
          label: {
            en: "Phone Number",
            ms: "Nombor Telefon",
          },
          admin: {
            width: "50%",
          },
          required: true,
        },
      ],
    },
    {
      name: "social-media",
      type: "array",
      label: "Social Media",
      fields: [
        {
          name: "icon",
          type: "select",
          label: {
            en: "Icon name",
            ms: "Nama Ikon",
          },
          options: ["facebook", "x", "linkedin", "instagram", "youtube"],
        },
        link({ forceCustomUrl: true, labelPlaceholder: "Account Name Here" }),
      ],
    },

    {
      name: "contact-us",
      type: "group",
      label: "Contact Us Labels",
      admin: {
        description: "Label for Contact Page used for the labeling content",
      },
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "title",
              type: "text",

              admin: {
                width: "50%",
              },
              required: true,
              localized: true,
            },
          ],
        },
        {
          type: "row",
          fields: [
            {
              name: "office_name_label",
              type: "text",
              label: "Office Name Label",
              admin: {
                width: "50%",
              },
              required: true,
              localized: true,
            },
          ],
        },
        {
          type: "row",
          fields: [
            {
              name: "inquiries_label",
              type: "text",
              label: "Inquiries Label",
              admin: {
                width: "50%",
              },
              required: true,
              localized: true,
            },
          ],
        },
      ],
    },
  ],
};
