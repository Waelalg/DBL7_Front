"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { month: "Jan", planned: 4000, actual: 4200 },
  { month: "Feb", planned: 4500, actual: 4300 },
  { month: "Mar", planned: 5000, actual: 5200 },
  { month: "Apr", planned: 5500, actual: 5100 },
  { month: "May", planned: 6000, actual: 6300 },
  { month: "Jun", planned: 6500, actual: 6200 },
]

export function PlanVsActual() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Plan vs. Actual Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="planned" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="actual" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

