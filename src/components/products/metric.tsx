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
import { useState } from "react";

export default function MetricData() {
  const [selectedMetrics, setSelectedMetrics] = useState<string>("2024-Q1");
  console.log(selectedMetrics);

  const sampleMetadata = [
    {
      year: 2024,
      quarter: "Q1",
      data: {
        cost_savings: 12000,
        team_members: [
          { name: "Harris Azmi", id: "" },
          { name: "Fikri", id: "" },
          { name: "Irfan", id: "" },
          { name: "Farhan", id: "" },
          { name: "Juwaini", id: "" },
        ],
        usage: {
          total_usage: 3000,
          monthly_usage: 1000,
        },
      },
      id: "1",
    },
    {
      year: 2024,
      quarter: "Q2",
      data: {
        cost_savings: 15000,
        team_members: [
          { name: "Harris Azmi", id: "" },
          { name: "Fikri", id: "" },
          { name: "Irfan", id: "" },
          { name: "Farhan", id: "" },
          { name: "Juwaini", id: "" },
        ],
        usage: {
          total_usage: 4500,
          monthly_usage: 1500,
        },
      },
      id: "2",
    },
    {
      year: 2025,
      quarter: "Q1",
      data: {
        cost_savings: 8000,
        team_members: [
          { name: "Harris Azmi", id: "" },
          { name: "Fikri", id: "" },
          { name: "Irfan", id: "" },
          { name: "Farhan", id: "" },
          { name: "Juwaini", id: "" },
        ],
        usage: {
          total_usage: 2400,
          monthly_usage: 800,
        },
      },
      id: "3",
    },
    {
      year: 2025,
      quarter: "Q2",
      data: {
        cost_savings: 18000,
        team_members: [
          { name: "Harris Azmi", id: "" },
          { name: "Fikri", id: "" },
          { name: "Irfan", id: "" },
          { name: "Farhan", id: "" },
          { name: "Juwaini", id: "" },
        ],
        usage: {
          total_usage: 6000,
          monthly_usage: 2000,
        },
      },
      id: "4",
    },
  ];
  return (
    <div className="flex h-full w-full flex-col gap-2">
      <div className="flex items-center gap-4">
        <div className="font-heading text-heading-xs font-semibold">Metrics</div>
        <Select
          size="small"
          variant="outline"
          value={selectedMetrics}
          onValueChange={(val) => setSelectedMetrics(val)}
        >
          <SelectTrigger className="text-nowrap">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {sampleMetadata.map((item, index) => (
              <SelectItem key={index} value={`${item.year}-${item.quarter}`}>
                {`${item.year} ${item.quarter}`}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {sampleMetadata
        .filter((entry) => `${entry.year}-${entry.quarter}` === selectedMetrics)
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
