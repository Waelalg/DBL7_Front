"use client"

import { Package, Settings, FileText, BookOpen, LayoutDashboard, BarChart } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  const menuItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "#", isActive: true },
    { icon: Package, label: "Commande", href: "#" },
    { icon: BookOpen, label: "Chapitre", href: "#" },
    { icon: FileText, label: "Article", href: "#" },
    { icon: Package, label: "Produit", href: "#" },
    { icon: BarChart, label: "Scenarios", href: "#" },
    { icon: Settings, label: "Parametres", href: "#" },
  ]

  return (
    <Sidebar>
      <SidebarHeader className="border-b px-4 py-2">
        <input type="search" placeholder="Rechercher..." className="w-full rounded-md border px-3 py-2" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton asChild isActive={item.isActive}>
                <a href={item.href} className="flex items-center gap-3">
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}

