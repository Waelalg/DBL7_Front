"use client"

import { useState } from "react"
import { Bell, Filter, Check, AlertTriangle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { AlertSuggestionsDialog } from "@/components/notifications/alert-suggestions"

export default function NotificationsPage() {
  const [selectedAlert, setSelectedAlert] = useState(null)
  const [resolvedAlerts, setResolvedAlerts] = useState(new Set())

  const handleResolve = (id) => {
    setResolvedAlerts((prev) => {
      const next = new Set(prev)
      next.add(id)
      return next
    })
  }

  return (
    <div className="min-h-screen bg-background p-6">
      {/* Header Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Notifications</h1>
            <p className="text-muted-foreground mt-1">Gérez vos alertes et notifications</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filtrer
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3 mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Alerts</CardTitle>
              <Bell className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">+12 depuis hier</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Non résolues</CardTitle>
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">Nécessite attention</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Résolues</CardTitle>
              <Check className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">17</div>
              <p className="text-xs text-muted-foreground">Cette semaine</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Alertes récentes</h2>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les types</SelectItem>
              <SelectItem value="error">Erreurs</SelectItem>
              <SelectItem value="warning">Avertissements</SelectItem>
              <SelectItem value="info">Informations</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Card className="border-l-4 border-l-destructive">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                <CardTitle className="text-sm font-medium">Erreur de synchronisation</CardTitle>
              </div>
              <Badge variant="destructive">Urgent</Badge>
            </div>
            <CardDescription>Il y a 5 minutes</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              La synchronisation avec le système IBP a échoué. Veuillez vérifier les paramètres de connexion.
            </p>
            <div className="mt-4 flex items-center justify-end gap-2">
              {!resolvedAlerts.has("error-1") ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setSelectedAlert({
                      type: "error",
                      title: "Erreur de synchronisation",
                      id: "error-1",
                    })
                  }
                >
                  Résoudre
                </Button>
              ) : (
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Check className="h-4 w-4" /> Résolu
                </span>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-yellow-500">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-500" />
                <CardTitle className="text-sm font-medium">Avertissement de performance</CardTitle>
              </div>
              <Badge variant="outline" className="text-yellow-500 border-yellow-500">
                Warning
              </Badge>
            </div>
            <CardDescription>Il y a 1 heure</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Les temps de réponse du système sont plus lents que la normale. Une maintenance peut être nécessaire.
            </p>
            <div className="mt-4 flex items-center justify-end gap-2">
              {!resolvedAlerts.has("warning-1") ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setSelectedAlert({
                      type: "warning",
                      title: "Avertissement de performance",
                      id: "warning-1",
                    })
                  }
                >
                  Résoudre
                </Button>
              ) : (
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Check className="h-4 w-4" /> Résolu
                </span>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Info className="h-4 w-4 text-blue-500" />
                <CardTitle className="text-sm font-medium">Mise à jour système</CardTitle>
              </div>
              <Badge variant="outline" className="text-blue-500 border-blue-500">
                Info
              </Badge>
            </div>
            <CardDescription>Il y a 3 heures</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Une nouvelle mise à jour du système est disponible. Planifiez l'installation pendant les heures creuses.
            </p>
            <div className="mt-4 flex items-center justify-end gap-2">
              {!resolvedAlerts.has("info-1") ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setSelectedAlert({
                      type: "info",
                      title: "Mise à jour système",
                      id: "info-1",
                    })
                  }
                >
                  Résoudre
                </Button>
              ) : (
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <Check className="h-4 w-4" /> Résolu
                </span>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
      <AlertSuggestionsDialog
        open={!!selectedAlert}
        onOpenChange={(open) => !open && setSelectedAlert(null)}
        alertType={selectedAlert?.type || "info"}
        alertTitle={selectedAlert?.title || ""}
        onResolve={() => selectedAlert && handleResolve(selectedAlert.id)}
      />
    </div>
  )
}

