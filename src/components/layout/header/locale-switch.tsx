"use client";

import { usePathname, useRouter } from "@/lib/i18n/routing";
import { GlobeIcon } from "@govtechmy/myds-react/icon";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@govtechmy/myds-react/select";
import { useParams, useSearchParams } from "next/navigation";
import { useTransition } from "react";

export default function LocaleSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = useParams();
  const locale = params.locale as "ms-MY" | "en-GB";

  const [_, startTransition] = useTransition();

  const onValueChange = (locale: string) => {
    startTransition(() => {
      router.replace(`${pathname}${searchParams ? `?${searchParams}` : ""}`, {
        locale,
        scroll: false,
      });
    });
  };

  const name: Record<"ms-MY" | "en-GB", { full: string; short: string }> = {
    "en-GB": {
      full: "English",
      short: "EN",
    },
    "ms-MY": {
      full: "Bahasa Melayu",
      short: "BM",
    },
  };

  if (!locale) {
    return null;
  }

  return (
    <Select
      variant={"outline"}
      size={"small"}
      multiple={false}
      onValueChange={onValueChange}
      defaultValue={locale}
      value={locale}
    >
      <SelectTrigger>
        <GlobeIcon />
        <SelectValue className="text-txt-black-900">
          {(locale) => name?.[locale as "ms-MY" | "en-GB"].short}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {Object.entries(name).map(([value, label]) => (
            <SelectItem key={value} value={value}>
              {label.full}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
