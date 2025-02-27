import { getTranslations } from "next-intl/server";
import React from "react";

export default async function HomePage() {
  const t = await getTranslations();
  return (
    <div className="flex-1 container mx-auto px-4.5 lg:px-6 border-otl-divider border-x">
      {t("HomePage.about")}
    </div>
  );
}
