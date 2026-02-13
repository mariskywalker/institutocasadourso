import photoChild from '@/assets/brand/photo-child-reading.jpg';
import photoIcons from '@/assets/brand/photo-icons-wall.jpg';
import logoCasadourso from '@/assets/brand/logo-casadourso.png';
import logoBear from '@/assets/brand/logo-bear.png';
import formaSunshine from '@/assets/brand/forma-sunshine.png';
import formaMint from '@/assets/brand/forma-mint.png';
import iconografiaSmall from '@/assets/brand/iconografia-small.svg';
import { TemplateCard } from '../InstagramTemplates';

const CarouselDots = ({ active = 0, total = 5, light = false }: { active?: number; total?: number; light?: boolean }) => (
  <div className="flex justify-center gap-1.5 mt-2">
    {Array.from({ length: total }).map((_, i) => (
      <div
        key={i}
        className={`w-1.5 h-1.5 rounded-full ${
          i === active
            ? light ? 'bg-white' : 'bg-white'
            : light ? 'bg-white/30' : 'bg-white/30'
        }`}
      />
    ))}
  </div>
);

export const CarouselPostTemplate = () => (
  <div className="grid grid-cols-5 gap-3 overflow-x-auto pb-2">
    {/* Slide 1 — Capa Coral */}
    <TemplateCard title="Slide 1 — Capa" size="1080 × 1080px">
      <div className="aspect-square rounded-xl overflow-hidden bg-coral relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-coral/90" />
        <img src={formaSunshine} alt="" className="absolute top-0 right-0 w-48 h-40 object-cover opacity-30" />
        <div className="absolute top-4 left-0 right-0 text-center">
          <span className="text-white/60 text-[9px] font-medium">@clinicacasadourso</span>
        </div>
        <div className="absolute bottom-4 left-3 right-3 text-center">
          <h4 className="font-display font-black text-white text-sm leading-tight mb-1">
            Recebi o diagnóstico
          </h4>
          <h4 className="font-display font-black text-sm leading-tight mb-1">
            <span className="bg-coral-dark px-1.5 py-0.5 text-white">do meu filho</span>
          </h4>
          <div className="inline-block bg-mint px-2 py-0.5 rounded-sm mt-1">
            <span className="font-display font-black text-white text-base">E agora?</span>
          </div>
          <CarouselDots active={0} />
        </div>
      </div>
    </TemplateCard>

    {/* Slide 2 — Frase Coral */}
    <TemplateCard title="Slide 2 — Frase" size="1080 × 1080px">
      <div className="aspect-square rounded-xl overflow-hidden bg-coral relative p-4 flex flex-col justify-center">
        {/* Forma sunshine orgânica */}
        <img src={formaSunshine} alt="" className="absolute top-0 right-0 w-32 h-24 object-cover opacity-20 rotate-12" />
        {/* Forma mint */}
        <img src={formaMint} alt="" className="absolute bottom-0 left-0 w-24 h-20 object-cover opacity-20 -rotate-12" />
        {/* Photo in bear frame bottom-right */}
        <div className="absolute bottom-0 right-0 w-14 h-16 rounded-tl-[50%] overflow-hidden">
          <img src={photoChild} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 px-2">
          <span className="font-display font-black text-white text-2xl leading-none">"</span>
          <h4 className="font-display font-black text-white text-sm leading-tight mb-1.5">
            Cada criança<br />tem <span className="bg-navy px-1 text-white">seu tempo."</span>
          </h4>
          <p className="font-body text-white/80 text-[9px] leading-relaxed">
            E sim, isso é verdade.<br />
            Mas essa frase não pode<br />
            silenciar as dúvidas de<br />
            quem convive com a<br />
            criança todos os dias.
          </p>
        </div>
        <div className="absolute bottom-2 left-0 right-0">
          <CarouselDots active={1} />
        </div>
      </div>
    </TemplateCard>

    {/* Slide 3 — Conteúdo Sky */}
    <TemplateCard title="Slide 3 — Conteúdo" size="1080 × 1080px">
      <div className="aspect-square rounded-xl overflow-hidden bg-sky relative p-4 flex flex-col">
        {/* Forma sunshine orgânica top-left */}
        <img src={formaSunshine} alt="" className="absolute top-0 left-0 w-24 h-16 object-cover opacity-20" />
        {/* Bear-shaped photo frame */}
        <div className="absolute left-2 bottom-12 w-12 h-14 bg-white/20 rounded-[50%_50%_40%_40%] overflow-hidden">
          <img src={photoChild} alt="" className="w-full h-full object-cover" />
        </div>
        {/* Cloud dots */}
        <div className="absolute top-6 right-6 w-2 h-2 bg-white/30 rounded-full" />
        <div className="absolute top-10 right-3 w-1.5 h-1.5 bg-white/20 rounded-full" />

        <div className="relative z-10 ml-auto mr-1 mt-6 max-w-[65%]">
          <h4 className="font-display font-black text-white text-sm leading-tight mb-3">
            Geralmente,<br />uma fase:
          </h4>
          <ul className="space-y-2">
            {[
              'Surge e desaparece com o tempo;',
              'A criança continua avançando em outras áreas;',
              'Não impede a comunicação, o brincar ou a interação;',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-1.5 text-[8px]">
                <span className="text-sunshine font-bold mt-0.5 text-[10px]">✱</span>
                <span className="text-white/90 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-coral/80 rounded-lg px-2 py-1.5 mt-3 inline-block">
            <p className="font-display text-white text-[8px] font-medium">
              Fases passam.<br />Desenvolvimento segue.
            </p>
          </div>
        </div>
        <div className="absolute bottom-2 left-0 right-0">
          <CarouselDots active={2} />
        </div>
        {/* Dots bottom right */}
        <div className="absolute bottom-4 right-3 w-2 h-2 bg-coral/50 rounded-full" />
        <div className="absolute bottom-6 right-5 w-1.5 h-1.5 bg-coral/40 rounded-full" />
      </div>
    </TemplateCard>

    {/* Slide 4 — Frase Mint */}
    <TemplateCard title="Slide 4 — Destaque" size="1080 × 1080px">
      <div className="aspect-square rounded-xl overflow-hidden bg-mint relative p-5 flex flex-col justify-center items-center text-center">
        {/* Decorative elements */}
        <div className="absolute top-3 right-4 w-3 h-3 bg-coral/50 rounded-full" />
        <div className="absolute top-5 right-8 w-2 h-2 bg-coral/40 rounded-full" />
        <div className="absolute top-8 right-3 w-2 h-2 bg-coral/30 rounded-full" />
        <div className="absolute top-3 right-10 w-16 h-16 bg-white/15 rounded-full" />
        <div className="absolute bottom-4 left-4 w-3 h-3 bg-coral/50 rounded-full" />
        <div className="absolute bottom-6 left-8 w-2 h-2 bg-coral/40 rounded-full" />
        {/* Concentric circles */}
        <div className="absolute inset-8 rounded-full border border-white/10" />
        <div className="absolute inset-14 rounded-full border border-white/8" />

        <h4 className="font-display font-black text-white text-lg leading-tight mb-2 relative z-10">
          Quando não<br />há evolução,
        </h4>
        <p className="font-display font-medium text-white/80 text-xs leading-relaxed relative z-10">
          e o comportamento se<br />repete ou se intensifica,
        </p>
        <p className="font-display text-white/80 text-xs mt-1 relative z-10">
          é hora de observar com<br /><strong className="text-white">mais atenção.</strong>
        </p>
        <div className="absolute bottom-2 left-0 right-0">
          <CarouselDots active={3} />
        </div>
      </div>
    </TemplateCard>

    {/* Slide 5 — CTA Navy */}
    <TemplateCard title="Slide 5 — CTA" size="1080 × 1080px">
      <div className="aspect-square rounded-xl overflow-hidden relative">
        <img src={photoIcons} alt="Ícones" className="w-full h-[45%] object-cover" />
        <div className="absolute top-[40%] left-0 right-0 h-[8%]">
          <svg viewBox="0 0 400 30" className="w-full h-full" preserveAspectRatio="none">
            <path d="M0,15 Q100,0 200,15 Q300,30 400,15 L400,30 L0,30 Z" fill="hsl(213, 50%, 20%)" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[58%] bg-navy" />
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <p className="font-display text-white text-[10px] leading-relaxed">
            Quanto antes<br />o apoio chega,
          </p>
          <p className="font-display font-bold text-coral text-xs leading-tight">
            mais leve fica<br />o caminho
          </p>
          <p className="font-display font-bold text-white text-[10px] mb-2">
            da criança e da família.
          </p>
          <p className="font-body text-white/50 text-[8px] mb-0.5">
            Se algo te preocupa, confie no seu olhar.
          </p>
          <p className="font-display font-bold text-sky text-[9px]">
            Confie na Casa do Urso.
          </p>
          <img src={logoCasadourso} alt="Logo" className="w-14 mt-2 ml-auto" />
          <CarouselDots active={4} />
        </div>
      </div>
    </TemplateCard>
  </div>
);
