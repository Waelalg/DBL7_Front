"use client"; // Add this line at the top

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function EditProductDialog({ product, isOpen, onClose, onSave }) {
  const [editedProduct, setEditedProduct] = useState({
    ...product,
    supplies: product?.supplies || [], // Ensure `supplies` is an array
  });

  useEffect(() => {
    // Update state if `product` changes
    setEditedProduct({
      ...product,
      supplies: product?.supplies || [],
    });
  }, [product]);

  const handleSave = () => {
    onSave(editedProduct);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="Product Name"
            value={editedProduct?.name || ""}
            onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })}
          />
          <Input
            placeholder="Supplies (comma-separated)"
            value={editedProduct?.supplies?.join(",") || ""}
            onChange={(e) =>
              setEditedProduct({
                ...editedProduct,
                supplies: e.target.value.split(",").map((supply) => supply.trim()), // Trim spaces from supplies
              })
            }
          />
          <Input
            type="number"
            placeholder="Stock"
            value={editedProduct?.stock || ""}
            onChange={(e) => setEditedProduct({ ...editedProduct, stock: Number(e.target.value) })}
          />
          <Input
            type="number"
            placeholder="Production per Day"
            value={editedProduct?.productionPerDay || ""}
            onChange={(e) => setEditedProduct({ ...editedProduct, productionPerDay: Number(e.target.value) })}
          />
          <Button onClick={handleSave}>Save Changes</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
