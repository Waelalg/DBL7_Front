"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const locationData = [
  {
    name: "Algiers",
    planned: 6000,
    actual: 5000,
  },
  {
    name: "Oran",
    planned: 4000,
    actual: 3500,
  },
  {
    name: "Constantine",
    planned: 3500,
    actual: 2800,
  },
  {
    name: "Annaba",
    planned: 2500,
    actual: 2000,
  },
  {
    name: "Ouargla",
    planned: 2000,
    actual: 1500,
  },
]

const productStock = {
  name: "Widget X",
  sku: "WX-1234",
  status: "Adequate",
}

export function StockOverview() {
  const [activeLocation, setActiveLocation] = useState<string | null>(null)

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-background border rounded-lg shadow-lg p-3">
          <p className="font-semibold">{label}</p>
          <p className="text-sm text-primary">Planned: {payload[0].value.toLocaleString()}</p>
          <p className="text-sm text-secondary">Actual: {payload[1].value.toLocaleString()}</p>
          <p className="text-sm text-muted-foreground">
            Variance: {(((payload[1].value - payload[0].value) / payload[0].value) * 100).toFixed(1)}%
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <Card className="col-span-1">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Stock Overview</CardTitle>
          <div className="mt-2">
            <h3 className="text-lg font-semibold">{productStock.name}</h3>
            <p className="text-sm text-muted-foreground">SKU: {productStock.sku}</p>
          </div>
        </div>
        <Badge variant={productStock.status === "Adequate" ? "secondary" : "destructive"}>{productStock.status}</Badge>
      </CardHeader>
      <CardContent>
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={locationData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              onMouseMove={(data) => {
                if (data.activeTooltipIndex !== undefined) {
                  setActiveLocation(locationData[data.activeTooltipIndex].name)
                }
              }}
              onMouseLeave={() => setActiveLocation(null)}
            >
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="name" tick={{ fill: "currentColor" }} axisLine={{ stroke: "currentColor" }} />
              <YAxis tick={{ fill: "currentColor" }} axisLine={{ stroke: "currentColor" }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar
                dataKey="planned"
                name="Planned Stock"
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]}
                className="opacity-70"
              />
              <Bar
                dataKey="actual"
                name="Actual Stock"
                fill="hsl(var(--secondary))"
                radius={[4, 4, 0, 0]}
                className="opacity-900"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

