import {pageMetadata} from "@/lib/metadata";
export const metadata=pageMetadata("/local");

import { Card } from "@/components/ui/card";
import { MapPin, Car, Bus, Phone } from "lucide-react";

const Location = () => {

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Local do Evento</h1>
            <p className="text-xl text-muted-foreground">
              UNIESP João Pessoa - Centro Universitário
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold">Endereço</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">UNIESP - Centro Universitário</h3>
                  <p className="text-muted-foreground">
                    BR-230, Km 14 - s/n<br/>
                    Morada Nova, Cabedelo - PB<br/>
                    CEP: 58109-303
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Infraestrutura</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Auditório para até 350 pessoas</li>
                    <li>• Laboratórios bem equipados</li>
                    <li>• Wi-Fi de alta velocidade</li>
                    <li>• Estacionamento gratuito</li>
                    <li>• Acessibilidade completa</li>
                    <li>• Cantina e espaços de convivência</li>
                  </ul>
                </div>
              </div>
            </Card>

            <div className="h-96 lg:h-auto"><div className="bg-muted/20 h-full flex items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/20"><div className="text-center"><MapPin className="w-12 h-12 text-primary mx-auto mb-4"/><p className="text-muted-foreground">Mapa interativo será carregado aqui</p><p className="text-sm text-muted-foreground mt-2">Coordenadas: -7.072, -34.845</p></div></div></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Car className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Como chegar de carro</h3>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p><strong>Saindo de João Pessoa:</strong></p>
                <p>Siga pela BR-230 (Rodovia Transamazônica) em direção a Cabedelo. 
                   A UNIESP fica no Km 14, do lado direito da rodovia.</p>
                
                <p><strong>Pontos de referência:</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>• Próximo ao Shopping Tambiá</li>
                  <li>• Entre os bairros Bancários e Torre</li>
                  <li>• Acesso fácil pela BR-230</li>
                </ul>
                
                <p className="text-green-600 font-medium">
                  🅿️ Estacionamento gratuito disponível
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Bus className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Transporte público</h3>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p><strong>Linhas de ônibus:</strong></p>
                <ul className="space-y-1">
                  <li>• <strong>Linha 1510:</strong> Centro - Torre - UNIESP</li>
                  <li>• <strong>Linha 1520:</strong> Bancários - UNIESP</li>
                  <li>• <strong>Linha 1530:</strong> Mangabeira - UNIESP</li>
                </ul>
                
                <p><strong>Dicas importantes:</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>• Ponto de ônibus em frente à universidade</li>
                  <li>• Consulte horários no app da SEMOB</li>
                  <li>• Tempo médio de viagem: 30-45 min do centro</li>
                </ul>
              </div>
            </Card>
          </div>

          <Card className="p-8 mt-8 bg-primary/5 border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold">Contato da UNIESP</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Telefone:</strong> (83) 3216-7000
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>E-mail:</strong> contato@uniesp.edu.br
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Site:</strong> www.uniesp.edu.br
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  Para dúvidas específicas sobre o evento, entre em contato diretamente 
                  com a organização do Debian Day através dos nossos canais oficiais.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Location;
