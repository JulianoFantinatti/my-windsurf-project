import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Início
      </Link>
      <Link
        href="/about"
        className="text-sm font-medium text-gray-500 transition-colors hover:text-primary"
      >
        Sobre
      </Link>
      <Link
        href="/services"
        className="text-sm font-medium text-gray-500 transition-colors hover:text-primary"
      >
        Serviços
      </Link>
      <Link
        href="/portfolio"
        className="text-sm font-medium text-gray-500 transition-colors hover:text-primary"
      >
        Portfólio
      </Link>
      <Link
        href="/contact"
        className="text-sm font-medium text-gray-500 transition-colors hover:text-primary"
      >
        Contato
      </Link>
      <Link
        href="/dashboard"
        className="text-sm font-medium text-gray-500 transition-colors hover:text-primary"
      >
        Área do Cliente
      </Link>
    </nav>
  )
}
