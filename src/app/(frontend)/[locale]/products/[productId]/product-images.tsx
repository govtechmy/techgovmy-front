"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProductImages({ images }: { images: string[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel setApi={setApi} className="relative" opts={{ loop: true }}>
      <CarouselContent className="relative h-[239.95px] w-full overflow-hidden rounded-md border border-otl-gray-200 md:h-[445.8px] lg:h-[382.5px]">
        {images.map((item, index) => {
          return (
            <CarouselItem
              key={index}
              className="relative h-[239.95px] w-full md:h-[445.8px] lg:h-[382.5px]"
            >
              <Image
                priority
                src={item}
                fill={true}
                alt={item}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                className="absolute object-center"
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div className="absolute bottom-0 flex h-[70px] w-full flex-col-reverse items-end gap-6 p-4 lg:flex-row lg:justify-between">
        <div className="hidden items-center gap-3 lg:flex">
          <CarouselPrevious className="static size-[40px] transform-none" />
          <CarouselNext className="static size-[40px] transform-none" />
        </div>
        <div className="flex items-center gap-x-2">
          {images.map((_, i) => (
            <svg
              key={i}
              viewBox={i === current ? "0 0 15 8" : "0 0 8 8"}
              className={cn(
                "transition-[colors,_width] duration-300 ease-in-out",
                i === current ? "h-2 w-[15px] text-bg-black-500" : "size-2 text-bg-black-300",
              )}
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0" width={i === current ? 15 : 8} height="8" rx="4" fill="currentColor" />
            </svg>
          ))}
        </div>
      </div>
    </Carousel>
  );
}
