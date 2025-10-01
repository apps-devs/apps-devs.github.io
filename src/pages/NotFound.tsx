import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-9xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                404
              </h1>
              <h2 className="text-3xl font-bold mb-4">Página No Encontrada</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Lo sentimos, la página que buscas no existe o ha sido movida.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  <Home className="mr-2 w-4 h-4" />
                  Volver al Inicio
                </Button>
              </Link>
              <Link to="/servicios">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  <Search className="mr-2 w-4 h-4" />
                  Ver Servicios
                </Button>
              </Link>
            </div>

            <div className="mt-12 p-6 bg-card rounded-lg border border-border">
              <h3 className="font-semibold mb-4">Enlaces Útiles:</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
                <Link to="/servicios" className="text-muted-foreground hover:text-primary transition-colors">
                  Servicios
                </Link>
                <Link to="/proyectos" className="text-muted-foreground hover:text-primary transition-colors">
                  Proyectos
                </Link>
                <Link to="/sobre-nosotros" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nosotros
                </Link>
                <Link to="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
                <Link to="/auth" className="text-muted-foreground hover:text-primary transition-colors">
                  Iniciar Sesión
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
