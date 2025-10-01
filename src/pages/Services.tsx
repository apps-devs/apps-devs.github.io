import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  Smartphone, 
  Globe, 
  Code, 
  Settings, 
  Cloud, 
  Shield, 
  Zap, 
  Database,
  CheckCircle 
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Smartphone,
      title: "Desarrollo de Aplicaciones Móviles",
      description: "Creamos aplicaciones nativas y multiplataforma para iOS y Android utilizando las últimas tecnologías.",
      features: [
        "Apps nativas iOS (Swift)",
        "Apps nativas Android (Kotlin)",
        "Desarrollo multiplataforma (React Native, Flutter)",
        "Diseño UI/UX profesional",
        "Integración con APIs",
        "Publicación en tiendas"
      ]
    },
    {
      icon: Globe,
      title: "Desarrollo Web",
      description: "Sitios web modernos, responsivos y optimizados para SEO y conversión.",
      features: [
        "Páginas web corporativas",
        "E-commerce y tiendas online",
        "Aplicaciones web progresivas (PWA)",
        "Diseño responsive",
        "Optimización SEO",
        "Integración con CMS"
      ]
    },
    {
      icon: Code,
      title: "Software Personalizado",
      description: "Soluciones de software a medida diseñadas específicamente para tus necesidades empresariales.",
      features: [
        "Sistemas de gestión empresarial",
        "Software de automatización",
        "Integraciones personalizadas",
        "APIs y microservicios",
        "Aplicaciones de escritorio",
        "Soluciones cloud"
      ]
    },
    {
      icon: Settings,
      title: "Mantenimiento y Soporte",
      description: "Servicio continuo de mantenimiento, actualizaciones y mejoras para tus aplicaciones.",
      features: [
        "Actualizaciones de seguridad",
        "Corrección de bugs",
        "Mejoras de rendimiento",
        "Actualizaciones de contenido",
        "Monitoreo 24/7",
        "Backups automáticos"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Implementación y gestión de infraestructura en la nube"
    },
    {
      icon: Shield,
      title: "Seguridad",
      description: "Auditorías de seguridad y protección de datos"
    },
    {
      icon: Zap,
      title: "Optimización",
      description: "Mejora de rendimiento y velocidad de aplicaciones"
    },
    {
      icon: Database,
      title: "Big Data",
      description: "Análisis y procesamiento de grandes volúmenes de datos"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Servicios</h1>
              <p className="text-xl text-muted-foreground">
                Ofrecemos soluciones tecnológicas completas para empresas de todos los tamaños
              </p>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-12">
              {mainServices.map((service, index) => (
                <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300">
                  <div className="grid md:grid-cols-[auto_1fr] gap-6">
                    <div className="flex justify-center md:justify-start">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                        <service.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {service.features.map((feature, fIndex) => (
                          <div key={fIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Servicios Adicionales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:border-primary/50">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
              ¿Necesitas un Servicio Personalizado?
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contáctanos y cuéntanos sobre tu proyecto. Crearemos una solución perfecta para ti.
            </p>
            <Link to="/contacto">
              <Button variant="secondary" size="lg" className="bg-background text-foreground hover:bg-background/90">
                Solicitar Cotización
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
