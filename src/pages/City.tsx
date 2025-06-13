
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { MapPin, Sun, Waves, Camera } from "lucide-react";

const City = () => {
  const attractions = [
    {
      name: "Centro Histórico",
      description: "Arquitetura colonial preservada e rica história",
      icon: <Camera className="w-6 h-6" />
    },
    {
      name: "Praia do Cabo Branco",
      description: "Ponto mais oriental das Américas",
      icon: <Waves className="w-6 h-6" />
    },
    {
      name: "Mercado de Artesanato",
      description: "Cultura local e produtos típicos",
      icon: <MapPin className="w-6 h-6" />
    },
    {
      name: "Estação Cabo Branco",
      description: "Centro cultural com design futurista",
      icon: <Camera className="w-6 h-6" />
    }
  ];

  const restaurants = [
    {
      name: "Mangai",
      specialty: "Culinária nordestina tradicional",
      location: "Tambaú"
    },
    {
      name: "Tábua de Carne",
      specialty: "Carnes e frutos do mar",
      location: "Manaíra"
    },
    {
      name: "Oficina do Sabor",
      specialty: "Cozinha contemporânea",
      location: "Tambaú"
    },
    {
      name: "Picanha na Tábua",
      specialty: "Churrascaria",
      location: "Torre"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">João Pessoa</h1>
            <p className="text-xl text-muted-foreground">
              Conheça a porta de entrada do Sol no Brasil
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Sun className="w-8 h-8 text-yellow-500" />
                <h2 className="text-2xl font-bold">Sobre João Pessoa</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  João Pessoa, capital da Paraíba, é conhecida como "a porta de entrada do Sol no Brasil" 
                  por ser o ponto mais oriental das Américas. A cidade combina história, cultura e 
                  modernidade de forma única.
                </p>
                <p>
                  Com suas praias urbanas, centro histórico preservado e clima tropical, 
                  João Pessoa oferece uma experiência completa para quem visita a cidade 
                  durante o Debian Day.
                </p>
                <p>
                  A cidade é também um importante centro universitário e tecnológico do Nordeste, 
                  com uma comunidade tech ativa e crescente.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-blue-50 to-green-50">
              <h3 className="text-xl font-bold mb-4">Dados da Cidade</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold">População:</p>
                  <p className="text-muted-foreground">~800 mil habitantes</p>
                </div>
                <div>
                  <p className="font-semibold">Clima:</p>
                  <p className="text-muted-foreground">Tropical úmido</p>
                </div>
                <div>
                  <p className="font-semibold">Temperatura:</p>
                  <p className="text-muted-foreground">24°C - 32°C</p>
                </div>
                <div>
                  <p className="font-semibold">Fuso horário:</p>
                  <p className="text-muted-foreground">UTC-3</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Principais Atrações</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {attractions.map((attraction, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-primary mb-4 flex justify-center">
                    {attraction.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{attraction.name}</h3>
                  <p className="text-sm text-muted-foreground">{attraction.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Gastronomia Local</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {restaurants.map((restaurant, index) => (
                <Card key={index} className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{restaurant.name}</h3>
                  <p className="text-muted-foreground mb-2">{restaurant.specialty}</p>
                  <p className="text-sm text-primary">📍 {restaurant.location}</p>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10">
            <h3 className="text-2xl font-bold mb-4 text-center">Dicas para Aproveitar a Cidade</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">🌅 Nascer do Sol</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Não perca o nascer do sol na Praia do Cabo Branco, 
                  o primeiro ponto das Américas a receber a luz solar.
                </p>

                <h4 className="font-semibold mb-3">🏛️ Centro Histórico</h4>
                <p className="text-sm text-muted-foreground">
                  Visite a Igreja de São Francisco e o Centro Cultural 
                  São Francisco para conhecer a história local.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">🍤 Culinária</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Experimente pratos típicos como tapioca, cuscuz nordestino 
                  e frutos do mar frescos.
                </p>

                <h4 className="font-semibold mb-3">🚌 Transporte</h4>
                <p className="text-sm text-muted-foreground">
                  Use o app da SEMOB para consultar linhas de ônibus 
                  ou considere alugar um carro para maior mobilidade.
                </p>
              </div>
            </div>
          </Card>

          <div className="mt-12 text-center">
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-4">Planeje sua Visita</h3>
              <p className="text-muted-foreground mb-6">
                Aproveite sua estadia em João Pessoa para conhecer nossa cultura, 
                gastronomia e hospitalidade nordestina. O Debian Day é uma ótima 
                oportunidade para combinar tecnologia e turismo!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://www.visitjoaopessoa.com.br" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Guia Oficial da Cidade
                </a>
                <a 
                  href="/hospedagem"
                  className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Ver Hospedagem
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default City;
