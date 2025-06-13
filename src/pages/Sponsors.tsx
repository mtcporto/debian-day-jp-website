
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Star, Award } from "lucide-react";

const Sponsors = () => {
  const sponsorshipTiers = [
    {
      name: "Patrocinador Ouro",
      icon: <Award className="w-8 h-8" />,
      price: "R$ 5.000",
      benefits: [
        "Logo grande no site e materiais",
        "Banner no auditório",
        "Menção nas palestras",
        "4 ingressos cortesia",
        "Stand na área de networking",
        "Post dedicado nas redes sociais"
      ],
      color: "border-yellow-500 bg-yellow-50"
    },
    {
      name: "Patrocinador Prata", 
      icon: <Star className="w-8 h-8" />,
      price: "R$ 3.000",
      benefits: [
        "Logo médio no site e materiais",
        "Banner na área de coffee break",
        "2 ingressos cortesia",
        "Menção nas redes sociais",
        "Material informativo no kit"
      ],
      color: "border-gray-400 bg-gray-50"
    },
    {
      name: "Patrocinador Bronze",
      icon: <Heart className="w-8 h-8" />,
      price: "R$ 1.500",
      benefits: [
        "Logo pequeno no site",
        "1 ingresso cortesia",
        "Menção de agradecimento",
        "Material no kit do participante"
      ],
      color: "border-orange-500 bg-orange-50"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Patrocinadores</h1>
            <p className="text-xl text-muted-foreground">
              Seja parte do maior evento Debian do Nordeste
            </p>
          </div>

          <Card className="p-8 mb-12 text-center bg-gradient-to-r from-primary/10 to-secondary/10">
            <h2 className="text-2xl font-bold mb-4">Oportunidade Única de Patrocínio</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              O Debian Day João Pessoa 2025 é uma oportunidade exclusiva para sua empresa se conectar 
              com profissionais de tecnologia, estudantes e entusiastas do software livre. 
              Esperamos mais de 100 participantes nos dois dias de evento.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {sponsorshipTiers.map((tier, index) => (
              <Card key={index} className={`p-6 ${tier.color} border-2`}>
                <div className="text-center mb-6">
                  <div className="text-primary mb-4 flex justify-center">
                    {tier.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-2xl font-bold text-primary">{tier.price}</div>
                </div>

                <ul className="space-y-2 mb-6">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Por que patrocinar?</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>🎯 <strong>Público-alvo qualificado:</strong> Profissionais de TI, desenvolvedores e estudantes</li>
                <li>📊 <strong>Visibilidade:</strong> Exposição da marca para mais de 100 participantes</li>
                <li>🤝 <strong>Networking:</strong> Oportunidade de conectar com talentos da região</li>
                <li>💡 <strong>Inovação:</strong> Associação com tecnologia e software livre</li>
                <li>🌟 <strong>Responsabilidade:</strong> Apoio à educação e comunidade tech</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Perfil dos Participantes</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>👨‍💻 <strong>Desenvolvedores</strong> e administradores de sistema</li>
                <li>🎓 <strong>Estudantes</strong> de cursos de tecnologia</li>
                <li>🏢 <strong>Profissionais</strong> de empresas de TI</li>
                <li>🚀 <strong>Empreendedores</strong> e startups tech</li>
                <li>📚 <strong>Professores</strong> e pesquisadores</li>
                <li>🌐 <strong>Entusiastas</strong> de software livre</li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Interesse em Patrocinar?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Entre em contato conosco para discutir oportunidades de patrocínio personalizadas 
              e como sua empresa pode fazer parte deste evento histórico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="mailto:patrocinio@debiandayjp.com.br">
                  Enviar Proposta
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+5583999999999">
                  (83) 9 9999-9999
                </a>
              </Button>
            </div>
          </Card>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-6">Nossos Futuros Patrocinadores</h3>
            <div className="bg-muted/20 border-2 border-dashed border-muted-foreground/20 rounded-lg p-12">
              <p className="text-muted-foreground text-lg">
                Seja a primeira empresa a apoiar o Debian Day João Pessoa 2025!
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Seu logo estará aqui em breve 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sponsors;
