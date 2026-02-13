import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import headerIcons from '@/assets/brand/header-icons.png';

/* ── Pilar mini-icons (from brand iconography) ── */
const IconEmocional = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="76 0 66 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M135.677 6.3701C128.705 0.461241 118.335 1.52408 111.935 8.09088L109.428 10.6594L106.922 8.09088C100.535 1.52408 90.1522 0.461241 83.1797 6.3701C75.1893 13.152 74.7694 25.324 81.92 32.6753L106.54 57.9555C108.131 59.5878 110.714 59.5878 112.304 57.9555L136.924 32.6753C144.088 25.324 143.668 13.152 135.677 6.3701Z" fill="currentColor"/>
  </svg>
);
const IconSocial = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="76 68 66 62" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M94.0195 78.0217C93.4307 73.8316 89.8329 70.6104 85.482 70.6104C80.7168 70.6104 76.8554 74.4718 76.8554 79.2369C76.8554 83.2456 79.5905 86.614 83.2979 87.5828L94.0195 78.0217Z" fill="#99D6C9"/>
    <path d="M125.021 78.0217C125.61 73.8316 129.208 70.6104 133.559 70.6104C138.324 70.6104 142.186 74.4718 142.186 79.2369C142.186 83.2456 139.45 86.614 135.743 87.5828L125.021 78.0217Z" fill="#99D6C9"/>
    <path d="M109.452 127.296C116.569 127.296 130.44 127.073 137.574 117.464C140.305 113.784 142.048 108.732 142.048 101.789C142.048 76.7037 123.816 70.6104 109.452 70.6104C95.0877 70.6104 76.8555 76.3648 76.8555 101.789C76.8555 108.571 78.5192 113.548 81.138 117.204C88.2138 127.07 102.27 127.296 109.452 127.296Z" fill="currentColor"/>
    <path d="M109.655 106.061C113.141 105.824 116.848 102.359 116.848 99.325C116.848 96.2914 113.797 94.9248 109.287 94.9248H109.194C104.679 94.9248 101.629 96.1815 101.629 99.325C101.629 102.469 105.331 105.828 108.821 106.061H109.655Z" fill="black"/>
    <circle cx="95.3066" cy="92.0886" r="3.15" fill="black"/>
    <circle cx="123.056" cy="92.0886" r="3.15" fill="black"/>
  </svg>
);
const IconComunicacao = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 68 66 62" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M0.27832 91.4985C0.27832 88.1887 2.1837 85.1745 5.17354 83.7546L29.2219 72.334C31.5186 71.2433 34.1841 71.2433 36.4808 72.334L60.5292 83.7546C63.519 85.1745 65.4244 88.1887 65.4244 91.4985V118.723C65.4244 123.458 61.5862 127.296 56.8516 127.296H8.85114C4.1165 127.296 0.27832 123.458 0.27832 118.723V91.4985Z" fill="currentColor"/>
  </svg>
);
const IconAutonomia = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 66 62" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M64.3376 41.3175L45.8888 30.6254L64.3376 19.9333C65.3772 19.3307 65.7328 17.9974 65.1329 16.9532L60.7871 9.39658C60.1872 8.35368 58.8585 7.99514 57.8188 8.5977L39.3701 19.2898V4.67537C39.3701 3.47024 38.397 2.49414 37.1972 2.49414H28.5055C27.3057 2.49414 26.3326 3.47024 26.3326 4.67537V19.2912L7.88389 8.59907C6.84426 7.9965 5.51553 8.35504 4.91564 9.39794L0.569813 16.9532C-0.0300795 17.9961 0.325513 19.3307 1.36515 19.9333L19.8139 30.6254L1.36515 41.3175C0.325513 41.9201 -0.0300795 43.2547 0.569813 44.2976L4.91564 51.8542C5.51553 52.8971 6.84426 53.2543 7.88389 52.6531L26.3326 41.961V56.9985C26.3326 58.2036 27.3057 59.1797 28.5055 59.1797H37.1972C38.397 59.1797 39.3701 58.2036 39.3701 56.9985V41.9596L57.8188 52.6518C58.8585 53.2543 60.1872 52.8971 60.7871 51.8529L65.1329 44.2963C65.7328 43.2534 65.3772 41.9201 64.3376 41.3175Z" fill="currentColor"/>
  </svg>
);

/* ── Data ── */

const pilares = [
  { name: 'Emocional', color: '#E8A5A5', icon: <IconEmocional /> },
  { name: 'Social', color: '#99D6C9', icon: <IconSocial /> },
  { name: 'Comunicação', color: '#4497C3', icon: <IconComunicacao /> },
  { name: 'Autonomia', color: '#F5C842', icon: <IconAutonomia /> },
];

