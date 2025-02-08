import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PerformanceChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Plan vs. Actual Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          {/* Placeholder for chart */}
          <div className="flex h-full items-center justify-center bg-muted">
            <p className="text-muted-foreground">Performance chart placeholder</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

