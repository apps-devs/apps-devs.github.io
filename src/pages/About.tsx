import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Target, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Enfoque en Resultados",
      description: "Nos comprometemos a entregar soluciones que generen valor real para tu negocio."
    },
    {
      icon: Users,
      title: "Trabajo en Equipo",
      description: "Colaboramos estrechamente contigo en cada etapa del proyecto."
    },
    {
      icon: Award,
      title: "Calidad Premium",
      description: "Utilizamos las mejores prácticas y tecnologías más avanzadas."
    },
    {
      icon: TrendingUp,
      title: "Mejora Continua",
      description: "Siempre buscamos innovar y mejorar nuestros procesos."
    }
  ];

  const team = [
    {
      name: "Carlos Rodríguez",
      role: "CEO & Fundador",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
    },
    {
      name: "María García",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
      name: "Juan López",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      name: "Ana Martínez",
      role: "UX/UI Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h1>
              <p className="text-xl text-muted-foreground">
                Somos un equipo de expertos apasionados por crear soluciones tecnológicas innovadoras
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Nuestra Historia</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  InnovaTech Solutions nació en 2015 con la visión de transformar la manera en que las empresas 
                  utilizan la tecnología para crecer y prosperar en la era digital. Desde nuestros humildes comienzos 
                  como un pequeño equipo de desarrolladores apasionados, hemos crecido hasta convertirnos en una de 
                  las agencias de desarrollo más respetadas de España.
                </p>
                <p>
                  Con más de 150 proyectos exitosos en nuestro portafolio, hemos ayudado a empresas de todos los 
                  tamaños a alcanzar sus objetivos digitales. Nuestro enfoque centrado en el cliente y nuestra 
                  dedicación a la excelencia técnica nos han ganado la confianza de marcas líderes en diversos sectores.
                </p>
                <p>
                  Hoy en día, seguimos innovando y expandiendo nuestros servicios para mantenernos a la vanguardia 
                  de la tecnología, asegurando que nuestros clientes siempre tengan acceso a las mejores soluciones 
                  disponibles en el mercado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Nuestros Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Nuestro Equipo</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  9+
                </div>
                <div className="text-muted-foreground">Años de Experiencia</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  25+
                </div>
                <div className="text-muted-foreground">Profesionales</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  150+
                </div>
                <div className="text-muted-foreground">Proyectos</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-muted-foreground">Clientes</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
              ¿Quieres Ser Parte de Nuestra Historia?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Únete a las empresas que ya confían en nosotros para sus proyectos tecnológicos
            </p>
            <Link to="/contacto">
              <Button variant="secondary" size="lg" className="bg-background text-foreground hover:bg-background/90">
                Contáctanos
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
