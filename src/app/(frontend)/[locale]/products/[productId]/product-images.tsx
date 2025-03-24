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

export default function ProductImages() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const images = ["image-slider.png", "image-slider-1.png", "image-slider-2.png"];

  return (
    <Carousel setApi={setApi} className="relative" opts={{ loop: true }}>
      <CarouselContent className="w-full h-[239.95px] md:h-[445.8px] lg:h-[485.4px] border border-otl-gray-200 rounded-md overflow-hidden relative">
        {images.map((item, index) => {
          return (
            <CarouselItem
              key={index}
              className="relative w-full h-[239.95px] md:h-[445.8px] lg:h-[485.4px]"
            >
              <Image
                priority
                src={`/static/product-carousel/${item}`}
                fill={true}
                alt={item}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                className="absolute object-center"
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <div className="flex flex-col-reverse items-end gap-6 lg:flex-row lg:justify-between absolute bottom-0 h-[70px] p-4 w-full">
        <div className="hidden lg:flex items-center gap-3">
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
