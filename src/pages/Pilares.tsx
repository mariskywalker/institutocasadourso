import { ArrowLeft, Asterisk, Heart, House } from 'lucide-react';
import { Link } from 'react-router-dom';
import headerIcons from '@/assets/brand/header-icons.png';
import { IconSocial } from '@/components/brand/BrandIcons';

interface PilarData {
  title: string;
  color: string;
  colorClass: string;
  bgLight: string;
  borderColor: string;
  icon: React.ReactNode;
  description: string;
  includes: string[];
  realExample: string;
  appUsage: string;
}

const pilares: PilarData[] = [
  {
    title: 'Escola',
    color: '#F5C842',
    colorClass: 'text-sunshine',
    bgLight: 'bg-sunshine-light',
    borderColor: 'border-sunshine',
    icon: <Asterisk className="w-7 h-7" />,
    description: 'A escola é o espaço de aprendizagem, socialização e pertencimento, essencial para o desenvolvimento infantil.',
    includes: [
      'Alinhamento com objetivos pedagógicos e socioemocionais',
      'Integração entre equipe escolar e equipe técnica',
      'Acompanhamento da rotina, participação e convivência',
      'Adaptações e estratégias para o ambiente de sala de aula',
      'Continuidade entre aprendizagem e cuidado',
    ],
    realExample: 'Quando escola e equipe terapêutica combinam metas em conjunto e a criança recebe suporte consistente durante as atividades do dia.',
    appUsage: 'Registro de rotina escolar, alinhamento de objetivos e compartilhamento de evoluções com toda a rede de cuidado.',
  },
  {
    title: 'Clínica',
    color: '#E8A5A5',
    colorClass: 'text-coral',
    bgLight: 'bg-coral-light',
    borderColor: 'border-coral',
    icon: <Heart className="w-7 h-7" />,
    description: 'A clínica oferece avaliação técnica, escuta qualificada e intervenções personalizadas para cada criança.',
    includes: [
      'Avaliação multidisciplinar e definição de plano terapêutico',
      'Metas individualizadas com base em evidências',
      'Acompanhamento contínuo de evolução e ajustes de conduta',
      'Suporte técnico para família e escola',
      'Visão integral da criança e do seu contexto',
    ],
    realExample: 'Quando a equipe clínica identifica prioridades de intervenção e traduz as orientações em ações práticas para escola e família.',
    appUsage: 'Planos terapêuticos, relatórios técnicos e histórico de evolução com indicadores de progresso.',
  },
  {
    title: 'Casa',
    color: '#4497C3',
    colorClass: 'text-sky',
    bgLight: 'bg-sky-light',
    borderColor: 'border-sky',
    icon: <House className="w-7 h-7" />,
    description: 'A casa é o território do vínculo, da rotina real e da participação ativa da família no desenvolvimento.',
    includes: [
      'Fortalecimento do papel dos cuidadores no processo',
      'Estratégias aplicáveis à rotina diária',
      'Consistência entre orientações e prática em casa',
      'Observação de comportamentos em contexto natural',
      'Construção de vínculos e autonomia com suporte',
    ],
    realExample: 'Quando os cuidadores aplicam as orientações no cotidiano e percebem avanços na comunicação, comportamento e autonomia da criança.',
    appUsage: 'Guias práticos para cuidadores, check-ins familiares e registro de avanços observados em casa.',
  },
];

