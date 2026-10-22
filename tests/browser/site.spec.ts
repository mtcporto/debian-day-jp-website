import {test,expect} from '@playwright/test';
const routes=['/','/sobre','/agenda','/ingressos','/local','/faq','/patrocinadores','/voluntarios','/cidade','/hospedagem'];
test('all routes support direct access, refresh, menu and native FAQ',async({page})=>{
 test.setTimeout(90000);const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 for(const route of routes){const response=await page.goto(route);expect(response?.status()).toBe(200);await expect(page.locator('main h1')).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true)}
 await page.goto('/faq');await page.getByText('Quem pode participar do Debian Day?',{exact:true}).click();await expect(page.getByText(/O evento é aberto para todos!/)).toBeVisible();await page.getByText('Preciso ter conhecimento prévio em Linux?',{exact:true}).click();await expect(page.getByText(/Não é necessário! Teremos conteúdo/)).toBeVisible();await expect(page.locator('details[open]')).toHaveCount(1);
 if((page.viewportSize()?.width||0)<1280){await page.getByRole('button',{name:'Abrir menu',exact:true}).click();await page.locator('#mobile-navigation').getByRole('link',{name:'Agenda',exact:true}).click();await expect(page).toHaveURL(/\/agenda$/)}
 await page.goto('/agenda?ref=migration-check');await page.reload();await expect(page).toHaveURL(/ref=migration-check/);await expect(page.getByRole('heading',{name:'Agenda do Evento',exact:true})).toBeVisible();expect(errors).toEqual([]);
});
test('content, FAQ and ticket targets remain usable without JavaScript',async({browser,baseURL,viewport})=>{
 const context=await browser.newContext({javaScriptEnabled:false,viewport});const page=await context.newPage();await page.goto(baseURL+'/faq');await page.getByText('Quem pode participar do Debian Day?',{exact:true}).click();await expect(page.getByText(/O evento é aberto para todos!/)).toBeVisible();await page.goto(baseURL+'/ingressos');const tickets=page.getByRole('link',{name:'Comprar no Sympla',exact:true});await expect(tickets).toHaveCount(3);await expect(tickets.nth(0)).toHaveAttribute('href','https://sympla.com.br/debian-day-joao-pessoa-2025-inteira');await expect(tickets.nth(0)).toHaveAttribute('target','_blank');await context.close();
});
