import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { siteUrl } from '@/lib/metadata';
import '../index.css';

export const metadata: Metadata = { metadataBase: new URL(siteUrl), title: 'Debian Day João Pessoa 2025', authors: [{ name: 'Debian Day João Pessoa' }] };
export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="pt-BR"><head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    {/* eslint-disable-next-line @next/next/no-page-custom-font -- Preserve the original font stylesheet globally in the root layout, not an individual page. */}
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
  </head><body>{children}</body></html>;
}