const statusLevels = [
  {
    label: 'Introdução',
    description: 'A habilidade está sendo apresentada pela primeira vez. A criança começa a ter contato com o conceito.',
    color: '#E8A5A5',
    step: 1,
  },
  {
    label: 'Em desenvolvimento',
    description: 'A criança demonstra a habilidade com apoio consistente do terapeuta ou cuidador.',
    color: '#F5C842',
    step: 2,
  },
  {
    label: 'Consolidando',
    description: 'A habilidade aparece com mais frequência e menor necessidade de apoio externo.',
    color: '#4497C3',
    step: 3,
  },
  {
    label: 'Generalizando',
    description: 'A criança aplica a habilidade em diferentes contextos e de forma independente.',
    color: '#99D6C9',
    step: 4,
  },
];

const tags = [
  { label: 'Mais independente', color: '#99D6C9' },
  { label: 'Precisou de apoio', color: '#F5C842' },
  { label: 'Iniciou interação', color: '#4497C3' },
  { label: 'Resistência emocional', color: '#E8A5A5' },
  { label: 'Boa tolerância', color: '#99D6C9' },
  { label: 'Expressou sentimento', color: '#E8A5A5' },
  { label: 'Seguiu instrução', color: '#4497C3' },
  { label: 'Mostrou curiosidade', color: '#F5C842' },
];

const timelineEntries = [
  {
    week: 'Semana 1',
    status: 'Introdução',
    statusColor: '#E8A5A5',
    note: 'Meta apresentada. João demonstrou curiosidade, mas precisou de apoio constante para iniciar a atividade.',
    tags: ['Precisou de apoio', 'Mostrou curiosidade'],
  },
  {
    week: 'Semana 3',
    status: 'Em desenvolvimento',
    statusColor: '#F5C842',
    note: 'João começou a pedir para brincar com colegas em 2 das 4 sessões. Ainda precisa de mediação para manter a interação.',
    tags: ['Iniciou interação', 'Precisou de apoio'],
  },
  {
    week: 'Semana 6',
    status: 'Consolidando',
    statusColor: '#4497C3',
    note: 'Interações espontâneas em 3 de 4 sessões. Conseguiu resolver um pequeno conflito com apoio verbal mínimo.',
    tags: ['Mais independente', 'Boa tolerância'],
  },
  {
    week: 'Semana 9',
    status: 'Generalizando',
    statusColor: '#99D6C9',
    note: 'Mãe relatou que João convidou um colega para brincar no parque. Comportamento observado também na escola.',
    tags: ['Mais independente', 'Iniciou interação'],
  },
];

function getTagColor(label: string) {
  return tags.find((t) => t.label === label)?.color ?? '#999';
}

/* ── Page ── */

