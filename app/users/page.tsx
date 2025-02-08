"use client"

import { useState, useMemo } from "react"
import { Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { UserTable } from "@/components/users/user-table"
import { UserModal } from "@/components/users/user-modal"
import { useToast } from "@/components/ui/use-toast"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export interface User {
  id: string
  fullName: string
  email: string
  birthday: string
  role: string
}

const initialUsers: User[] = [
  { id: "1", fullName: "John Doe", email: "john@example.com", birthday: "1990-01-01", role: "Admin" },
  { id: "2", fullName: "Jane Smith", email: "jane@example.com", birthday: "1992-05-15", role: "User" },
  { id: "3", fullName: "Bob Johnson", email: "bob@example.com", birthday: "1985-08-20", role: "Manager" },
  { id: "4", fullName: "Alice Brown", email: "alice@example.com", birthday: "1993-03-10", role: "User" },
  { id: "5", fullName: "Charlie Davis", email: "charlie@example.com", birthday: "1988-11-05", role: "Admin" },
]

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const { toast } = useToast()

  const filteredUsers = useMemo(() => {
    return users.filter(
      (user) =>
        user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [users, searchTerm])

  const ITEMS_PER_PAGE = 5
  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE)
  const paginatedUsers = filteredUsers.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)

  const handleAddUser = (newUser: Omit<User, "id">) => {
    const user = { ...newUser, id: Date.now().toString() }
    setUsers([...users, user])
    setIsModalOpen(false)
    toast({ title: "User added successfully" })
  }

  const handleEditUser = (updatedUser: User) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)))
    setIsModalOpen(false)
    setEditingUser(null)
    toast({ title: "User updated successfully" })
  }

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter((user) => user.id !== userId))
    toast({ title: "User deleted successfully" })
  }

  return (
    <div className="container mx-auto py-10 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">User Management</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Search className="h-5 w-5 text-gray-500" />
            <Input
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-[200px]"
            />
          </div>
          <Button onClick={() => setIsModalOpen(true)}>
            <Plus className="mr-2 h-4 w-4" /> Add User
          </Button>
        </div>
      </div>
      <UserTable
        users={paginatedUsers}
        onEdit={(user) => {
          setEditingUser(user)
          setIsModalOpen(true)
        }}
        onDelete={handleDeleteUser}
      />
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <PaginationItem key={page}>
              <PaginationLink onClick={() => setCurrentPage(page)} isActive={currentPage === page}>
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <UserModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setEditingUser(null)
        }}
        onSubmit={editingUser ? handleEditUser : handleAddUser}
        user={editingUser}
      />
    </div>
  )
}

