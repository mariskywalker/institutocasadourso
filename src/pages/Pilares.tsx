import { Heart, Users, MessageCircle, Sparkles, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import headerIcons from '@/assets/brand/header-icons.png';

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
    title: 'Emocional',
    color: '#E8A5A5',
    colorClass: 'text-coral',
    bgLight: 'bg-coral-light',
    borderColor: 'border-coral',
    icon: <Heart className="w-7 h-7" />,
    description: 'Ajuda a criança a reconhecer, nomear e lidar com o que sente — com segurança e acolhimento.',
    includes: [
      'Identificação e nomeação de emoções',
      'Regulação emocional e autocontrole',
      'Construção de autoestima e confiança',
      'Desenvolvimento de resiliência',
      'Vínculo afetivo com cuidadores',
    ],
    realExample: 'Quando a criança consegue dizer "estou com raiva" ao invés de fazer birra, ou quando pede um abraço ao se sentir triste.',
    appUsage: 'Diários emocionais, atividades de reconhecimento de sentimentos e relatórios de progresso emocional para os pais.',
  },
  {
    title: 'Social',
    color: '#99D6C9',
    colorClass: 'text-mint',
    bgLight: 'bg-mint-light',
    borderColor: 'border-mint',
    icon: <Users className="w-7 h-7" />,
    description: 'Fortalece a capacidade de se relacionar, compartilhar e conviver com outras pessoas de forma saudável.',
    includes: [
      'Habilidades de cooperação e trabalho em grupo',
      'Empatia e respeito às diferenças',
      'Resolução de conflitos entre pares',
      'Regras sociais e limites saudáveis',
      'Construção de amizades',
    ],
    realExample: 'Quando a criança espera sua vez para falar, divide um brinquedo com o colega ou convida alguém que está sozinho para brincar.',
    appUsage: 'Atividades em grupo, desafios colaborativos e métricas de interação social no acompanhamento terapêutico.',
  },
  {
    title: 'Comunicação',
    color: '#4497C3',
    colorClass: 'text-sky',
    bgLight: 'bg-sky-light',
    borderColor: 'border-sky',
    icon: <MessageCircle className="w-7 h-7" />,
    description: 'Desenvolve a expressão verbal e não-verbal, ampliando a forma como a criança se comunica com o mundo.',
    includes: [
      'Desenvolvimento da fala e linguagem',
      'Ampliação de vocabulário',
      'Comunicação não-verbal e expressão corporal',
      'Narrativa e organização do pensamento',
      'Escuta ativa e compreensão',
    ],
    realExample: 'Quando a criança conta sobre o dia na escola com começo, meio e fim, ou quando faz perguntas para entender algo novo.',
    appUsage: 'Exercícios de linguagem, registro de evolução da fala e recursos visuais de apoio à comunicação.',
  },
  {
    title: 'Autonomia',
    color: '#F5C842',
    colorClass: 'text-sunshine',
    bgLight: 'bg-sunshine-light',
    borderColor: 'border-sunshine',
    icon: <Sparkles className="w-7 h-7" />,
    description: 'Incentiva a criança a fazer escolhas, tomar iniciativas e cuidar de si com cada vez mais independência.',
    includes: [
      'Tomada de decisões apropriadas à idade',
      'Rotinas e hábitos de autocuidado',
      'Resolução de problemas do cotidiano',
      'Responsabilidade com pertences e tarefas',
      'Iniciativa e curiosidade exploratória',
    ],
    realExample: 'Quando a criança escolhe a roupa sozinha, guarda os brinquedos sem ser pedido ou tenta resolver um problema antes de pedir ajuda.',
    appUsage: 'Checklists de rotina, conquistas desbloqueáveis e acompanhamento de marcos de independência.',
  },
];

const Pilares = () => {
  return (
    <div className="min-h-screen bg-background">
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
            A Casa do Urso organiza sua abordagem em quatro pilares fundamentais.
            Cada pilar representa uma dimensão essencial do crescimento infantil — e uma cor que a identifica em todo o ecossistema da marca.
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

        {/* Summary visual */}
        <section className="pt-8">
          <div className="bg-card rounded-3xl border border-border p-10 shadow-card text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-4">
              Os 4 pilares juntos formam a base do cuidado
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto mb-10">
              Cada pilar se conecta aos outros — o desenvolvimento é integral.
              A Casa do Urso acompanha cada dimensão com carinho e evidência.
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
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-navy text-white py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-display font-semibold text-lg mb-2">Casa do Urso</p>
          <p className="text-white/60 font-body text-sm">
            Pilares de Desenvolvimento · Brand Design System
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Pilares;
