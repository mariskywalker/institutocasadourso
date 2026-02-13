import logoBear from '@/assets/brand/logo-bear.png';
import { Download } from 'lucide-react';

export const ProfilePhotoSection = () => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-card border border-border">
      <h4 className="font-display font-semibold text-foreground mb-4">Foto de Perfil (Todas as Redes)</h4>
      <div className="flex flex-wrap items-center gap-6">
        <div className="text-center">
          <div className="w-32 h-32 rounded-full bg-coral-light flex items-center justify-center mb-2 mx-auto">
            <img src={logoBear} alt="Urso" className="w-20 h-20" />
          </div>
          <p className="text-xs text-muted-foreground">400 × 400px</p>
        </div>
        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-coral-light flex items-center justify-center mb-2 mx-auto">
            <img src={logoBear} alt="Urso" className="w-12 h-12" />
          </div>
          <p className="text-xs text-muted-foreground">Display</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 rounded-full bg-coral-light flex items-center justify-center mb-2 mx-auto">
            <img src={logoBear} alt="Urso" className="w-8 h-8" />
          </div>
          <p className="text-xs text-muted-foreground">Thumb</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-full text-sm hover:bg-navy-light transition-colors ml-auto">
          <Download size={16} />
          Download Kit
        </button>
      </div>
    </div>
  );
};
