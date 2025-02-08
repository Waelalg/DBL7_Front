"use client";

import { ScenariosTable } from "@/components/scenarios/scenarios-table";

export default function ScenariosPage() {
  return (
    <div className="min-h-screen p-8 space-y-6">
      <h1 className="text-2xl font-semibold">Scenarios</h1>
      <ScenariosTable />
    </div>
  );
}
