"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertCircle, CheckCircle2, ExternalLink } from "lucide-react"

const suggestions = {
  error: [
    "Vérifier les logs système pour plus de détails",
    "Redémarrer le service concerné",
    "Contacter l'équipe technique",
  ],
  warning: [
    "Examiner les métriques de performance",
    "Planifier une maintenance préventive",
    "Mettre à jour les paramètres système",
  ],
  info: ["Consulter la documentation", "Planifier l'action recommandée", "Mettre à jour le statut"],
}

export function AlertSuggestionsDialog({ open, onOpenChange, alertType, alertTitle, onResolve }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            Résoudre l'alerte
          </DialogTitle>
          <DialogDescription>{alertTitle}</DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="text-sm font-medium">Actions suggérées:</div>
          <div className="space-y-2">
            {suggestions[alertType].map((suggestion, index) => (
              <div key={index} className="flex items-start gap-2 p-2 rounded-lg border bg-muted/50">
                <CheckCircle2 className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-medium">{suggestion}</div>
                  <a href="#" className="text-xs text-muted-foreground hover:underline inline-flex items-center gap-1">
                    En savoir plus <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Annuler
          </Button>
          <Button
            onClick={() => {
              onResolve()
              onOpenChange(false)
            }}
          >
            Marquer comme résolu
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

