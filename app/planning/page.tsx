import type { Metadata } from "next"
import { AppSidebar } from "@/components/planning/app-sidebar"
import { ActionPanel } from "@/components/planning/action-panel"
import { ScenarioDetails } from "@/components/planning/scenario-details"
import { ScenarioList } from "@/components/planning/scenario-list"
import { StockOverview } from "@/components/planning/stock-overview"
import { PlanVsActual } from "@/components/planning/plan-vs-actual"
import { SupplyChainMap } from "@/components/planning/supply-chain-map"
// Replace <SupplyChainMap /> where needed
import { SidebarProvider } from "@/components/ui/sidebar"
import ScenarioSimulation from "@/components/planning/study-cases"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "AI-powered scenario planning and stock management.",
}

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <main className="flex-1 space-y-6 p-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-1">
              <ActionPanel />
            </div>
            <div className="md:col-span-2 space-y-6">
              <ScenarioDetails />
              <ScenarioSimulation />  {/* ✅ Added the new component */}
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <StockOverview />
            <PlanVsActual />
          </div>
          <SupplyChainMap />
        </main>
      </div>
    </SidebarProvider>
  )
}
