"use client";
import { Tag } from "@govtechmy/myds-react/tag";
import { useProductContext } from "./context";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export default function ProductFilter() {
  const { setFilter, filter } = useProductContext();
  const t = useTranslations("Product");

  const types = ["all", "websites", "module", "libraries", "standard", "applications"] as const;

  return (
    <div className="flex flex-wrap items-center gap-y-2 lg:gap-y-0">
      {types.map((type) => (
        <Tag
          key={type}
          mode="pill"
          className={cn(
            "border-0 capitalize hover:cursor-pointer",
            type !== filter && "bg-transparent",
          )}
          size="small"
          onClick={() => setFilter(type)}
        >
          {t(`filter.${type}`)}
        </Tag>
      ))}
    </div>
  );
}
