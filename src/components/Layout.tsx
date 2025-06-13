
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Agenda', href: '/agenda' },
    { name: 'Ingressos', href: '/ingressos' },
    { name: 'Local', href: '/local' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Patrocinadores', href: '/patrocinadores' },
    { name: 'Voluntários', href: '/voluntarios' },
    { name: 'Cidade', href: '/cidade' },
    { name: 'Hospedagem', href: '/hospedagem' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 debian-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="font-bold text-xl">Debian Day JP</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.href
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.href
                      ? 'text-primary bg-muted rounded-md'
                      : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-muted mt-20">
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
                <li><Link to="/ingressos" className="text-sm text-muted-foreground hover:text-primary">Ingressos</Link></li>
                <li><Link to="/agenda" className="text-sm text-muted-foreground hover:text-primary">Agenda</Link></li>
                <li><Link to="/local" className="text-sm text-muted-foreground hover:text-primary">Local</Link></li>
                <li><Link to="/hospedagem" className="text-sm text-muted-foreground hover:text-primary">Hospedagem</Link></li>
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
      </footer>
    </div>
  );
};

export default Layout;
