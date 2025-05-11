<<<<<<< HEAD
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Importando ícones diretamente
=======

import { useState, useEffect, useRef } from 'react';
>>>>>>> c330a2909d16d97965d6a5f0c1ac584476ff4c33

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  badge: string;
  showMobileSwipeHint?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, badge, showMobileSwipeHint }) => {
  const [isInView, setIsInView] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    }, {
      threshold: 0.2
    });
    
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={headerRef} 
      className={`text-center mb-10 max-w-3xl mx-auto transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
<<<<<<< HEAD
      <div className="inline-block mb-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
        {badge}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-3">
=======
      <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
        {badge}
      </div>
      <h2 className="text-3xl font-bold mb-3">
>>>>>>> c330a2909d16d97965d6a5f0c1ac584476ff4c33
        {title}
      </h2>
      <p className="text-gray-600">
        {subtitle}
      </p>
      {showMobileSwipeHint && (
        <div className="flex items-center justify-center mt-4 animate-pulse-slow">
<<<<<<< HEAD
          <div className="flex items-center text-orange-500">
            <ChevronLeft size={16} />
            <p className="text-sm mx-1">Deslize para navegar</p>
            <ChevronRight size={16} />
=======
          <div className="flex items-center text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
            <p className="text-sm mx-1">Deslize para navegar</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
>>>>>>> c330a2909d16d97965d6a5f0c1ac584476ff4c33
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
<<<<<<< HEAD

=======
>>>>>>> c330a2909d16d97965d6a5f0c1ac584476ff4c33
