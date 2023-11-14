import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import { UserConfig } from "next-i18next";

export type AppPropsLayout = AppProps & {
  Component: Page;
};

export type Page = NextPage & {
  layout?: (page: ReactNode, props: Record<string, any>) => ReactElement;
  theme?: "light" | "dark";
};

export type OptionType = {
  label: string;
  value: string;
};

export type I18nConfig = UserConfig & { autoloadNs: string[] };

export type defineConfig = (namespace: string[], autoloadNs: string[]) => I18nConfig;

export type MetaPage = Record<string, any> & {
  meta: {
    id: string;
    type: "misc" | "dashboard";
  };
};
