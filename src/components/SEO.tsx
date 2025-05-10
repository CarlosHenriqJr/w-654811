
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  imageUrl?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'GERAÇÃO CRIATIVA',
  description = 'Creative Generation: Especialistas em soluções criativas para negócios que buscam se destacar no mercado digital através de sites, aplicativos mobile e sistemas personalizados.',
  type = 'website',
  name = 'Creative Generation',
  imageUrl = '/lovable-uploads/5af49ad4-c535-4ac8-8b1d-7ba7469d15df.png'
}) => {
  const location = useLocation();
  const currentUrl = `https://creativegen.com.br${location.pathname}`;
  const absoluteImageUrl = imageUrl.startsWith('http') ? imageUrl : `https://creativegen.com.br${imageUrl}`;

  // Create JSON-LD structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Creative Generation',
    url: 'https://creativegen.com.br',
    logo: 'https://creativegen.com.br/lovable-uploads/5af49ad4-c535-4ac8-8b1d-7ba7469d15df.png',
    description: 'Especialistas em soluções criativas para negócios que buscam se destacar no mercado digital',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contato@creativegen.com.br'
    },
    sameAs: [
      'https://www.linkedin.com/company/creative-generation',
      'https://instagram.com/creativegen'
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      
      {/* LinkedIn specific */}
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      <meta name="author" content={name} />
      
      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
