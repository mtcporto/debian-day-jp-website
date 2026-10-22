import type { MetadataRoute } from 'next';
import { pages,siteUrl } from '@/lib/metadata';
export default function sitemap(): MetadataRoute.Sitemap { return Object.keys(pages).map(path=>({url:new URL(path,siteUrl).href})); }
