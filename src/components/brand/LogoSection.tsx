import logoBear from '@/assets/brand/logo-bear.png';
import logoElements from '@/assets/brand/logo-elements.png';
import { Download } from 'lucide-react';

export const LogoSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-coral-light rounded-full text-sm font-medium text-navy mb-4">
            Logotipos
          </span>
          <h2 className="text-4xl font-display font-bold text-navy mb-4">
            Variações do Logo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Use sempre as versões oficiais do logo. Nunca distorça, altere cores ou adicione efeitos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Logo Principal */}
          <div className="bg-white rounded-3xl p-8 shadow-card border border-border">
            <div className="aspect-video bg-gradient-to-br from-coral-light via-sky-light to-sunshine-light rounded-2xl flex items-center justify-center mb-6">
              <div className="flex items-center gap-3">
                <span className="text-4xl">✱</span>
                <span className="text-coral text-4xl">❤</span>
                <span className="text-sky text-4xl">☁</span>
                <img src={logoBear} alt="Urso" className="w-12 h-12" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-display font-bold text-navy">Logo Principal</h3>
                <p className="text-sm text-muted-foreground">Uso preferencial em fundos claros</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-full text-sm hover:bg-navy-light transition-colors">
                <Download size={16} />
                PNG
              </button>
            </div>
          </div>

          {/* Logo Horizontal */}
          <div className="bg-white rounded-3xl p-8 shadow-card border border-border">
            <div className="aspect-video bg-white rounded-2xl flex items-center justify-center mb-6 border border-border">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-3xl">✱</span>
                  <span className="text-coral text-3xl">❤</span>
                  <span className="text-sky text-3xl">☁</span>
                  <img src={logoBear} alt="Urso" className="w-10 h-10" />
                </div>
                <span className="font-display font-bold text-navy text-xl">Casa do Urso</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-display font-bold text-navy">Logo Horizontal</h3>
                <p className="text-sm text-muted-foreground">Para headers e banners</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-full text-sm hover:bg-navy-light transition-colors">
                <Download size={16} />
                PNG
              </button>
            </div>
          </div>

          {/* Logo em Fundo Escuro */}
          <div className="bg-white rounded-3xl p-8 shadow-card border border-border">
            <div className="aspect-video bg-navy rounded-2xl flex items-center justify-center mb-6">
              <div className="flex items-center gap-3">
                <span className="text-white text-4xl">✱</span>
                <span className="text-coral text-4xl">❤</span>
                <span className="text-sky text-4xl">☁</span>
                <img src={logoBear} alt="Urso" className="w-12 h-12" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-display font-bold text-navy">Fundo Escuro</h3>
                <p className="text-sm text-muted-foreground">Versão para fundos navy</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-full text-sm hover:bg-navy-light transition-colors">
                <Download size={16} />
                PNG
              </button>
            </div>
          </div>

          {/* Favicon / Ícone */}
          <div className="bg-white rounded-3xl p-8 shadow-card border border-border">
            <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center gap-8 mb-6">
              <div className="w-20 h-20 bg-coral-light rounded-2xl flex items-center justify-center">
                <img src={logoBear} alt="Urso" className="w-12 h-12" />
              </div>
              <div className="w-12 h-12 bg-coral-light rounded-xl flex items-center justify-center">
                <img src={logoBear} alt="Urso" className="w-8 h-8" />
              </div>
              <div className="w-8 h-8 bg-coral-light rounded-lg flex items-center justify-center">
                <img src={logoBear} alt="Urso" className="w-5 h-5" />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-display font-bold text-navy">Ícone / Favicon</h3>
                <p className="text-sm text-muted-foreground">Para perfil e ícones pequenos</p>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-full text-sm hover:bg-navy-light transition-colors">
                <Download size={16} />
                PNG
              </button>
            </div>
          </div>
        </div>

        {/* Área de Proteção */}
        <div className="bg-muted rounded-3xl p-8">
          <h3 className="font-display font-bold text-navy text-xl mb-6 text-center">Área de Proteção</h3>
          <div className="flex justify-center">
            <div className="relative inline-block p-12 border-2 border-dashed border-coral rounded-2xl">
              <div className="flex items-center gap-3">
                <span className="text-3xl">✱</span>
                <span className="text-coral text-3xl">❤</span>
                <span className="text-sky text-3xl">☁</span>
                <img src={logoBear} alt="Urso" className="w-10 h-10" />
              </div>
              <div className="absolute top-4 left-1/2 -translate-x-1/2 text-xs text-coral font-medium">
                Mínimo 20px
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-coral font-medium">
                Mínimo 20px
              </div>
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-xs text-coral font-medium rotate-90">
                Mínimo 20px
              </div>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-coral font-medium -rotate-90">
                Mínimo 20px
              </div>
            </div>
          </div>
          <p className="text-center text-muted-foreground text-sm mt-6">
            Mantenha sempre uma área de respiro ao redor do logo equivalente ao tamanho do ícone do urso.
          </p>
        </div>
      </div>
    </section>
  );
};
