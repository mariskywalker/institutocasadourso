import logoBear from '@/assets/brand/logo-bear.png';
import { Download, Facebook, Linkedin } from 'lucide-react';

export const FacebookLinkedInTemplates = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-8">
      {/* Facebook Cover */}
      <div className="bg-card rounded-2xl p-4 shadow-card border border-border">
        <div className="flex items-center gap-3 mb-4">
          <Facebook className="text-sky" size={20} />
          <h4 className="font-display font-semibold text-foreground">Cover Facebook</h4>
        </div>
        <div className="aspect-[851/315] rounded-xl overflow-hidden gradient-hero flex items-center justify-between p-6">
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <span className="text-lg">✱</span>
              <span className="text-coral text-lg">❤</span>
              <span className="text-sky text-lg">☁</span>
              <img src={logoBear} alt="Urso" className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-navy text-lg">Clínica Casa do Urso</h3>
            <p className="text-xs text-navy/60">Inovação em terapia multidisciplinar</p>
          </div>
          <div className="hidden sm:flex flex-col items-end gap-1">
            <div className="w-10 h-10 rounded-xl bg-coral/20 rotate-12" />
            <div className="w-8 h-8 rounded-full bg-sky/20" />
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-xs text-muted-foreground">851 × 315px</p>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-navy text-white rounded-full text-xs hover:bg-navy-light transition-colors">
            <Download size={12} />
            PNG
          </button>
        </div>
      </div>

      {/* LinkedIn Banner */}
      <div className="bg-card rounded-2xl p-4 shadow-card border border-border">
        <div className="flex items-center gap-3 mb-4">
          <Linkedin className="text-sky" size={20} />
          <h4 className="font-display font-semibold text-foreground">Banner LinkedIn</h4>
        </div>
        <div className="aspect-[1584/396] rounded-xl overflow-hidden bg-navy flex items-center justify-between p-6">
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <span className="text-white/60 text-lg">✱</span>
              <span className="text-coral text-lg">❤</span>
              <span className="text-sky text-lg">☁</span>
              <img src={logoBear} alt="Urso" className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-white text-lg">Clínica Casa do Urso</h3>
            <p className="text-xs text-white/60">Terapia ABA • Multidisciplinar</p>
          </div>
          <div className="text-right hidden sm:block">
            <p className="text-white/70 text-sm">@clinicacasadourso</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="text-xs text-muted-foreground">1584 × 396px</p>
          <button className="flex items-center gap-2 px-3 py-1.5 bg-navy text-white rounded-full text-xs hover:bg-navy-light transition-colors">
            <Download size={12} />
            PNG
          </button>
        </div>
      </div>
    </div>
  );
};
