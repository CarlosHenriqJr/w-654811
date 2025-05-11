import { useEffect, useRef, useState } from 'react';
import { Activity, Shield, HardHat, Zap, ArrowRight, Box, Truck, Code, CheckCircle, Rocket, Factory, Microchip, Handshake, RefreshCcw, MessageSquare, Users, Brain, Palette, TrendingUp, Lightbulb, Briefcase } from "lucide-react";
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from 'react-router-dom';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui/button";

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [progressValue, setProgressValue] = useState(0);
  const [currentSprint, setCurrentSprint] = useState(1);
  const totalSprints = 3;
  const isMobile = useIsMobile();

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          (entry.target as HTMLElement).style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    if (featuresRef.current) {
      const elements = featuresRef.current.querySelectorAll('.feature-item');
      elements.forEach(el => {
        if (!el.classList.contains('animate-slide-in')) {
          (el as HTMLElement).style.opacity = '0';
          observer.observe(el);
        }
      });
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    const animateProgress = () => {
      setProgressValue(0);
      interval = setInterval(() => {
        setProgressValue(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setCurrentSprint(prevSprint => prevSprint < totalSprints ? prevSprint + 1 : 1);
              animateProgress();
            }, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    };
    animateProgress();
    return () => {
      if (interval) clearInterval(interval);
    };
  }, []); // Removido currentSprint das dependências para evitar loop infinito

  const softwareSolutions = [
    {
      icon: <Code className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Desenvolvimento Web Sob Medida",
      description: "Criamos sites e plataformas web personalizadas, responsivas e otimizadas para performance, focadas em gerar resultados para o seu negócio.",
      image: "/img/software-dev.jpg" // Substituir por imagem real
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Aplicativos Mobile Inovadores",
      description: "Desenvolvemos aplicativos móveis nativos e híbridos para iOS e Android, utilizando FlutterFlow para agilidade e Bubble para soluções no-code robustas.",
      image: "/img/mobile-apps.jpg" // Substituir por imagem real
    },
    {
      icon: <Brain className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Automação Inteligente de Processos",
      description: "Implementamos agentes de IA e automações com N8N para otimizar fluxos de trabalho, reduzir custos e aumentar a eficiência da sua operação.",
      image: "/img/automation-ia.jpg" // Substituir por imagem real
    },
    {
      icon: <Palette className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Design de Experiência (UX/UI)",
      description: "Focamos na criação de interfaces intuitivas e experiências de usuário memoráveis que encantam e convertem.",
      image: "/img/ux-ui-design.jpg" // Substituir por imagem real
    }
  ];

  const marketSegments = [
    {
      image: "/img/startup-segment.jpg", // Substituir por imagem real
      title: "Startups e Empreendedores",
      description: "Impulsionamos ideias inovadoras com MVPs ágeis, plataformas escaláveis e consultoria tecnológica para acelerar o crescimento."
    },
    {
      image: "/img/smb-segment.jpg", // Substituir por imagem real
      title: "Pequenas e Médias Empresas",
      description: "Modernizamos negócios com soluções digitais que otimizam processos, melhoram a presença online e abrem novos canais de receita."
    },
    {
      image: "/img/corporate-segment.jpg", // Substituir por imagem real
      title: "Grandes Corporações",
      description: "Desenvolvemos sistemas customizados, integramos plataformas e oferecemos consultoria para transformação digital em larga escala."
    }
  ];

  const ourProcessSteps = [
    {
      icon: <Users className="h-10 w-10 text-gray-700" />,
      title: "Imersão e Descoberta",
      description: "Entendemos profundamente seus desafios e objetivos."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-gray-700" />,
      title: "Estratégia e Planejamento",
      description: "Definimos a melhor abordagem e tecnologias para o seu projeto."
    },
    {
      icon: <Palette className="h-10 w-10 text-gray-700" />,
      title: "Design e Prototipação",
      description: "Criamos interfaces intuitivas e validamos conceitos rapidamente."
    },
    {
      icon: <Code className="h-10 w-10 text-gray-700" />,
      title: "Desenvolvimento Ágil",
      description: "Construímos sua solução com entregas incrementais e foco na qualidade."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-gray-700" />,
      title: "Testes e Validação",
      description: "Garantimos que tudo funcione perfeitamente antes do lançamento."
    },
    {
      icon: <Rocket className="h-10 w-10 text-gray-700" />,
      title: "Lançamento e Suporte",
      description: "Colocamos sua solução no ar e oferecemos suporte contínuo."
    }
  ];

  const sprintPhases = [
    { name: "Planejamento", icon: <CheckCircle className="h-4 w-4" /> },
    { name: "Desenvolvimento", icon: <Code className="h-4 w-4" /> },
    { name: "Testes", icon: <Box className="h-4 w-4" /> },
    { name: "Revisão", icon: <RefreshCcw className="h-4 w-4" /> }
  ];

  return (
    <>
      <section id="solutions" className="relative bg-white overflow-hidden py-[50px] w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8" ref={featuresRef}>
          <div className="text-center mb-10 max-w-3xl mx-auto feature-item">
            <div className="inline-block mb-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
              Nossas Soluções Digitais
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Elevando Seu Negócio ao Próximo Nível</h2>
            <p className="text-gray-600 mt-4">
              Transformamos suas ideias em realidade digital com soluções criativas e tecnológicas, pensadas para o sucesso do seu projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {softwareSolutions.map((solution, index) => (
              <div
                key={index}
                className="feature-item rounded-xl overflow-hidden transform hover:-translate-y-1 transition-all duration-300 h-[280px] relative shadow-lg"
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="absolute inset-0 w-full h-full">
                  <img src={solution.image || "/img/placeholder-solution.jpg"} alt={solution.title} className="w-full h-full object-cover grayscale" />
                  <div className={cn("absolute inset-0 bg-black/60 transition-opacity duration-300", hoveredFeature === index ? "opacity-50" : "opacity-70")}></div>
                </div>

                <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                  <div>
                    <div className="mb-4 inline-block p-3 bg-orange-500/80 backdrop-blur-sm rounded-lg transition-all duration-300 transform hover:scale-110">
                      <div className={`transform transition-transform duration-300 ${hoveredFeature === index ? 'rotate-12' : ''}`}>
                        {solution.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{solution.title}</h3>
                    <p className="text-white/90 text-sm">{solution.description}</p>
                  </div>
                  <div className={`h-0.5 bg-white/70 mt-3 transition-all duration-500 ${hoveredFeature === index ? 'w-full' : 'w-0'}`}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 mb-8 feature-item">
            <div className="text-center mb-8">
              <div className="inline-block mb-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                Mercados que Atendemos
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">Soluções Personalizadas para Diversos Setores</h3>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                Nossa expertise abrange uma variedade de mercados, entregando valor e inovação para diferentes tipos de negócios.
                {isMobile && <span className="block text-sm mt-1 text-orange-500">Role horizontalmente para ver mais →</span>}
              </p>
            </div>

            <div className="rounded-xl overflow-hidden bg-white p-4 feature-item">
              <Carousel className="w-full max-w-7xl mx-auto" opts={{ align: "start", loop: true }}>
                <CarouselContent className="flex">
                  {marketSegments.map((segment, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 flex-shrink-0">
                      <Card className="border border-gray-100 shadow-md h-full flex flex-col">
                        <CardContent className="p-0 flex-grow flex flex-col">
                          <div className="w-full h-48 overflow-hidden">
                            <img src={segment.image || "/img/placeholder-market.jpg"} alt={segment.title} className="w-full h-full object-cover" />
                          </div>
                          <div className="p-4 flex-grow flex flex-col justify-between">
                            <div>
                              <h4 className="font-semibold text-lg text-gray-900">{segment.title}</h4>
                              <p className="text-sm text-gray-600 mt-2">{segment.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-6 gap-2">
                  <CarouselPrevious className="relative static left-auto translate-y-0 hover:bg-gray-100" />
                  <CarouselNext className="relative static right-auto translate-y-0 hover:bg-gray-100" />
                </div>
              </Carousel>
              <div className="text-center mt-6 text-sm text-gray-600">
                <p className="font-medium">Adaptamos nossa tecnologia para impulsionar o crescimento em cada nicho de mercado.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button onClick={scrollToContact} className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all group w-full sm:w-auto">
            Precisa de Soluções Customizadas?
            <MessageSquare className="ml-2 w-4 h-4 group-hover:animate-pulse" />
          </Button>

          <Button asChild className="inline-flex items-center px-6 py-3 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all group w-full sm:w-auto">
            <Link to="/development-process" onClick={() => window.scrollTo(0, 0)}>
              Conheça Nosso Processo
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      <section id="process" className="bg-gray-50 py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
              Nossa Metodologia
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Como Transformamos Ideias em Realidade</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Na Creative Generation, combinamos expertise técnica com uma abordagem colaborativa para entregar soluções digitais que superam expectativas.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-10 transition-all duration-300 hover:shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {ourProcessSteps.map((item, index) => (
                <HoverCard key={index}>
                  <HoverCardTrigger asChild>
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full cursor-pointer flex flex-col items-center text-center">
                      <div className="bg-orange-100 rounded-full p-4 mb-4">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600 flex-grow">{item.description}</p>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 shadow-lg">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-sm text-gray-700">{item.description}</p>
                      {/* Adicionar descrições mais detalhadas se necessário */}
                    </div>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>

            {/* Seção de Desenvolvimento Iterativo (Sprint) */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 mb-10 shadow-md">
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                  <div className="flex items-center">
                    <h3 className="text-xl font-bold text-gray-900">Desenvolvimento Iterativo e Ágil</h3>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2">Ciclos de Entrega Contínua</span>
                    <RefreshCcw className="h-5 w-5 text-orange-600 animate-rotate-slow" />
                  </div>
                </div>

                <p className="text-gray-600 mb-4">Trabalhamos em sprints, com planejamento, desenvolvimento, testes e revisões constantes para garantir a máxima qualidade e alinhamento com suas necessidades.</p>

                <div className="relative mb-2">
                  <Progress value={progressValue} className="h-3 bg-gray-200 [&>*]:bg-orange-500" />
                </div>

                <div className={cn("grid gap-1 mt-4", isMobile ? "grid-cols-2 gap-y-2" : "grid-cols-4")}>
                  {sprintPhases.map((phase, index) => (
                    <div key={index} className={cn("text-center p-2 rounded transition-all", progressValue >= index / sprintPhases.length * 100 && progressValue < (index + 1) / sprintPhases.length * 100 ? "bg-orange-50 border border-orange-100" : "bg-gray-50")}>
                      <div className="flex flex-col items-center">
                        <div className={cn("rounded-full p-1 mb-1", progressValue >= index / sprintPhases.length * 100 ? "bg-orange-100 text-orange-700" : "bg-gray-100 text-gray-500")}>
                          {phase.icon}
                        </div>
                        <span className="text-xs font-medium text-gray-700">{phase.name}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 gap-2">
                  <div className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-2 shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-sm text-gray-600">Seu feedback integrado em cada etapa.</span>
                  </div>
                  <div className="text-sm text-gray-500 flex items-center mt-2 sm:mt-0">
                    <span className="mr-2">Melhoria contínua</span>
                    <div className="flex space-x-1">
                      <span className="inline-block w-2 h-2 bg-gray-300 rounded-full animate-pulse"></span>
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full animate-pulse animation-delay-200"></span>
                      <span className="inline-block w-2 h-2 bg-gray-500 rounded-full animate-pulse animation-delay-400"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 via-white to-orange-50 rounded-lg p-8 max-w-xl mx-auto text-center shadow-md hover:shadow-lg transition-all duration-300">
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-orange-500/10 rounded-full animate-pulse-slow"></div>
                <div className="relative bg-white rounded-full p-4 border border-orange-200 shadow-md">
                  <Rocket className="h-10 w-10 text-orange-600" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Lançamento e Evolução</h3>
              <p className="text-gray-700">Prontos para escalar, produzir e lançar sua solução, com acompanhamento para futuras evoluções.</p>
              <div className="flex justify-center mt-4 space-x-2">
                <span className="inline-block w-3 h-3 rounded-full bg-orange-300 animate-pulse"></span>
                <span className="inline-block w-3 h-3 rounded-full bg-orange-500 animate-pulse animation-delay-200"></span>
                <span className="inline-block w-3 h-3 rounded-full bg-orange-700 animate-pulse animation-delay-400"></span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button asChild className="inline-flex items-center px-6 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all group py-[12px] my-[15px]">
              <Link to="/development-process" onClick={() => window.scrollTo(0, 0)}>
                Detalhes do Nosso Processo
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button onClick={scrollToContact} className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all ml-0 sm:ml-4 group mt-4 sm:mt-0">
              Fale com Nossos Especialistas
              <MessageSquare className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;

