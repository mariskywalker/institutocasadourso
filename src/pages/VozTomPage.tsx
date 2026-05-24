import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import headerIcons from '@/assets/brand/header-icons.png';

/* ── Data ── */

const principios = [
  {
    title: 'Explicamos sem complicar',
    description: 'Traduzimos conceitos clínicos em linguagem acessível. Os pais precisam entender, não decorar termos técnicos.',
    emoji: '💬',
  },
  {
    title: 'Acolhemos sem julgar',
    description: 'Cada família tem sua história. Nossa comunicação reconhece o esforço dos pais e nunca os faz sentir inadequados.',
    emoji: '🤝',
  },
  {
    title: 'Orientamos com clareza',
    description: 'Quando sugerimos algo, somos objetivos. Nada de frases vagas — o pai ou a mãe precisa saber exatamente o que fazer.',
    emoji: '🧭',
  },
];

const evitarPreferir = [
  {
    evitar: 'O paciente apresenta déficit na regulação emocional com episódios de desregulação afetiva.',
    preferir: 'João ainda está aprendendo a lidar com emoções fortes, como raiva e frustração. É um processo normal e estamos acompanhando.',
  },
  {
    evitar: 'Verificou-se ausência de interação social espontânea com pares durante atividades lúdicas dirigidas.',
    preferir: 'Durante as brincadeiras em grupo, João ainda prefere brincar sozinho. Estamos trabalhando isso com calma nas sessões.',
  },
  {
    evitar: 'Recomenda-se estimulação da pragmática linguística em contextos naturais.',
    preferir: 'Em casa, tente conversar com ele durante as atividades do dia a dia — como na hora do banho ou da refeição. Isso ajuda muito.',
  },
  {
    evitar: 'Paciente não atingiu os marcos esperados para a faixa etária.',
    preferir: 'Cada criança tem seu ritmo. João está evoluindo no tempo dele, e vamos continuar apoiando esse caminho.',
  },
];

const microcopyExamples = [
  {
    category: 'Atualizações de progresso',
    color: '#99D6C9',
    textColor: '#2E7A66',
    examples: [
      { label: 'Status positivo', text: 'João está cada vez mais à vontade para iniciar conversas com os colegas. 💚' },
      { label: 'Em desenvolvimento', text: 'Ainda estamos trabalhando essa habilidade. Cada sessão conta — e ele está no caminho certo.' },
      { label: 'Meta alcançada', text: 'Conquista desbloqueada! João conseguiu expressar o que sentia sem precisar de ajuda. 🎉' },
    ],
  },
  {
    category: 'Resumo de sessão',
    color: '#4497C3',
    textColor: '#265F85',
    examples: [
      { label: 'Abertura', text: 'Hoje trabalhamos atividades de cooperação em dupla. Veja como foi:' },
      { label: 'Observação', text: 'João mostrou mais iniciativa para escolher a atividade. Isso é um ótimo sinal de autonomia.' },
      { label: 'Encerramento', text: 'Foi uma sessão produtiva. Na próxima, vamos avançar com atividades em grupo maior.' },
    ],
  },
  {
    category: 'Orientações para pais',
    color: '#F5C842',
    textColor: '#7A6510',
    examples: [
      { label: 'Sugestão prática', text: 'Experimente dar duas opções para ele escolher na hora de se vestir. Isso exercita a autonomia.' },
      { label: 'Reforço positivo', text: 'Quando ele contar algo do dia, tente parar e ouvir com atenção. Isso fortalece o vínculo.' },
      { label: 'Normalização', text: 'Se ele resistir, está tudo bem. Não force — apenas ofereça novamente em outro momento.' },
    ],
  },
];

const diretrizes = [
  {
    title: 'Frases curtas',
    description: 'Prefira frases de até duas linhas. Se precisar explicar algo complexo, quebre em etapas.',
    do: 'João está progredindo bem. Ele já consegue esperar a vez dele na roda.',
    dont: 'Com base nas observações realizadas durante as sessões terapêuticas das últimas semanas, verificamos que o paciente tem demonstrado melhora gradual na capacidade de aguardar turnos.',
  },
  {
    title: 'Linguagem simples',
    description: 'Use palavras do dia a dia. Se um termo técnico for necessário, explique logo em seguida.',
    do: 'Estamos trabalhando a empatia — a capacidade de entender o que o outro sente.',
    dont: 'Estamos focando no desenvolvimento da cognição social e teoria da mente.',
  },
  {
    title: 'Tom positivo e construtivo',
    description: 'Mesmo ao falar de dificuldades, foque no progresso e no que pode ser feito. Nunca rotule a criança.',
    do: 'Ele ainda precisa de apoio para lidar com a frustração, e estamos trabalhando isso juntos.',
    dont: 'Ele não consegue controlar as emoções e tem dificuldade significativa em se regular.',
  },
];

const tracosComunicacao = [
  { trait: 'Humana', description: 'Falamos de criança para criança, de pessoa para pessoa. Sem frieza institucional.', color: '#E8A5A5', textColor: '#A63D3D' },
  { trait: 'Acolhedora', description: 'Cada palavra transmite cuidado. Os pais precisam sentir que estão em boas mãos.', color: '#99D6C9', textColor: '#2E7A66' },
  { trait: 'Clara', description: 'Sem ambiguidade. O que dizemos é o que queremos dizer — direto e compreensível.', color: '#4497C3', textColor: '#265F85' },
  { trait: 'Segura', description: 'Transmitimos confiança sem arrogância. Sabemos do que estamos falando.', color: '#F5C842', textColor: '#7A6510' },
];

