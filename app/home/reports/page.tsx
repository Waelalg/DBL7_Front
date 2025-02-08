"use client"

import { useState } from "react"
import { ReportsFilter } from "@/components/reports/reports-filter"
import { ReportCard } from "@/components/reports/report-card"

// Sample data - in a real app, this would come from an API
const reports: any[] = [
  {
    id: "1",
    title: "Q4 2024 Sales Analysis",
    description: "Comprehensive analysis of Q4 2024 sales performance across all regions",
    createdAt: "2024-02-08T12:00:00Z",
    status: "approved",
    author: {
      id: "1",
      name: "Sarah Johnson",
      role: "analyst",
      avatar: "/placeholder.svg",
    },
    category: "Sales",
    lastModified: "2024-02-08T14:30:00Z",
    tags: ["sales", "quarterly", "analysis"],
  },
  {
    id: "1",
    title: "Q4 2024 Sales Analysis",
    description: "Comprehensive analysis of Q4 2024 sales performance across all regions",
    createdAt: "2024-02-08T12:00:00Z",
    status: "approved",
    author: {
      id: "1",
      name: "Sarah Johnson",
      role: "analyst",
      avatar: "/placeholder.svg",
    },
    category: "Sales",
    lastModified: "2024-02-08T14:30:00Z",
    tags: ["sales", "quarterly", "analysis"],
  },{
    id: "1",
    title: "Q4 2024 Sales Analysis",
    description: "Comprehensive analysis of Q4 2024 sales performance across all regions",
    createdAt: "2024-02-08T12:00:00Z",
    status: "approved",
    author: {
      id: "1",
      name: "Sarah Johnson",
      role: "analyst",
      avatar: "/placeholder.svg",
    },
    category: "Sales",
    lastModified: "2024-02-08T14:30:00Z",
    tags: ["sales", "quarterly", "analysis"],
  }
  // Add more sample reports...
]

export default function ReportsPage() {
  const [filters, setFilters] = useState({
    search: "",
    status: "",
    role: "",
  })

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters({ ...filters, ...newFilters })
  }

  const handleReportAction = (action: string, report: Report) => {
    console.log(`Action ${action} on report:`, report)
    // Implement action handling
  }

  const filteredReports = reports.filter((report) => {
    if (filters.search && !report.title.toLowerCase().includes(filters.search.toLowerCase())) {
      return false
    }
    if (filters.status && filters.status !== "all" && report.status !== filters.status) {
      return false
    }
    if (filters.role && filters.role !== "all" && report.author.role !== filters.role) {
      return false
    }
    return true
  })

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
      </div>
      <ReportsFilter onFilterChange={handleFilterChange} />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredReports.map((report) => (
          <ReportCard key={report.id} report={report} onAction={handleReportAction} />
        ))}
      </div>
    </div>
  )
}

