import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ScenarioPlanning() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Scenario Planning</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">AI Suggestions</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Button variant="outline" className="w-full justify-between">
                  Increase production capacity
                  <span className="text-sm text-muted-foreground">Details →</span>
                </Button>
              </li>
              <li>
                <Button variant="outline" className="w-full justify-between">
                  Optimize supply chain
                  <span className="text-sm text-muted-foreground">Details →</span>
                </Button>
              </li>
              <li>
                <Button variant="outline" className="w-full justify-between">
                  Implement dynamic pricing
                  <span className="text-sm text-muted-foreground">Details →</span>
                </Button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Best Scenario: Increased Production Capacity</h3>
            <p className="text-sm text-muted-foreground">
              This scenario involves ramping up production by 15% to meet projected demand surge.
            </p>
            <Button className="mt-2">Implement Scenario</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

