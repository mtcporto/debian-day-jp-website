
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Quem pode participar do Debian Day?",
      answer: "O evento é aberto para todos! Profissionais de tecnologia, estudantes, curiosos sobre software livre e qualquer pessoa interessada em aprender sobre Debian e Linux são bem-vindas."
    },
    {
      question: "Preciso ter conhecimento prévio em Linux?",
      answer: "Não é necessário! Teremos conteúdo para diferentes níveis, desde iniciantes até usuários avançados. O Installfest é especialmente pensado para quem está começando."
    },
    {
      question: "O que está incluso no ingresso?",
      answer: "Seu ingresso garante acesso aos dois dias de evento, todas as palestras e workshop, coffee breaks, participação no Installfest, certificado de participação e kit do participante (quando aplicável)."
    },
    {
      question: "Como funciona o ingresso social?",
      answer: "O ingresso social é destinado a pessoas em situação de vulnerabilidade socioeconômica. É necessário preencher um formulário de análise socioeconômica que será avaliado pela organização."
    },
    {
      question: "Posso levar meu notebook?",
      answer: "Sim! Recomendamos trazer seu notebook para acompanhar melhor as palestras e participar do Installfest. A UNIESP oferece Wi-Fi gratuito."
    },
    {
      question: "Haverá alimentação no evento?",
      answer: "Os ingressos incluem coffee breaks. Para o almoço, há cantina na própria UNIESP e também restaurantes próximos ao campus."
    },
    {
      question: "O evento oferece certificado?",
      answer: "Sim! Todos os participantes que comparecerem aos dois dias do evento receberão certificado digital de participação."
    },
    {
      question: "Como posso propor uma palestra?",
      answer: "Ainda estamos recebendo propostas! Acesse o formulário de submissão através do link disponível na página da agenda ou entre em contato conosco."
    },
    {
      question: "Há estacionamento disponível?",
      answer: "Sim! A UNIESP oferece estacionamento gratuito para os participantes do evento."
    },
    {
      question: "O local é acessível?",
      answer: "Sim! A UNIESP possui total acessibilidade, incluindo rampas, elevadores e banheiros adaptados."
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Perguntas Frequentes</h1>
            <p className="text-xl text-muted-foreground">
              Tire suas dúvidas sobre o Debian Day João Pessoa 2025
            </p>
          </div>

          <Card className="p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>

          <Card className="p-8 mt-8 bg-muted/30">
            <h3 className="text-2xl font-bold mb-4 text-center">Ainda tem dúvidas?</h3>
            <p className="text-center text-muted-foreground mb-6">
              Não encontrou a resposta que procurava? Entre em contato conosco!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:contato@debiandayjp.com.br"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-center"
              >
                contato@debiandayjp.com.br
              </a>
              <a 
                href="https://t.me/debiandayjp"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors text-center"
              >
                Telegram: @debiandayjp
              </a>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
