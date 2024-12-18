import Link from "next/link"
import Image from "next/image"
import { MainNav } from "./main-nav"
import { Button } from "../ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="/es-logo.png"
            alt="ES Analitica Logo"
            width={120}
            height={60}
            className="h-10 w-auto"
            priority
          />
          <span className="text-xl font-semibold text-primary-dark hidden sm:inline-block">
            Analitica
          </span>
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
