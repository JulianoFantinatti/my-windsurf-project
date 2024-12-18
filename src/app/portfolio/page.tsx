import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function PortfolioPage() {
  const projects = [
    {
      title: "Laboratório Químico",
      description:
        "Manutenção preventiva e corretiva em cromatógrafos e espectrômetros",
      image: "/portfolio/lab1.jpg",
      tags: ["Cromatografia", "Espectrometria"],
    },
    {
      title: "Indústria Farmacêutica",
      description:
        "Calibração e reparo de equipamentos de análise de qualidade",
      image: "/portfolio/lab2.jpg",
      tags: ["Calibração", "Validação"],
    },
    {
      title: "Centro de Pesquisa",
      description:
        "Consultoria técnica e manutenção de equipamentos analíticos avançados",
      image: "/portfolio/lab3.jpg",
      tags: ["Consultoria", "Manutenção"],
    },
  ]

  return (
    <div className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-accent">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Nosso Portfólio
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Conheça alguns dos nossos projetos e casos de sucesso
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border bg-white"
              >
                <div className="aspect-video overflow-hidden">
                  <div className="relative h-full w-full bg-gray-200">
                    {/* Placeholder for project image */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                      Imagem do Projeto
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary">{project.title}</h3>
                  <p className="mt-2 text-gray-500">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-accent">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-primary">
              Quer saber mais sobre nossos serviços?
            </h2>
            <p className="text-gray-500">
              Entre em contato para discutir como podemos ajudar seu laboratório
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Fale Conosco</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
