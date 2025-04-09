
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft, ArrowRight, FileText, Code, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import ProductPlatform from '@/components/ProductPlatform';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from 'react';

const TechDetails = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-16 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold mb-6"
            >
              Technical Deep Dive
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg text-gray-600 mb-12"
              >
                Explore the technical details behind our smart textile sensor technology and learn how our system architecture enables rapid development and deployment.
              </motion.p>
              
              {/* System Architecture Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-gray-700" />
                  <h2 className="text-2xl font-bold">System Architecture</h2>
                </div>
                
                <p className="text-gray-600 mb-8 text-base max-w-3xl">
                  Our platform uses a three-tier architecture connecting physical devices to our cloud services and user applications. 
                  The diagram below illustrates how data flows through our system, from sensor collection to user-facing applications.
                </p>

                {/* Data flow indicators */}
                <div className="w-full mb-6">
                  <div className="mb-2 flex justify-between text-sm text-gray-500">
                    <span>Data Collection</span>
                    <span>Processing</span>
                    <span>Application</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-full" style={{ transform: 'translateX(0%)' }}></div>
                  </div>
                </div>
                
                {/* Product Platform Architecture Diagram */}
                <Card className="bg-white rounded-lg mb-10 border border-gray-200 shadow-sm">
                  <CardContent className="p-4 lg:p-6">
                    <ProductPlatform />
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Our Approach Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-5 h-5 text-gray-700" />
                  <h2 className="text-2xl font-bold">Our Approach</h2>
                </div>
                
                <p className="text-gray-600 mb-8 text-base max-w-3xl">
                  At WRLDS, we've developed a systematic approach to creating smart textile solutions that combines technical innovation with practical implementation. 
                  Our comprehensive development process ensures that every project moves efficiently from concept to market-ready product.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  {[
                    {
                      title: "Discovery",
                      icon: <Cpu className="w-5 h-5 text-gray-700" />,
                      description: "We begin with thorough market research and requirements gathering to understand your specific needs and opportunities."
                    },
                    {
                      title: "Design & Prototyping",
                      icon: <Code className="w-5 h-5 text-gray-700" />,
                      description: "Our teams create initial designs and functional prototypes that allow for early testing and iteration."
                    },
                    {
                      title: "Development & Testing",
                      icon: <FileText className="w-5 h-5 text-gray-700" />,
                      description: "We rigorously develop and test all components to ensure they meet performance and reliability standards."
                    }
                  ].map((phase, i) => (
                    <motion.div 
                      key={phase.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                      className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        {phase.icon}
                        <h3 className="font-semibold text-lg">{phase.title}</h3>
                      </div>
                      <p className="text-gray-600 text-base">{phase.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link 
                to="/development-process" 
                className="inline-flex items-center px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group"
              >
                Explore Our Development Process
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TechDetails;
