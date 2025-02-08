
"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import AddProductForm from "@/components/products/AddProductForm";
import ProductTable from "@/components/products/ProductTable";
import ProductDetailsDialog from "@/components/products/ProductDetailsDialog";
import EditProductDialog from "@/components/products/EditProductDialog";

const initialProducts = [
  { id: 1, name: "Laptop", supplies: ["Processor", "RAM", "Storage"], stock: 50, productionPerDay: 5 },
  { id: 2, name: "Smartphone", supplies: ["Screen", "Battery", "Chipset"], stock: 100, productionPerDay: 10 },
  { id: 3, name: "Tablet", supplies: ["Display", "Battery", "Camera"], stock: 75, productionPerDay: 8 },
];

export default function ProductsPage() {
  const [products, setProducts] = useState(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1, supplies: newProduct.supplies.split(",") }]);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleEditProduct = (editedProduct) => {
    setProducts(products.map((product) => (product.id === editedProduct.id ? editedProduct : product)));
    setIsEditDialogOpen(false);
  };

  return (
    <section className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">Products</h1>
      <Card>
        <CardHeader>
          <CardTitle>Manage Products</CardTitle>
        </CardHeader>
        <CardContent>
          <AddProductForm onAddProduct={handleAddProduct} />
          <ProductTable
            products={products}
            onSelectProduct={(product) => {
              setSelectedProduct(product);
              setIsDialogOpen(true);
            }}
            onEditProduct={(product) => {
              setSelectedProduct(product);
              setIsEditDialogOpen(true);
            }}
            onDeleteProduct={handleDeleteProduct}
          />
        </CardContent>
      </Card>

      <ProductDetailsDialog
        product={selectedProduct}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />

      <EditProductDialog
        product={selectedProduct}
        isOpen={isEditDialogOpen}
        onClose={() => setIsEditDialogOpen(false)}
        onSave={handleEditProduct}
      />
    </section>
  );
}