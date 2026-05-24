import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { IconAutonomia, IconComunicacao, IconEmocional, IconSocial } from "@/components/brand/BrandIcons";
import { ArrowDown, Network } from "lucide-react";
import { institutoCopy, type SiteLang } from "./content";
import { useParallax, useRevealOnScroll } from "./motion";
import { cn } from "@/lib/utils";
import iconesJuntos from "@/assets/brand/icones-juntos.svg";
import institutoLogo from "@/assets/brand/logo.svg";
import escolaGlow from "@/assets/brand/icon-escola-glow.png";
import ursoBg from "@/assets/brand/urso-bg.png";
import casaBg from "@/assets/brand/casa-bg.png";
import coracaoBg from "@/assets/brand/coracao-bg.png";
import { FloatingIcon, FloatingIconGroup } from "./FloatingIcon";

function Reveal({ children, className, delayMs = 0 }: { children: React.ReactNode; className?: string; delayMs?: number }) {
  const { ref, visible } = useRevealOnScroll();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(16px)",
        transition: `transform 620ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms, opacity 620ms ease ${delayMs}ms`,
      }}
    >
      {children}
    </div>
  );
}

function GlassCard({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Card>) {
  return (
    <Card className={cn("liquid-glass-card bg-transparent shadow-none", className)} {...props}>
      <span aria-hidden="true" className="liquid-glass-core" />
      {children}
    </Card>
  );
}

function SectionBlock({
  id,
  eyebrow,
  title,
  description,
  muted,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  muted?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("py-20 md:py-28 scroll-mt-20", muted && "bg-muted/35")}>
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="max-w-3xl mb-10">
          <p className="font-display text-xs uppercase tracking-[0.14em] text-sky font-semibold mb-3">{eyebrow}</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-navy mb-4">{title}</h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{description}</p>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export function InstitutoHomepage() {
  const [lang, setLang] = useState<SiteLang>("pt-BR");
  const copy = useMemo(() => institutoCopy[lang], [lang]);
  const parallaxY = useParallax(0.06);

  return (
    <div className="min-h-screen bg-background overflow-x-clip relative instituto-glow-bg">
      <FloatingIconGroup className="z-0">
        <FloatingIcon
          icon={<IconAutonomia />}
          toneClassName="text-sunshine/30"
          sizeClassName="w-14 h-14 md:w-20 md:h-20"
          speed="slow"
          className="top-28 left-[4%]"
        />
        <FloatingIcon
          icon={<IconEmocional />}
          toneClassName="text-coral/30"
          sizeClassName="w-16 h-16 md:w-24 md:h-24"
          speed="slower"
          className="top-[18%] right-[7%]"
        />
        <FloatingIcon
          icon={<IconComunicacao />}
          toneClassName="text-sky/28"
          sizeClassName="w-12 h-12 md:w-16 md:h-16"
          speed="slow"
          className="top-[36%] left-[10%]"
        />
        <FloatingIcon
          icon={<IconSocial />}
          toneClassName="text-[#CD995B]/30"
          sizeClassName="w-16 h-16 md:w-24 md:h-24"
          speed="slower"
          className="top-[54%] right-[12%]"
        />
        <FloatingIcon
          icon={<IconAutonomia />}
          toneClassName="text-sunshine/24"
          sizeClassName="w-12 h-12 md:w-16 md:h-16"
          speed="slower"
          className="bottom-[28%] left-[7%]"
        />
        <FloatingIcon
          icon={<IconComunicacao />}
          toneClassName="text-sky/24"
          sizeClassName="w-14 h-14 md:w-20 md:h-20"
          speed="slow"
          className="bottom-[8%] right-[6%]"
        />

        <img
          src={escolaGlow}
          alt=""
          aria-hidden="true"
          className="absolute top-[7%] right-[-12%] w-[24rem] md:w-[34rem] lg:w-[40rem] opacity-55 animate-float-delayed pointer-events-none select-none"
        />
        <img
          src={ursoBg}
          alt=""
          aria-hidden="true"
          className="absolute top-[1%] md:top-[2%] right-[-14%] md:right-[-10%] lg:right-[-8%] w-[13rem] md:w-[19rem] lg:w-[26rem] opacity-34 md:opacity-40 animate-float pointer-events-none select-none"
        />
        <img
          src={casaBg}
          alt=""
          aria-hidden="true"
          className="absolute bottom-[8%] left-[2%] w-[10rem] md:w-[14rem] lg:w-[18rem] opacity-75 animate-float-delayed pointer-events-none select-none"
        />
        <img
          src={coracaoBg}
          alt=""
          aria-hidden="true"
          className="absolute bottom-[6%] right-[2%] w-[11rem] md:w-[15rem] lg:w-[19rem] opacity-75 animate-float pointer-events-none select-none"
        />
      </FloatingIconGroup>

      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2">
            <span className="text-[#CD995B]">
              <IconSocial className="w-6 h-6" />
            </span>
            <img src={institutoLogo} alt="Instituto Casa do Urso" className="h-8 w-auto" />
          </div>

          <div className="hidden md:flex items-center gap-5 text-sm">
            <a href="#thesis" className="text-muted-foreground hover:text-navy transition-colors">
              {copy.nav.thesis}
            </a>
            <a href="#technology" className="text-muted-foreground hover:text-navy transition-colors">
              {copy.nav.technology}
            </a>
            <a href="#ecosystem" className="text-muted-foreground hover:text-navy transition-colors">
              {copy.nav.ecosystem}
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-navy transition-colors">
              {copy.nav.contact}
            </a>
          </div>

          <div className="inline-flex rounded-full border border-border p-1 bg-card">
            <button
              type="button"
              onClick={() => setLang("pt-BR")}
              className={cn(
                "px-3 py-1 text-xs rounded-full transition-colors font-display",
                lang === "pt-BR" ? "bg-navy text-white" : "text-muted-foreground hover:text-navy",
              )}
              aria-pressed={lang === "pt-BR"}
            >
              PT-BR
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={cn(
                "px-3 py-1 text-xs rounded-full transition-colors font-display",
                lang === "en" ? "bg-navy text-white" : "text-muted-foreground hover:text-navy",
              )}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden pt-10 pb-16 md:pt-12 md:pb-20">
          <div
            className="absolute inset-0 instituto-hero-glow opacity-65"
            style={{ transform: `translateY(${parallaxY * 0.5}px)` }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-background/72" aria-hidden="true" />

          <Reveal className="relative z-10 max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="relative z-10 max-w-2xl lg:col-span-7">
                <Badge className="mb-6 bg-card border border-border text-navy rounded-full px-4 py-1.5">
                  {copy.hero.eyebrow}
                </Badge>
                <h1 className="font-display font-semibold text-4xl md:text-6xl lg:text-7xl text-navy leading-[0.95] tracking-tight mb-6">
                  {copy.hero.titleLead}{" "}
                  <span className="italic font-medium text-navy/90">{copy.hero.titleAccent}</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-8">
                  {copy.hero.subtitle}
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  <Button variant="navy" size="lg" asChild>
                    <a href="#ecosystem">{copy.hero.ctaPrimary}</a>
                  </Button>
                  <Button variant="outline-sky" size="lg" asChild>
                    <a href="#technology">{copy.hero.ctaSecondary}</a>
                  </Button>
                </div>
                <a
                  href="#thesis"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-navy transition-colors"
                >
                  <ArrowDown className="w-4 h-4" aria-hidden="true" />
                  {copy.hero.scrollHint}
                </a>
              </div>
              <div aria-hidden="true" className="hidden lg:flex lg:col-span-5 justify-end pointer-events-none">
                <img
                  src={iconesJuntos}
                  alt=""
                  className="w-full max-w-[420px] xl:max-w-[500px] h-auto object-contain opacity-95"
                />
              </div>
            </div>
          </Reveal>
        </section>

        <SectionBlock id="thesis" eyebrow={copy.thesis.eyebrow} title={copy.thesis.title} description={copy.thesis.description}>
          <div className="grid md:grid-cols-2 gap-5">
            {copy.thesis.cards.map((card, i) => (
              <Reveal key={card.title} delayMs={i * 70}>
                <GlassCard className="h-full">
                  <CardHeader>
                    <CardTitle className="text-lg leading-snug">{card.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{card.description}</CardDescription>
                  </CardHeader>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          id="technology"
          muted
          eyebrow={copy.technology.eyebrow}
          title={copy.technology.title}
          description={copy.technology.description}
        >
          <Reveal className="mb-8">
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed max-w-3xl">{copy.technology.problem}</p>
          </Reveal>

          <Reveal className="mb-4">
            <p className="font-display text-sm font-semibold text-navy uppercase tracking-wide">{copy.technology.actorsTitle}</p>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-14">
            {copy.technology.actors.map((actor, i) => (
              <Reveal key={actor.label} delayMs={i * 40}>
                <div className="rounded-xl border border-border bg-card/80 px-3 py-3 h-full">
                  <p className="text-xs font-display font-semibold text-navy leading-tight mb-1">{actor.label}</p>
                  <p className="text-[11px] text-muted-foreground leading-snug">{actor.role}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delayMs={80}>
            <GlassCard>
              <CardHeader>
                <Badge className="w-fit bg-card text-navy border border-border">{copy.cadu.label}</Badge>
                <CardTitle className="text-2xl md:text-3xl leading-tight">
                  {copy.cadu.title}{" "}
                  <span className="block text-navy/85 font-medium mt-1">{copy.cadu.titleAccent}</span>
                </CardTitle>
                <CardDescription className="text-base text-foreground leading-relaxed">{copy.cadu.description}</CardDescription>
                <p className="text-sm text-muted-foreground pt-2 leading-relaxed">{copy.cadu.tagline}</p>
              </CardHeader>
              <CardContent className="pt-0 pb-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  {copy.cadu.features.map((feature) => (
                    <div key={feature.title} className="rounded-lg border border-border/80 bg-background/60 p-4">
                      <p className="font-display font-semibold text-sm text-navy mb-1">{feature.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline-sky" asChild>
                  <a href={copy.cadu.ctaHref}>{copy.cadu.cta}</a>
                </Button>
              </CardContent>
            </GlassCard>
          </Reveal>
        </SectionBlock>

        <SectionBlock
          id="ecosystem"
          eyebrow={copy.portfolio.eyebrow}
          title={copy.portfolio.title}
          description={copy.portfolio.description}
        >
          <div className="grid md:grid-cols-2 gap-5">
            {copy.portfolio.cards.map((card, i) => (
              <Reveal key={card.number} delayMs={i * 60}>
                <GlassCard className="h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <span className="font-display text-2xl font-black text-sky/80">{card.number}</span>
                      <Badge variant="secondary" className="shrink-0 text-[10px] uppercase tracking-wide">
                        {card.tag}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl leading-snug">
                      <span className="text-muted-foreground font-medium">{card.tag}</span>{" "}
                      {card.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">{card.description}</CardDescription>
                  </CardHeader>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock id="impact" muted eyebrow={copy.impact.eyebrow} title={copy.impact.title} description={copy.impact.description}>
          <p className="text-sm text-muted-foreground mb-6 -mt-4">{copy.impact.footnote}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {copy.impact.stats.map((stat, i) => (
              <Reveal key={stat.label} delayMs={i * 50}>
                <GlassCard>
                  <CardContent className="pt-6">
                    <p className="font-display font-black text-4xl text-navy">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-2 leading-snug">{stat.label}</p>
                  </CardContent>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock
          id="policy-lab"
          eyebrow={copy.policyLab.eyebrow}
          title={copy.policyLab.title}
          description={copy.policyLab.description}
        >
          <Reveal>
            <GlassCard>
              <CardContent className="pt-6 pb-6 flex gap-4 items-start">
                <Network className="w-8 h-8 text-sky shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-base text-muted-foreground leading-relaxed">{copy.policyLab.subtitle}</p>
              </CardContent>
            </GlassCard>
          </Reveal>
        </SectionBlock>

        <section id="closing" className="py-20 md:py-28 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6">
            <Reveal>
              <Card className="bg-navy border-navy-light text-white overflow-hidden">
                <CardContent className="pt-10 pb-10">
                  <p className="text-xs uppercase tracking-[0.14em] text-white/60 mb-4">{copy.closingCta.location}</p>
                  <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight mb-3">
                    {copy.closingCta.title}{" "}
                    <span className="italic font-medium text-white/90">{copy.closingCta.titleAccent}</span>
                  </h2>
                  <p className="text-white/75 max-w-2xl leading-relaxed mb-8">{copy.closingCta.description}</p>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="sky" asChild>
                      <a href="#contact">{copy.closingCta.ctaPrimary}</a>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white hover:text-navy"
                      asChild
                    >
                      <a href="#ecosystem">{copy.closingCta.ctaSecondary}</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        </section>

        <SectionBlock
          id="contact"
          muted
          eyebrow={lang === "pt-BR" ? "Contato" : "Contact"}
          title={lang === "pt-BR" ? "Fale com o Instituto." : "Talk to the Institute."}
          description={
            lang === "pt-BR"
              ? "Compartilhe oportunidades, dúvidas técnicas ou propostas de parceria. Encaminhamos para o time adequado."
              : "Share opportunities, technical questions or partnership proposals. We route requests to the right team."
          }
        >
          <Reveal>
            <GlassCard>
              <CardContent className="pt-6">
                <form className="grid md:grid-cols-2 gap-4" aria-label={lang === "pt-BR" ? "Formulário de contato" : "Contact form"}>
                  <Input placeholder={copy.contact.name} aria-label={copy.contact.name} />
                  <Input placeholder={copy.contact.institution} aria-label={copy.contact.institution} />
                  <Input placeholder={copy.contact.email} aria-label={copy.contact.email} />
                  <Input placeholder={copy.contact.subject} aria-label={copy.contact.subject} />
                  <div className="md:col-span-2">
                    <Textarea placeholder={copy.contact.message} aria-label={copy.contact.message} className="min-h-32" />
                  </div>
                  <div className="md:col-span-2 flex justify-end">
                    <Button variant="navy" size="lg">
                      {copy.contact.send}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </GlassCard>
          </Reveal>
        </SectionBlock>
      </main>
    </div>
  );
}
