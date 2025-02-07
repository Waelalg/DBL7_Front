// components/PreviousPredictions.tsx
"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function PreviousPredictions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Previous Predictions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div>
                <p className="text-sm font-medium">prediction_001.csv</p>
                <p className="text-sm text-muted-foreground">© 2024-02-07</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
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
  );
}
