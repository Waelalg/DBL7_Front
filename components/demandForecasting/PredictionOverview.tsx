// components/PredictionOverview.tsx
"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Area,
} from "recharts";

interface DataPoint {
  month: string;
  value: number;
}

const data: DataPoint[] = [
  { month: "Jan 2023", value: 20 },
  { month: "Feb 2023", value: 30 },
  { month: "Mar 2023", value: 45 },
  { month: "Apr 2023", value: 35 },
  { month: "May 2023", value: 25 },
  { month: "Jun 2023", value: 30 },
  { month: "Jul 2023", value: 40 },
  { month: "Aug 2023", value: 35 },
  { month: "Sep 2023", value: 25 },
  { month: "Oct 2023", value: 30 },
  { month: "Nov 2023", value: 35 },
  { month: "Dec 2023", value: 40 },
];

export function PredictionOverview() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Prediction Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
