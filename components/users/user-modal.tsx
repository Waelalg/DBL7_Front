"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import type { User } from "./page"

interface UserModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (user: Omit<User, "id"> & { id?: string }) => void
  user?: User | null
}

export function UserModal({ isOpen, onClose, onSubmit, user }: UserModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    birthday: "",
    role: "",
    password: "",
  })
  const [errors, setErrors] = useState<Partial<typeof formData>>({})
  const { toast } = useToast()

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName,
        email: user.email,
        birthday: user.birthday,
        role: user.role,
        password: "",
      })
    } else {
      setFormData({
        fullName: "",
        email: "",
        birthday: "",
        role: "",
        password: "",
      })
    }
    setErrors({})
  }, [user])

  const validateForm = () => {
    const newErrors: Partial<typeof formData> = {}
    if (!formData.fullName) newErrors.fullName = "Full name is required"
    if (!formData.email) newErrors.email = "Email is required"
    if (!formData.email.includes("@")) newErrors.email = "Invalid email format"
    if (!formData.birthday) newErrors.birthday = "Birthday is required"
    if (!formData.role) newErrors.role = "Role is required"
    if (!user && !formData.password) newErrors.password = "Password is required"
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(user ? { ...formData, id: user.id } : formData)
    } else {
      toast({
        title: "Error",
        description: "Please fill all required fields correctly.",
        variant: "destructive",
      })
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{user ? "Edit User" : "Add User"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className={errors.fullName ? "border-red-500" : ""}
            />
            {errors.fullName && <p className="text-sm text-red-500">{errors.fullName}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={errors.email ? "border-red-500" : ""}
            />
            {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="birthday">Birthday</Label>
            <Input
              id="birthday"
              type="date"
              value={formData.birthday}
              onChange={(e) => setFormData({ ...formData, birthday: e.target.value })}
              className={errors.birthday ? "border-red-500" : ""}
            />
            {errors.birthday && <p className="text-sm text-red-500">{errors.birthday}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
              <SelectTrigger className={errors.role ? "border-red-500" : ""}>
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Admin">Admin</SelectItem>
                <SelectItem value="User">User</SelectItem>
                <SelectItem value="Manager">Manager</SelectItem>
              </SelectContent>
            </Select>
            {errors.role && <p className="text-sm text-red-500">{errors.role}</p>}
          </div>
          {!user && (
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className={errors.password ? "border-red-500" : ""}
              />
              {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
            </div>
          )}
          <DialogFooter>
            <Button type="submit">{user ? "Update" : "Add"} User</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

