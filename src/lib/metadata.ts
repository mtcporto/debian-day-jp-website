import type { Metadata } from 'next';

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL || 'debian-day-jp-website.vercel.app'}`;
export const pages = {
  '/': ['Debian Day João Pessoa 2025', 'Debian Day João Pessoa 2025: 15 e 16 de agosto na UNIESP. Palestras, workshops, installfest e comunidade Debian.'],
  '/sobre': ['Sobre o Debian Day', 'Conheça o evento, a história do Projeto Debian e a comunidade de software livre de João Pessoa.'],
  '/agenda': ['Agenda do Evento', 'Programação do Debian Day João Pessoa 2025, com palestras, workshops, coffee breaks e installfest.'],
  '/ingressos': ['Ingressos', 'Modalidades de ingresso inteira, meia-entrada e social do Debian Day João Pessoa 2025.'],
  '/local': ['Local do Evento', 'Endereço, infraestrutura e orientações para chegar à UNIESP em Cabedelo, Paraíba.'],
  '/faq': ['Perguntas Frequentes', 'Respostas sobre participação, ingressos, certificado, acessibilidade e installfest do Debian Day João Pessoa.'],
  '/patrocinadores': ['Patrocinadores', 'Cotas e oportunidades de patrocínio do Debian Day João Pessoa 2025.'],
  '/voluntarios': ['Voluntários', 'Conheça os voluntários que organizam o Debian Day João Pessoa 2025 e saiba como participar da comunidade.'],
  '/cidade': ['João Pessoa', 'Conheça os atrativos, praias e cultura de João Pessoa durante sua visita ao Debian Day.'],
  '/hospedagem': ['Hospedagem', 'Opções e informações de hospedagem em João Pessoa para participantes do Debian Day 2025.'],
} as const;

export function pageMetadata(path: string): Metadata {
  const [title, description] = pages[path as keyof typeof pages];
  const fullTitle = path === '/' ? title : `${title} | Debian Day João Pessoa 2025`;
  return { title: { absolute: fullTitle }, description, alternates: { canonical: path }, openGraph: { title: fullTitle, description, url: path, siteName: 'Debian Day João Pessoa 2025', type: 'website', locale: 'pt_BR' }, twitter: { card: 'summary_large_image', title: fullTitle, description, site: '@debian' } };
}

export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