const SistemaProgressoPage = () => {
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
            Sistema de Progresso
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-3xl">
            Como o aplicativo da Casa do Urso acompanha o desenvolvimento infantil de forma clara, humana e baseada em evidências — sem pontuações ou gamificação.
          </p>
        </div>
      </header>

      {/* Color bar */}
      <div className="flex h-2">
        {pilares.map((p) => (
          <div key={p.name} className="flex-1" style={{ backgroundColor: p.color }} />
        ))}
      </div>

      <main className="max-w-6xl mx-auto px-6 py-16 space-y-20">
        {/* ── 1. Visão Geral ── */}
        <section>
          <SectionLabel number="01" title="Visão Geral" />
          <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
            <p className="font-body text-foreground leading-relaxed text-lg max-w-3xl">
              O progresso de cada criança é baseado em <strong className="text-navy">metas personalizadas</strong>, <strong className="text-navy">observações clínicas</strong> e <strong className="text-navy">evolução ao longo do tempo</strong>. Não usamos notas, estrelas ou pontuações — o foco é oferecer aos pais uma visão honesta e compreensível de como seu filho está se desenvolvendo.
            </p>
          </div>
        </section>

        {/* ── 2. Estrutura do Sistema ── */}
        <section>
          <SectionLabel number="02" title="Estrutura do Sistema" />
          <div className="grid md:grid-cols-2 gap-6">
            <StructureCard
              title="Pilares"
              description="Os 4 eixos de desenvolvimento — Emocional, Social, Comunicação e Autonomia — organizam todas as metas e observações."
            >
              <div className="flex gap-3 mt-4">
                {pilares.map((p) => (
                  <div
                    key={p.name}
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${p.color}25` }}
                  >
                    <span style={{ color: p.color }}>{p.icon}</span>
                  </div>
                ))}
              </div>
            </StructureCard>

            <StructureCard
              title="Metas"
              description="Objetivos claros e personalizados definidos pelo terapeuta para cada criança. Cada meta pertence a um pilar e evolui ao longo do tempo."
            >
              <div className="mt-4 bg-muted rounded-xl p-4">
                <p className="text-sm font-body text-muted-foreground italic">
                  Ex: "Iniciar interações com colegas durante atividades em grupo"
                </p>
              </div>
            </StructureCard>

            <StructureCard
              title="Micro-updates"
              description="Atualizações rápidas registradas pelo terapeuta após cada sessão, com observações curtas e tags que descrevem o comportamento observado."
            >
              <div className="flex flex-wrap gap-2 mt-4">
                {['Mais independente', 'Precisou de apoio'].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-display font-semibold"
                    style={{ backgroundColor: `${getTagColor(t)}20`, color: getTagColor(t) }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </StructureCard>

            <StructureCard
              title="Linha do Tempo"
              description="Visualização da evolução semana a semana, permitindo que os pais acompanhem o caminho percorrido — não apenas o estado atual."
            >
              <div className="flex items-center gap-2 mt-4">
                {statusLevels.map((s, i) => (
                  <div key={s.label} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: s.color }} />
                    {i < statusLevels.length - 1 && (
                      <ChevronRight size={12} className="text-muted-foreground" />
                    )}
                  </div>
                ))}
              </div>
            </StructureCard>
          </div>
        </section>

        {/* ── 3. Status das Metas ── */}
        <section>
          <SectionLabel number="03" title="Status das Metas" />
          <p className="font-body text-muted-foreground mb-8 max-w-2xl">
            Cada meta passa por 4 níveis de progresso. Essa escala comunica evolução sem criar pressão ou comparação.
          </p>
          <div className="grid md:grid-cols-4 gap-5">
            {statusLevels.map((level) => (
              <div
                key={level.label}
                className="bg-card rounded-2xl border border-border p-6 shadow-card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-sm"
                    style={{ backgroundColor: `${level.color}20`, color: level.color }}
                  >
                    {level.step}
                  </div>
                  <h3 className="font-display font-bold text-navy text-sm">{level.label}</h3>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {level.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. Sistema de Tags ── */}
        <section>
          <SectionLabel number="04" title="Sistema de Tags" />
          <p className="font-body text-muted-foreground mb-8 max-w-2xl">
            Tags são rótulos curtos que descrevem comportamentos observados. Elas acompanham os micro-updates e tornam o registro mais rápido e padronizado.
          </p>
          <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag.label}
                  className="px-4 py-2 rounded-full text-sm font-display font-semibold"
                  style={{ backgroundColor: `${tag.color}18`, color: tag.color }}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. Exemplo Prático ── */}
        <section>
          <SectionLabel number="05" title="Exemplo Prático" />
          <div className="bg-card rounded-2xl border border-border p-8 shadow-card">
            {/* Meta header */}
            <div className="flex items-start gap-4 mb-8">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: '#99D6C920' }}
              >
                <span style={{ color: '#99D6C9' }}><IconSocial className="w-6 h-6" /></span>
              </div>
              <div>
                <p className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                  Pilar Social · Meta
                </p>
                <h3 className="font-display font-bold text-navy text-lg">
                  Iniciar interações com colegas durante atividades em grupo
                </h3>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative pl-8 border-l-2 border-border space-y-8">
              {timelineEntries.map((entry) => (
                <div key={entry.week} className="relative">
                  {/* Dot */}
                  <div
                    className="absolute -left-[calc(2rem+5px)] w-3 h-3 rounded-full border-2 border-background"
                    style={{ backgroundColor: entry.statusColor }}
                  />
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="font-display font-bold text-navy text-sm">{entry.week}</span>
                    <span
                      className="px-3 py-0.5 rounded-full text-xs font-display font-semibold"
                      style={{ backgroundColor: `${entry.statusColor}20`, color: entry.statusColor }}
                    >
                      {entry.status}
                    </span>
                  </div>
                  <p className="font-body text-sm text-foreground leading-relaxed mb-3">
                    {entry.note}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {entry.tags.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs font-display font-semibold"
                        style={{ backgroundColor: `${getTagColor(t)}15`, color: getTagColor(t) }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom card ── */}
        <section>
          <div className="bg-card rounded-3xl border border-border p-10 shadow-card text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-4">
              Progresso com significado
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto">
              Na Casa do Urso, cada passo importa. O sistema de progresso foi desenhado para que pais e terapeutas compartilhem uma visão clara — e celebrem conquistas reais, no tempo de cada criança.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-navy text-white py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-display font-semibold text-lg mb-2">Casa do Urso</p>
          <p className="text-white/60 font-body text-sm">
            Sistema de Progresso · Brand Design System
          </p>
        </div>
      </footer>
    </div>
  );
};

/* ── Sub-components ── */

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="font-display text-sm font-bold text-sky">{number}</span>
      <h2 className="font-display text-2xl md:text-3xl font-bold text-navy">{title}</h2>
    </div>
  );
}

function StructureCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-card rounded-2xl border border-border p-7 shadow-card">
      <h3 className="font-display font-bold text-navy text-lg mb-2">{title}</h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed">{description}</p>
      {children}
    </div>
  );
}

export default SistemaProgressoPage;
