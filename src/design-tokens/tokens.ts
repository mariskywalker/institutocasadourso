export type TokenScaleItem = {
  name: string;
  value: string;
  description?: string;
};

export type ColorToken = {
  name: string;
  cssVar: string;
  hex: string;
  usage: string;
  textColorClass?: string;
  bgClass?: string;
};

export const brandColors: ColorToken[] = [
  { name: "Navy", cssVar: "--navy", hex: "#032E4D", usage: "Cor estrutural da marca", bgClass: "bg-navy" },
  { name: "Coral", cssVar: "--coral", hex: "#F9746E", usage: "Destaques emocionais", bgClass: "bg-coral" },
  { name: "Sky", cssVar: "--sky", hex: "#4099DB", usage: "Ações e comunicação", bgClass: "bg-sky" },
  {
    name: "Sunshine",
    cssVar: "--sunshine",
    hex: "#FCB346",
    usage: "Atenção positiva e energia",
    textColorClass: "text-navy",
    bgClass: "bg-sunshine",
  },
  {
    name: "Mint",
    cssVar: "--mint",
    hex: "#5DC198",
    usage: "Sucesso e progresso",
    textColorClass: "text-navy",
    bgClass: "bg-mint",
  },
  {
    name: "Social",
    cssVar: "--social",
    hex: "#CD995B",
    usage: "Ícone do urso e destaques institucionais",
    textColorClass: "text-navy",
    bgClass: "bg-social/50",
  },
];

export const supportColors: ColorToken[] = [
  { name: "Coral Light", cssVar: "--coral-light", hex: "#FDE3E2", usage: "Fundos de alerta leve", bgClass: "bg-coral-light" },
  { name: "Sky Light", cssVar: "--sky-light", hex: "#D9ECFA", usage: "Fundos de informação", bgClass: "bg-sky-light" },
  {
    name: "Sunshine Light",
    cssVar: "--sunshine-light",
    hex: "#FEE8C2",
    usage: "Fundos de destaque",
    textColorClass: "text-navy",
    bgClass: "bg-sunshine-light",
  },
  { name: "Mint Light", cssVar: "--mint-light", hex: "#DDF3EA", usage: "Fundos positivos", bgClass: "bg-mint-light" },
];

export const spacingScale: TokenScaleItem[] = [
  { name: "2XS", value: "4px", description: "Micro espaçamento" },
  { name: "XS", value: "8px", description: "Spacing interno curto" },
  { name: "SM", value: "12px", description: "Espaço entre elementos próximos" },
  { name: "MD", value: "16px", description: "Spacing base" },
  { name: "LG", value: "24px", description: "Respiro entre blocos" },
  { name: "XL", value: "32px", description: "Seções internas" },
  { name: "2XL", value: "48px", description: "Gap de seção" },
  { name: "3XL", value: "64px", description: "Gap de página" },
];

export const typographyScale: TokenScaleItem[] = [
  { name: "Display XL", value: "64/1.0", description: "Títulos hero" },
  { name: "Display LG", value: "48/1.05", description: "Títulos de página" },
  { name: "Heading", value: "32/1.15", description: "Títulos de seção" },
  { name: "Body", value: "16/1.6", description: "Texto principal" },
  { name: "Body SM", value: "14/1.5", description: "Texto de apoio" },
  { name: "Caption", value: "12/1.4", description: "Legendas e labels" },
];

export const radiiScale: TokenScaleItem[] = [
  { name: "SM", value: "12px" },
  { name: "MD", value: "14px" },
  { name: "LG", value: "16px" },
  { name: "XL", value: "20px" },
  { name: "2XL", value: "24px" },
];

export const brandHex = {
  navy: "#032E4D",
  navyLight: "#356485",
  coral: "#F9746E",
  coralLight: "#FDE3E2",
  coralDark: "#C74E49",
  sky: "#4099DB",
  skyLight: "#D9ECFA",
  skyDark: "#286B9F",
  sunshine: "#FCB346",
  sunshineLight: "#FEE8C2",
  sunshineDark: "#B87718",
  mint: "#5DC198",
  mintDark: "#2F8E6A",
  social: "#CD995B",
  socialDark: "#7A330F",
  neutral: "#999999",
} as const;
