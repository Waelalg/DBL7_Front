"use client"

import { useState } from "react"
import { Stepper } from "@/components/planning/stepper"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"

const steps = [
  {
    id: 1,
    title: "Resources",
    isCompleted: true,
    content: {
      locations: [
        {
          name: "Asia Supply Hub",
          status: "On Track",
          progress: 75,
          details: "Raw materials sourcing and quality control in progress",
          data: [
            { name: "Jan", current: 4000, projected: 4500 },
            { name: "Feb", current: 3000, projected: 3800 },
            { name: "Mar", current: 2000, projected: 2800 },
            { name: "Apr", current: 2780, projected: 3500 },
            { name: "May", current: 1890, projected: 2800 },
            { name: "Jun", current: 2390, projected: 3200 },
          ],
        },
        {
          name: "European Materials Center",
          status: "Delayed",
          progress: 60,
          details: "Experiencing shipping delays from main suppliers",
          data: [
            { name: "Jan", current: 3500, projected: 4000 },
            { name: "Feb", current: 2800, projected: 3500 },
            { name: "Mar", current: 1800, projected: 2500 },
            { name: "Apr", current: 2400, projected: 3000 },
            { name: "May", current: 1700, projected: 2400 },
            { name: "Jun", current: 2100, projected: 2800 },
          ],
        },
      ],
      risks: ["Supply chain disruptions", "Raw material price volatility"],
      solutions: [
        "Diversify supplier base and increase safety stock",
        "Implement hedging strategies and long-term contracts",
      ],
    },
  },
  {
    id: 2,
    title: "Production",
    isCompleted: true,
    content: {
      locations: [
        {
          name: "Main Factory - China",
          status: "On Track",
          progress: 80,
          details: "Production line operating at optimal capacity",
          data: [
            { name: "Jan", efficiency: 85, target: 90 },
            { name: "Feb", efficiency: 88, target: 90 },
            { name: "Mar", efficiency: 92, target: 90 },
            { name: "Apr", efficiency: 90, target: 90 },
            { name: "May", efficiency: 93, target: 90 },
            { name: "Jun", efficiency: 95, target: 90 },
          ],
        },
        {
          name: "Assembly Plant - Mexico",
          status: "At Risk",
          progress: 45,
          details: "Technical issues causing slower assembly rate",
          data: [
            { name: "Jan", efficiency: 75, target: 85 },
            { name: "Feb", efficiency: 78, target: 85 },
            { name: "Mar", efficiency: 80, target: 85 },
            { name: "Apr", efficiency: 79, target: 85 },
            { name: "May", efficiency: 82, target: 85 },
            { name: "Jun", efficiency: 84, target: 85 },
          ],
        },
      ],
      risks: ["Equipment breakdowns", "Quality control issues"],
      solutions: [
        "Implement predictive maintenance and regular equipment audits",
        "Enhance QC processes and invest in automation",
      ],
    },
  },
  {
    id: 3,
    title: "Distribution",
    isCompleted: false,
    content: {
      locations: [
        {
          name: "North America Hub",
          status: "Not Started",
          progress: 0,
          details: "Awaiting production completion",
          data: [
            { name: "Jan", inventory: 1000, demand: 1200 },
            { name: "Feb", inventory: 1100, demand: 1300 },
            { name: "Mar", inventory: 1200, demand: 1400 },
            { name: "Apr", inventory: 1300, demand: 1500 },
            { name: "May", inventory: 1400, demand: 1600 },
            { name: "Jun", inventory: 1500, demand: 1700 },
          ],
        },
        {
          name: "European Distribution Center",
          status: "Planning",
          progress: 10,
          details: "Route optimization in progress",
          data: [
            { name: "Jan", inventory: 800, demand: 900 },
            { name: "Feb", inventory: 850, demand: 950 },
            { name: "Mar", inventory: 900, demand: 1000 },
            { name: "Apr", inventory: 950, demand: 1050 },
            { name: "May", inventory: 1000, demand: 1100 },
            { name: "Jun", inventory: 1050, demand: 1150 },
          ],
        },
      ],
      risks: ["Inventory stockouts", "Transportation delays"],
      solutions: [
        "Implement just-in-time inventory management and demand forecasting",
        "Diversify shipping methods and partners",
      ],
    },
  },
]

export default function PlanDetailsPage({ params }: { params: { productName: string } }) {
  const [activeStep, setActiveStep] = useState(1)
  const productName = decodeURIComponent(params.productName).replace(/-/g, " ")
  const currentStep = steps.find((step) => step.id === activeStep)

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center justify-between">
          <Link href={`/planning/${params.productName}`} passHref>
            <Button variant="ghost" className="flex items-center text-indigo-600 hover:text-indigo-800">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Planning
            </Button>
          </Link>
          <h1 className="text-2xl font-semibold">{productName} Implementation Details</h1>
        </div>

        <div className="mb-8">
          <Stepper steps={steps} activeStep={activeStep} onStepClick={setActiveStep} />
        </div>

        {currentStep && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{currentStep.title} Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  {currentStep.content.locations.map((location, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader>
                        <CardTitle className="text-lg">{location.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-4">
                          <p className="font-semibold">{location.status}</p>
                          <p className="text-sm text-gray-600">{location.details}</p>
                        </div>
                        <div className="h-[200px] mb-4">
                          <ResponsiveContainer width="100%" height="100%">
                            {currentStep.id === 2 ? (
                              <LineChart data={location.data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="efficiency" stroke="#8884d8" />
                                <Line type="monotone" dataKey="target" stroke="#82ca9d" />
                              </LineChart>
                            ) : (
                              <BarChart data={location.data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey={currentStep.id === 1 ? "current" : "inventory"} fill="#8884d8" />
                                <Bar dataKey={currentStep.id === 1 ? "projected" : "demand"} fill="#82ca9d" />
                              </BarChart>
                            )}
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Risks</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {currentStep.content.risks.map((risk, index) => (
                      <li key={index} className="text-red-600">
                        {risk}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Suggested Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    {currentStep.content.solutions.map((solution, index) => (
                      <li key={index} className="text-green-600">
                        {solution}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