const Pilares = () => {
  const metodoUrso = {
    title: 'Urso',
    description:
      'O Método Casa do Urso une Escola, Clínica e Casa em um hub personalizado para a criança, conectando informações, estratégias e acompanhamento em uma visão única de cuidado.',
  };

  return (
    <div className="min-h-screen bg-background overflow-x-clip relative instituto-glow-bg">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-30" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-10">
            <img src={headerIcons} alt="Casa do Urso" className="h-10" />
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-navy font-display font-semibold hover:text-sky transition-colors"
            >
              <ArrowLeft size={18} />
              Brand Guidelines
            </Link>
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold text-navy mb-4">
            Pilares de Desenvolvimento
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-3xl">
            O método Casa do Urso organiza sua abordagem em três pilares integrados:
            Escola, Clínica e Casa. Juntos, eles conectam os principais contextos da vida da criança com continuidade de cuidado.
          </p>
        </div>
      </header>

      {/* Color Bar */}
      <div className="flex h-2">
        {pilares.map((p) => (
          <div key={p.title} className="flex-1" style={{ backgroundColor: p.color }} />
        ))}
      </div>

      {/* Pilares */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {pilares.map((pilar, index) => (
          <section key={pilar.title} className="grid md:grid-cols-12 gap-8 items-start">
            {/* Left: Title Block */}
            <div className="md:col-span-4">
              <div
                className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl mb-5"
                style={{ backgroundColor: `${pilar.color}20` }}
              >
                <span style={{ color: pilar.color }}>{pilar.icon}</span>
                <span className="font-display font-bold text-navy text-sm uppercase tracking-wider">
                  Pilar {index + 1}
                </span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-navy mb-3">
                {pilar.title}
              </h2>
              <p className="text-muted-foreground font-body text-base leading-relaxed">
                {pilar.description}
              </p>
              <div
                className="w-16 h-1.5 rounded-full mt-6"
                style={{ backgroundColor: pilar.color }}
              />
            </div>

            {/* Right: Details */}
            <div className="md:col-span-8 space-y-6">
              {/* O que inclui */}
              <div className="bg-card rounded-2xl border border-border p-7 shadow-card">
                <h3 className="font-display font-bold text-navy text-lg mb-4">
                  O que esse pilar inclui
                </h3>
                <ul className="space-y-3">
                  {pilar.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: pilar.color }}
                      />
                      <span className="text-foreground font-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exemplo real */}
              <div
                className="rounded-2xl p-7 border"
                style={{
                  backgroundColor: `${pilar.color}10`,
                  borderColor: `${pilar.color}30`,
                }}
              >
                <h3 className="font-display font-bold text-navy text-lg mb-3">
                  💡 Como os pais percebem isso
                </h3>
                <p className="text-foreground font-body leading-relaxed">
                  {pilar.realExample}
                </p>
              </div>

              {/* No app */}
              <div className="bg-muted rounded-2xl p-7">
                <h3 className="font-display font-bold text-navy text-lg mb-3">
                  📱 No aplicativo
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">
                  {pilar.appUsage}
                </p>
              </div>
            </div>
          </section>
        ))}

        {/* Urso / Método */}
        <section className="pt-2">
          <div className="bg-[#CD995B]/10 rounded-3xl border border-[#CD995B]/30 p-10 shadow-card text-center">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 bg-[#CD995B]/20">
              <span className="text-[#CD995B]">
                <IconSocial className="w-8 h-8" />
              </span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-4">
              {metodoUrso.title}
            </h2>
            <p className="text-foreground font-body max-w-3xl mx-auto leading-relaxed">
              {metodoUrso.description}
            </p>
          </div>
        </section>

        {/* Summary visual */}
        <section className="pt-8">
          <div className="bg-card rounded-3xl border border-border p-10 shadow-card text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-4">
              Os 3 pilares formam a base do Método Casa do Urso
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto mb-10">
              Escola, Clínica e Casa atuam de forma integrada para garantir alinhamento entre todos os ambientes de desenvolvimento infantil.
            </p>
            <p className="font-display font-bold text-navy mb-8">
              Escola x Clínica x Casa = Método Casa do Urso
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {pilares.map((pilar) => (
                <div key={pilar.title} className="flex flex-col items-center gap-3">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: `${pilar.color}20` }}
                  >
                    <span style={{ color: pilar.color }}>{pilar.icon}</span>
                  </div>
                  <span className="font-display font-bold text-navy text-sm">
                    {pilar.title}
                  </span>
                </div>
              ))}
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-[#CD995B]/20">
                  <span className="text-[#CD995B]">
                    <IconSocial className="w-7 h-7" />
                  </span>
                </div>
                <span className="font-display font-bold text-navy text-sm">
                  Urso
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-navy text-white py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-display font-semibold text-lg mb-2">Casa do Urso</p>
          <p className="text-white/60 font-body text-sm">
            Pilares de Desenvolvimento · Método Casa do Urso
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Pilares;
