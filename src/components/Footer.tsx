import { ArrowRight, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Erro",
        description: "Por favor, insira seu endereço de e-mail.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Configuração do EmailJS (Manter os IDs do usuário, se fornecidos)
      const EMAILJS_SERVICE_ID = "service_i3h66xg";
      const EMAILJS_TEMPLATE_ID = "template_fgq53nh";
      const EMAILJS_PUBLIC_KEY = "wQmcZvoOqTAhGnRZ3";
      
      const templateParams = {
        from_name: "Inscrito no Site",
        from_email: email,
        message: `Nova solicitação de inscrição vinda do rodapé do site.`,
        to_name: 'Equipe Creative Generation',
        reply_to: email
      };
      
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Sucesso!",
        description: "Obrigado por se inscrever em nossa newsletter.",
        variant: "default"
      });
      
      setEmail("");
    } catch (error) {
      console.error("Erro ao enviar inscrição:", error);
      
      toast({
        title: "Erro",
        description: "Houve um problema com a sua inscrição. Por favor, tente novamente mais tarde.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="bg-black text-white pt-16 pb-8 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-700">
          <div className="lg:col-span-2">
            <img 
              src="/img/logo.png" 
              alt="Creative Generation Logo" 
              className="h-12 w-auto mb-6 brightness-0 invert" // Mantido invert para garantir visibilidade em fundo escuro, ajustar se necessário
            />
            <p className="text-gray-300 mb-6">
              A Creative Generation é especialista em transformar ideias em experiências digitais memoráveis. Criamos sites, aplicativos mobile e sistemas personalizados para negócios que buscam destaque no mercado digital.
            </p>
            {/* Manter endereço genérico ou solicitar ao usuário um endereço específico */}
            <p className="text-gray-300 mb-6">
              Escritório Principal<br />
              Brasil
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" // Substituir pelo link real do LinkedIn da Creative Generation
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
              >
                <Linkedin size={20} />
              </a>
              {/* Adicionar mais links de redes sociais se necessário */}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Empresa</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">Sobre Nós</Link></li>
              {/* Link para Careers removido */}
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Entre em Contato</h3>
            <form className="space-y-4" onSubmit={handleSubscribe}>
              <div>
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 text-white placeholder-gray-400"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Inscrevendo..." : (
                  <>
                    Inscrever-se
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-4">Ao se inscrever, você concorda com nossa <Link to="/privacy-policy" className="underline hover:text-white">Política de Privacidade</Link>.</p>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Creative Generation. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">Política de Privacidade</Link>
            {/* Adicionar outros links úteis, como Termos de Serviço, se aplicável */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

