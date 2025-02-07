// components/FilesDocumentsCard.tsx
"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";
import { Separator } from "@/components/ui/separator";

export function FilesDocumentsCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Files / Documents</CardTitle>
        <Button variant="outline" size="sm">
          Add Files
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm">Data Analysis Report.pdf</p>
            <Button variant="ghost" size="icon">
              <DownloadIcon className="h-4 w-4" />
            </Button>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <p className="text-sm">Raw Data.csv</p>
            <Button variant="ghost" size="icon">
              <DownloadIcon className="h-4 w-4" />
            </Button>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <p className="text-sm">Model Results.csv</p>
            <Button variant="ghost" size="icon">
              <DownloadIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
