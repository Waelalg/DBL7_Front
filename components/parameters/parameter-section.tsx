"use client"

import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface ParameterSectionProps {
  title: string
  description: string
  parameters: any[]
  onParameterChange: (parameterId: string, value: any) => void
}

export function ParameterSection({ title, description, parameters, onParameterChange }: ParameterSectionProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <div className="space-y-8">
        {parameters.map((parameter) => (
          <div key={parameter.id} className="flex flex-col space-y-2">
            <div className="space-y-1">
              <Label>{parameter.label}</Label>
              {parameter.description && <p className="text-sm text-muted-foreground">{parameter.description}</p>}
            </div>
            {parameter.type === "toggle" && (
              <Switch
                checked={parameter.value}
                onCheckedChange={(checked) => onParameterChange(parameter.id, checked)}
              />
            )}
            {parameter.type === "input" && (
              <Input value={parameter.value} onChange={(e) => onParameterChange(parameter.id, e.target.value)} />
            )}
            {parameter.type === "select" && parameter.options && (
              <Select value={parameter.value} onValueChange={(value) => onParameterChange(parameter.id, value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {parameter.options.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
            {parameter.type === "radio" && parameter.options && (
              <RadioGroup value={parameter.value} onValueChange={(value) => onParameterChange(parameter.id, value)}>
                {parameter.options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value}>{option.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

