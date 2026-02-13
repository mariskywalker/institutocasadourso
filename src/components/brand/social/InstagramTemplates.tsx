import logoBear from '@/assets/brand/logo-bear.png';
import heroChild from '@/assets/brand/hero-child.png';
import { Download, Instagram } from 'lucide-react';

const TemplateCard = ({ children, title, size, format = "PSD" }: { children: React.ReactNode; title: string; size: string; format?: string }) => (
  <div className="bg-card rounded-2xl p-4 shadow-card border border-border">
    {children}
    <div className="flex justify-between items-center mt-4">
      <div>
        <h4 className="font-display font-semibold text-foreground">{title}</h4>
        <p className="text-xs text-muted-foreground">{size}</p>
      </div>
      <button className="flex items-center gap-2 px-3 py-1.5 bg-navy text-white rounded-full text-xs hover:bg-navy-light transition-colors">
        <Download size={12} />
        {format}
      </button>
    </div>
  </div>
);

export const InstagramTemplates = () => {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <Instagram className="text-coral" size={24} />
        <h3 className="font-display font-bold text-foreground text-xl">Instagram</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Post Educativo - Dica */}
        <TemplateCard title="Post Educativo" size="1080 × 1080px">
          <div className="aspect-square rounded-xl overflow-hidden bg-coral-light p-6 flex flex-col justify-between relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-coral text-sm">✱</span>
                <span className="text-coral text-sm">❤</span>
                <span className="text-sky text-sm">☁</span>
              </div>
              <img src={logoBear} alt="Urso" className="w-8 h-8" />
            </div>
            <div className="flex-1 flex flex-col justify-center items-center text-center py-4">
              <span className="text-4xl mb-3">🧸</span>
              <p className="text-xs font-medium text-coral uppercase tracking-widest mb-2">Dica do Urso</p>
              <h4 className="font-display font-bold text-navy text-lg leading-tight mb-2">
                Rotina visual ajuda no desenvolvimento
              </h4>
              <p className="font-body text-xs text-navy/70 max-w-[80%]">
                Criar rotinas visuais pode facilitar a compreensão e autonomia da criança.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-lg bg-coral/20 rotate-12" />
              <div className="w-full h-0.5 bg-coral/30 mx-3 rounded-full" />
              <div className="w-8 h-8 rounded-full bg-sky/20" />
            </div>
          </div>
        </TemplateCard>

        {/* Post Carrossel - Terapia ABA */}
        <TemplateCard title="Carrossel Educativo" size="1080 × 1080px">
          <div className="aspect-square rounded-xl overflow-hidden bg-navy p-6 flex flex-col justify-between relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-white/60 text-sm">✱</span>
                <span className="text-coral text-sm">❤</span>
                <span className="text-sky text-sm">☁</span>
              </div>
              <img src={logoBear} alt="Urso" className="w-8 h-8" />
            </div>
            <div className="flex-1 flex flex-col justify-center text-center py-4">
              <p className="text-xs font-medium text-sky uppercase tracking-widest mb-2">Terapia ABA</p>
              <h4 className="font-display font-bold text-white text-xl leading-tight mb-3">
                O que é a Análise do Comportamento?
              </h4>
              <p className="font-body text-xs text-white/60">
                Deslize para saber mais →
              </p>
            </div>
            <div className="flex justify-center gap-1.5">
              <div className="w-6 h-1 bg-coral rounded-full" />
              <div className="w-1.5 h-1 bg-white/30 rounded-full" />
              <div className="w-1.5 h-1 bg-white/30 rounded-full" />
              <div className="w-1.5 h-1 bg-white/30 rounded-full" />
            </div>
          </div>
        </TemplateCard>

        {/* Post Institucional */}
        <TemplateCard title="Post Institucional" size="1080 × 1080px">
          <div className="aspect-square rounded-xl overflow-hidden bg-sky-light p-6 flex flex-col justify-between relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-sky text-sm">✱</span>
                <span className="text-coral text-sm">❤</span>
                <span className="text-sky text-sm">☁</span>
              </div>
              <img src={logoBear} alt="Urso" className="w-8 h-8" />
            </div>
            <div className="flex-1 flex flex-col justify-center items-center text-center py-4">
              <div className="w-16 h-16 rounded-2xl bg-white/60 flex items-center justify-center mb-3 shadow-sm">
                <img src={heroChild} alt="Criança" className="w-12 h-12 rounded-xl object-cover" />
              </div>
              <p className="text-xs font-medium text-sky uppercase tracking-widest mb-2">Nossa Equipe</p>
              <h4 className="font-display font-bold text-navy text-lg leading-tight mb-1">
                Conheça nossos profissionais
              </h4>
              <p className="font-body text-xs text-navy/60">
                Equipe multidisciplinar especializada
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-6 h-6 rounded-full bg-coral/20" />
              <div className="w-4 h-4 rounded-lg bg-sky/30 rotate-45" />
              <div className="w-5 h-5 rounded-full bg-sunshine/30" />
            </div>
          </div>
        </TemplateCard>
      </div>

      {/* Story Templates */}
      <div className="grid md:grid-cols-4 gap-6 mt-6">
        {/* Story Dica */}
        <TemplateCard title="Story — Dica" size="1080 × 1920px">
          <div className="aspect-[9/16] max-h-72 rounded-xl overflow-hidden bg-coral-light p-4 flex flex-col justify-between mx-auto">
            <div className="flex items-center justify-center gap-1.5">
              <span className="text-sm">✱</span>
              <span className="text-coral text-sm">❤</span>
              <span className="text-sky text-sm">☁</span>
            </div>
            <div className="text-center flex-1 flex flex-col justify-center">
              <p className="text-[10px] font-medium text-coral uppercase tracking-widest mb-1">Você sabia?</p>
              <h4 className="font-display font-bold text-navy text-sm leading-tight mb-2">
                A brincadeira é a principal ferramenta de aprendizado
              </h4>
              <div className="w-8 h-0.5 bg-coral rounded-full mx-auto" />
            </div>
            <div className="text-center">
              <img src={logoBear} alt="Urso" className="w-6 h-6 mx-auto" />
            </div>
          </div>
        </TemplateCard>

        {/* Story CTA */}
        <TemplateCard title="Story — CTA" size="1080 × 1920px">
          <div className="aspect-[9/16] max-h-72 rounded-xl overflow-hidden bg-navy p-4 flex flex-col justify-between mx-auto">
            <img src={logoBear} alt="Urso" className="w-6 h-6 mx-auto" />
            <div className="text-center flex-1 flex flex-col justify-center">
              <span className="text-3xl mb-2">🐻</span>
              <h4 className="font-display font-bold text-white text-sm leading-tight mb-2">
                Agende uma avaliação
              </h4>
              <p className="font-body text-[10px] text-white/60 mb-3">
                Fale com nossa equipe
              </p>
              <div className="mx-auto px-3 py-1 bg-coral rounded-full">
                <span className="text-white text-[10px] font-medium">Saiba mais</span>
              </div>
            </div>
            <div className="flex justify-center gap-1">
              <div className="w-3 h-3 rounded-full bg-coral/30" />
              <div className="w-3 h-3 rounded-lg bg-sky/30 rotate-45" />
            </div>
          </div>
        </TemplateCard>

        {/* Story Depoimento */}
        <TemplateCard title="Story — Depoimento" size="1080 × 1920px">
          <div className="aspect-[9/16] max-h-72 rounded-xl overflow-hidden bg-sunshine-light p-4 flex flex-col justify-between mx-auto">
            <div className="flex items-center justify-center gap-1.5">
              <span className="text-sunshine text-lg">★</span>
              <span className="text-sunshine text-lg">★</span>
              <span className="text-sunshine text-lg">★</span>
            </div>
            <div className="text-center flex-1 flex flex-col justify-center">
              <span className="text-2xl mb-2">"</span>
              <p className="font-body text-xs text-navy/80 italic leading-relaxed mb-2">
                A evolução do meu filho foi incrível com a terapia ABA
              </p>
              <p className="text-[10px] text-navy/50 font-medium">— Mãe do Pedro</p>
            </div>
            <img src={logoBear} alt="Urso" className="w-6 h-6 mx-auto" />
          </div>
        </TemplateCard>

        {/* Story Equipe */}
        <TemplateCard title="Story — Equipe" size="1080 × 1920px">
          <div className="aspect-[9/16] max-h-72 rounded-xl overflow-hidden bg-sky-light p-4 flex flex-col justify-between mx-auto">
            <img src={logoBear} alt="Urso" className="w-6 h-6 mx-auto" />
            <div className="text-center flex-1 flex flex-col justify-center">
              <div className="w-12 h-12 rounded-full bg-white/60 mx-auto mb-2 flex items-center justify-center">
                <span className="text-xl">👩‍⚕️</span>
              </div>
              <p className="text-[10px] font-medium text-sky uppercase tracking-widest mb-1">Conheça</p>
              <h4 className="font-display font-bold text-navy text-sm leading-tight">
                Dra. Nome
              </h4>
              <p className="font-body text-[10px] text-navy/60">Terapeuta ABA</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 rounded-full bg-coral/20" />
              <div className="w-3 h-3 rounded-lg bg-sky/30 rotate-45" />
            </div>
          </div>
        </TemplateCard>
      </div>
    </div>
  );
};
