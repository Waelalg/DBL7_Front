// components/NotesCard.tsx
"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function NotesCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Notes</CardTitle>
        <Button variant="outline" size="sm">
          Add Note
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Initial data analysis completed
          </p>
          <p className="text-sm text-muted-foreground">
            Model accuracy improved by 5%
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
