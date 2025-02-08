"use client"

import React, { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { X } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const scenarioData = {
  "increased-production": {
    title: "Increased Production",
    metric: "Revenue (USD)",
    data: [
      { month: "Jan", bestCase: 120000, actual: 110000 },
      { month: "Feb", bestCase: 130000, actual: 120000 },
      { month: "Mar", bestCase: 140000, actual: 130000 },
      { month: "Apr", bestCase: 150000, actual: 140000 },
      { month: "May", bestCase: 160000, actual: 150000 },
    ],
    consequences: ["Increased operational costs", "Potential strain on resources"],
    solutions: ["Optimize production processes", "Invest in additional resources"],
  },
  "supply-chain-opt": {
    title: "Supply Chain Optimization",
    metric: "Costs (USD)",
    data: [
      { month: "Jan", bestCase: 80000, actual: 90000 },
      { month: "Feb", bestCase: 75000, actual: 85000 },
      { month: "Mar", bestCase: 70000, actual: 80000 },
      { month: "Apr", bestCase: 65000, actual: 75000 },
      { month: "May", bestCase: 60000, actual: 70000 },
    ],
    consequences: ["Potential delays in delivery", "Risk of supply disruptions"],
    solutions: ["Diversify suppliers", "Implement inventory management system"],
  },
  "market-expansion": {
    title: "Market Expansion",
    metric: "Growth (%)",
    data: [
      { month: "Jan", bestCase: 25, actual: 20 },
      { month: "Feb", bestCase: 28, actual: 23 },
      { month: "Mar", bestCase: 31, actual: 26 },
      { month: "Apr", bestCase: 34, actual: 29 },
      { month: "May", bestCase: 37, actual: 32 },
    ],
    consequences: ["Increased competition", "Higher marketing costs"],
    solutions: ["Develop a strong brand identity", "Target specific market segments"],
  },
}

interface ScenarioSimulationProps {
  productName: string
}

const ScenarioSimulation: React.FC<ScenarioSimulationProps> = ({ productName }) => {
  const [currentScenario, setCurrentScenario] = useState<keyof typeof scenarioData | null>(null)

  const handleSimulateScenario = (scenario: keyof typeof scenarioData) => {
    setCurrentScenario(prev => prev === scenario ? null : scenario);
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Study Cases and Scenario Simulation for {productName}</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Scenario</TableHead>
                <TableHead>Impact</TableHead>
                <TableHead>Risk Level</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Increased Production</TableCell>
                <TableCell>+15% Revenue</TableCell>
                <TableCell>Medium</TableCell>
                <TableCell>
                  <Button variant="outline" onClick={() => handleSimulateScenario("increased-production")}>
                    Simulate
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Supply Chain Optimization</TableCell>
                <TableCell>-10% Costs</TableCell>
                <TableCell>Low</TableCell>
                <TableCell>
                  <Button variant="outline" onClick={() => handleSimulateScenario("supply-chain-opt")}>
                    Simulate
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Market Expansion</TableCell>
                <TableCell>+25% Growth</TableCell>
                <TableCell>High</TableCell>
                <TableCell>
                  <Button variant="outline" onClick={() => handleSimulateScenario("market-expansion")}>
                    Simulate
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          {currentScenario && (
            <div className="mt-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">{scenarioData[currentScenario].title} - Scenario Analysis</h3>
                <Button variant="ghost" onClick={() => setCurrentScenario(null)} aria-label="Close analysis">
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={scenarioData[currentScenario].data}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis dataKey="month" tick={{ fill: "currentColor" }} axisLine={{ stroke: "currentColor" }} />
                    <YAxis
                      tick={{ fill: "currentColor" }}
                      axisLine={{ stroke: "currentColor" }}
                      label={{
                        value: scenarioData[currentScenario].metric,
                        angle: -90,
                        position: "insideLeft",
                        style: { textAnchor: "middle" },
                      }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="bestCase"
                      name="Best Case"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                      dot={{ fill: "hsl(var(--primary))" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="actual"
                      name="Actual"
                      stroke="hsl(var(--secondary))"
                      strokeWidth={2}
                      dot={{ fill: "hsl(var(--secondary))" }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 space-y-4">
                <div>
                  <div className="font-medium text-destructive">Potential Consequences:</div>
                  <ul className="list-disc list-inside space-y-1">
                    {scenarioData[currentScenario].consequences.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-primary">Suggested Solutions:</div>
                  <ul className="list-disc list-inside space-y-1">
                    {scenarioData[currentScenario].solutions.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-background border rounded-lg shadow-lg p-3">
        <p className="font-semibold">{label}</p>
        <p className="text-sm text-primary">Best Case: {payload[0].value}</p>
        <p className="text-sm text-secondary">Actual: {payload[1].value}</p>
        <p className="text-sm text-muted-foreground">
          Variance: {(((payload[1].value - payload[0].value) / payload[0].value) * 100).toFixed(1)}%
        </p>
      </div>
    )
  }
  return null
}

export default ScenarioSimulation
