import { GlobalConfig } from "payload";

export const ContactGlobals: GlobalConfig = {
  slug: "contact",
  label: "Contact Us",
  access: {
    read: () => true, // Allow public read access
  },
  fields: [
    {
      name: "address",
      type: "text",
      label: {
        en: "Address",
        ms: "Alamat",
      },
    },
    {
      name: "google_maps_url",
      type: "text",
      label: {
        en: "Google Maps URL",
        ms: "URL Google Maps",
      },
    },
    {
      name: "waze_url",
      type: "text",
      label: {
        en: "Waze URL",
        ms: "URL Waze",
      },
    },
    {
      name: "email",
      type: "text",
      label: {
        en: "Email Address",
        ms: "Alamat Email",
      },
    },
    {
      name: "phone",
      type: "text",
      label: {
        en: "Phone Number",
        ms: "Nombor Telefon",
      },
    },
  ],
};
