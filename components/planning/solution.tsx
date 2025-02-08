import { CheckCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface SolutionProps {
  solution: string
}

export function Solution({ solution }: SolutionProps) {
  return (
    <Alert variant="success" className="border-green-500 bg-green-50 py-2">
      <CheckCircle className="h-4 w-4 text-green-500" />
      <AlertDescription className="text-green-700">{solution}</AlertDescription>
    </Alert>
  )
}

