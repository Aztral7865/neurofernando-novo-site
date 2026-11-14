// As 17 participações na mídia do site anterior: mesmos títulos, descrições e links.
import type { ImageMetadata } from 'astro';
import m01 from '../assets/media/midia-01.jpg';
import m02 from '../assets/media/midia-02.jpg';
import m03 from '../assets/media/midia-03.jpg';
import m04 from '../assets/media/midia-04.jpg';
import m05 from '../assets/media/midia-05.jpg';
import m06 from '../assets/media/midia-06.jpg';
import m07 from '../assets/media/midia-07.jpg';
import m08 from '../assets/media/midia-08.jpg';
import m09 from '../assets/media/midia-09.jpg';
import m10 from '../assets/media/midia-10.jpg';
import m11 from '../assets/media/midia-11.jpg';
import m12 from '../assets/media/midia-12.jpg';
import m13 from '../assets/media/midia-13.jpg';
import m14 from '../assets/media/midia-14.jpg';
import m15 from '../assets/media/midia-15.jpg';
import m16 from '../assets/media/midia-16.jpg';
import m17 from '../assets/media/midia-17.jpg';

export type MidiaItem = {
  title: string;
  description: string;
  href: string;
  image: ImageMetadata;
  /** Onde o conteúdo abre (lido do próprio link). */
  source: string;
  /** Data lida do link, quando existe. */
  date?: string;
  kind: 'video' | 'texto';
};

/** Entrevistas em vídeo, rádio e TV. */
export const entrevistas: MidiaItem[] = [
  {
    title: 'PodCast Horário de Visita',
    description: 'Acesse o podcast completo.',
    href: 'https://www.youtube.com/watch?v=15zqgORSo40',
    image: m01,
    source: 'YouTube',
    kind: 'video',
  },
  {
    title: 'Entrevista no Programa Ver Mais Saúde',
    description: 'Neurologista fala sobre tipos, causas e prevenção ao AVC.',
    href: 'https://ndmais.com.br/saude/ver-mais-saude-neurologista-fala-sobre-tipos-causas-e-prevencao-ao-acidente-vascular-cerebral/',
    image: m02,
    source: 'ndmais.com.br',
    kind: 'video',
  },
  {
    title: 'Pergunte ao Doutor - Fibromialgia',
    description: 'Saiba mais sobre fibromialgia.',
    href: 'https://www.youtube.com/watch?v=iAMt9MHotck',
    image: m03,
    source: 'YouTube',
    kind: 'video',
  },
  {
    title: 'Pergunte ao Doutor - Desmaios',
    description: 'Quais as causas e soluções?',
    href: 'https://www.youtube.com/watch?v=5BW8z9Af5fY',
    image: m04,
    source: 'YouTube',
    kind: 'video',
  },
  {
    title: 'Pergunte ao Doutor - AVC em jovens',
    description: 'O aumento de AVC entre jovens.',
    href: 'https://www.youtube.com/watch?v=rfptyDjKB9s',
    image: m05,
    source: 'YouTube',
    kind: 'video',
  },
  {
    title: 'Pergunte ao Doutor - Afasia',
    description: 'A doença que retirou Bruce Willis de cena.',
    href: 'https://www.youtube.com/watch?v=lhiTFyAgRBM',
    image: m06,
    source: 'YouTube',
    kind: 'video',
  },
  {
    title: 'Conversa com o Especialista - Desmaios',
    description: 'Como ocorrem? São perigosos? Como evitar?',
    href: 'https://www.youtube.com/watch?v=K7qR8UhQhZ0',
    image: m07,
    source: 'YouTube',
    kind: 'video',
  },
  {
    title: 'Pergunte ao Doutor - Botox na neurologia',
    description: 'O uso do Botox na neurologia.',
    href: 'https://www.youtube.com/watch?v=5R7RCIg7eyU',
    image: m08,
    source: 'YouTube',
    kind: 'video',
  },
  {
    title: 'Ver Mais Criciúma - Síndrome das Pernas Inquietas',
    description: 'Saiba mais sobre essa síndrome.',
    href: 'https://www.youtube.com/watch?v=hhSDiO88od4',
    image: m09,
    source: 'YouTube',
    kind: 'video',
  },
  {
    title: 'Rádio Cidade em Dia - Doença de Menière',
    description: 'Programa Cotidiano - Doença de Menière.',
    href: 'https://www.youtube.com/watch?v=BHQ-3d1muDQ',
    image: m10,
    source: 'YouTube',
    kind: 'video',
  },
];

