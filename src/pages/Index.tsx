
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import WhyWrlds from '@/components/WhyWrlds';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <PageLayout>
      <SEO 
        title="Creative Generation - Soluções Digitais Inovadoras" 
        description="Especialistas em soluções criativas para negócios que buscam se destacar no mercado digital através de sites, aplicativos mobile e sistemas personalizados."
        imageUrl="/lovable-uploads/5af49ad4-c535-4ac8-8b1d-7ba7469d15df.png"
      />
      <Hero />
      <Features />
      <WhyWrlds />
      <Projects />
    </PageLayout>
  );
};

export default Index;
