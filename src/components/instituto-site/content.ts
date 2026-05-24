export type SiteLang = "pt-BR" | "en";

type SectionText = {
  eyebrow: string;
  title: string;
  description: string;
};

type HeroText = {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  scrollHint: string;
};

type ThesisCard = {
  title: string;
  description: string;
};

type EcosystemActor = {
  label: string;
  role: string;
};

type CaduFeature = {
  title: string;
  description: string;
};

type PortfolioCard = {
  number: string;
  tag: string;
  title: string;
  description: string;
  href?: string;
};

type ImpactStat = {
  value: string;
  label: string;
  note?: string;
};

export type SiteCopy = {
  nav: {
    thesis: string;
    technology: string;
    ecosystem: string;
    contact: string;
  };
  hero: HeroText;
  thesis: SectionText & { cards: ThesisCard[] };
  technology: SectionText & {
    problem: string;
    actorsTitle: string;
    actors: EcosystemActor[];
  };
  cadu: {
    label: string;
    title: string;
    titleAccent: string;
    description: string;
    tagline: string;
    features: CaduFeature[];
    cta: string;
    ctaHref: string;
  };
  portfolio: SectionText & { cards: PortfolioCard[] };
  impact: SectionText & { footnote: string; stats: ImpactStat[] };
  policyLab: SectionText & { subtitle: string };
  closingCta: {
    location: string;
    title: string;
    titleAccent: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  contact: {
    name: string;
    institution: string;
    email: string;
    subject: string;
    message: string;
    send: string;
  };
};

export const institutoCopy: Record<SiteLang, SiteCopy> = {
  "pt-BR": {
    nav: {
      thesis: "Proposição",
      technology: "Tecnologia",
      ecosystem: "Ecossistema",
      contact: "Contato",
    },
    hero: {
      eyebrow: "Laboratório de pesquisa, prática e tecnologia",
      titleLead: "Sistemas também precisam",
      titleAccent: "aprender.",
      subtitle:
        "O Instituto Casa do Urso desenvolve sistemas de inclusão neuroadaptativos. Integrando pesquisa, prática, tecnologia e laboratório, criamos frameworks capazes de sustentar diferentes formas de existência humana.",
      ctaPrimary: "Explorar o ecossistema",
      ctaSecondary: "Conhecer o CADU",
      scrollHint: "Scroll para explorar",
    },
    thesis: {
      eyebrow: "Proposição",
      title: "Inclusão como desenho de sistema — não como exceção.",
      description:
        "Quatro tensões que orientam nossa pesquisa, nossos protocolos e a infraestrutura que construímos com parceiros.",
      cards: [
        {
          title: "Inclusão não deveria depender apenas da adaptação individual.",
          description:
            "Quando só a pessoa muda e o ambiente permanece rígido, a inclusão vira fardo privado — e se esgota.",
        },
        {
          title: "Estruturas incapazes de aprender produzem exclusão.",
          description:
            "Escolas, redes, políticas e territórios que não atualizam linguagem, protocolos e ritos repetem o mesmo atrito — e quem paga o preço é quem já está em minoria numérica.",
        },
        {
          title: "Diferença humana não deveria ser tratada como exceção.",
          description:
            "Neurodivergência não é desvio a corrigir: é variação humana que o sistema precisa incorporar na sua lógica — não na margem.",
        },
        {
          title: "Inclusão é infraestrutura. Não é boa vontade esporádica.",
          description:
            "Afeto sem estrutura esgota. Estrutura sem afeto exclui. O desenho institucional precisa unir vínculo, método e continuidade.",
        },
      ],
    },
    technology: {
      eyebrow: "2 · Tecnologia",
      title: "Infraestrutura neuroadaptativa longitudinal.",
      description: "Inclusão falha quando memória se perde.",
      problem:
        "Sistemas fragmentados obrigam pessoas neurodivergentes a recomeçar constantemente — em cada escola, em cada convênio, em cada cidade.",
      actorsTitle: "Atores no mesmo desenho",
      actors: [
        { label: "Pessoa neurodivergente", role: "Centro — não exceção" },
        { label: "Família", role: "Continuidade cotidiana" },
        { label: "Escola", role: "Ambiente que aprende" },
        { label: "Saúde", role: "Redes e protocolos" },
        { label: "Assistência", role: "Proteção social" },
        { label: "Pesquisa", role: "Evidência situada" },
        { label: "Tecnologia", role: "Memória e escala" },
        { label: "Dados", role: "Contexto longitudinal" },
        { label: "Território", role: "Implementação" },
        { label: "Políticas públicas", role: "Desenho, não slogan" },
      ],
    },
    cadu: {
      label: "CADU",
      title: "Tecnologia não substitui vínculo.",
      titleAccent: "Mas pode impedir que trajetórias desapareçam.",
      description:
        "O CADU organiza continuidade entre pessoas, instituições e territórios — dados com contexto, planos rastreáveis, comunicação entre atores e acompanhamento longitudinal.",
      tagline:
        "Inteligência institucional: interoperabilidade sem perder humanidade. Infraestrutura operacional da inclusão — não dashboard de startup.",
      features: [
        {
          title: "Dados com contexto",
          description: "Registros situados: quem, onde, quando — sem reduzir pessoa a métrica vazia.",
        },
        {
          title: "Continuidade entre ambientes",
          description: "Escola, saúde, território e família no mesmo fio, com governança clara.",
        },
        {
          title: "Planos e protocolos",
          description: "O combinado fica rastreável — método, não improviso.",
        },
        {
          title: "Comunicação entre atores",
          description: "Fluxos que reduzem atrito sem diluir responsabilidade.",
        },
        {
          title: "Acompanhamento longitudinal",
          description: "Memória viva da inclusão — marcos, riscos e respostas ao longo dos anos.",
        },
        {
          title: "Tomada de decisão",
          description: "Leituras para quem precisa escalar com equidade, não com volume.",
        },
      ],
      cta: "Ver CADU no ecossistema",
      ctaHref: "#ecosystem",
    },
    portfolio: {
      eyebrow: "Ecossistema",
      title: "Partes de um mesmo desenho — não iniciativas soltas.",
      description:
        "Pesquisa, laboratório, formação e políticas públicas no mesmo circuito — cada frente alimenta as outras.",
      cards: [
        {
          number: "01",
          tag: "Pesquisa aplicada",
          title: "prática vira conhecimento",
          description:
            "Documentamos e estruturamos o que acontece em campo — para que vire referência, não anedota.",
        },
        {
          number: "02",
          tag: "Laboratório de inclusão",
          title: "teste em contexto real",
          description:
            "Protocolos e experiências ensaiados onde a inclusão acontece — ou falha — todos os dias.",
        },
        {
          number: "03",
          tag: "Infância e adolescência",
          title: "janelas decisivas",
          description:
            "Fases em que ambientes podem abrir trajetórias — ou interrompê-las por negligência estrutural.",
        },
        {
          number: "04",
          tag: "Formação",
          title: "cultura institucional",
          description:
            "Profissionais e instituições preparados para operar inclusão com método — não com discurso.",
        },
        {
          number: "05",
          tag: "Políticas públicas",
          title: "modelos replicáveis",
          description:
            "Traduzimos evidência e prática em referências para sistemas maiores — com rigor, sem populismo.",
        },
        {
          number: "06",
          tag: "Cultura neuroadaptativa",
          title: "ambientes que aprendem",
          description:
            "Da intenção ao protocolo: papéis, fluxos e indicadores que sustentam diferença.",
        },
      ],
    },
    impact: {
      eyebrow: "Impacto sistêmico",
      title: "Impacto é quando a inclusão deixa de depender de exceções.",
      description: "Medimos o que sustenta infraestrutura — não slogans.",
      footnote: "Números em atualização até auditoria.",
      stats: [
        { value: "12", label: "Frameworks em desenvolvimento", note: "placeholder" },
        { value: "840", label: "Pessoas alcançadas", note: "placeholder" },
        { value: "260", label: "Famílias envolvidas", note: "placeholder" },
        { value: "410", label: "Profissionais formados", note: "placeholder" },
        { value: "28", label: "Instituições parceiras", note: "placeholder" },
        { value: "9", label: "Territórios conectados", note: "placeholder" },
      ],
    },
    policyLab: {
      eyebrow: "Policy lab",
      title: "Pesquisa, formação e políticas públicas",
      description:
        "Pesquisamos, testamos, documentamos e traduzimos práticas de inclusão em modelos replicáveis — com fronteira clara entre evidência e retórica.",
      subtitle:
        "Conhecimento acadêmico, experiência cotidiana, tecnologia e decisão pública no mesmo circuito: think tank operativo, não portal institucional.",
    },
    closingCta: {
      location: "Instituto Casa do Urso · São Paulo",
      title: "Sistemas inclusivos não nascem prontos.",
      titleAccent: "Eles precisam ser desenhados.",
      description:
        "Convidamos pesquisadores, escolas, governos, organizações e parceiros a construir conosco novas infraestruturas de inclusão neuroadaptativa.",
      ctaPrimary: "Falar com o Instituto",
      ctaSecondary: "Explorar pesquisa",
    },
    contact: {
      name: "Nome",
      institution: "Instituição",
      email: "E-mail",
      subject: "Assunto",
      message: "Como podemos ajudar?",
      send: "Enviar mensagem",
    },
  },
  en: {
    nav: {
      thesis: "Thesis",
      technology: "Technology",
      ecosystem: "Ecosystem",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Research, practice and technology laboratory",
      titleLead: "Systems also need",
      titleAccent: "to learn.",
      subtitle:
        "Instituto Casa do Urso develops neuroadaptive inclusion systems. By integrating research, practice, technology and laboratory work, we build frameworks able to sustain different forms of human existence.",
      ctaPrimary: "Explore the ecosystem",
      ctaSecondary: "Meet CADU",
      scrollHint: "Scroll to explore",
    },
    thesis: {
      eyebrow: "Thesis",
      title: "Inclusion as systems design — not as exception.",
      description:
        "Four tensions that guide our research, protocols and the infrastructure we build with partners.",
      cards: [
        {
          title: "Inclusion should not depend only on individual adaptation.",
          description:
            "When only the person changes and the environment stays rigid, inclusion becomes a private burden — and burns out.",
        },
        {
          title: "Structures that cannot learn produce exclusion.",
          description:
            "Schools, networks, policies and territories that do not update language, protocols and rituals repeat the same friction — and those already in numerical minority pay the price.",
        },
        {
          title: "Human difference should not be treated as exception.",
          description:
            "Neurodivergence is not deviation to correct: it is human variation the system must incorporate into its logic — not at the margins.",
        },
        {
          title: "Inclusion is infrastructure. Not sporadic goodwill.",
          description:
            "Affect without structure exhausts. Structure without affect excludes. Institutional design must unite bond, method and continuity.",
        },
      ],
    },
    technology: {
      eyebrow: "2 · Technology",
      title: "Longitudinal neuroadaptive infrastructure.",
      description: "Inclusion fails when memory is lost.",
      problem:
        "Fragmented systems force neurodivergent people to start over constantly — at every school, every health plan, every city.",
      actorsTitle: "Actors in the same design",
      actors: [
        { label: "Neurodivergent person", role: "Center — not exception" },
        { label: "Family", role: "Everyday continuity" },
        { label: "School", role: "Environment that learns" },
        { label: "Health", role: "Networks and protocols" },
        { label: "Social care", role: "Social protection" },
        { label: "Research", role: "Situated evidence" },
        { label: "Technology", role: "Memory and scale" },
        { label: "Data", role: "Longitudinal context" },
        { label: "Territory", role: "Implementation" },
        { label: "Public policy", role: "Design, not slogan" },
      ],
    },
    cadu: {
      label: "CADU",
      title: "Technology does not replace bond.",
      titleAccent: "But it can keep trajectories from disappearing.",
      description:
        "CADU organizes continuity between people, institutions and territories — contextual data, traceable plans, communication between actors and longitudinal follow-up.",
      tagline:
        "Institutional intelligence: interoperability without losing humanity. Operational infrastructure for inclusion — not a startup dashboard.",
      features: [
        {
          title: "Contextual data",
          description: "Situated records: who, where, when — without reducing people to empty metrics.",
        },
        {
          title: "Continuity across environments",
          description: "School, health, territory and family on the same thread, with clear governance.",
        },
        {
          title: "Plans and protocols",
          description: "What is agreed stays traceable — method, not improvisation.",
        },
        {
          title: "Communication between actors",
          description: "Flows that reduce friction without diluting responsibility.",
        },
        {
          title: "Longitudinal follow-up",
          description: "Living memory of inclusion — milestones, risks and responses over the years.",
        },
        {
          title: "Decision-making",
          description: "Readings for those who need to scale with equity, not volume.",
        },
      ],
      cta: "See CADU in the ecosystem",
      ctaHref: "#ecosystem",
    },
    portfolio: {
      eyebrow: "Ecosystem",
      title: "Parts of one design — not loose initiatives.",
      description: "Research, laboratory, training and public policy in the same circuit — each front feeds the others.",
      cards: [
        {
          number: "01",
          tag: "Applied research",
          title: "practice becomes knowledge",
          description: "We document and structure what happens in the field — so it becomes reference, not anecdote.",
        },
        {
          number: "02",
          tag: "Inclusion laboratory",
          title: "tested in real context",
          description: "Protocols and experiences tried where inclusion happens — or fails — every day.",
        },
        {
          number: "03",
          tag: "Childhood and adolescence",
          title: "decisive windows",
          description: "Phases when environments can open trajectories — or interrupt them through structural neglect.",
        },
        {
          number: "04",
          tag: "Training",
          title: "institutional culture",
          description: "Professionals and institutions prepared to operate inclusion with method — not rhetoric.",
        },
        {
          number: "05",
          tag: "Public policy",
          title: "replicable models",
          description: "We translate evidence and practice into references for larger systems — with rigor, without populism.",
        },
        {
          number: "06",
          tag: "Neuroadaptive culture",
          title: "environments that learn",
          description: "From intention to protocol: roles, flows and indicators that sustain difference.",
        },
      ],
    },
    impact: {
      eyebrow: "Systemic impact",
      title: "Impact is when inclusion stops depending on exceptions.",
      description: "We measure what sustains infrastructure — not slogans.",
      footnote: "Figures being updated until audit.",
      stats: [
        { value: "12", label: "Frameworks in development", note: "placeholder" },
        { value: "840", label: "People reached", note: "placeholder" },
        { value: "260", label: "Families involved", note: "placeholder" },
        { value: "410", label: "Professionals trained", note: "placeholder" },
        { value: "28", label: "Partner institutions", note: "placeholder" },
        { value: "9", label: "Territories connected", note: "placeholder" },
      ],
    },
    policyLab: {
      eyebrow: "Policy lab",
      title: "Research, training and public policy",
      description:
        "We research, test, document and translate inclusion practices into replicable models — with a clear boundary between evidence and rhetoric.",
      subtitle:
        "Academic knowledge, everyday experience, technology and public decision in the same circuit: an operational think tank, not an institutional portal.",
    },
    closingCta: {
      location: "Instituto Casa do Urso · São Paulo",
      title: "Inclusive systems are not born ready.",
      titleAccent: "They need to be designed.",
      description:
        "We invite researchers, schools, governments, organizations and partners to build new neuroadaptive inclusion infrastructures with us.",
      ctaPrimary: "Talk to the Institute",
      ctaSecondary: "Explore research",
    },
    contact: {
      name: "Name",
      institution: "Institution",
      email: "Email",
      subject: "Subject",
      message: "How can we help?",
      send: "Send message",
    },
  },
};
