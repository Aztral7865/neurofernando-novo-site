// Formação acadêmica e experiência profissional (fatos do site anterior, reorganizados por data).

export type Marco = {
  /** Ano do marco, quando o site anterior informa. */
  year?: string;
  title: string;
  institution?: string;
  detail?: string;
  href?: string;
  hrefLabel?: string;
};

/** Formação, em ordem cronológica. */
export const formacao: Marco[] = [
  {
    year: '2015',
    title: 'Medicina',
    institution: 'Universidade do Extremo Sul Catarinense (UNESC)',
    detail: 'Criciúma/SC',
  },
  {
    year: '2019',
    title: 'Pós-graduação em Neurologia Vascular',
    institution: 'Hospital Moinhos de Vento',
    detail: 'Porto Alegre/RS',
  },
  {
    year: '2020',
    title: 'Residência Médica em Neurologia',
    institution: 'Hospital Moinhos de Vento',
    detail: 'Porto Alegre/RS',
  },
  {
    year: '2023',
    title: 'Pós-graduação em Dor',
    institution: 'Hospital Israelita Albert Einstein',
    detail: 'São Paulo/SP',
  },
  {
    year: '2025',
    title: 'Pós-graduação em Ultrassonografia em Neurologia',
    institution: 'CETRUS',
    detail: 'São Paulo/SP',
  },
];

/** Título sem data no site anterior. */
export const membro = 'Membro da Academia Brasileira de Neurologia';

/** Experiência profissional. */
export const experiencia: Marco[] = [
  {
    title: 'Diretor Técnico e Sócio Fundador da Aura Neurologia',
    detail: 'Criciúma/SC',
    href: 'https://www.auraneurologia.com/',
    hrefLabel: 'Visitar o site da clínica',
  },
  {
    title: 'Médico Efetivo e Coordenador da Unidade do AVC do Hospital São José',
    detail: 'Criciúma/SC',
  },
  {
    year: 'desde 2020',
    title: 'Médico Preceptor de Residência Médica no Hospital São José',
    detail: 'Criciúma/SC',
  },
  {
    year: 'desde 2021',
    title: 'Médico com atuação judicial em Perícias Médicas',
    detail: 'Como assistente técnico e perito judicial.',
  },
  {
    title: 'Experiência em uso de toxina botulínica',
    detail: 'Para tratamento de patologias neurológicas e reabilitação.',
  },
];
