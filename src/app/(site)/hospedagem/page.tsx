import {pageMetadata} from "@/lib/metadata";
export const metadata=pageMetadata("/hospedagem");

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Wifi, Car, Coffee, Hotel } from "lucide-react";

const Accommodation = () => {
  const hotels = [
    {
      name: "Hotel Tambaú",
      category: "Luxo",
      distance: "12 km da UNIESP",
      price: "R$ 180-250/noite",
      rating: 4.5,
      amenities: ["Wi-Fi", "Piscina", "Restaurante", "Estacionamento"],
      description: "Hotel icônico na orla de Tambaú com vista para o mar",
      phone: "(83) 3041-4000",
      website: "www.tambauhotel.com.br"
    },
    {
      name: "Ibis João Pessoa",
      category: "Econômico",
      distance: "8 km da UNIESP",
      price: "R$ 120-180/noite",
      rating: 4.2,
      amenities: ["Wi-Fi", "Restaurante", "24h", "Estacionamento"],
      description: "Rede internacional com bom custo-benefício",
      phone: "(83) 3044-8000",
      website: "www.ibis.com"
    },
    {
      name: "Nord Easy Connect",
      category: "Moderno",
      distance: "6 km da UNIESP",
      price: "R$ 150-200/noite",
      rating: 4.3,
      amenities: ["Wi-Fi", "Academia", "Café", "Pet-friendly"],
      description: "Hotel moderno próximo ao centro da cidade",
      phone: "(83) 3512-3000",
      website: "www.nordeasyhotels.com.br"
    },
    {
      name: "Pousada Villa Sanhauá",
      category: "Boutique",
      distance: "15 km da UNIESP",
      price: "R$ 100-150/noite",
      rating: 4.0,
      amenities: ["Wi-Fi", "Café", "Jardim", "Varanda"],
      description: "Pousada charmosa no centro histórico",
      phone: "(83) 3218-2400",
      website: "www.villasanhaua.com.br"
    },
    {
      name: "Flat Manaíra",
      category: "Apart-hotel",
      distance: "10 km da UNIESP",
      price: "R$ 130-170/noite",
      rating: 4.1,
      amenities: ["Wi-Fi", "Cozinha", "Piscina", "Lavanderia"],
      description: "Apartamentos equipados na área nobre de Manaíra",
      phone: "(83) 3226-1200",
      website: "www.flatmanaira.com.br"
    },
    {
      name: "Hardman Praia Hotel",
      category: "Conforto",
      distance: "14 km da UNIESP",
      price: "R$ 160-220/noite",
      rating: 4.4,
      amenities: ["Wi-Fi", "Piscina", "Spa", "Restaurante"],
      description: "Hotel confortável na orla do Cabo Branco",
      phone: "(83) 3044-7000",
      website: "www.hardmanpraia.com.br"
    }
  ];

  const neighborhoods = [
    {
      name: "Torre/Bancários",
      description: "Mais próximo à UNIESP, com opções variadas de hospedagem",
      distance: "2-5 km",
      pros: ["Proximidade do evento", "Transporte público", "Comércio local"]
    },
    {
      name: "Tambaú/Cabo Branco",
      description: "Orla marítima com hotéis de diferentes categorias",
      distance: "12-15 km",
      pros: ["Vista para o mar", "Restaurantes", "Vida noturna"]
    },
    {
      name: "Manaíra",
      description: "Bairro nobre com shopping e opções gastronômicas",
      distance: "8-10 km",
      pros: ["Shopping Manaíra", "Restaurantes", "Segurança"]
    },
    {
      name: "Centro",
      description: "Região histórica com pousadas e hotéis econômicos",
      distance: "10-12 km",
      pros: ["Centro histórico", "Preços acessíveis", "Cultura local"]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Luxo": return "bg-yellow-500";
      case "Moderno": return "bg-blue-500";
      case "Econômico": return "bg-green-500";
      case "Boutique": return "bg-purple-500";
      case "Apart-hotel": return "bg-orange-500";
      case "Conforto": return "bg-indigo-500";
      default: return "bg-gray-500";
    }
  };

  const getAmenityIcon = (amenity: string) => {
    switch (amenity) {
      case "Wi-Fi": return <Wifi className="w-4 h-4" />;
      case "Estacionamento": return <Car className="w-4 h-4" />;
      case "Café": return <Coffee className="w-4 h-4" />;
      default: return <Hotel className="w-4 h-4" />;
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hospedagem</h1>
            <p className="text-xl text-muted-foreground">
              Opções de hospedagem para o Debian Day João Pessoa 2025
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Hotéis Recomendados</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {hotels.map((hotel, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{hotel.name}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={`text-white ${getCategoryColor(hotel.category)}`}>
                          {hotel.category}
                        </Badge>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{hotel.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">{hotel.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{hotel.distance}</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{hotel.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.map((amenity, amenityIndex) => (
                      <div key={amenityIndex} className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded">
                        {getAmenityIcon(amenity)}
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={`tel:${hotel.phone.replace(/\D/g, '')}`}
                      className="flex-1 px-4 py-2 text-sm border border-primary text-primary rounded hover:bg-primary hover:text-primary-foreground transition-colors text-center"
                    >
                      {hotel.phone}
                    </a>
                    <a
                      href={`https://${hotel.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 text-sm bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors text-center"
                    >
                      Site Oficial
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Regiões Recomendadas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {neighborhoods.map((neighborhood, index) => (
                <Card key={index} className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold">{neighborhood.name}</h3>
                    <Badge variant="outline">{neighborhood.distance}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{neighborhood.description}</p>
                  <div className="space-y-1">
                    {neighborhood.pros.map((pro, proIndex) => (
                      <div key={proIndex} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>{pro}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10">
            <h3 className="text-2xl font-bold mb-6 text-center">Dicas de Hospedagem</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  🏨 Reservas
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Reserve com antecedência para melhores preços</li>
                  <li>• Verifique políticas de cancelamento</li>
                  <li>• Confirme se o hotel oferece desconto para grupos</li>
                  <li>• Considere hospedagem compartilhada com outros participantes</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  🚗 Transporte
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Hotéis próximos à UNIESP reduzem custos de deslocamento</li>
                  <li>• Verifique se há transporte público direto</li>
                  <li>• Considere a possibilidade de carona solidária</li>
                  <li>• Apps de transporte funcionam bem na cidade</li>
                </ul>
              </div>
            </div>
          </Card>

          <div className="mt-12 text-center">
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Precisa de Ajuda?</h3>
              <p className="text-muted-foreground mb-6">
                Nossa equipe pode ajudar você a encontrar a hospedagem ideal 
                ou conectar com outros participantes para hospedagem compartilhada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:hospedagem@debiandayjp.com.br"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  hospedagem@debiandayjp.com.br
                </a>
                <a 
                  href="https://t.me/debiandayjp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Grupo no Telegram
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accommodation;
