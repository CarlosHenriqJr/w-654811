
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselNavigationProps {
  totalSlides: number;
  activeSlide: number;
  setActiveSlide: (index: number) => void;
  isMobile: boolean;
}

const CarouselNavigation: React.FC<CarouselNavigationProps> = ({ 
  totalSlides, 
  activeSlide, 
  setActiveSlide, 
  isMobile 
}) => {
  return (
    <>
      {!isMobile && (
        <>
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-500 hover:bg-white z-30 shadow-md transition-all duration-300 hover:scale-110" 
            onClick={() => setActiveSlide((activeSlide - 1 + totalSlides) % totalSlides)}
            aria-label="Projeto anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center text-gray-500 hover:bg-white z-30 shadow-md transition-all duration-300 hover:scale-110" 
            onClick={() => setActiveSlide((activeSlide + 1) % totalSlides)}
            aria-label="Próximo projeto"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}
      
      <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-3 z-30">
        {Array.from({ length: totalSlides }).map((_, idx) => (
          <button 
            key={idx} 
            className={`w-2 h-2 rounded-full transition-all duration-300 ${activeSlide === idx ? 'bg-gray-500 w-5' : 'bg-gray-200 hover:bg-gray-300'}`} 
            onClick={() => setActiveSlide(idx)}
            aria-label={`Ir para o projeto ${idx + 1}`}
          />
        ))}
      </div>
    </>
  );
};

export default CarouselNavigation;
