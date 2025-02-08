"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const scenarioData = {
  title: "Increased Production Capacity",
  description: "This scenario involves ramping up production by 15% to meet projected demand surge.",
  metrics: [
    { name: "Revenue", current: 1000000, projected: 1150000 },
    { name: "Costs", current: 700000, projected: 770000 },
    { name: "Profit", current: 300000, projected: 380000 },
  ],
  risks: [
    "Potential overproduction if demand doesn't meet projections",
    "Increased strain on workforce and equipment",
    "Higher inventory carrying costs",
  ],
  benefits: [
    "Meet increased market demand",
    "Potential for increased market share",
    "Economies of scale in production",
  ],
}

interface ScenarioDetailsProps {
  productName: string
}

export function ScenarioDetails({ productName }: ScenarioDetailsProps) {
  const router = useRouter()

  const handleImplementScenario = () => {
    const encodedProductName = encodeURIComponent(productName)
    router.push(`/planning/${encodedProductName}/plandetails`)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Best Scenario: {scenarioData.title}</span>
          <Badge variant="secondary">Recommended</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{scenarioData.description}</p>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Financial Impact</h3>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={scenarioData.metrics}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="current" fill="#8884d8" name="Current" />
                <Bar dataKey="projected" fill="#82ca9d" name="Projected" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Risks</h3>
            <ul className="list-disc list-inside space-y-1">
              {scenarioData.risks.map((risk, index) => (
                <li key={index} className="text-sm text-muted-foreground">
                  {risk}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Benefits</h3>
            <ul className="list-disc list-inside space-y-1">
              {scenarioData.benefits.map((benefit, index) => (
                <li key={index} className="text-sm text-muted-foreground">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 flex justify-end">
          <Button onClick={handleImplementScenario}>Implement Scenario</Button>
        </div>
      </CardContent>
    </Card>
  )
}

