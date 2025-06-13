
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users } from "lucide-react";

const Schedule = () => {
  const schedule = [
    {
      day: "15 de agosto - Quinta-feira",
      note: "Depende das propostas recebidas",
      events: [
        {
          time: "14:00 - 14:30",
          title: "Credenciamento",
          type: "Organização",
          description: "Recepção dos participantes e entrega de materiais"
        },
        {
          time: "14:30 - 15:30",
          title: "Palestra 1",
          type: "Palestra",
          description: "A ser definida conforme chamada para palestras"
        },
        {
          time: "15:30 - 16:00",
          title: "Coffee Break",
          type: "Networking",
          description: "Pausa para networking e refreshments"
        },
        {
          time: "16:00 - 17:00",
          title: "Workshop",
          type: "Workshop",
          description: "Atividade prática nos laboratórios equipados"
        }
      ]
    },
    {
      day: "16 de agosto - Sexta-feira",
      note: "Auditório garantido",
      events: [
        {
          time: "08:30 - 09:00",
          title: "Credenciamento",
          type: "Organização",
          description: "Recep dos participantes"
        },
        {
          time: "09:00 - 10:00",
          title: "Abertura Oficial",
          type: "Cerimônia",
          description: "Abertura do evento e boas-vindas"
        },
        {
          time: "10:00 - 11:00",
          title: "Palestra 2",
          type: "Palestra",
          description: "A ser definida conforme chamada para palestras"
        },
        {
          time: "11:00 - 11:30",
          title: "Coffee Break",
          type: "Networking",
          description: "Pausa para networking"
        },
        {
          time: "11:30 - 12:30",
          title: "Palestra 3",
          type: "Palestra",
          description: "A ser definida conforme chamada para palestras"
        },
        {
          time: "12:30 - 14:00",
          title: "Almoço",
          type: "Intervalo",
          description: "Intervalo para almoço"
        },
        {
          time: "14:00 - 17:00",
          title: "Installfest",
          type: "Atividade",
          description: "Instalação do Debian com VMs nos laboratórios"
        },
        {
          time: "17:00 - 17:30",
          title: "Encerramento",
          type: "Cerimônia",
          description: "Agradecimentos e próximos passos"
        }
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Palestra": return "bg-primary";
      case "Workshop": return "bg-secondary";
      case "Atividade": return "bg-accent";
      case "Networking": return "bg-muted";
      case "Cerimônia": return "bg-primary/80";
      default: return "bg-muted";
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Agenda do Evento</h1>
            <p className="text-xl text-muted-foreground">
              Programação completa do Debian Day João Pessoa 2025
            </p>
          </div>

          <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-blue-900">Chamada para Palestras</h3>
            </div>
            <p className="text-blue-800">
              Ainda estamos recebendo propostas de palestras e workshops! 
              <a href="#" className="underline ml-1 hover:text-blue-600">
                Submeta sua proposta aqui
              </a>
            </p>
          </div>

          <div className="space-y-8">
            {schedule.map((day, dayIndex) => (
              <Card key={dayIndex} className="p-6">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">{day.day}</h2>
                  <p className="text-muted-foreground italic">{day.note}</p>
                </div>

                <div className="space-y-4">
                  {day.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="flex gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex-shrink-0 w-24 text-sm font-medium text-muted-foreground">
                        {event.time}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold">{event.title}</h3>
                          <Badge className={`text-white ${getTypeColor(event.type)}`}>
                            {event.type}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-6 mt-8 bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Installfest</h3>
              <p className="text-muted-foreground">
                No sábado, teremos um installfest completo utilizando VMs nas máquinas 
                dos laboratórios bem equipados da UNIESP. Uma oportunidade prática 
                de conhecer e instalar o Debian.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Schedule;
