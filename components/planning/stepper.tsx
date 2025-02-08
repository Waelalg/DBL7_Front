"use client"

import { cn } from "@/lib/utils"

interface Step {
  id: number
  title: string
  isCompleted: boolean
}

interface StepperProps {
  steps: Step[]
  activeStep: number
  onStepClick: (step: number) => void
}

export function Stepper({ steps, activeStep, onStepClick }: StepperProps) {
  return (
    <div className="flex items-center w-full py-4">
      {steps.map((step, index) => {
        const isActive = activeStep === step.id

        return (
          <div key={step.id} className="flex items-center flex-1">
            <div className="relative flex-1 -ml-[16px] first:ml-0">
              <button
                onClick={() => onStepClick(step.id)}
                className={cn(
                  "w-full h-12 flex items-center justify-start transition-all duration-300 ease-in-out relative px-12", // Further increased px value
                  {
                    "bg-blue-600 text-white": isActive, // Active step
                    "bg-gray-100 text-gray-600": !isActive, // Inactive step
                  },
                )}
                style={{
                  clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%, 10% 50%)',
                }}
              >
                <span
                  className={cn("text-sm font-medium", {
                    "text-white": isActive, // White text for active step
                    "text-gray-600": !isActive, // Gray text for inactive steps
                  })}
                >
                  {step.title}
                </span>
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}
    