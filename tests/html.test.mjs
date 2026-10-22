import {test} from 'node:test';import assert from 'node:assert/strict';
const base=process.env.TEST_BASE_URL||'http://127.0.0.1:4113';
const routes={'/':'Debian Day','/sobre':'Sobre o Debian Day','/agenda':'Agenda do Evento','/ingressos':'Ingressos','/local':'Local do Evento','/faq':'Perguntas Frequentes','/patrocinadores':'Patrocinadores','/voluntarios':'Voluntários','/cidade':'João Pessoa','/hospedagem':'Hospedagem'};
for(const [path,text] of Object.entries(routes))test('server HTML and metadata: '+path,async()=>{
 const r=await fetch(new URL(path,base));assert.equal(r.status,200);const html=await r.text();const body=html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi,'');assert.ok(body.includes(text));assert.match(html,/<title>[^<]+<\/title>/);assert.match(html,/property="og:title"/);assert.match(html,/name="description"/);const canonical=html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];assert.ok(canonical);assert.equal(new URL(canonical).pathname,path);assert.equal(new URL(canonical).protocol,'https:');
 if(path==='/faq'){assert.ok(body.includes('O evento é aberto para todos!'));assert.match(html,/"@type":"FAQPage"/);assert.match(body,/<details[^>]*name="debian-faq"/)}
 if(path==='/ingressos')for(const type of ['inteira','meia','social'])assert.ok(body.includes('https://sympla.com.br/debian-day-joao-pessoa-2025-'+type));
});
test('unknown URLs return HTTP 404',async()=>{assert.equal((await fetch(new URL('/no-such-page-migration-check',base))).status,404)});
test('sitemap lists all ten existing URLs, robots points to sitemap',async()=>{
 const r=await fetch(new URL('/sitemap.xml',base));assert.equal(r.status,200);const xml=await r.text();assert.equal((xml.match(/<loc>/g)||[]).length,10);for(const path of Object.keys(routes))assert.ok([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].some(m=>new URL(m[1]).pathname===path));
 const robots=await fetch(new URL('/robots.txt',base));assert.equal(robots.status,200);assert.match(await robots.text(),/Sitemap: https:\/\/.+\/sitemap.xml/);
});
