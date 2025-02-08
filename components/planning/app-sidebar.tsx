"use client"

import { LayoutDashboard, FileSpreadsheet, LineChart, BarChart2, Database, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
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
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      href: "/",
      isActive: true,
    },
    {
      icon: FileSpreadsheet,
      label: "Data Files",
      href: "/files",
    },
    {
      icon: LineChart,
      label: "Predictions",
      href: "/predictions",
    },
    {
      icon: BarChart2,
      label: "Analytics",
      href: "/analytics",
    },
    {
      icon: Database,
      label: "Models",
      href: "/models",
    },
  ]

  return (
    <Sidebar>
      <SidebarHeader className="flex h-14 items-center border-b px-4">
        <h1 className="font-semibold">Data Analysis</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton asChild isActive={item.isActive}>
                <a
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted",
                    item.isActive && "bg-muted font-medium",
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <div className="absolute bottom-4 w-full px-2">
        <a
          href="/settings"
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted"
        >
          <Settings className="h-4 w-4" />
          Settings
        </a>
      </div>
    </Sidebar>
  )
}

