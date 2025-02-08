"use client"; // Add this line

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function ProductDetailsDialog({ product, isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{product?.name} Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="font-semibold">Supplies Needed:</p>
          <ul className="list-disc ml-4">
            {product?.supplies.map((supply, index) => (
              <li key={index}>{supply}</li>
            ))}
          </ul>
          <p>Stock Level: {product?.stock}</p>
          <p>Production per Day: {product?.productionPerDay}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}