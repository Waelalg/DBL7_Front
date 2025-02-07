// components/model-performance.tsx
"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface DataPoint {
  month: string;
  mape: number;
}

const data: DataPoint[] = [
  { month: "Jan", mape: 15.2 },
  { month: "Feb", mape: 14.8 },
  { month: "Mar", mape: 13.5 },
  { month: "Apr", mape: 12.9 },
  { month: "May", mape: 11.7 },
  { month: "Jun", mape: 10.5 },
  { month: "Jul", mape: 9.8 },
  { month: "Aug", mape: 9.2 },
];

export function ModelPerformance() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Model Performance (MAPE)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="month"
                stroke="hsl(var(--foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="hsl(var(--foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip
                formatter={(value) => [`${value}%`, "MAPE"]}
                labelFormatter={(label) => `Month: ${label}`}
              />
              <Line
                type="monotone"
                dataKey="mape"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
