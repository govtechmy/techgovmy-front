const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  publicRuntimeConfig: {
    APP_NAME: "tech.gov.my",
    META_AUTHOR: "Government of Malaysia",
    META_THEME: "#13293D",
    META_KEYWORDS: "official website for govtech nucleus unit",
    META_DOMAIN: "tech.gov.my",
    META_URL: process.env.NEXT_PUBLIC_APP_URL,
    META_IMAGE: `${process.env.NEXT_PUBLIC_APP_URL}/static/images/og_{{lang}}.png`,
  },
};

module.exports = nextConfig;
