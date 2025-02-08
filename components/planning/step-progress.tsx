"use client"

import { Progress } from "@/components/ui/progress"

interface StepProgressProps {
  progress: number
}

export function StepProgress({ progress }: StepProgressProps) {
  return (
    <div className="flex items-center gap-2">
      <Progress value={progress} className="w-32" />
      <span className="text-sm font-medium">{progress}%</span>
    </div>
  )
}

