import logoBear from '@/assets/brand/logo-bear.png';
import heroChild from '@/assets/brand/hero-child.png';
import { Download, Instagram, Facebook, Linkedin } from 'lucide-react';

export const SocialMediaSection = () => {
  return (
    <section className="py-16 px-6 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-coral-light rounded-full text-sm font-medium text-navy mb-4">
            Social Media
          </span>
          <h2 className="text-4xl font-display font-bold text-navy mb-4">
            Templates para Redes Sociais
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Modelos prontos para manter a consistência visual em todas as plataformas.
          </p>
        </div>

        {/* Instagram Templates */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Instagram className="text-coral" size={24} />
            <h3 className="font-display font-bold text-navy text-xl">Instagram</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Post Feed */}
            <div className="bg-white rounded-2xl p-4 shadow-card border border-border">
              <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-coral-light via-white to-sky-light p-6 flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg">✱</span>
                  <span className="text-coral text-lg">❤</span>
                  <span className="text-sky text-lg">☁</span>
                  <img src={logoBear} alt="Urso" className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-navy text-xl mb-2">
                    Título do Post
                  </h4>
                  <p className="font-body text-sm text-muted-foreground">
                    Texto de apoio aqui
                  </p>
                </div>
                <div className="w-full h-1 bg-coral rounded-full" />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-display font-semibold text-navy">Post Feed</h4>
                  <p className="text-xs text-muted-foreground">1080 × 1080px</p>
                </div>
                <button className="flex items-center gap-2 px-3 py-1.5 bg-navy text-white rounded-full text-xs hover:bg-navy-light transition-colors">
                  <Download size={12} />
                  PSD
                </button>
              </div>
            </div>

            {/* Story */}
            <div className="bg-white rounded-2xl p-4 shadow-card border border-border">
              <div className="aspect-[9/16] max-h-80 rounded-xl overflow-hidden mb-4 bg-navy p-4 flex flex-col justify-between mx-auto">
                <div className="flex items-center gap-2 justify-center">
                  <span className="text-white text-lg">✱</span>
                  <span className="text-coral text-lg">❤</span>
                  <span className="text-sky text-lg">☁</span>
                  <img src={logoBear} alt="Urso" className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <h4 className="font-display font-bold text-white text-lg mb-2">
                    Story Title
                  </h4>
                  <p className="font-body text-xs text-white/80">
                    Swipe up
                  </p>
                </div>
                <div className="w-12 h-1 bg-coral rounded-full mx-auto" />
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-display font-semibold text-navy">Story</h4>
                  <p className="text-xs text-muted-foreground">1080 × 1920px</p>
                </div>
                <button className="flex items-center gap-2 px-3 py-1.5 bg-navy text-white rounded-full text-xs hover:bg-navy-light transition-colors">
                  <Download size={12} />
                  PSD
                </button>
              </div>
            </div>

            {/* Carrossel */}
            <div className="bg-white rounded-2xl p-4 shadow-card border border-border">
              <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-white border-2 border-coral p-6 flex flex-col justify-between">
                <div className="text-center">
                  <span className="text-5xl mb-4 block">🧸</span>
                  <h4 className="font-display font-bold text-navy text-lg">
                    Dica #1
                  </h4>
                </div>
                <p className="font-body text-sm text-center text-muted-foreground">
                  Conteúdo educativo sobre terapia ABA
                </p>
                <div className="flex justify-center gap-1">
                  <div className="w-2 h-2 bg-coral rounded-full" />
                  <div className="w-2 h-2 bg-border rounded-full" />
                  <div className="w-2 h-2 bg-border rounded-full" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-display font-semibold text-navy">Carrossel</h4>
                  <p className="text-xs text-muted-foreground">1080 × 1080px</p>
                </div>
                <button className="flex items-center gap-2 px-3 py-1.5 bg-navy text-white rounded-full text-xs hover:bg-navy-light transition-colors">
                  <Download size={12} />
                  PSD
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Facebook & LinkedIn */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Facebook Cover */}
          <div className="bg-white rounded-2xl p-4 shadow-card border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Facebook className="text-sky" size={20} />
              <h4 className="font-display font-semibold text-navy">Cover Facebook</h4>
            </div>
            <div className="aspect-[851/315] rounded-xl overflow-hidden mb-4 gradient-hero flex items-center justify-center p-6">
              <div className="text-center">
                <div className="flex items-center gap-3 justify-center mb-3">
                  <span className="text-2xl">✱</span>
                  <span className="text-coral text-2xl">❤</span>
                  <span className="text-sky text-2xl">☁</span>
                  <img src={logoBear} alt="Urso" className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-navy text-xl">Clínica Casa do Urso</h3>
                <p className="text-sm text-muted-foreground">Inovação em terapia multidisciplinar</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xs text-muted-foreground">851 × 315px</p>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-navy text-white rounded-full text-xs hover:bg-navy-light transition-colors">
                <Download size={12} />
                PNG
              </button>
            </div>
          </div>

          {/* LinkedIn Banner */}
          <div className="bg-white rounded-2xl p-4 shadow-card border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Linkedin className="text-sky" size={20} />
              <h4 className="font-display font-semibold text-navy">Banner LinkedIn</h4>
            </div>
            <div className="aspect-[1584/396] rounded-xl overflow-hidden mb-4 bg-navy flex items-center justify-between p-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-white text-lg">✱</span>
                  <span className="text-coral text-lg">❤</span>
                  <span className="text-sky text-lg">☁</span>
                  <img src={logoBear} alt="Urso" className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-white text-lg">Clínica Casa do Urso</h3>
                <p className="text-xs text-white/70">Terapia ABA • Multidisciplinar</p>
              </div>
              <div className="text-right">
                <p className="text-white/80 text-sm">@clinicacasadourso</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xs text-muted-foreground">1584 × 396px</p>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-navy text-white rounded-full text-xs hover:bg-navy-light transition-colors">
                <Download size={12} />
                PNG
              </button>
            </div>
          </div>
        </div>

        {/* Foto de Perfil */}
        <div className="mt-8 bg-white rounded-2xl p-6 shadow-card border border-border">
          <h4 className="font-display font-semibold text-navy mb-4">Foto de Perfil (Todas as Redes)</h4>
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
      </div>
    </section>
  );
};
