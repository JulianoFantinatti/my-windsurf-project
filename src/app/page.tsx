import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-accent via-white to-accent">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                <span className="bg-gradient-to-r from-primary via-primary-dark to-secondary bg-clip-text text-transparent">
                  Expert Equipment Solutions
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Professional repair and maintenance services for your valuable analytical equipment.
                Trust our expertise for reliable solutions.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-primary">Expert Technicians</h3>
              <p className="text-gray-500">
                Our certified technicians have years of experience in repairing complex analytical equipment.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-primary">Quick Turnaround</h3>
              <p className="text-gray-500">
                We understand the importance of your equipment and strive to provide fast repair services.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-primary">Quality Guarantee</h3>
              <p className="text-gray-500">
                All our repairs come with a satisfaction guarantee and thorough testing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
