"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import type { UserRole } from "@/types/user"

interface RoleSectionProps {
  currentRole: UserRole
  department: string
  onUpdate: (data: { role?: UserRole; department?: string }) => Promise<void>
}

export function RoleSection({ currentRole, department, onUpdate }: RoleSectionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Role & Department</CardTitle>
        <CardDescription>Manage your role and department settings</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="role">Role</Label>
          <Select value={currentRole} onValueChange={(value: UserRole) => onUpdate({ role: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Administrator</SelectItem>
              <SelectItem value="manager">Manager</SelectItem>
              <SelectItem value="analyst">Analyst</SelectItem>
              <SelectItem value="user">User</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="department">Department</Label>
          <Input
            id="department"
            value={department}
            onChange={(e) => onUpdate({ department: e.target.value })}
            placeholder="Enter your department"
          />
        </div>
      </CardContent>
    </Card>
  )
}