/* ── Page ── */

const VozTomPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-clip relative instituto-glow-bg">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-30" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-12">
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
            Voz e Tom
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-3xl leading-relaxed">
            A forma como nos comunicamos é tão importante quanto o que comunicamos.
            Na Casa do Urso, cada mensagem é pensada para acolher, orientar e fortalecer a confiança dos pais.
          </p>
        </div>
      </header>

      {/* Color bar */}
      <div className="flex h-1.5">
        {tracosComunicacao.map((t) => (
          <div key={t.trait} className="flex-1" style={{ backgroundColor: t.color }} />
        ))}
      </div>

      <main className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        {/* ── Traços da comunicação ── */}
        <section>
          <SectionLabel number="01" title="Nossa linguagem é" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tracosComunicacao.map((t) => (
              <div key={t.trait} className="bg-card rounded-2xl border border-border p-6 shadow-card">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 font-display font-bold text-sm"
                  style={{ backgroundColor: `${t.color}20`, color: t.textColor }}
                >
                  {t.trait.charAt(0)}
                </div>
                <h3 className="font-display font-bold text-navy text-lg mb-2">{t.trait}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{t.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Princípios ── */}
        <section>
          <SectionLabel number="02" title="Princípios de Comunicação" />
          <div className="space-y-5">
            {principios.map((p) => (
              <div key={p.title} className="bg-card rounded-2xl border border-border p-7 shadow-card flex gap-5 items-start">
                <span className="text-3xl flex-shrink-0">{p.emoji}</span>
                <div>
                  <h3 className="font-display font-bold text-navy text-lg mb-1">{p.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Evitar vs Preferir ── */}
        <section>
          <SectionLabel number="03" title="Evitar vs Preferir" />
          <p className="font-body text-muted-foreground mb-8 max-w-2xl">
            Abaixo, exemplos reais de como transformar uma linguagem técnica em uma comunicação que os pais compreendem e confiam.
          </p>
          <div className="space-y-6">
            {evitarPreferir.map((item, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border p-6 bg-coral-light/30">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-display font-semibold bg-coral/20 text-coral-dark mb-3">
                    ✗ Evitar
                  </span>
                  <p className="font-body text-sm text-foreground leading-relaxed">{item.evitar}</p>
                </div>
                <div className="rounded-2xl border border-border p-6 bg-mint-light/30">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-display font-semibold bg-mint/20 text-mint-dark mb-3">
                    ✓ Preferir
                  </span>
                  <p className="font-body text-sm text-foreground leading-relaxed">{item.preferir}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Microcopy ── */}
        <section>
          <SectionLabel number="04" title="Exemplos de Microcopy" />
          <p className="font-body text-muted-foreground mb-8 max-w-2xl">
            Textos curtos que aparecem no aplicativo em momentos-chave da experiência dos pais.
          </p>
          <div className="space-y-8">
            {microcopyExamples.map((group) => (
              <div key={group.category}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: group.color }} />
                  <h3 className="font-display font-bold text-navy">{group.category}</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {group.examples.map((ex) => (
                    <div key={ex.label} className="bg-card rounded-2xl border border-border p-5 shadow-card">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-display font-semibold mb-3"
                        style={{ backgroundColor: `${group.color}18`, color: group.textColor }}
                      >
                        {ex.label}
                      </span>
                      <p className="font-body text-sm text-foreground leading-relaxed">{ex.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Diretrizes de escrita ── */}
        <section>
          <SectionLabel number="05" title="Diretrizes de Escrita" />
          <div className="space-y-8">
            {diretrizes.map((d) => (
              <div key={d.title} className="bg-card rounded-2xl border border-border p-8 shadow-card">
                <h3 className="font-display font-bold text-navy text-lg mb-2">{d.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">{d.description}</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-xl bg-mint-light/30 p-5 border border-mint/20">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-display font-semibold bg-mint/20 text-mint-dark mb-3">
                      ✓ Assim
                    </span>
                    <p className="font-body text-sm text-foreground leading-relaxed italic">"{d.do}"</p>
                  </div>
                  <div className="rounded-xl bg-coral-light/30 p-5 border border-coral/20">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-display font-semibold bg-coral/20 text-coral-dark mb-3">
                      ✗ Não assim
                    </span>
                    <p className="font-body text-sm text-foreground leading-relaxed italic">"{d.dont}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Bottom card ── */}
        <section>
          <div className="bg-card rounded-3xl border border-border p-10 shadow-card text-center">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-navy mb-4">
              Cada palavra importa
            </h2>
            <p className="text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
              Na Casa do Urso, a comunicação é parte do cuidado. Quando um pai lê uma atualização e sente que está acompanhando — sem medo, sem confusão — nossa voz cumpriu seu papel.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-navy text-white py-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="font-display font-semibold text-lg mb-2">Casa do Urso</p>
          <p className="text-white/60 font-body text-sm">
            Voz e Tom · Brand Design System
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

export default VozTomPage;
