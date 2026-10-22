import {pageMetadata} from "@/lib/metadata";
export const metadata=pageMetadata("/sobre");

import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre o Debian Day</h1>
            <p className="text-xl text-muted-foreground">
              Celebrando 32 anos de software livre e comunidade
            </p>
          </div>

          <Card className="p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                O Debian Day celebra o aniversário do Projeto Debian, fundado por Ian Murdock em 16 de agosto de 1993. 
                O Debian é uma das principais distribuições Linux, base para inúmeros sistemas no mundo todo. 
                O evento reúne profissionais de tecnologia, estudantes e curiosos em um dia de palestras, 
                oficinas e troca de experiências sobre software livre, open source e inovação.
              </p>
              
              <p className="text-lg leading-relaxed">
                Seja você um especialista ou alguém dando os primeiros passos no mundo do Linux, 
                o Debian Day é uma ótima oportunidade para aprender, se conectar e fazer parte da comunidade.
              </p>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-primary">Informações do Evento</h3>
              <ul className="space-y-3">
                <li><strong>Evento:</strong> Debian Day João Pessoa 2025</li>
                <li><strong>Datas:</strong> 15 e 16 de agosto</li>
                <li><strong>Local:</strong> UNIESP – João Pessoa</li>
                <li><strong>Público esperado:</strong> Mínimo de 100 pessoas</li>
                <li><strong>Capacidade:</strong> Até 350 pessoas</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-primary">Atividades Previstas</h3>
              <ul className="space-y-3">
                <li>🎤 <strong>3 Palestras</strong> sobre Debian e tecnologia</li>
                <li>🛠️ <strong>1 Workshop</strong> prático</li>
                <li>💻 <strong>Installfest</strong> com VMs nos laboratórios</li>
                <li>🤝 <strong>Networking</strong> e troca de experiências</li>
                <li>📚 <strong>Aprendizado</strong> sobre software livre</li>
              </ul>
            </Card>
          </div>

          <Card className="p-8 mt-8 bg-muted">
            <h3 className="text-2xl font-bold mb-4 text-center">Tema Central</h3>
            <p className="text-lg text-center">
              <strong>Debian puro</strong>, mas também aberto a discussões sobre distribuições derivadas. 
              Uma celebração completa do ecossistema Debian e sua influência no mundo do software livre.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
};

export default About;
