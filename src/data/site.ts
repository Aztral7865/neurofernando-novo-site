// Dados fixos do Dr. Fernando. Todo texto aqui vem do site anterior, sem alterações de conteúdo.

const whatsappNumber = '5548991140848';

export const site = {
  name: 'Dr. Fernando Topanotti Tarabay',
  shortName: 'Dr. Fernando Tarabay',
  role: 'Médico Neurologista',
  crm: 'CRM/SC 22270',
  rqe: 'RQE 18727',
  city: 'Criciúma/SC',
  url: 'https://neurofernando.com.br',

  phoneDisplay: '+55 48 99114-0848',
  phoneHref: 'tel:+5548991140848',
  whatsappNumber,
  whatsappHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    'Olá! Gostaria de agendar uma consulta com o Dr. Fernando Topanotti Tarabay, neurologista.',
  )}`,

  address: {
    clinic: 'Aura Neurologia',
    street: 'Rua Antônio de Lucca, 148, sala 111',
    district: 'Pio Corrêa',
    city: 'Criciúma - SC',
    zip: '88811-503',
    full: 'Rua Antônio de Lucca, 148, sala 111 - Pio Corrêa, Criciúma - SC, 88811-503',
    mapsHref:
      'https://www.google.com/maps/place/Aura+Neurologia/@-28.6755633,-49.3646906,17.86z/data=!4m14!1m7!3m6!1s0x952179ebb1bc9189:0xfbd2407855080365!2sAura+Neurologia!8m2!3d-28.6754005!4d-49.3634904!16s%2Fg%2F11r7w1c0kl!3m5!1s0x952179ebb1bc9189:0xfbd2407855080365!8m2!3d-28.6754005!4d-49.3634904!16s%2Fg%2F11r7w1c0kl?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D',
  },

  auraHref: 'https://www.auraneurologia.com/',
  instagram: {
    handle: '@fernandotopanotti.neuro',
    href: 'https://www.instagram.com/fernandotopanotti.neuro',
  },
  facebook: {
    href: 'https://www.facebook.com/fernando.topanottitarabay?mibextid=ZbWKwL',
  },
} as const;

/** Resumo profissional (texto original do topo do site). */
export const summary =
  'Médico Neurologista, o Dr. Fernando Topanotti Tarabay possui uma sólida formação com pós-graduações em Neurologia Vascular, Ultrassom em Neurologia e Dor. Sua prática é dedicada ao diagnóstico e tratamento das doenças do sistema nervoso, pautada por uma abordagem humanizada e rigorosamente baseada nas mais recentes evidências científicas, visando sempre a excelência no cuidado e a melhoria da qualidade de vida de seus pacientes.';

/** "Sobre mim", em primeira pessoa (texto original, três parágrafos). */
export const about = [
  'Como médico neurologista, minha prática se baseia em uma avaliação aprofundada e completa, compreendendo que o ser humano é um todo e que a saúde vai além do sistema nervoso, integrando essa visão em cada cuidado. Sou o Dr. Fernando Topanotti Tarabay, e minha trajetória profissional é pautada pela contínua busca por aprimoramento e pela oferta de um atendimento de excelência. Possuo pós-graduações em Neurologia Vascular, Ultrassom em Neurologia e Dor, áreas que me permitem oferecer uma abordagem completa e atualizada.',
  'Na minha clínica, a Aura Neurologia, em Criciúma/SC, e no Hospital São José, dedico-me a oferecer um cuidado neurológico de excelência para pacientes acima de 12 anos. Acredito que a medicina vai além do diagnóstico; ela é sobre ouvir, compreender e guiar cada pessoa em sua jornada de saúde com responsabilidade e empatia.',
  'A minha paixão por cuidar da vida e da saúde, que me move na neurologia, é igualmente presente no meu lar. Compartilho essa jornada com minha esposa Vanessa, médica cardiologista, e nossos filhos Miguel e Luísa. Eles são a inspiração diária para buscar um equilíbrio e uma vida plena, e o cuidado com a saúde e a prevenção são valores profundamente enraizados em nosso dia a dia. É com essa mesma paixão por um futuro mais saudável que me dedico a cada paciente, oferecendo um cuidado humano, responsável e personalizado, visando sempre a melhoria da qualidade de vida e a prevenção de doenças, com a atenção e a empatia que cada história merece.',
] as const;
