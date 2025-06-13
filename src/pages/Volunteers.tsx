
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Users, Heart } from "lucide-react";

const Volunteers = () => {
  const volunteers = [
    {
      name: "Humberto Alencar",
      linkedin: "https://www.linkedin.com/in/halencarjunior",
      initials: "HA"
    },
    {
      name: "Isaac Roberto",
      linkedin: "https://www.linkedin.com/in/isaac-roberto-aa69932b9",
      initials: "IR"
    },
    {
      name: "Marcelino Camilo",
      linkedin: "https://www.linkedin.com/in/marcelino-camilo/",
      initials: "MC"
    },
    {
      name: "Rodolfo França",
      linkedin: "https://www.linkedin.com/in/rodolfo-fran%C3%A7a-de-souza-28b55a286/",
      initials: "RF"
    },
    {
      name: "Marco Tulio",
      linkedin: "https://www.linkedin.com/in/marco-tulio-porto-5671a323/",
      initials: "MT"
    },
    {
      name: "Maykon Maia",
      linkedin: "https://www.linkedin.com/in/maykon-maia/",
      initials: "MM"
    },
    {
      name: "Liriel Rosseli",
      linkedin: "https://www.linkedin.com/in/lirielrosseli/",
      initials: "LR"
    },
    {
      name: "Hrasam Hussem",
      linkedin: null,
      initials: "HH"
    },
    {
      name: "Jorge Eduardo",
      linkedin: null,
      initials: "JE"
    },
    {
      name: "José Ennylson",
      linkedin: null,
      initials: "JE"
    },
    {
      name: "Laura Faria",
      linkedin: null,
      initials: "LF"
    },
    {
      name: "Caio Enrique",
      linkedin: null,
      initials: "CE"
    },
    {
      name: "Eugenia Rodrigues",
      linkedin: null,
      initials: "ER"
    },
    {
      name: "Mateus Cavalcante",
      linkedin: null,
      initials: "MC"
    },
    {
      name: "Rafael Rocha",
      linkedin: null,
      initials: "RR"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-primary" />
              <h1 className="text-4xl md:text-5xl font-bold">Voluntários</h1>
            </div>
            <p className="text-xl text-muted-foreground">
              Conheça as pessoas incríveis que estão tornando este evento possível
            </p>
          </div>

          <Card className="p-8 mb-12 bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="text-center">
              <Users className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Nosso Time de Voluntários</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                O Debian Day João Pessoa 2025 é possível graças ao trabalho dedicado de nossos voluntários. 
                Cada pessoa desta equipe contribui com seu tempo, conhecimento e paixão pelo software livre 
                para criar um evento memorável para toda a comunidade.
              </p>
            </div>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {volunteers.map((volunteer, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">
                      {volunteer.initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg">{volunteer.name}</h3>
                </div>
                
                {volunteer.linkedin ? (
                  <a
                    href={volunteer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    Ver LinkedIn
                  </a>
                ) : (
                  <span className="text-sm text-muted-foreground">Voluntário</span>
                )}
              </Card>
            ))}
          </div>

          <Card className="p-8 mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4">Quer ser um voluntário?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Estamos sempre abertos a receber novas pessoas na nossa equipe! 
              Se você tem paixão pelo software livre e quer contribuir com a comunidade, 
              entre em contato conosco.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:voluntarios@debiandayjp.com.br" 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                voluntarios@debiandayjp.com.br
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
    </Layout>
  );
};

export default Volunteers;
