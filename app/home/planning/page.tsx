"use client"

import { useState } from "react"
import { ProductsTable } from "@/components/planning/products-table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { PredictionDialog } from "@/components/planning/prediction-dialog"

export default function DashboardPage() {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-8 relative">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">Products</h1>
          <div className="flex items-center gap-4">{/* Add any additional header content here */}</div>
        </div>
        <ProductsTable />

        {/* Fixed Add New Prediction Button */}
        <div className="fixed bottom-8 right-8">
          <Button
            onClick={() => setDialogOpen(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg flex items-center gap-2 px-6"
          >
            <Plus className="w-5 h-5" />
            Add New Prediction
          </Button>
        </div>

        {/* Prediction Dialog */}
        <PredictionDialog open={dialogOpen} onOpenChange={setDialogOpen} />
      </main>
    </div>
  )
}