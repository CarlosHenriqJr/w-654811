
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';
import { type Project } from '@/data/projectsData';

interface ProjectSlideProps {
  project: Project;
  animationClass: string;
  index: number;
}

const ProjectSlide: React.FC<ProjectSlideProps> = ({ project, animationClass, index }) => {
  return (
    <div 
      className={`absolute top-0 w-full max-w-md transform transition-all duration-500 ${animationClass}`} 
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <Card className="overflow-hidden h-[500px] border border-gray-100 shadow-sm hover:shadow-md flex flex-col">
        <div 
          className="relative bg-black p-6 flex items-center justify-center h-48 overflow-hidden"
          style={{
            backgroundImage: `url(${project.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold text-white mb-2">{project.brand.toUpperCase()}</h3>
            <div className="w-12 h-1 bg-white mb-2"></div>
            <p className="text-white/90 text-sm">{project.title}</p>
          </div>
        </div>
        
        <CardContent className="p-6 flex flex-col flex-grow">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-1 text-gray-800 group-hover:text-gray-500 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-500 text-sm font-medium">{project.brand}</p>
          </div>
          
          <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>
          
          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="px-2 py-1 bg-gray-50 text-gray-600 rounded-full text-xs animate-pulse-slow" 
                  style={{ animationDelay: `${idx * 300}ms` }}
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <Link 
              to={project.link} 
              className="text-gray-500 flex items-center hover:underline relative overflow-hidden group"
              onClick={() => {
                if (project.link.startsWith('/')) {
                  window.scrollTo(0, 0);
                }
              }}
            >
              <span className="relative z-10">Saiba mais</span>
              <ArrowRight className="ml-2 w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectSlide;
