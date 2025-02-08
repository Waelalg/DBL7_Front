import { AlertTriangle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface RiskAlertProps {
  risk: string
}

export function RiskAlert({ risk }: RiskAlertProps) {
  return (
    <Alert variant="destructive" className="py-2">
      <AlertTriangle className="h-4 w-4" />
      <AlertDescription>{risk}</AlertDescription>
    </Alert>
  )
}

