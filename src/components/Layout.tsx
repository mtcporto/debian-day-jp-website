import type {ReactNode} from "react";
import Link from "next/link";
import SiteHeader from "./SiteHeader";
export default function Layout({children}:{children:ReactNode}){return <div className="min-h-screen bg-background"><SiteHeader/><main>{children}</main><footer className="bg-muted mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 debian-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">D</span>
                </div>
                <span className="font-bold text-xl">Debian Day João Pessoa 2025</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Celebrando o aniversário do Projeto Debian com palestras, workshops e muito networking.
              </p>
              <p className="text-sm text-muted-foreground">
                15 e 16 de agosto de 2025 • UNIESP João Pessoa
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><Link href="/ingressos" className="text-sm text-muted-foreground hover:text-primary">Ingressos</Link></li>
                <li><Link href="/agenda" className="text-sm text-muted-foreground hover:text-primary">Agenda</Link></li>
                <li><Link href="/local" className="text-sm text-muted-foreground hover:text-primary">Local</Link></li>
                <li><Link href="/hospedagem" className="text-sm text-muted-foreground hover:text-primary">Hospedagem</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-2">
                <li className="text-sm text-muted-foreground">debianday@example.com</li>
                <li className="text-sm text-muted-foreground">@debiandayjp</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Debian Day João Pessoa. Software Livre sempre!
            </p>
          </div>
        </div>
      </footer></div>}
