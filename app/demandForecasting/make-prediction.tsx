"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface PredictionConfig {
  outputMode: string
  targetVariable: string
  periodsToPredict: string
  periodType: string
  startPeriod: string
  startYear: string
  predictedColumnName: string
}

export default function MakePrediction() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  const [config, setConfig] = useState<PredictionConfig>({
    outputMode: "",
    targetVariable: "",
    periodsToPredict: "12",
    periodType: "Month(12)",
    startPeriod: "1",
    startYear: "2024",
    predictedColumnName: "PredictedValues",
  })

  const handleNext = () => {
    if (step === 1) {
      setStep(2)
    } else {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    setIsProcessing(true)
    // Simulate processing delay
    setTimeout(() => {
      console.log("Submitting:", config)
      setIsProcessing(false)
      setOpen(false)
      setStep(1)
    }, 3000)
  }

  const handleBack = () => {
    setStep(1)
  }

  const updateConfig = (key: keyof PredictionConfig, value: string) => {
    setConfig((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <>
      <div className="flex items-center justify-between p-4 border rounded-lg">
        <p className="text-sm text-muted-foreground">Enter prediction parameters:</p>
        <Button onClick={() => setOpen(true)}>Predict</Button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Configure Prediction - Step {step}/2</DialogTitle>
          </DialogHeader>

          {step === 1 ? (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="outputMode">Output Mode</Label>
                <Select value={config.outputMode} onValueChange={(value) => updateConfig("outputMode", value)}>
                  <SelectTrigger id="outputMode">
                    <SelectValue placeholder="Forecast" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="forecast">Forecast</SelectItem>
                    <SelectItem value="simulation">Simulation</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="targetVariable">Target Variable</Label>
                <Select value={config.targetVariable} onValueChange={(value) => updateConfig("targetVariable", value)}>
                  <SelectTrigger id="targetVariable">
                    <SelectValue placeholder="Revenue in EUR" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="revenue">Revenue in EUR</SelectItem>
                    <SelectItem value="units">Units Sold</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="periodsToPredict">Periods to Predict</Label>
                <Input
                  id="periodsToPredict"
                  value={config.periodsToPredict}
                  onChange={(e) => updateConfig("periodsToPredict", e.target.value)}
                  type="number"
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleNext}>Next Step</Button>
              </div>
            </div>
          ) : (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="periodType">Period Type</Label>
                <Select value={config.periodType} onValueChange={(value) => updateConfig("periodType", value)}>
                  <SelectTrigger id="periodType">
                    <SelectValue placeholder="Month(12)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Month(12)">Month(12)</SelectItem>
                    <SelectItem value="Quarter(4)">Quarter(4)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="startPeriod">Start Period</Label>
                  <Input
                    id="startPeriod"
                    value={config.startPeriod}
                    onChange={(e) => updateConfig("startPeriod", e.target.value)}
                    type="number"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="startYear">Start Year</Label>
                  <Input
                    id="startYear"
                    value={config.startYear}
                    onChange={(e) => updateConfig("startYear", e.target.value)}
                    type="number"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="predictedColumnName">Predicted Column Name</Label>
                <Input
                  id="predictedColumnName"
                  value={config.predictedColumnName}
                  onChange={(e) => updateConfig("predictedColumnName", e.target.value)}
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={handleBack}>
                  Back
                </Button>
                <Button variant="default" onClick={handleNext} disabled={isProcessing} className="min-w-[100px]">
                  {isProcessing ? "Processing..." : "Submit"}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

