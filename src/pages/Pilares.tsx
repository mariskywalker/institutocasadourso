import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import headerIcons from '@/assets/brand/header-icons.png';

const IconEmocional = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg viewBox="76 0 66 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M135.677 6.3701C128.705 0.461241 118.335 1.52408 111.935 8.09088L109.428 10.6594L106.922 8.09088C100.535 1.52408 90.1522 0.461241 83.1797 6.3701C75.1893 13.152 74.7694 25.324 81.92 32.6753L106.54 57.9555C108.131 59.5878 110.714 59.5878 112.304 57.9555L136.924 32.6753C144.088 25.324 143.668 13.152 135.677 6.3701Z" fill="currentColor"/>
  </svg>
);

const IconSocial = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg viewBox="76 68 66 62" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M94.0195 78.0217C93.4307 73.8316 89.8329 70.6104 85.482 70.6104C80.7168 70.6104 76.8554 74.4718 76.8554 79.2369C76.8554 83.2456 79.5905 86.614 83.2979 87.5828L94.0195 78.0217Z" fill="#CD995B"/>
    <path d="M125.021 78.0217C125.61 73.8316 129.208 70.6104 133.559 70.6104C138.324 70.6104 142.186 74.4718 142.186 79.2369C142.186 83.2456 139.45 86.614 135.743 87.5828L125.021 78.0217Z" fill="#CD995B"/>
    <path d="M109.452 127.296C116.569 127.296 130.44 127.073 137.574 117.464C140.305 113.784 142.048 108.732 142.048 101.789C142.048 76.7037 123.816 70.6104 109.452 70.6104C95.0877 70.6104 76.8555 76.3648 76.8555 101.789C76.8555 108.571 78.5192 113.548 81.138 117.204C88.2138 127.07 102.27 127.296 109.452 127.296Z" fill="currentColor"/>
    <path d="M109.655 106.061C113.141 105.824 116.848 102.359 116.848 99.325C116.848 96.2914 113.797 94.9248 109.287 94.9248H109.194C104.679 94.9248 101.629 96.1815 101.629 99.325C101.629 102.469 105.331 105.828 108.821 106.061H109.655Z" fill="black"/>
    <circle cx="95.3066" cy="92.0886" r="3.15" fill="black"/>
    <circle cx="123.056" cy="92.0886" r="3.15" fill="black"/>
  </svg>
);

const IconComunicacao = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg viewBox="0 68 66 62" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M0.27832 91.4985C0.27832 88.1887 2.1837 85.1745 5.17354 83.7546L29.2219 72.334C31.5186 71.2433 34.1841 71.2433 36.4808 72.334L60.5292 83.7546C63.519 85.1745 65.4244 88.1887 65.4244 91.4985V118.723C65.4244 123.458 61.5862 127.296 56.8516 127.296H8.85114C4.1165 127.296 0.27832 123.458 0.27832 118.723V91.4985Z" fill="currentColor"/>
  </svg>
);

const IconAutonomia = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg viewBox="0 0 66 62" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M64.3376 41.3175L45.8888 30.6254L64.3376 19.9333C65.3772 19.3307 65.7328 17.9974 65.1329 16.9532L60.7871 9.39658C60.1872 8.35368 58.8585 7.99514 57.8188 8.5977L39.3701 19.2898V4.67537C39.3701 3.47024 38.397 2.49414 37.1972 2.49414H28.5055C27.3057 2.49414 26.3326 3.47024 26.3326 4.67537V19.2912L7.88389 8.59907C6.84426 7.9965 5.51553 8.35504 4.91564 9.39794L0.569813 16.9532C-0.0300795 17.9961 0.325513 19.3307 1.36515 19.9333L19.8139 30.6254L1.36515 41.3175C0.325513 41.9201 -0.0300795 43.2547 0.569813 44.2976L4.91564 51.8542C5.51553 52.8971 6.84426 53.2543 7.88389 52.6531L26.3326 41.961V56.9985C26.3326 58.2036 27.3057 59.1797 28.5055 59.1797H37.1972C38.397 59.1797 39.3701 58.2036 39.3701 56.9985V41.9596L57.8188 52.6518C58.8585 53.2543 60.1872 52.8971 60.7871 51.8529L65.1329 44.2963C65.7328 43.2534 65.3772 41.9201 64.3376 41.3175Z" fill="currentColor"/>
  </svg>
);

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
    icon: <IconEmocional className="w-7 h-7" />,
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
    icon: <IconSocial className="w-7 h-7" />,
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
    icon: <IconComunicacao className="w-7 h-7" />,
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
    icon: <IconAutonomia className="w-7 h-7" />,
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
