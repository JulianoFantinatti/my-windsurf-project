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
                  Especialistas em Equipamentos Analíticos
                </span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Serviços profissionais de manutenção e reparo para seus equipamentos analíticos.
                Conte com nossa experiência para soluções confiáveis.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/contact">Solicitar Orçamento</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">Nossos Serviços</Link>
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
              <h3 className="text-xl font-bold text-primary">Técnicos Especializados</h3>
              <p className="text-gray-500">
                Nossa equipe de técnicos certificados possui anos de experiência em reparo de equipamentos analíticos complexos.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-primary">Atendimento Rápido</h3>
              <p className="text-gray-500">
                Entendemos a importância do seu equipamento e nos esforçamos para fornecer serviços ágeis e eficientes.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-primary">Garantia de Qualidade</h3>
              <p className="text-gray-500">
                Todos os nossos serviços incluem garantia de satisfação e testes completos dos equipamentos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
