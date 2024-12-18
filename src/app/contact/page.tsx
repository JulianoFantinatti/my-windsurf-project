import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-accent">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Entre em Contato
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Estamos aqui para ajudar com suas necessidades em equipamentos analíticos
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-primary">Informações de Contato</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <span className="text-gray-500">contato@esanalitica.com.br</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <span className="text-gray-500">(11) 9999-9999</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <span className="text-gray-500">São Paulo, SP</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-primary">Horário de Atendimento</h3>
                <div className="space-y-2 text-gray-500">
                  <p>Segunda a Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <form className="space-y-6">
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-500">
                        Nome
                      </label>
                      <Input id="name" placeholder="Seu nome" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-500">
                        Email
                      </label>
                      <Input id="email" placeholder="seu@email.com" type="email" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-500">
                      Assunto
                    </label>
                    <Input id="subject" placeholder="Assunto da mensagem" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-500">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Sua mensagem"
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
