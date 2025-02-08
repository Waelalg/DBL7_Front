"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

interface PredictionConfig {
  // Step 1
  outputMode: string
  targetVariable: string
  periodsToPredict: number

  // Step 2
  periodType: string
  startPeriod: number
  startYear: number
  predictedColumnName: string
}

interface PredictionDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function PredictionDialog({ open, onOpenChange }: PredictionDialogProps) {
  const router = useRouter()
  const [step, setStep] = React.useState(1)
  const [isProcessing, setIsProcessing] = React.useState(false)
  const [config, setConfig] = React.useState<PredictionConfig>({
    outputMode: "",
    targetVariable: "",
    periodsToPredict: 12,
    periodType: "",
    startPeriod: 1,
    startYear: new Date().getFullYear(),
    predictedColumnName: "PredictedValues",
  })

  const handleNext = () => {
    if (step === 1) {
      setStep(2)
    } else {
      setIsProcessing(true)
      // Here you would typically submit the form
      console.log("Submitting configuration:", config)
      // Simulate processing
      setTimeout(() => {
        setIsProcessing(false)
        onOpenChange(false)
        setStep(1)
        router.push("/home/demandForecasting")
      }, 2000)
    }
  }

  const handleBack = () => {
    setStep(1)
  }

  const handleCancel = () => {
    onOpenChange(false)
    setStep(1)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Configure Prediction - Step {step}/2</DialogTitle>
          <Button
            variant="ghost"
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            onClick={handleCancel}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogHeader>

        {step === 1 ? (
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="outputMode">Output Mode</label>
              <Select value={config.outputMode} onValueChange={(value) => setConfig({ ...config, outputMode: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Forecast" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="forecast">Forecast</SelectItem>
                  <SelectItem value="simulation">Simulation</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <label htmlFor="targetVariable">Target Variable</label>
              <Select
                value={config.targetVariable}
                onValueChange={(value) => setConfig({ ...config, targetVariable: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Revenue in EUR" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="revenue">Revenue in EUR</SelectItem>
                  <SelectItem value="units">Units Sold</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <label htmlFor="periodsToPredict">Periods to Predict</label>
              <Input
                id="periodsToPredict"
                type="number"
                value={config.periodsToPredict}
                onChange={(e) => setConfig({ ...config, periodsToPredict: Number.parseInt(e.target.value) })}
              />
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <Button variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
              <Button onClick={handleNext}>Next Step</Button>
            </div>
          </div>
        ) : (
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <label htmlFor="periodType">Period Type</label>
              <Select value={config.periodType} onValueChange={(value) => setConfig({ ...config, periodType: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Month(12)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="month">Month(12)</SelectItem>
                  <SelectItem value="quarter">Quarter(4)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label htmlFor="startPeriod">Start Period</label>
                <Input
                  id="startPeriod"
                  type="number"
                  value={config.startPeriod}
                  onChange={(e) => setConfig({ ...config, startPeriod: Number.parseInt(e.target.value) })}
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="startYear">Start Year</label>
                <Input
                  id="startYear"
                  type="number"
                  value={config.startYear}
                  onChange={(e) => setConfig({ ...config, startYear: Number.parseInt(e.target.value) })}
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label htmlFor="predictedColumnName">Predicted Column Name</label>
              <Input
                id="predictedColumnName"
                value={config.predictedColumnName}
                onChange={(e) => setConfig({ ...config, predictedColumnName: e.target.value })}
              />
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <Button variant="outline" onClick={handleBack}>
                Back
              </Button>
              <Button onClick={handleNext} disabled={isProcessing}>
                {isProcessing ? "Processing..." : "Submit"}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

