import {pageMetadata,jsonLd} from "@/lib/metadata";
export const metadata=pageMetadata("/faq");

import { Card } from "@/components/ui/card";
import {ChevronDown} from "lucide-react";
import {faqs} from "@/lib/faq";

const FAQ = () => {

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:jsonLd({'@context':'https://schema.org','@type':'FAQPage',mainEntity:faqs.map(f=>({'@type':'Question',name:f.question,acceptedAnswer:{'@type':'Answer',text:f.answer}}))})}}/>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Perguntas Frequentes</h1>
            <p className="text-xl text-muted-foreground">
              Tire suas dúvidas sobre o Debian Day João Pessoa 2025
            </p>
          </div>

          <Card className="p-8">
            <div className="w-full">
              {faqs.map((faq,index)=><details key={index} name="debian-faq" className="group border-b">
                <summary className="faq-trigger flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline text-left cursor-pointer list-none">
                  {faq.question}<ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180"/>
                </summary>
                <div className="overflow-hidden text-sm"><div className="pb-4 pt-0 text-muted-foreground">{faq.answer}</div></div>
              </details>)}
            </div>
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
    </>
  );
};

export default FAQ;
