// app/demandForecasting/make-prediction.tsx
"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export default function MakePrediction() {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <p className="text-sm text-muted-foreground">
        Enter prediction parameters :
      </p>
      <Button>Predict</Button>
    </div>
  );
}
