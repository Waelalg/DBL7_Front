// app/demandForecasting/make-prediction.tsx
"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export default function MakePrediction() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Enter prediction parameters below:
      </p>
      {/* Replace the following with your actual prediction form or logic */}
      <Button className="bg-blue-600 hover:bg-blue-700">Predict</Button>
    </div>
  );
}
