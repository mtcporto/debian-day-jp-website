# Migração para Next.js

As dez URLs públicas foram preservadas: `/`, `/sobre`, `/agenda`, `/ingressos`, `/local`, `/faq`, `/patrocinadores`, `/voluntarios`, `/cidade` e `/hospedagem`. Todas são geradas estaticamente pelo App Router. Cada página fornece título, descrição, canonical, Open Graph e Twitter; sitemap, robots, imagem social e 404 são nativos. A página inicial fornece Event JSON-LD e o FAQ fornece FAQPage JSON-LD.

O conteúdo é histórico, da edição de 2025. Datas, preços, nomes, contatos e destinos externos foram preservados. O mapa continua sendo o placeholder original; não há integração geográfica ativa. Os três links Sympla continuam sendo os destinos existentes, sem validar pagamento ou comprar ingressos.

Somente o cabeçalho com navegação ativa e menu móvel usa `use client`. Conteúdo, cards, ingressos, rodapé e FAQ são server components. O FAQ usa details/summary e funciona sem JavaScript. Os ingressos são links HTML. Não há banco, autenticação ou API nesta aplicação.

Não existia projeto Vercel correspondente no inventário da conta. Foi criado um projeto conectado ao mesmo repositório, com Next.js e Node 24. Publicação exclusivamente pela integração GitHub/Vercel: push para preview e merge para produção.

A referência anterior é uma execução local da SPA, pois não havia deployment público de referência. Para executá-la foi necessário adaptar apenas a configuração PostCSS/Tailwind ao toolchain compatível emprestado de outro checkout; as páginas originais não foram modificadas. Não representa medição de produção anterior nem comprova instalação limpa da SPA original.

A comparação das dez páginas em 1440 e 390 pixels preservou o texto de todas as páginas e as dimensões de 19 das 20 capturas. A agenda móvel passou de 405 para 390 pixels de largura, corrigindo overflow pela quebra dos rótulos. O ícone do placeholder do mapa agora é SVG renderizado no servidor. O botão branco da página inicial já tinha texto branco na referência; esta migração não redesenhou a identidade visual.

Validação: instalação limpa npm ci, build com geração estática, typecheck, lint, quatro testes de segurança existentes, doze testes HTTP e quatro testes de navegador. Testes cobrem carga direta das dez URLs, SEO no HTML inicial, 404, sitemap, menu móvel, FAQ, parâmetros na URL, refresh, links de ingresso e conteúdo sem JavaScript. As medições de performance são amostras laboratoriais únicas, sem throttling; não equivalem a Lighthouse, INP ou dados de campo.
