// As 15 áreas de atuação do site anterior, com os mesmos textos, agrupadas para leitura.

export type Area = {
  id: string;
  title: string;
  description: string;
  /** Conteúdo do próprio Dr. Fernando sobre o tema (artigo no site ou entrevista). */
  related?: { label: string; href: string; external?: boolean };
};

const artigo = (id: string) => ({ label: 'Ler o artigo', href: `#artigo-${id}` });
const entrevista = (href: string) => ({ label: 'Ver a entrevista', href, external: true });

/** Condições e doenças que o Dr. Fernando trata. */
export const condicoes: Area[] = [
  {
    id: 'cefaleias',
    title: 'Dores de cabeça e enxaquecas',
    description:
      'Diagnóstico e tratamento de dores de cabeça crônicas e enxaquecas, com foco em qualidade de vida.',
    related: artigo('cefaleias-enxaquecas'),
  },
  {
    id: 'avc',
    title: 'Acidente vascular cerebral (AVC)',
    description: 'Prevenção, diagnóstico precoce e reabilitação pós-AVC para minimizar sequelas.',
    related: artigo('prevencao-avc'),
  },
  {
    id: 'dores-cronicas',
    title: 'Dores crônicas',
    description:
      'Diagnóstico e tratamento de condições de dor persistente, buscando alívio e melhoria na qualidade de vida.',
    related: entrevista('https://www.youtube.com/watch?v=iAMt9MHotck'),
  },
  {
    id: 'neurodegenerativas',
    title: 'Doenças neurodegenerativas',
    description:
      'Manejo de Alzheimer, Parkinson e outras doenças degenerativas, visando retardar a progressão.',
    related: artigo('doenca-alzheimer'),
  },
  {
    id: 'epilepsia',
    title: 'Epilepsia e convulsões',
    description: 'Diagnóstico preciso e plano de tratamento para controle de crises epilépticas.',
    related: artigo('epilepsia-mitos-verdades'),
  },
  {
    id: 'sono',
    title: 'Distúrbios do sono',
    description:
      'Avaliação e tratamento de insônia, apneia do sono e outros transtornos que afetam o descanso.',
    related: artigo('insonia-problema-sono'),
  },
  {
    id: 'pernas-inquietas',
    title: 'Síndrome de perna inquieta',
    description:
      'Manejo dos sintomas e causas da Síndrome de Perna Inquieta para um sono mais tranquilo e conforto diário.',
    related: entrevista('https://www.youtube.com/watch?v=hhSDiO88od4'),
  },
  {
    id: 'neuropatias',
    title: 'Neuropatias periféricas',
    description:
      'Diagnóstico e tratamento de condições que afetam os nervos fora do cérebro e da medula espinhal.',
    related: artigo('neuropatias-perifericas'),
  },
  {
    id: 'esclerose-multipla',
    title: 'Esclerose múltipla',
    description:
      'Manejo e acompanhamento de pacientes com Esclerose Múltipla, buscando estabilizar a doença.',
  },
  {
    id: 'tdah',
    title: 'Transtorno do déficit de atenção com hiperatividade',
    description:
      'Avaliação e planos de tratamento para o Transtorno do Déficit de Atenção com Hiperatividade em adultos.',
  },
];

/** Exames e procedimentos realizados. */
export const procedimentos: Area[] = [
  {
    id: 'doppler',
    title: 'Doppler transcraniano',
    description:
      'Exames especializados para avaliação do fluxo sanguíneo cerebral e outras estruturas neurológicas.',
  },
  {
    id: 'carotidas',
    title: 'Carótidas e vertebrais',
    description:
      'Ultrassonografia de artérias carótidas e vertebrais para investigação de doença aterosclerótica.',
  },
  {
    id: 'ultrassom',
    title: 'Ultrassom em neurologia',
    description:
      'Avaliação ultrassonográfica de nervos periféricos e intracraniana através de ultrassom.',
  },
  {
    id: 'toxina',
    title: 'Toxina botulínica terapêutica',
    description:
      'Uso da toxina botulínica para tratamento de enxaqueca crônica, espasticidade e outras condições.',
    related: entrevista('https://www.youtube.com/watch?v=5R7RCIg7eyU'),
  },
  {
    id: 'procedimentos-dor',
    title: 'Procedimentos invasivos em dor',
    description:
      'Realização de procedimentos minimamente invasivos para o controle e alívio de dores crônicas severas.',
  },
];
