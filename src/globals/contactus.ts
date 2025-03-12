import { GlobalConfig } from "payload";
import type { Field } from 'payload'

// Globals for Contact us Globals
export const ContactUsGlobals: GlobalConfig = {
  slug: "contact-us",
  label: "Contact Us",
  access: {
    read: () => true, // Allow public read access
    //   update: ({ req }) => req.user?.role === 'admin', // Only admins can update
  },
  fields: [
    // put all your globals field here
  ],
};
