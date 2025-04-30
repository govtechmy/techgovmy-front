"use client";
import { Tag } from "@govtechmy/myds-react/tag";

export default function ProductFilter() {
  return (
    <div className="flex items-center">
      <Tag mode="pill" className="border-0 hover:cursor-pointer" size="small">
        Websites
      </Tag>
      <Tag mode="pill" className="border-0 bg-transparent hover:cursor-pointer" size="small">
        Module
      </Tag>
      <div className="h-3 w-fit border border-otl-gray-300" />
      <Tag mode="pill" className="border-0 bg-transparent hover:cursor-pointer" size="small">
        Libraries
      </Tag>
      <div className="h-3 w-fit border border-otl-gray-300" />
      <Tag mode="pill" className="border-0 bg-transparent hover:cursor-pointer" size="small">
        Standard
      </Tag>
      <div className="h-3 w-fit border border-otl-gray-300" />
      <Tag mode="pill" className="border-0 bg-transparent hover:cursor-pointer" size="small">
        Applications
      </Tag>
    </div>
  );
}
