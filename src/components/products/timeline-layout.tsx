import { cn } from "@/lib/utils";

type TimelineProps = {
  className?: string;
  items: Array<{
    date: string;
    title: string;
    desc: string;
  }>;
  startRight?: boolean;
};

export default function TimelineLayout({ className, items, startRight = false }: TimelineProps) {
  const x = startRight ? 1 : 0;

  return (
    <div className={cn("grid grid-cols-1 gap-x-14 gap-y-3 max-sm:ml-8 sm:grid-cols-2", className)}>
      {items.map(({ date, title, desc }, i) => (
        <div
          key={i}
          className={cn(
            "relative flex flex-col justify-center sm:row-span-2",
            startRight && i === 0 ? "sm:col-start-2" : "",
          )}
          style={{ gridRowStart: i + 1 }}
        >
          <div
            className={cn(
              "relative flex h-fit flex-col gap-1 rounded-xl border border-gray-200 px-4 py-3",
              "group hover:border-govtech-tertiary hover:ring-1 hover:ring-govtech-secondary",
            )}
          >
            <p className="line-clamp-1 text-xs font-medium uppercase tracking-widest text-[#A1A1AA]">
              {date}
            </p>
            <p className="line-clamp-2 font-medium text-[#18181B]">{title}</p>
            <p className="line-clamp-4 text-sm text-[#3F3F46]">{desc}</p>

            {/* Shaft */}
            <div
              className={cn(
                i % 2 === x
                  ? "max-sm:-left-7 sm:-right-7" // [ left ]-|
                  : "-left-7", // |-[ right ]
                "absolute top-1/2 h-px w-[26px] -translate-y-1/2 transform border border-dashed border-[#52525B]",
                "group-hover:border-y-2 group-hover:border-[#96B7FF]",
              )}
            />

            {/* Pivot */}
            <div
              className={cn(
                i % 2 === x
                  ? "max-sm:-left-[33px] sm:-right-[33px]" // [ left ]-|
                  : "-left-[33px]", // |-[ right ]
                "absolute top-1/2 size-2 -translate-y-1/2 transform rounded-full bg-[#2563EB]",
                "ring-offset-background ring-[#96B7FF] ring-offset-[3px] group-hover:ring",
              )}
            />

            {/* Trail */}
            <div
              className={cn(
                i % 2 === x
                  ? "max-sm:-left-[29.5px] sm:-right-[29.5px]" // [ left ]-|
                  : "-left-[29.5px]", // |-[ right ]
                "absolute top-1/2 h-1/2 w-px bg-gradient-to-b from-[#2563EB] from-0% to-transparent to-100% sm:h-2/5",
              )}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
