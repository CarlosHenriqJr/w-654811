import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, BarChart, AlertTriangle, Clock4, Rocket, Zap, Sparkles, ArrowRight, Award, Target, Shield, ChartBar } from "lucide-react"; 
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

const AnimatedCounter = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  decimals = 0
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const inView = useInView(countRef, {
    once: true,
    margin: "-100px"
  });
  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    let animationFrame: number;
    const startAnimation = (timestamp: number) => {
      startTime = timestamp;
      animate(timestamp);
    };
    const animate = (timestamp: number) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = progress * end;
      setCount(currentCount);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(startAnimation);
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, inView]);
  return <span ref={countRef} className="font-bold tabular-nums">
      {prefix}{count.toFixed(decimals)}{suffix}
    </span>;
};

const WhyWrlds = () => {
  const isMobile = useIsMobile();
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        duration: 0.8
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  const whyCreativeGenerationText = "Na Creative Generation, não apenas construímos produtos digitais; nós tecemos sonhos em realidade digital. Escolher-nos é optar por uma parceria onde a criatividade encontra a estratégia, e a inovação é a bússola que guia cada projeto. Somos os artesãos da sua visão, dedicados a criar experiências que não só encantam, mas que também impulsionam o seu negócio a novos horizontes. Com uma equipe que respira tecnologia e design, e uma paixão por transformar o complexo em soluções elegantes e eficazes, garantimos que sua marca não apenas participe do futuro digital, mas o defina. Porque para nós, cada clique, cada interação, é uma oportunidade de contar a sua história de uma forma única e memorável.";

  return (
    <section id="why-creative-generation" className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants} 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3"
          >
            Por que escolher a Creative Generation?
          </motion.h2>
          <motion.p 
            variants={itemVariants} 
            className="text-gray-600 text-lg max-w-3xl mx-auto"
          >
            {whyCreativeGenerationText}
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="mb-12" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              O que a Creative Generation faz por Você?
            </h3>
          </motion.div>
          
          <motion.div 
            variants={itemVariants} 
            className="text-gray-700 max-w-3xl mx-auto text-lg"
          >
            <p className="mb-4">
              A Creative Generation é uma empresa especializada em soluções criativas para negócios que buscam se destacar no mercado digital. Fundada em 2020, nossa missão é transformar ideias em experiências digitais memoráveis através de sites, aplicativos mobile e sistemas personalizados.
            </p>
            <p className="mb-4">
              Nossa equipe é formada por profissionais apaixonados por design, tecnologia e inovação, com expertise em:
            </p>
            <ul className="list-disc list-inside mb-4 pl-4 space-y-2">
              <li>Desenvolvimento web</li>
              <li>Criação de aplicativos com FlutterFlow {/* TODO: Adicionar logo FlutterFlow */}</li>
              <li>Soluções no-code com Bubble {/* TODO: Adicionar logo Bubble */}</li>
              <li>Automação de processos com agentes de IA e N8N {/* TODO: Adicionar logo N8N */}</li>
            </ul>
            <p>
              Acreditamos que cada projeto é único e merece uma abordagem personalizada.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center mt-10">
            <Link 
              to="/development-process" 
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group"
            >
              Saiba mais sobre nosso processo de desenvolvimento estruturado
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWrlds;

