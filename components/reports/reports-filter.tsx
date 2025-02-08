"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ReportsFilterProps {
  onFilterChange: (filters: { search: string; status: string; role: string }) => void
}

export function ReportsFilter({ onFilterChange }: ReportsFilterProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        <Input
          placeholder="Search reports..."
          className="pl-9"
          onChange={(e) => onFilterChange({ search: e.target.value, status: "", role: "" })}
        />
      </div>
      <div className="flex gap-4">
        <Select onValueChange={(value) => onFilterChange({ search: "", status: value, role: "" })}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={(value) => onFilterChange({ search: "", status: "", role: value })}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="manager">Manager</SelectItem>
            <SelectItem value="analyst">Analyst</SelectItem>
            <SelectItem value="user">User</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

