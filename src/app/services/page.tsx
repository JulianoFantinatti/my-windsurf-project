import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-accent">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Nossos Serviços
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Soluções completas em manutenção e reparo de equipamentos analíticos
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg border bg-white p-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-primary">Manutenção Preventiva</h3>
                <p className="text-gray-500">
                  Programa regular de manutenção para prevenir falhas e garantir o funcionamento
                  ideal dos equipamentos.
                </p>
                <ul className="space-y-2 pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-gray-500">Inspeção completa</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-gray-500">Limpeza técnica</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-gray-500">Calibração</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg border bg-white p-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-primary">Manutenção Corretiva</h3>
                <p className="text-gray-500">
                  Reparo especializado para resolver problemas e falhas em equipamentos analíticos.
                </p>
                <ul className="space-y-2 pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-gray-500">Diagnóstico preciso</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-gray-500">Reparo técnico</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-gray-500">Testes de validação</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg border bg-white p-6">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-primary">Consultoria Técnica</h3>
                <p className="text-gray-500">
                  Orientação especializada para otimização e melhor aproveitamento dos equipamentos.
                </p>
                <ul className="space-y-2 pt-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-gray-500">Avaliação técnica</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-gray-500">Recomendações de uso</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-secondary" />
                    <span className="text-gray-500">Plano de manutenção</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-accent">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-primary">Precisa de assistência?</h2>
            <p className="text-gray-500">
              Nossa equipe está pronta para ajudar com suas necessidades
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Solicitar Orçamento</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
