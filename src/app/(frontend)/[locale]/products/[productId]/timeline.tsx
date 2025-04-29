import { CheckCircleFillIcon } from "@govtechmy/myds-react/icon";
import { cn } from "@/lib/utils";

interface TimelineProps {
  items: string[];
  active: number;
}

export default function Timeline({ items, active }: TimelineProps) {
  return (
    <div className="lg:hide-scrollbar flex flex-col items-center p-6 lg:flex-row lg:justify-start lg:overflow-scroll lg:py-20 xl:overflow-visible">
      {items.map((title, i) => (
        <div key={i} className="flex flex-col items-center lg:flex-row">
          <div className="relative size-1.5 rounded-full bg-govtech-600">
            <div
              className={cn(
                "border-[0.5px] border-dashed border-govtech-600",
                "h-px w-5 lg:h-5 lg:w-px",
                "absolute transform max-lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2",
                i % 2 === 0
                  ? "max-lg:right-full lg:bottom-full" // [ left ]-|
                  : "max-lg:left-full lg:top-full", // |-[ right ]
              )}
            >
              <div
                className={cn(
                  "shadow-button",
                  i === active
                    ? "border-govtech-600"
                    : i < active
                      ? "border-otl-gray-200"
                      : "border-otl-gray-300",
                  "flex gap-1 rounded-sm border px-1.5 py-1",
                  "absolute max-lg:-top-3.5 lg:-left-2.5",
                  i % 2 === 0
                    ? "max-lg:right-full lg:bottom-full" // [ left ]-|
                    : "max-lg:left-full lg:top-full", // |-[ right ]
                )}
              >
                {i < active ? (
                  <CheckCircleFillIcon className="size-4 shrink-0 text-govtech-600" />
                ) : (
                  <div
                    className={cn(
                      "mt-0.5 size-3 shrink-0 rounded-full border-4 border-govtech-600",
                      i === active ? "text-govtech-600" : "text-txt-gray-300 opacity-30",
                    )}
                  />
                )}
                <p
                  className={cn(
                    i === active
                      ? "text-govtech-600"
                      : i < active
                        ? "text-txt-black-700"
                        : "text-txt-black-disabled",
                    "line-clamp-2 text-xs font-medium",
                  )}
                >
                  {title}
                </p>
              </div>
            </div>
          </div>
          {i < items.length - 1 ? (
            <div className="h-8 w-px bg-gradient-to-b from-govtech-600 to-transparent lg:h-px lg:w-20 lg:bg-gradient-to-r" />
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
}
