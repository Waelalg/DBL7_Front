"use client";  // ✅ Ensures the component runs on the client side

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogAction } from "@/components/ui/alert-dialog";

const ScenarioSimulation = () => {
  const [showScenarioDialog, setShowScenarioDialog] = useState(false);
  const [currentScenario, setCurrentScenario] = useState<string | null>(null);

  const handleSimulateScenario = (scenario: string) => {
    console.log("Simulating scenario:", scenario);
    setCurrentScenario(scenario);
    setShowScenarioDialog(true);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Study Cases and Scenario Simulation</CardTitle>
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
      </CardContent>

      {/* Scenario Popup Dialog */}
      <AlertDialog open={showScenarioDialog} onOpenChange={setShowScenarioDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Scenario Analysis</AlertDialogTitle>
            <AlertDialogDescription>
              {currentScenario === "increased-production" && (
                <>
                  <div className="font-medium text-destructive">Potential Consequences:</div>
                  <ul className="list-disc list-inside space-y-1">
                    <li>15% increase in operational costs</li>
                    <li>Potential quality control issues</li>
                    <li>Need for additional workforce training</li>
                  </ul>
                  <div className="font-medium text-primary">Suggested Solutions:</div>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Implement automated quality control systems</li>
                    <li>Develop comprehensive training programs</li>
                    <li>Optimize shift schedules</li>
                  </ul>
                </>
              )}
              {currentScenario === "supply-chain-opt" && (
                <>
                  <div className="font-medium text-destructive">Potential Consequences:</div>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Initial investment costs</li>
                    <li>Potential delays during implementation</li>
                  </ul>
                  <div className="font-medium text-primary">Suggested Solutions:</div>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Use predictive analytics for supply chain forecasting</li>
                    <li>Collaborate with reliable logistics partners</li>
                  </ul>
                </>
              )}
              {currentScenario === "market-expansion" && (
                <>
                  <div className="font-medium text-destructive">Potential Consequences:</div>
                  <ul className="list-disc list-inside space-y-1">
                    <li>High marketing and distribution costs</li>
                    <li>Risk of market saturation</li>
                  </ul>
                  <div className="font-medium text-primary">Suggested Solutions:</div>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Focus on targeted marketing strategies</li>
                    <li>Expand gradually to minimize financial risk</li>
                  </ul>
                </>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowScenarioDialog(false)}>Acknowledge</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
};

export default ScenarioSimulation;
