"use client"; // Add this line

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AddProductForm({ onAddProduct }) {
  const [newProduct, setNewProduct] = useState({ name: "", supplies: "", stock: 0, productionPerDay: 0 });

  const handleAdd = () => {
    if (!newProduct.name || !newProduct.supplies) return;
    onAddProduct(newProduct);
    setNewProduct({ name: "", supplies: "", stock: 0, productionPerDay: 0 });
  };

  return (
    <div className="flex space-x-4 mb-4">
      <Input placeholder="Product Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
      <Input placeholder="Supplies (comma-separated)" value={newProduct.supplies} onChange={(e) => setNewProduct({ ...newProduct, supplies: e.target.value })} />
      <Input type="number" placeholder="Stock" value={newProduct.stock} onChange={(e) => setNewProduct({ ...newProduct, stock: Number(e.target.value) })} />
      <Input type="number" placeholder="Production per Day" value={newProduct.productionPerDay} onChange={(e) => setNewProduct({ ...newProduct, productionPerDay: Number(e.target.value) })} />
      <Button onClick={handleAdd}>Add</Button>
    </div>
  );
}