import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Fashion App",
      category: "Aplicación Móvil",
      description: "Aplicación de comercio electrónico para una marca de moda española con más de 50,000 usuarios activos.",
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop"
    },
    {
      title: "Sistema de Gestión Empresarial",
      category: "Software Empresarial",
      description: "Plataforma completa de gestión para empresa de logística con módulos de inventario, facturación y reportes.",
      technologies: ["React", "TypeScript", "PostgreSQL", "AWS"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
    },
    {
      title: "Portal de Educación Online",
      category: "Plataforma Web",
      description: "Sistema de aprendizaje en línea con video conferencias, evaluaciones y certificaciones.",
      technologies: ["Next.js", "WebRTC", "Redis", "Docker"],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop"
    },
    {
      title: "App de Delivery de Comida",
      category: "Aplicación Móvil",
      description: "Aplicación de pedidos de comida con tracking en tiempo real y sistema de pagos integrado.",
      technologies: ["Flutter", "Firebase", "Google Maps API", "PayPal"],
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&h=500&fit=crop"
    },
    {
      title: "Dashboard Analytics",
      category: "Web App",
      description: "Panel de análisis de datos en tiempo real para empresa de marketing digital.",
      technologies: ["Vue.js", "D3.js", "Python", "MySQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"
    },
    {
      title: "App de Fitness",
      category: "Aplicación Móvil",
      description: "Aplicación de entrenamiento personalizado con planes de ejercicio y seguimiento nutricional.",
      technologies: ["Swift", "HealthKit", "Firebase", "ML Kit"],
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=500&fit=crop"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Proyectos</h1>
              <p className="text-xl text-muted-foreground">
                Casos de éxito que demuestran nuestra experiencia en desarrollo de software
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3">{project.category}</Badge>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Ver Detalles
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
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
                  150+
                </div>
                <div className="text-muted-foreground">Proyectos Completados</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  98%
                </div>
                <div className="text-muted-foreground">Satisfacción del Cliente</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-muted-foreground">Clientes Activos</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-muted-foreground">Soporte Técnico</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
              ¿Quieres Ver tu Proyecto Aquí?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Comienza tu proyecto hoy y únete a nuestros clientes satisfechos
            </p>
            <Link to="/contacto">
              <Button variant="secondary" size="lg" className="bg-background text-foreground hover:bg-background/90">
                Iniciar Proyecto
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
