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
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(101.65% 92.54% at 50% 0%, var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        govtech: {
          600: "rgba(var(--_govtech-600) / <alpha-value>)",
          700: "rgba(var(--_govtech-700) / <alpha-value>)",
        },
        "txt-govtech-600": "rgb(var(--txt-govtech-600))",
      },
    },
  },
};
