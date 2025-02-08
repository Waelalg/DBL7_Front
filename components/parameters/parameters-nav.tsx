"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { UserCircle, Bell, Palette, Globe, Shield, Database, type LucideIcon } from "lucide-react"

interface NavItem {
  title: string
  icon: LucideIcon
  href: string
}

const navItems: NavItem[] = [
  {
    title: "Account",
    icon: UserCircle,
    href: "#account",
  },
  {
    title: "Notifications",
    icon: Bell,
    href: "#notifications",
  },
  {
    title: "Appearance",
    icon: Palette,
    href: "#appearance",
  },
  {
    title: "Language & Region",
    icon: Globe,
    href: "#language",
  },
  {
    title: "Security",
    icon: Shield,
    href: "#security",
  },
  {
    title: "API Settings",
    icon: Database,
    href: "#api",
  },
]

interface ParametersNavProps {
  currentSection: string
  onSectionChange: (section: string) => void
}

export function ParametersNav({ currentSection, onSectionChange }: ParametersNavProps) {
  return (
    <nav className="space-y-1">
      {navItems.map((item) => {
        const Icon = item.icon
        return (
          <Button
            key={item.href}
            variant="ghost"
            className={cn("w-full justify-start gap-2", currentSection === item.href.slice(1) && "bg-muted")}
            onClick={() => onSectionChange(item.href.slice(1))}
          >
            <Icon className="h-5 w-5" />
            {item.title}
          </Button>
        )
      })}
    </nav>
  )
}

