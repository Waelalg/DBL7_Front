"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Edit2, Trash2, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample data - in a real app this would come from an API
const products: any[] = [
  {
    id: "1",
    name: "Gabriela Cashmere Blazer",
    sku: "114116",
    image:
      "../../public/next.svg",
    price: 113.99,
    products: 1113,
    views: 14012,
    status: "active",
  },
  // ... add more products
]

export function ProductsTable() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
          <Input
            placeholder="Rechercher..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <input type="checkbox" className="rounded border-gray-300" />
              </TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Purchase Unit Price</TableHead>
              <TableHead>Products</TableHead>
              <TableHead>Views</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <input type="checkbox" className="rounded border-gray-300" />
                </TableCell>
                <TableCell>
                  <Link
                    href={`/home/planning/${encodeURIComponent(product.name.toLowerCase().replace(/ /g, "-"))}`}
                    className="flex items-center gap-3 hover:underline"
                  >
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={40}
                      height={40}
                      className="rounded-md"
                    />
                    <div>
                      <div className="font-medium">{product.name}</div>
                      <div className="text-sm text-gray-500">SKU: {product.sku}</div>
                    </div>
                  </Link>
                </TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell>{product.products}</TableCell>
                <TableCell>{product.views}</TableCell>
                <TableCell>
                  <span className="inline-flex items-center px-2 py-1 rounded-full bg-green-50 text-green-600 text-sm">
                    • Active
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="bg-indigo-600 text-white hover:bg-indigo-700">
                      <Edit2 className="w-4 h-4" />
                      <span className="ml-2">Edit</span>
                    </Button>
                    <Button variant="outline" size="sm" className="text-gray-600">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

