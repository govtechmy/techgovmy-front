"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@govtechmy/myds-react/select";
import {
  SummaryList,
  SummaryListBody,
  SummaryListRow,
  SummaryListTerm,
  SummaryListDetail,
  SummaryListAction,
} from "@govtechmy/myds-react/summary-list";
import { Product } from "@/payload-types";

import { useState } from "react";

export default function MetricData({ product }: { product: Product }) {
  const [selectedMetrics, setSelectedMetrics] = useState<number>(0);
  const metrics = product.metrics;

  return (
    <div className="flex h-full w-full flex-col gap-2">
      <div className="flex items-center gap-4">
        <div className="font-heading text-heading-xs font-semibold">Metrics</div>
        <Select
          size="small"
          variant="outline"
          value={selectedMetrics.toString()}
          onValueChange={(val) => setSelectedMetrics(Number(val))}
        >
          <SelectTrigger className="text-nowrap">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {metrics.map((item, index) => (
              <SelectItem key={index} value={index.toString()}>
                {`${item.year} ${item.quarter}`}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {metrics
        .filter((_, index) => index === selectedMetrics)
        .map((entry, index) => (
          <SummaryList key={`${selectedMetrics}-${index}`} className="w-full">
            <SummaryListBody className="">
              <SummaryListRow className="border-b-0">
                <SummaryListTerm className="text-lg text-txt-primary">Cost Saving</SummaryListTerm>
                <SummaryListDetail className="border-b">
                  {entry.data.cost_savings}
                </SummaryListDetail>
                <SummaryListAction />
              </SummaryListRow>

              <SummaryListRow className="border-b-0">
                <SummaryListTerm className="text-lg text-txt-primary">Team Members</SummaryListTerm>
                <SummaryListDetail className="border-b">
                  {entry.data.team_members.map((member) => member.name).join(", ")}
                </SummaryListDetail>
                <SummaryListAction />
              </SummaryListRow>

              <SummaryListRow className="border-b-0">
                <SummaryListTerm className="text-lg text-txt-primary">Total Usage</SummaryListTerm>
                <SummaryListDetail className="w-full border-b">
                  {entry.data.usage.total_usage}
                </SummaryListDetail>
                <SummaryListAction />
              </SummaryListRow>

              <SummaryListRow className="border-b-0">
                <SummaryListTerm className="text-lg text-txt-primary">
                  Monthly Usage
                </SummaryListTerm>
                <SummaryListDetail className="border-b">
                  {entry.data.usage.monthly_usage}
                </SummaryListDetail>
                <SummaryListAction />
              </SummaryListRow>
            </SummaryListBody>
          </SummaryList>
        ))}
    </div>
  );
}
