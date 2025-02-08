import type { Metadata } from "next"
import { AppSidebar } from "@/components/planning/app-sidebar"
import { ActionPanel } from "@/components/planning/action-panel"
import { ScenarioDetails } from "@/components/planning/scenario-details"
import { StockOverview } from "@/components/planning/stock-overview"
import { PlanVsActual } from "@/components/planning/plan-vs-actual"
import { SupplyChainMap } from "@/components/planning/supply-chain-map"
import { SidebarProvider } from "@/components/ui/sidebar"
import ScenarioSimulation from "@/components/planning/study-cases"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Product Planning",
  description: "AI-powered scenario planning and stock management for specific products.",
}

export default function ProductPlanningPage({ params }: { params: { productName: string } }) {
  const productName = decodeURIComponent(params.productName).replace(/-/g, " ")

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <main className="flex-1 space-y-6 p-6">
          <div className="flex items-center justify-between mb-6">
            <Link href="/planning" passHref>
              <Button variant="ghost" className="flex items-center text-indigo-600 hover:text-indigo-800">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Planning
              </Button>
            </Link>
            <h1 className="text-2xl font-semibold">{productName} Planning</h1>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-1">
              <ActionPanel productName={productName} />
            </div>
            <div className="md:col-span-2 space-y-6">
              <ScenarioDetails productName={productName} />
              <ScenarioSimulation productName={productName} />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <StockOverview productName={productName} />
            <PlanVsActual productName={productName} />
          </div>

          <SupplyChainMap productName={productName} />
        </main>
      </div>
    </SidebarProvider>
  )
}

