import link from "@/lib/fields/link";
import { GlobalConfig } from "payload";
import { revalidate } from "@/lib/revalidate"

// Globals for About Us Page
export const NavBarGlobals: GlobalConfig = {
  slug: "navbar",
  label: "Navbar",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "navbar-items",
      type: "array",
      label: "Navbar Items",
      required: true,
      fields: [link({ labelPlaceholder: "Home", localizedLabel: true })],
      maxRows: 6,
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
