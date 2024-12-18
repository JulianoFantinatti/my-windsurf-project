"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Calendar,
  ClipboardList,
  Settings,
  Home,
  Wrench,
  History,
} from "lucide-react"

const items = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Agenda",
    href: "/dashboard/schedule",
    icon: Calendar,
  },
  {
    title: "Equipamentos",
    href: "/dashboard/equipment",
    icon: Wrench,
  },
  {
    title: "Histórico",
    href: "/dashboard/history",
    icon: History,
  },
  {
    title: "Configurações",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="grid items-start gap-2 p-4">
      {items.map((item, index) => {
        const Icon = item.icon
        return (
          <Link
            key={index}
            href={item.href}
          >
            <span
              className={cn(
                "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                pathname === item.href ? "bg-accent" : "transparent"
              )}
            >
              <Icon className="mr-2 h-4 w-4" />
              <span>{item.title}</span>
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
