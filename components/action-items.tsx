// components/action-item.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingDown, Package, Truck } from "lucide-react";

interface ActionItems {
  title: string;
  description: string;
  icon: React.ElementType;
  severity: "high" | "medium" | "low";
}

const actionItems: ActionItems[] = [
  {
    title: "Forecast Deviation",
    description: "Q3 forecast 15% below target",
    icon: TrendingDown,
    severity: "high",
  },
  {
    title: "Low Inventory",
    description: "SKU-1234 below safety stock",
    icon: Package,
    severity: "medium",
  },
  {
    title: "Supplier Delay",
    description: "Raw material shipment delayed",
    icon: Truck,
    severity: "high",
  },
];

export function ActionItems() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Action Items</CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {actionItems.map((item) => (
          <div key={item.title} className="flex items-start space-x-4">
            <div
              className={`p-2 rounded-full ${
                item.severity === "high" ? "bg-red-100" : "bg-yellow-100"
              }`}
            >
              <item.icon
                className={`h-4 w-4 ${
                  item.severity === "high" ? "text-red-600" : "text-yellow-600"
                }`}
              />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
            <Button variant="ghost" size="sm">
              Review
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
