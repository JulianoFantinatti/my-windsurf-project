import { Card } from "@/components/ui/card"
import {
  Calendar,
  ClipboardList,
  Tool,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Calendar className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-xl font-bold">12</h3>
              <p className="text-sm text-gray-500">Agendamentos Hoje</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <Tool className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-xl font-bold">45</h3>
              <p className="text-sm text-gray-500">Equipamentos em Manutenção</p>
            </div>
          </div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-4">
            <ClipboardList className="h-8 w-8 text-primary" />
            <div>
              <h3 className="text-xl font-bold">8</h3>
              <p className="text-sm text-gray-500">Relatórios Pendentes</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Próximos Agendamentos</h3>
          <div className="space-y-4">
            {[
              {
                client: "Laboratório Central",
                time: "09:00",
                status: "confirmed",
                type: "Manutenção Preventiva",
              },
              {
                client: "Instituto de Pesquisas",
                time: "11:30",
                status: "pending",
                type: "Calibração",
              },
              {
                client: "Farmacêutica ABC",
                time: "14:00",
                status: "confirmed",
                type: "Manutenção Corretiva",
              },
            ].map((appointment, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
              >
                <div className="space-y-1">
                  <p className="font-medium">{appointment.client}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="mr-1 h-4 w-4" />
                    {appointment.time}
                  </div>
                  <p className="text-sm text-gray-500">{appointment.type}</p>
                </div>
                {appointment.status === "confirmed" ? (
                  <CheckCircle className="h-5 w-5 text-secondary" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-yellow-500" />
                )}
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Status dos Equipamentos</h3>
          <div className="space-y-4">
            {[
              {
                name: "Cromatógrafo HP-5890",
                status: "Em Manutenção",
                client: "Lab Alpha",
                progress: 75,
              },
              {
                name: "Espectrômetro UV-VIS",
                status: "Aguardando Peças",
                client: "Instituto Beta",
                progress: 30,
              },
              {
                name: "Analisador TOC",
                status: "Em Teste Final",
                client: "Indústria Gamma",
                progress: 90,
              },
            ].map((equipment, index) => (
              <div
                key={index}
                className="space-y-2 border-b pb-4 last:border-0 last:pb-0"
              >
                <div className="flex justify-between">
                  <p className="font-medium">{equipment.name}</p>
                  <span className="text-sm text-gray-500">{equipment.progress}%</span>
                </div>
                <div className="text-sm text-gray-500">{equipment.client}</div>
                <div className="h-2 w-full rounded-full bg-gray-100">
                  <div
                    className="h-2 rounded-full bg-primary"
                    style={{ width: `${equipment.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
