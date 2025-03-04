import { preset } from "@govtechmy/myds-style";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "src/**/*.{js,jsx,ts,tsx,mdx}",
    "node_modules/@govtechmy/myds-react/dist/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [preset],
  theme: {
    extend: {
      colours: {
        lightyellow: "#FFFBF4",
        bordergrey: "#F4F4F5"
      }
    }
  },
  plugins: [],
};
