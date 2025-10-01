import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-tech.jpg";
import { Smartphone, Globe, Settings, Headphones, Code, Zap } from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Desarrollo de Apps Móviles",
      description: "Aplicaciones iOS y Android nativas y multiplataforma de alta calidad."
    },
    {
      icon: Globe,
      title: "Desarrollo Web",
      description: "Sitios web modernos, responsivos y optimizados para conversión."
    },
    {
      icon: Code,
      title: "Software Personalizado",
      description: "Soluciones de software a medida para tus necesidades específicas."
    },
    {
      icon: Settings,
      title: "Mantenimiento",
      description: "Servicio de mantenimiento continuo y actualizaciones de software."
    },
    {
      icon: Zap,
      title: "Optimización",
      description: "Mejora el rendimiento y la eficiencia de tus aplicaciones."
    },
    {
      icon: Headphones,
      title: "Soporte 24/7",
      description: "Asistencia técnica disponible cuando la necesites."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div 
            className="absolute inset-0 z-0 opacity-20"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background z-0" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
                Transformamos Ideas en Soluciones Digitales
              </h1>
              <p className="text-xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
                Desarrollo de aplicaciones móviles, web y software personalizado. 
                Expertos en mantenimiento y soporte técnico profesional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                <Link to="/contacto">
                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                    Iniciar Proyecto
                  </Button>
                </Link>
                <Link to="/servicios">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Ver Servicios
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ofrecemos soluciones tecnológicas completas para impulsar tu negocio
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50 bg-card">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
              ¿Listo para Comenzar tu Proyecto?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos digitales
            </p>
            <Link to="/contacto">
              <Button variant="secondary" size="lg" className="bg-background text-foreground hover:bg-background/90">
                Contactar Ahora
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
