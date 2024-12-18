import Link from "next/link"
import { MainNav } from "./main-nav"
import { Button } from "../ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary via-primary-dark to-secondary bg-clip-text text-transparent">
            ES
          </span>
          <span className="text-xl font-semibold text-primary-dark">Tech</span>
        </Link>
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <Button asChild variant="ghost">
            <Link href="/auth/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/auth/register">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
