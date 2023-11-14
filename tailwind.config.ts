import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial":
          "radial-gradient(59.1% 166.02% at 50% -66.02%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-body)", ...fontFamily.sans],
        body: ["var(--font-body)", ...fontFamily.sans],
        header: ["var(--font-header)"],
      },
      maxWidth: {
        hero: "780px",
      },
      spacing: {
        4.5: "18px",
      },
      boxShadow: {
        button: "0 1px 2px rgba(0, 0, 0, 0.1)",
        floating: "0 6px 24px rgba(0, 0, 0, 0.1)",
      },
      keyframes: {
        slide: {
          from: { width: "var(--from-width)" },
          to: { width: "var(--to-width)" },
        },
        grow: {
          from: { height: "var(--from-height)" },
          to: { height: "var(--to-height)" },
        },
      },
      animation: {
        slide: "slide 1.5s ease-out",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")({ prefix: "ui" })],
};
export default config;
