import { DateTime } from "luxon";
import { ReactElement, createElement } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

/**
 * Conditional class joiner.
 * @param args classNames
 * @returns string
 */
export const clx = (...args: ClassNameValue[]): string => {
  return twMerge(args);
};

/**
 * Returns a formatted date string from epoch millis or SQL date (YYYY-MM-DD)
 * @param {number | string} timestamp epoch millis | sql date
 * @param {string} locale en-GB | ms-MY
 * @param {string} format dd MMM yyyy
 * @returns {string} Formatted date
 */
export const toDate = (
  timestamp: number | string,
  format: string = "dd MMM yyyy",
  locale: string = "en-GB"
): string => {
  if (typeof timestamp === "number") {
    const formatted_date = DateTime.fromMillis(timestamp).setLocale(locale).toFormat(format);
    return formatted_date !== "Invalid DateTime" ? formatted_date : "N/A";
  }

  if (/^\d{4}-\d{2}$/.test(timestamp)) {
    // Format: YYYY-MM
    return DateTime.fromFormat(timestamp, "yyyy-MM").setLocale(locale).toFormat("MMM yyyy");
  } else if (/^\d{4}-Q[1-4]$/.test(timestamp)) {
    // Format: YYYY-QQ
    return DateTime.fromFormat(timestamp, "yyyy-'Q'q")
      .setLocale(locale)
      .toFormat(`${locale === "ms-MY" ? "'ST'" : ""}q${locale === "ms-MY" ? "" : "Q"} yyyy`);
  } else if (/^\d+$/.test(timestamp)) {
    // Format: YYYY
    return DateTime.fromFormat(timestamp, "yyyy").setLocale(locale).toFormat("yyyy");
  } else {
    const date = DateTime.fromSQL(timestamp);
    const formatted_date = date.setLocale(locale).toFormat(format);

    return formatted_date !== "Invalid DateTime" ? formatted_date : "N/A";
  }
};

/**
 * @tutorial interpolate Pass the raw text with markdown link syntax eg. [some-link](/url-goes-here)
 * @example interpolate("This is an example of a [link](https://data.gov.my)")
 * // ["This is an example of a", <a href="https://data.gov.my">link</a>]
 * @param {string} raw_text Raw text
 * @returns {string | ReactElement[]} string | React elements
 */
export const interpolate = (raw_text: string): string | ReactElement[] => {
  const delimiter = /\[(.*?)\)/;
  let matches = raw_text.split(delimiter);

  if (matches.length <= 1) return raw_text;

  return matches.map(item => {
    const match = item.split("](");
    if (match.length <= 1) return createElement("span", { className: "text-inherit" }, item);
    const [text, url] = match;
    return createElement(
      "a",
      {
        href: url,
        className:
          "text-primary dark:text-primary-dark hover:underline inline [text-underline-position:from-font]",
        target: "_blank",
      },
      text
    );
  }) as ReactElement[];
};

/**
 * Format a number to the given type.
 * @param value number
 * @param type Intl format type
 * @returns string
 */
export const numFormat = (
  value: number,
  type: "compact" | "standard" | "scientific" | "engineering" | undefined = "compact",
  precision: number | [max: number, min: number] = 0,
  compactDisplay: "short" | "long" = "short",
  locale: string = "en",
  smart: boolean = false
): string => {
  const [max, min] = Array.isArray(precision) ? precision : [precision, precision];

  if (smart === true) {
    let formatter: Intl.NumberFormat;

    if (value < 1_000_000 && value > -1_000_000) {
      formatter = Intl.NumberFormat(locale, {
        notation: type,
        maximumFractionDigits: max,
        minimumFractionDigits: min,
        compactDisplay: "short",
      });
    } else {
      formatter = Intl.NumberFormat(locale, {
        notation: type,
        maximumFractionDigits: max,
        minimumFractionDigits: min,
        compactDisplay,
      });
    }

    return formatter
      .format(value)
      .replace("trillion", "tril")
      .replace("trilion", "tril")
      .replace("billion", "bil")
      .replace("bilion", "bil")
      .replace("million", "mil");
  } else {
    return Intl.NumberFormat(locale, {
      notation: type,
      maximumFractionDigits: max,
      minimumFractionDigits: min,
      compactDisplay,
    }).format(value);
  }
};
