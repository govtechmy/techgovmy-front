"use client";
import { Tag } from "@govtechmy/myds-react/tag";
import { useProductContext } from "./context";
import { cn } from "@/lib/utils";

export default function ProductFilter() {
  const { setFilter, filter } = useProductContext();

  const types = ["all", "websites", "module", "libraries", "standard", "applications"] as const;

  return (
    <div className="flex items-center">
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
          {type}
        </Tag>
      ))}
    </div>
  );
}
