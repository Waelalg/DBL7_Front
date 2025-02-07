import { Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ModelPerformance } from "@/components/model-performance";
import { ActionItems } from "@/components/action-items";
import { Departments } from "@/components/departments";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="relative w-96">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Rechercher..." className="pl-8" />
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          + Add new widget
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Forecast Accuracy" value="85%" change={2.1} trend="up" />
        <MetricCard title="Inventory Turnover" value="12.5" change={0.3} trend="up" />
        <MetricCard title="On-Time Delivery" value="94%" change={-1.4} trend="down" />
        <MetricCard title="Demand-Supply Gap" value="3.2%" change={-0.5} trend="up" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ModelPerformance />
        </div>
        <div>
          <ActionItems />
        </div>
      </div>

      <Departments />
    </div>
  );
}

function MetricCard({
  title,
  value,
  change,
  trend,
}: {
  title: string;
  value: string;
  change: number;
  trend: "up" | "down";
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p
          className={`text-xs ${
            (trend === "up" && title !== "Demand-Supply Gap") || (trend === "down" && title === "Demand-Supply Gap")
              ? "text-green-500"
              : "text-red-500"
          }`}
        >
          {change > 0 ? "+" : ""}
          {change}% vs last month
        </p>
      </CardContent>
    </Card>
  );
}
