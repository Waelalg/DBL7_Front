// components/sidebar.tsx
import Link from "next/link";
import React from "react";
import {
  LayoutDashboard,
  Bell,
  FileText,
  Calendar,
  Package,
  Settings,
  User,
} from "lucide-react";

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

const navigation: NavigationItem[] = [
  { name: "Dashboard", href: "/home/dashboard", icon: LayoutDashboard },
  { name: "Notification", href: "/home/notifications", icon: Bell },
  { name: "Rapport", href: "/home/reports", icon: FileText },
  { name: "Planification", href: "/home/planning", icon: Calendar },
  { name: "Produit", href: "/home/products", icon: Package },
  { name: "users", href: "/home/users", icon: User },
  { name: "Parametres", href: "/home/parameters", icon: Settings },
];

export function Sidebar() {
  return (
    <div className="flex flex-col w-64 bg-zinc-900 text-white">
      <div className="p-4">
        <h1 className="text-xl font-bold">IBPower</h1>
      </div>
      <nav className="flex-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center px-4 py-2 text-sm hover:bg-zinc-800"
          >
            <item.icon className="mr-3 h-5 w-5" />
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
