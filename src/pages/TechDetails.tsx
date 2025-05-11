import { ArrowLeft, ArrowRight, FileText, Code, Cpu, Database, Cloud, Smartphone, Shield, Zap, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProductPlatform from "@/components/ProductPlatform"; // Este componente pode precisar de revisão ou substituição
import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import PageLayout from "@/components/PageLayout";

const TechDetails = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const techPillars = [
    {
      title: "Desenvolvimento Full-Stack",
      icon: <Code className="w-7 h-7 text-orange-500" />,
      description: "Dominamos o ciclo completo de desenvolvimento, do frontend ao backend, utilizando tecnologias modernas como React, Node.js, Python e bancos de dados relacionais e NoSQL."
    },
    {
      title: "Soluções em Nuvem (Cloud)",
      icon: <Cloud className="w-7 h-7 text-orange-500" />,
      description: "Projetamos e implementamos arquiteturas em nuvem escaláveis e seguras (AWS, Azure, Google Cloud), garantindo alta disponibilidade e otimização de custos para suas aplicações."
    },
    {
      title: "Aplicativos Mobile Híbridos e Nativos",
      icon: <Smartphone className="w-7 h-7 text-orange-500" />,
      description: "Criamos aplicativos móveis para iOS e Android, utilizando frameworks como FlutterFlow para desenvolvimento ágil e tecnologias nativas para performance máxima."
    },
    {
      title: "Inteligência Artificial e Machine Learning",
      icon: <Brain className="w-7 h-7 text-orange-500" />,
      description: "Aplicamos IA e Machine Learning para criar soluções inteligentes, desde chatbots e sistemas de recomendação até análise preditiva e automação de processos complexos."
    },
    {
      title: "Plataformas No-Code e Low-Code",
      icon: <Zap className="w-7 h-7 text-orange-500" />,
      description: "Utilizamos ferramentas como Bubble e N8N para acelerar o desenvolvimento de MVPs, automações e sistemas internos, entregando valor de forma rápida e eficiente."
    },
    {
      title: "Segurança e Performance",
      icon: <Shield className="w-7 h-7 text-orange-500" />,
      description: "Priorizamos a segurança em todas as camadas da aplicação e otimizamos a performance para garantir uma experiência de usuário fluida e confiável."
    }
  ];

  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-orange-600 mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para o Início
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            >
              Nossas Capacidades Tecnológicas
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-700 mb-12 leading-relaxed"
            >
              Na Creative Generation, combinamos expertise técnica com uma visão inovadora para construir soluções digitais que impulsionam o seu negócio. Explore como nossa stack tecnológica e nossa abordagem nos permitem entregar projetos de alta qualidade e impacto.
            </motion.p>

            {/* Seção de Pilares Tecnológicos */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <Cpu className="w-8 h-8 text-orange-500" />
                <h2 className="text-3xl font-bold text-gray-900">Nossos Pilares Tecnológicos</h2>
              </div>
              
              <p className="text-gray-700 mb-10 text-lg max-w-4xl">
                Nossa abordagem é fundamentada em um conjunto de tecnologias e práticas que nos permitem criar desde aplicações web robustas e aplicativos móveis intuitivos até complexos sistemas de inteligência artificial e automação de processos.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {techPillars.map((pillar, i) => (
                  <motion.div 
                    key={pillar.title} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 flex flex-col"
                  >
                    <div className="flex items-center mb-4">
                      {pillar.icon}
                      <h3 className="font-semibold text-xl ml-3 text-gray-900">{pillar.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">{pillar.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Seção Arquitetura de Soluções (Exemplo Genérico) */}
            {/* O componente ProductPlatform pode precisar ser substituído ou adaptado */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-8 h-8 text-orange-500" />
                <h2 className="text-3xl font-bold text-gray-900">Arquitetura de Nossas Soluções</h2>
              </div>
              
              <p className="text-gray-700 mb-8 text-lg max-w-4xl">
                Projetamos arquiteturas flexíveis e escaláveis, adaptadas às necessidades de cada projeto. Geralmente, nossas soluções seguem um modelo de microsserviços ou arquiteturas modulares, facilitando a manutenção, evolução e integração com outros sistemas.
              </p>

              <Card className="bg-white rounded-xl mb-10 border border-gray-200 shadow-lg overflow-hidden">
                <CardContent className="p-6 lg:p-8">
                  {/* Substituir ProductPlatform por um diagrama/imagem mais genérico de arquitetura de software ou remover se não aplicável */}
                  {/* <ProductPlatform /> */}
                  <div className="text-center py-10">
                    <img src="/img/software-architecture-example.svg" alt="Exemplo de Arquitetura de Software" className="max-w-full h-auto mx-auto" />
                    <p className="text-sm text-gray-500 mt-4">Diagrama ilustrativo de uma arquitetura de software moderna.</p>
                  </div>
                </CardContent>
              </Card>
              <p className="text-gray-600 text-base">
                Utilizamos as melhores práticas de DevOps para automação de deploy, monitoramento contínuo e entrega de valor de forma ágil e segura.
              </p>
            </motion.div>

            <div className="mt-16 pt-10 border-t border-gray-300 text-center">
              <Link 
                to="/development-process" 
                className="inline-flex items-center px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all group shadow-md hover:shadow-lg text-base font-medium"
                onClick={() => window.scrollTo(0, 0)}
              >
                Conheça Nosso Processo de Desenvolvimento
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TechDetails;

