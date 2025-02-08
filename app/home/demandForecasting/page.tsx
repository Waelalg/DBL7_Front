// app/demandForecasting/page.tsx
"use client";

import React from "react";
import { DownloadIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import MakePrediction from "./make-prediction";
import { PredictionOverview } from "@/components/demandForecasting/PredictionOverview";
import { PreviousPredictions } from "@/components/demandForecasting/PreviousPredictions";
import { NotesCard } from "@/components/demandForecasting/NotesCard";
import { FilesDocumentsCard } from "@/components/demandForecasting/FilesDocumentsCard";

export default function DemandForecastingPage() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="grid gap-8 md:grid-cols-[1fr,300px]">
          <div className="space-y-8">
            {/* Prediction Overview */}
            <PredictionOverview />

            {/* Make Prediction */}
            <Card>
              <CardHeader>
                <CardTitle>Make Prediction</CardTitle>
              </CardHeader>
              <CardContent>
                <MakePrediction />
              </CardContent>
            </Card>

            {/* Previous Predictions */}
           <Card className="p-4">
      <CardHeader>
        <CardTitle className="text-lg">Previous Predictions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <p className="text-sm font-medium">prediction_001.csv</p>
              <p className="text-xs text-muted-foreground">© 2024-02-07</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-green-600">
                Accuracy: 92%
              </span>
              <Button variant="outline" size="sm">
                View Results
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            {/* Notes */}
            <NotesCard />

            {/* Files/Documents */}
            <FilesDocumentsCard />
          </div>
        </div>
      </div>
    </div>
  );
}
