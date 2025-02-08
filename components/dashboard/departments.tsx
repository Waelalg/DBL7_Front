// components/departments.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, TrendingUp, Truck, Package, Settings } from "lucide-react";

interface Department {
  name: string;
  subtext: string;
  icon: React.ElementType;
  members: number;
}

const departments: Department[] = [
  {
    name: "Demand Planning",
    subtext: "Forecast team",
    icon: TrendingUp,
    members: 15,
  },
  {
    name: "Supply Chain",
    subtext: "Logistics",
    icon: Truck,
    members: 23,
  },
  {
    name: "Inventory",
    subtext: "Stock management",
    icon: Package,
    members: 18,
  },
  {
    name: "Sales",
    subtext: "Revenue team",
    icon: BarChart,
    members: 20,
  },
];

export function Departments() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Departments</h2>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="gap-2">
            <Settings className="h-4 w-4" />
            Customize
          </Button>
          <Button >
            + Add team
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {departments.map((dept) => (
          <Card key={dept.name}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-muted rounded-lg">
                    <dept.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium">{dept.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {dept.subtext}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  +{dept.members}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
