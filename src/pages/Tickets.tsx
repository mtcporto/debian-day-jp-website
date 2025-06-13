
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Ticket, Users, Heart } from "lucide-react";

const Tickets = () => {
  const ticketTypes = [
    {
      id: "inteira",
      name: "Inteira",
      price: "R$ 25,00",
      description: "Ingresso padrão para profissionais",
      icon: <Ticket className="w-8 h-8" />,
      features: [
        "Acesso aos 2 dias de evento",
        "3 palestras + 1 workshop",
        "Coffee breaks inclusos",
        "Participação no Installfest",
        "Certificado de participação",
        "Kit do participante"
      ],
      popular: false
    },
    {
      id: "meia",
      name: "Meia-entrada",
      price: "R$ 12,50",
      description: "Para estudantes com comprovação",
      icon: <Users className="w-8 h-8" />,
      features: [
        "Acesso aos 2 dias de evento",
        "3 palestras + 1 workshop",
        "Coffee breaks inclusos",
        "Participação no Installfest",
        "Certificado de participação",
        "Kit do participante"
      ],
      popular: true,
      note: "Necessário apresentar documento estudantil"
    },
    {
      id: "social",
      name: "Ingresso Social",
      price: "R$ 5,00",
      description: "Para pessoas em situação de vulnerabilidade",
      icon: <Heart className="w-8 h-8" />,
      features: [
        "Acesso aos 2 dias de evento",
        "3 palestras + 1 workshop",
        "Coffee breaks inclusos",
        "Participação no Installfest",
        "Certificado de participação"
      ],
      popular: false,
      note: "Sujeito à análise socioeconômica"
    }
  ];

  const handleTicketPurchase = (ticketId: string) => {
    // Aqui seria o redirecionamento para o Sympla
    window.open(`https://sympla.com.br/debian-day-joao-pessoa-2025-${ticketId}`, '_blank');
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Ingressos</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Escolha o ingresso ideal para você e faça parte da comunidade Debian
            </p>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-medium">Ingressos disponíveis agora!</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ticketTypes.map((ticket) => (
              <Card 
                key={ticket.id} 
                className={`relative p-8 hover:shadow-xl transition-all duration-300 ${
                  ticket.popular ? 'ring-2 ring-primary shadow-lg scale-105' : ''
                }`}
              >
                {ticket.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Mais Popular
                  </Badge>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-primary mb-4 flex justify-center">
                    {ticket.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{ticket.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">{ticket.price}</div>
                  <p className="text-muted-foreground">{ticket.description}</p>
                  {ticket.note && (
                    <p className="text-sm text-orange-600 mt-2 italic">{ticket.note}</p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {ticket.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => handleTicketPurchase(ticket.id)}
                >
                  Comprar no Sympla
                </Button>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Card className="p-8 bg-muted/30">
              <h3 className="text-2xl font-bold mb-4">Informações Importantes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold mb-2">📋 Documentação</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Meia-entrada: documento estudantil obrigatório</li>
                    <li>• Ingresso social: análise socioeconômica</li>
                    <li>• Documento com foto no credenciamento</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">🎯 O que está incluso</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Acesso completo aos 2 dias</li>
                    <li>• Todas as palestras e workshop</li>
                    <li>• Coffee breaks e networking</li>
                    <li>• Certificado digital de participação</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Dúvidas sobre ingressos? Entre em contato conosco: 
              <a href="mailto:ingressos@debiandayjp.com.br" className="text-primary hover:underline ml-1">
                ingressos@debiandayjp.com.br
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tickets;
