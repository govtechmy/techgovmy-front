import { OptionType } from "./types";

/**
 * Dictionary of color palette.
 * @example COLORS.PRIMARY -> "#2563EB"
 */
export const COLORS = {
  "black": "#18181B",
  "white": "#FFFFFF",
  "outline": "#e2e8f0",
  "washed-dark": "#27272A",
  "outline-hover": "#94a3b8",
  "outline-hover-dark": "#3f3f46",
  "washed": "#f1f5f9",
  "background": "#f8fafc",
  "background-dark": "#121212",
  "dim": "#71717a",
  "primary": "#0C3284",
  "primary-dark": "#3E7AFF",
  "danger": "#D94242",
  "success": "#10b981",
  "warning": "#D94242",
  "bar-chart-grey": "#d1d5db",
  "orange": "#EF4E23",
} as const;

export const languages: OptionType[] = [
  { label: "English", value: "en-GB" },
  { label: "Malay", value: "ms-MY" },
];
