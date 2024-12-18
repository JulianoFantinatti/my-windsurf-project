import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-accent">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Sobre a ES Analitica
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Excelência em manutenção e reparo de equipamentos analíticos desde 2010
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">Nossa História</h2>
              <p className="text-gray-500">
                A ES Analitica nasceu da paixão pela precisão e qualidade em equipamentos analíticos.
                Com mais de uma década de experiência, nos estabelecemos como referência no mercado
                de manutenção e reparo de instrumentos analíticos.
              </p>
              <p className="text-gray-500">
                Nossa equipe é formada por profissionais altamente qualificados, com vasta experiência
                em diferentes tipos de equipamentos e fabricantes. Investimos constantemente em
                treinamento e atualização tecnológica para oferecer as melhores soluções aos nossos clientes.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary">Nossa Missão</h2>
              <p className="text-gray-500">
                Fornecer serviços de excelência em manutenção e reparo de equipamentos analíticos,
                garantindo a satisfação total de nossos clientes através de soluções rápidas,
                eficientes e de alta qualidade.
              </p>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-secondary">Valores</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-500">
                  <li>Excelência técnica</li>
                  <li>Compromisso com o cliente</li>
                  <li>Integridade e transparência</li>
                  <li>Inovação contínua</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-accent">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-primary">Pronto para começar?</h2>
            <p className="text-gray-500">
              Entre em contato conosco para discutir como podemos ajudar com seus equipamentos
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
