import { preset } from "@govtechmy/myds-style";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "src/**/*.{js,jsx,ts,tsx,mdx}",
    "node_modules/@govtechmy/myds-react/dist/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [preset],
  plugins: [],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(101.65% 92.54% at 50% 0%, var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        govtech: {
          700: "rgba(var(--_govtech-700) / <alpha-value>)",
          600: "rgba(var(--_govtech-600) / <alpha-value>)",
          200: "rgba(var(--_govtech-200) / <alpha-value>)",
          100: "rgba(var(--_govtech-100) / <alpha-value>)",
          50: "rgba(var(--_govtech-50) / <alpha-value>)",
          secondary: "rgba(var(--_govtech-secondary) / <alpha-value>)",
          tertiary: "rgba(var(--_govtech-tertiary) / <alpha-value>)",
        },
        "txt-govtech-600": "rgb(var(--txt-govtech-600))",
        "txt-govtech-600-dark": "rgb(var(--txt-govtech-600-dark))",
        "fr-govtech-100": "rgb(var(--fr-govtech-100))",
      },
    },
  },
};
