import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Lightbulb } from "lucide-react"

const suggestions = [
  {
    id: 1,
    title: "Increase production capacity",
    description: "Ramp up production by 15% to meet projected demand surge.",
    impact: "High",
    isRecommended: true,
  },
  {
    id: 2,
    title: "Optimize supply chain",
    description: "Streamline logistics to reduce lead times by 20%.",
    impact: "Medium",
    isRecommended: false,
  },
  {
    id: 3,
    title: "Implement dynamic pricing",
    description: "Adjust prices based on real-time demand to maximize revenue.",
    impact: "Medium",
    isRecommended: false,
  },
]

export function ActionPanel() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5" />
          AI Suggestions
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {suggestions.map((suggestion) => (
            <Card key={suggestion.id} className={suggestion.isRecommended ? "border-primary" : ""}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{suggestion.title}</h3>
                  {suggestion.isRecommended && <Badge variant="secondary">Recommended</Badge>}
                </div>
                <p className="text-sm text-muted-foreground mb-2">{suggestion.description}</p>
                <div className="flex justify-between items-center">
                  <Badge variant={suggestion.impact === "High" ? "destructive" : "outline"}>
                    {suggestion.impact} Impact
                  </Badge>
                  <Button variant="ghost" size="sm" className="text-primary">
                    Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

