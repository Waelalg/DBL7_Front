"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const scenarios = [
  { id: 1, name: "Increased Production", impact: "+15% Revenue", risk: "Medium" },
  { id: 2, name: "Supply Chain Optimization", impact: "-10% Costs", risk: "Low" },
  { id: 3, name: "New Market Entry", impact: "+25% Revenue", risk: "High" },
  { id: 4, name: "Product Line Expansion", impact: "+20% Revenue", risk: "Medium" },
]

export function ScenarioList() {
  const [selectedScenario, setSelectedScenario] = useState(null)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Other Scenarios</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Scenario</TableHead>
              <TableHead>Projected Impact</TableHead>
              <TableHead>Risk Level</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {scenarios.map((scenario) => (
              <TableRow key={scenario.id}>
                <TableCell className="font-medium">{scenario.name}</TableCell>
                <TableCell>{scenario.impact}</TableCell>
                <TableCell>{scenario.risk}</TableCell>
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm" onClick={() => setSelectedScenario(scenario)}>
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{selectedScenario?.name}</DialogTitle>
                        <DialogDescription>Detailed information about the scenario.</DialogDescription>
                      </DialogHeader>
                      <div className="py-4">
                        <p>
                          <strong>Projected Impact:</strong> {selectedScenario?.impact}
                        </p>
                        <p>
                          <strong>Risk Level:</strong> {selectedScenario?.risk}
                        </p>
                        <p className="mt-4">
                          This is where more detailed information about the scenario would be displayed, including
                          specific strategies, resource requirements, and potential outcomes.
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

