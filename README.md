# Debian Day João Pessoa

Site da edição de 2025, construído com Next.js App Router, React, TypeScript e Tailwind CSS. As dez páginas públicas têm HTML gerado no build e metadados próprios.

Requer Node 24 e npm 11.

```sh
npm ci
npm run dev
npm run build
npm run typecheck
npm run lint
npm run test:braces-security
```

Com o servidor de produção ativo em `http://localhost:4113`:

```sh
npm run start -- --port 4113
npm run test:html
npm run test:browser
```

Os testes de navegador usam Microsoft Edge. O endereço dos testes HTTP pode ser definido por `TEST_BASE_URL`. A URL canônica usa `NEXT_PUBLIC_SITE_URL`, o domínio de produção fornecido pela Vercel ou `https://debian-day-jp-website.vercel.app`.

Deploy automático pelo GitHub/Vercel. Consulte [a documentação da migração](docs/migration.md) para arquitetura, compatibilidade e limites da validação.
