"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Sample data - in a real app this would come from an API
const scenarios = [
  {
    id: "1",
    name: "Scenario A",
    description: "A test scenario for supply chain analysis",
    lastModified: "2025-02-05",
    status: "active",
  },
  {
    id: "2",
    name: "Scenario B",
    description: "Another scenario for predictive planning",
    lastModified: "2025-02-01",
    status: "inactive",
  },
];

export function ScenariosTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const filteredScenarios = scenarios.filter((scenario) =>
    scenario.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRowClick = (id: string) => {
    router.push(`/planning/${id}/plandetails`);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="relative w-80">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
          <Input
            placeholder="Search scenarios..."
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
              <TableHead>Scenario Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Last Modified</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredScenarios.length > 0 ? (
              filteredScenarios.map((scenario) => (
                <TableRow
                  key={scenario.id}
                  onClick={() => handleRowClick(scenario.id)}
                  className="cursor-pointer hover:bg-gray-100"
                >
                  <TableCell>
                    <input type="checkbox" className="rounded border-gray-300" />
                  </TableCell>
                  <TableCell>{scenario.name}</TableCell>
                  <TableCell>{scenario.description}</TableCell>
                  <TableCell>{scenario.lastModified}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-sm ${
                        scenario.status === "active"
                          ? "bg-green-50 text-green-600"
                          : "bg-gray-50 text-gray-600"
                      }`}
                    >
                      • {scenario.status.charAt(0).toUpperCase() + scenario.status.slice(1)}
                    </span>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-gray-500 py-4">
                  No scenarios found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
    