/** Matérias e reconhecimentos da Unidade de AVC do Hospital São José. */
export const imprensa: MidiaItem[] = [
  {
    title: 'Reconhecimento HSJ - G1 (Outubro/2024)',
    description:
      'Dia Mundial de Combate ao AVC, HSJosé reforça o alerta sobre a importância da prevenção.',
    href: 'https://g1.globo.com/sc/santa-catarina/especial-publicitario/hospital-sao-jose/noticia/2024/10/29/dia-mundial-de-combate-ao-avc-hsjose-reforca-o-alerta-sobre-a-importancia-da-prevencao-a-doenca.ghtml',
    image: m12,
    source: 'g1.globo.com',
    date: 'Outubro de 2024',
    kind: 'texto',
  },
  {
    title: 'Reconhecimento HSJ - G1 (Agosto/2024)',
    description:
      'Hospital São José recebe novamente o certificado Diamond que reforça a excelência.',
    href: 'https://g1.globo.com/sc/santa-catarina/especial-publicitario/hospital-sao-jose/noticia/2024/08/01/hospital-sao-jose-recebe-novamente-o-certificado-diamond-que-reforca-a-excelencia-nos-servicos-relacionados-ao-avc.ghtml',
    image: m14,
    source: 'g1.globo.com',
    date: 'Agosto de 2024',
    kind: 'texto',
  },
  {
    title: 'Reconhecimento HSJ - G1 (Julho/2024)',
    description:
      'Hospital São José recebe o certificado Diamond que reforça a excelência nos serviços.',
    href: 'https://g1.globo.com/sc/santa-catarina/especial-publicitario/hospital-sao-jose/noticia/2024/07/01/hospital-sao-jose-recebe-o-certificado-diamond-que-reforca-a-excelencia-nos-servicos-prestados-no-atendimento-ao-avc.ghtml',
    image: m13,
    source: 'g1.globo.com',
    date: 'Julho de 2024',
    kind: 'texto',
  },
  {
    title: 'Reconhecimento HSJ - G1 (Platinum)',
    description:
      'Hospital São José recebe reconhecimento internacional em status Platinum pelo protocolo de AVC.',
    href: 'https://g1.globo.com/sc/santa-catarina/especial-publicitario/hospital-sao-jose/noticia/2023/11/23/hospital-sao-jose-recebe-reconhecimento-internacional-em-status-platinum-pelo-protocolo-de-avc.ghtml',
    image: m17,
    source: 'g1.globo.com',
    date: 'Novembro de 2023',
    kind: 'texto',
  },
  {
    title: 'Reconhecimento HSJ - Site (1)',
    description: 'HSJ recebe o Selo Diamante nos serviços prestados no atendimento ao AVC.',
    href: 'https://www.hsjose.com.br/noticias/ver/hsjose-recebe-o-selo-diamante-nos-servic-prestados-no-atendimento-ao-avc-1165',
    image: m15,
    source: 'hsjose.com.br',
    kind: 'texto',
  },
  {
    title: 'Reconhecimento HSJ - Site (2)',
    description: 'HSJ Hospital é mais uma vez reconhecido pelo atendimento e tratamento AVC.',
    href: 'https://www.hsjose.com.br/noticias/ver/hsjose-hospital-e-mais-uma-vez-reconhecido-pelo-atendimento-tratamento-avc-1055',
    image: m16,
    source: 'hsjose.com.br',
    kind: 'texto',
  },
  {
    title: 'É possível prevenir um AVC?',
    description: 'Especialista alerta sobre 10 fatores de risco da doença.',
    href: 'https://maissul.com.br/2022/03/28/e-possivel-prevenir-um-avc-especialista-alerta-sobre-10-fatores-de-risco-da-doenca/',
    image: m11,
    source: 'maissul.com.br',
    date: 'Março de 2022',
    kind: 'texto',
  },
];
