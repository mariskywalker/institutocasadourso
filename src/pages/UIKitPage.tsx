import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  brandColors,
  radiiScale,
  spacingScale,
  supportColors,
  typographyScale,
} from "@/design-tokens/tokens";
import { ColorTokenCard, KitSection, TokenScaleTable } from "@/components/kit";

const UIKitPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-clip relative instituto-glow-bg">
      <header className="border-b border-border bg-background/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-sky font-semibold">Casa do Urso</p>
            <h1 className="font-display font-bold text-navy text-2xl">Design System UI Kit</h1>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-sky transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao hub
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 space-y-12">
        <KitSection
          title="01. Cores tokenizadas"
          description="Todas as cores do kit partem de tokens CSS e são consumidas por classes Tailwind para manter consistência."
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {brandColors.map((color) => (
              <ColorTokenCard key={color.name} {...color} />
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {supportColors.map((color) => (
              <ColorTokenCard key={color.name} {...color} />
            ))}
          </div>
        </KitSection>

        <KitSection
          title="02. Escalas de tokens"
          description="Escalas base para spacing, tipografia e raio. Essas tabelas são a referência para evolução do sistema."
        >
          <div className="grid lg:grid-cols-3 gap-5">
            <TokenScaleTable title="Spacing" items={spacingScale} />
            <TokenScaleTable title="Tipografia" items={typographyScale} />
            <TokenScaleTable title="Radii" items={radiiScale} />
          </div>
        </KitSection>

        <KitSection
          title="03. Componentes base"
          description="Primitivos do design system para montar qualquer tela de produto com consistência."
        >
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
              <CardDescription>Variantes aprovadas para interações principais e secundárias.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="coral">Coral</Button>
              <Button variant="sky">Sky</Button>
              <Button variant="sunshine">Sunshine</Button>
              <Button variant="mint">Mint</Button>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-5">
            <Card>
              <CardHeader>
                <CardTitle>Form Controls</CardTitle>
                <CardDescription>Campos com feedback visual consistente.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome da crianca</Label>
                  <Input id="nome" placeholder="Digite aqui..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="resumo">Resumo da sessao</Label>
                  <Textarea id="resumo" placeholder="Descreva as observacoes..." />
                </div>
                <div className="flex items-center justify-between rounded-xl border border-border p-3">
                  <Label htmlFor="notify">Notificar familia</Label>
                  <Switch id="notify" defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Status e navegação</CardTitle>
                <CardDescription>Estados de informação com badges e tabs.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-5">
                <div className="flex flex-wrap gap-2">
                  <Badge>Ativo</Badge>
                  <Badge variant="secondary">Em progresso</Badge>
                  <Badge variant="outline">Rascunho</Badge>
                  <Badge variant="destructive">Atenção</Badge>
                </div>

                <Tabs defaultValue="mobile" className="w-full">
                  <TabsList>
                    <TabsTrigger value="mobile">Mobile</TabsTrigger>
                    <TabsTrigger value="desktop">Desktop</TabsTrigger>
                    <TabsTrigger value="email">Email</TabsTrigger>
                  </TabsList>
                  <TabsContent value="mobile" className="text-sm text-muted-foreground">
                    Componentes otimizados para toque e leitura rapida.
                  </TabsContent>
                  <TabsContent value="desktop" className="text-sm text-muted-foreground">
                    Componentes para dashboards e administracao.
                  </TabsContent>
                  <TabsContent value="email" className="text-sm text-muted-foreground">
                    Versao simplificada para comunicacao externa.
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </KitSection>
      </main>
    </div>
  );
};

export default UIKitPage;
