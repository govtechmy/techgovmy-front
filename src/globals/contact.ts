import { GlobalConfig } from "payload";

export const ContactGlobals: GlobalConfig = {
  slug: "contact",
  label: "Contact",
  access: {
    read: () => true, // Allow public read access
  },
  fields: [
    {
      name: "address_line_1",
      type: "text",
      label: {
        en: "Address Line 1",
        ms: "Alamat Baris 1",
      },
      localized: true,
    },
    {
      name: "address_line_2",
      type: "text",
      label: {
        en: "Address Line 2",
        ms: "Alamat Baris 2",
      },
      localized: true,
    },
    {
      name: "address_line_3",
      type: "text",
      label: {
        en: "Address Line 3",
        ms: "Alamat Baris 3",
      },
      localized: true,
    },
    {
      name: "address_line_4",
      type: "text",
      label: {
        en: "Address Line 4",
        ms: "Alamat Baris 4",
      },
      localized: true,
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
      localized: true,
    },
  ],
};
