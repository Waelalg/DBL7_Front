"use client"; // Add this line

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function ProductTable({ products, onSelectProduct, onEditProduct, onDeleteProduct }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead>Production per Day</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id} className="cursor-pointer hover:bg-gray-100">
            <TableCell onClick={() => onSelectProduct(product)}>{product.name}</TableCell>
            <TableCell>{product.stock}</TableCell>
            <TableCell>{product.productionPerDay}</TableCell>
            <TableCell>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => onEditProduct(product)}>Edit</Button>
                <Button variant="destructive" onClick={() => onDeleteProduct(product.id)}>Delete</Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}