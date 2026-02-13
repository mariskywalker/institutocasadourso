import logoBear from '@/assets/brand/logo-bear.png';
import logoCasadourso from '@/assets/brand/logo-casadourso.png';
import photoChild from '@/assets/brand/photo-child-reading.jpg';
import photoTherapy from '@/assets/brand/photo-therapy-session.jpg';
import formaSunshine from '@/assets/brand/forma-sunshine.png';
import formaMint from '@/assets/brand/forma-mint.png';
import { TemplateCard } from '../InstagramTemplates';

export const StoryTemplates = () => (
  <>
    <h4 className="font-display font-semibold text-foreground mb-4">Stories</h4>
    <div className="grid md:grid-cols-4 gap-6">
      {/* Story — Dica Coral */}
      <TemplateCard title="Story — Dica" size="1080 × 1920px">
        <div className="aspect-[9/16] max-h-72 rounded-xl overflow-hidden bg-coral relative p-4 flex flex-col justify-between mx-auto">
          <img src={formaSunshine} alt="" className="absolute top-0 right-0 w-20 h-16 object-cover opacity-25 rotate-12" />
          <img src={formaMint} alt="" className="absolute bottom-0 left-0 w-16 h-20 object-cover opacity-25 -rotate-12" />
          <span className="text-white/60 text-[8px] font-medium text-center">@clinicacasadourso</span>
          <div className="text-center flex-1 flex flex-col justify-center relative z-10">
            <span className="font-display font-black text-white text-lg leading-none mb-1">"</span>
            <h4 className="font-display font-black text-white text-sm leading-tight mb-2">
              A brincadeira é<br />a principal ferramenta<br />
              <span className="bg-navy px-1.5 py-0.5 text-white inline-block mt-1">de aprendizado</span>
            </h4>
          </div>
          <img src={logoBear} alt="Urso" className="w-6 h-6 mx-auto relative z-10" />
        </div>
      </TemplateCard>

      {/* Story — CTA Navy */}
      <TemplateCard title="Story — CTA" size="1080 × 1920px">
        <div className="aspect-[9/16] max-h-72 rounded-xl overflow-hidden relative mx-auto">
          <img src={photoTherapy} alt="" className="w-full h-[45%] object-cover" />
          <div className="absolute top-[40%] left-0 right-0 h-[8%]">
            <svg viewBox="0 0 200 20" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0,10 Q50,0 100,10 Q150,20 200,10 L200,20 L0,20 Z" fill="hsl(213, 50%, 20%)" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-[58%] bg-navy" />
          <div className="absolute bottom-4 left-3 right-3 text-center z-10">
            <h4 className="font-display font-bold text-white text-xs leading-tight mb-1">
              Agende uma<br />avaliação
            </h4>
            <div className="mx-auto px-3 py-1 bg-coral rounded-full inline-block mb-2">
              <span className="text-white text-[9px] font-medium">Saiba mais</span>
            </div>
            <img src={logoCasadourso} alt="Logo" className="w-12 mx-auto" />
          </div>
        </div>
      </TemplateCard>

      {/* Story — Depoimento Sunshine */}
      <TemplateCard title="Story — Depoimento" size="1080 × 1920px">
        <div className="aspect-[9/16] max-h-72 rounded-xl overflow-hidden bg-sunshine-light relative p-4 flex flex-col justify-between mx-auto">
          <img src={formaSunshine} alt="" className="absolute top-0 left-0 w-14 h-16 object-cover opacity-20 -rotate-12" />
          <div className="flex items-center justify-center gap-1">
            <span className="text-sunshine text-sm">★</span>
            <span className="text-sunshine text-sm">★</span>
            <span className="text-sunshine text-sm">★</span>
          </div>
          <div className="text-center flex-1 flex flex-col justify-center relative z-10">
            <span className="font-display font-black text-navy text-xl leading-none">"</span>
            <p className="font-body text-[10px] text-navy/80 italic leading-relaxed mb-2">
              A evolução do meu filho<br />foi incrível com a<br />terapia ABA
            </p>
            <p className="text-[8px] text-navy/50 font-medium">— Mãe do Pedro</p>
          </div>
          <img src={logoBear} alt="Urso" className="w-5 h-5 mx-auto relative z-10" />
        </div>
      </TemplateCard>

      {/* Story — Equipe Sky */}
      <TemplateCard title="Story — Equipe" size="1080 × 1920px">
        <div className="aspect-[9/16] max-h-72 rounded-xl overflow-hidden bg-sky-light relative p-4 flex flex-col justify-between mx-auto">
          <div className="absolute top-0 right-0 w-12 h-8 bg-sunshine/30 rounded-bl-[60%]" />
          <div className="absolute bottom-0 left-0 w-8 h-12 bg-coral/20 rounded-tr-[60%]" />
          <img src={logoBear} alt="Urso" className="w-5 h-5 mx-auto relative z-10" />
          <div className="text-center flex-1 flex flex-col justify-center relative z-10">
            <div className="w-10 h-10 rounded-full bg-white/60 mx-auto mb-2 overflow-hidden">
              <img src={photoTherapy} alt="" className="w-full h-full object-cover" />
            </div>
            <p className="text-[8px] font-medium text-sky uppercase tracking-widest mb-0.5">Conheça</p>
            <h4 className="font-display font-bold text-navy text-xs leading-tight">
              Dra. Nome
            </h4>
            <p className="font-body text-[8px] text-navy/60">Terapeuta ABA</p>
          </div>
          <div className="flex items-center justify-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-coral/20" />
            <div className="w-2 h-2 rounded-lg bg-sky/30 rotate-45" />
          </div>
        </div>
      </TemplateCard>
    </div>
  </>
);
