import { ArrowLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import headerIcons from '@/assets/brand/header-icons.png';
import { IconEmocional, IconSocial, IconComunicacao, IconAutonomia } from '@/components/brand/BrandIcons';

/* ── Data ── */

/* Accessible dark text variants for brand colors (WCAG AA 4.5:1 on white) */
const accessibleTextColor: Record<string, string> = {
  '#E8A5A5': '#A63D3D',
  '#99D6C9': '#2E7A66',
  '#F5C842': '#7A6510',
  '#4497C3': '#265F85',
  '#CD995B': '#8A6B2E',
};
const textOf = (c: string) => accessibleTextColor[c] ?? c;

const pilares = [
  { name: 'Emocional', color: '#E8A5A5', icon: <IconEmocional /> },
  { name: 'Social', color: '#CD995B', icon: <IconSocial /> },
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
                    style={{ backgroundColor: `${getTagColor(t)}20`, color: textOf(getTagColor(t)) }}
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
                  style={{ backgroundColor: `${tag.color}18`, color: textOf(tag.color) }}
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
                style={{ backgroundColor: '#CD995B20' }}
              >
                <span style={{ color: '#CD995B' }}><IconSocial className="w-6 h-6" /></span>
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
                      style={{ backgroundColor: `${entry.statusColor}20`, color: textOf(entry.statusColor) }}
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
                        style={{ backgroundColor: `${getTagColor(t)}15`, color: textOf(getTagColor(t)) }}
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
