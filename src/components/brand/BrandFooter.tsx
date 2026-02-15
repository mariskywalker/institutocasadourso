import { Instagram, Mail, Phone } from 'lucide-react';
import { IconAutonomia, IconEmocional, IconComunicacao, IconSocial } from './BrandIcons';

export const BrandFooter = () => {
  return (
    <footer className="bg-navy py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-sunshine"><IconAutonomia className="w-6 h-6" /></span>
            <span className="text-coral"><IconEmocional className="w-6 h-6" /></span>
            <span className="text-sky"><IconComunicacao className="w-6 h-6" /></span>
            <span className="text-[#CD995B]"><IconSocial className="w-6 h-6" /></span>
            <span className="font-display font-bold text-white text-lg ml-2">
              Casa do Urso
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://instagram.com/clinicacasadourso" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-coral transition-colors"
            >
              <Instagram size={20} />
              <span className="text-sm">@clinicacasadourso</span>
            </a>
            <a 
              href="https://wa.me/clinicacasadourso" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/80 hover:text-sky transition-colors"
            >
              <Phone size={20} />
              <span className="text-sm">WhatsApp</span>
            </a>
            <a 
              href="mailto:contato@clinicacasadourso.com.br"
              className="flex items-center gap-2 text-white/80 hover:text-sunshine transition-colors"
            >
              <Mail size={20} />
              <span className="text-sm">Email</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Clínica Casa do Urso. Brand Guidelines v1.0
          </p>
        </div>
      </div>
    </footer>
  );
};
