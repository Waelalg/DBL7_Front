"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function MakePlan() {
  const router = useRouter()

  const handleMakePlan = () => {
    router.push("/planning/gabriela-cashmere-blazer")
  }

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <p className="text-sm text-muted-foreground">Create a plan based on predictions:</p>
      <Button onClick={handleMakePlan}>Make Plan</Button>
    </div>
  )
}

