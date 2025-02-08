"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const productStock = {
  name: "Widget X",
  sku: "WX-1234",
  currentStock: 5000,
  reorderPoint: 2000,
  maxCapacity: 10000,
  status: "Adequate",
}

const locations = [
  { id: 1, name: "Algiers", stock: 5000 },
  { id: 2, name: "Oran", stock: 3500 },
  { id: 3, name: "Constantine", stock: 2800 },
  { id: 4, name: "Annaba", stock: 2000 },
  { id: 5, name: "Ouargla", stock: 1500 },
]

export function StockOverview() {
  const [hoveredLocation, setHoveredLocation] = useState(null)
  const stockPercentage = (productStock.currentStock / productStock.maxCapacity) * 100
  const sortedLocations = [...locations].sort((a, b) => b.stock - a.stock)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Stock Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">{productStock.name}</h3>
              <p className="text-sm text-muted-foreground">SKU: {productStock.sku}</p>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Current Stock</span>
              <span className="text-lg font-bold">{productStock.currentStock.toLocaleString()}</span>
            </div>
            <Progress value={stockPercentage} className="h-2" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Reorder Point: {productStock.reorderPoint.toLocaleString()}</span>
              <span>Max Capacity: {productStock.maxCapacity.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Status</span>
              <Badge variant={productStock.status === "Adequate" ? "secondary" : "destructive"}>
                {productStock.status}
              </Badge>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Location</TableHead>
                <TableHead className="text-right">Stock Level</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedLocations.map((location) => (
                <TableRow
                  key={location.id}
                  onMouseEnter={() => setHoveredLocation(location.id)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  className={hoveredLocation === location.id ? "bg-muted" : ""}
                >
                  <TableCell className="font-medium">{location.name}</TableCell>
                  <TableCell className="text-right">{location.stock.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
