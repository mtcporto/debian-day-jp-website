
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, Ticket } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative debian-hero-bg text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Debian Day
              <span className="block text-3xl md:text-5xl font-normal">João Pessoa 2025</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Celebrando 32 anos do Projeto Debian
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="text-lg">15 e 16 de agosto</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">UNIESP João Pessoa</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/ingressos">Garantir Ingresso</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                <Link to="/sobre">Saiba Mais</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Info Cards */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow animate-slide-in">
              <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">2 Dias de Evento</h3>
              <p className="text-sm text-muted-foreground">15 e 16 de agosto com palestras e workshops</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow animate-slide-in">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Até 350 Pessoas</h3>
              <p className="text-sm text-muted-foreground">Auditório moderno na UNIESP</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow animate-slide-in">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Laboratórios Equipados</h3>
              <p className="text-sm text-muted-foreground">Installfest com VMs e estrutura completa</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow animate-slide-in">
              <Ticket className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Ingressos Solidários</h3>
              <p className="text-sm text-muted-foreground">Inteira, meia e social disponíveis</p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Por que participar?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              O Debian Day celebra o aniversário do Projeto Debian, fundado por Ian Murdock em 16 de agosto de 1993. 
              Uma oportunidade única para profissionais de tecnologia, estudantes e curiosos se conectarem 
              e aprenderem sobre software livre e inovação.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/sobre">Conhecer o Evento</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 debian-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Não perca essa oportunidade!
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Vagas limitadas. Garante já o seu lugar no maior evento Debian do Nordeste.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link to="/ingressos">Comprar Ingresso Agora</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
