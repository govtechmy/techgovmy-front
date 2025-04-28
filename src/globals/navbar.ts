import link from "@/lib/fields/link";
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
      name: "navbar-items",
      type: "array",
      label: "Navbar Items",
      required: true,
      fields: [link({ labelPlaceholder: "Home", localizedLabel: true })],
      maxRows: 6,
    },
  ],
};
