import type { CollectionEntry } from 'astro:content';

export const byDateDesc = <T extends { data: { publishedAt: Date } }>(a: T, b: T) =>
  b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf();

export const publicOnly = <T extends { data: { draft: boolean } }>(entry: T) => !entry.data.draft;

export const articleHref = (entry: CollectionEntry<'articles'>, base: string) =>
  `${base}articles/${entry.id}/`;

export const lessonHref = (entry: CollectionEntry<'lessons'>, base: string) =>
  `${base}tutorials/${entry.data.course}/${entry.data.module}/${entry.id.split('/').at(-1)}/`;

export const resourceHref = (entry: CollectionEntry<'resources'>, base: string) => {
  const segment = entry.data.kind === 'paper' ? 'papers' : entry.data.kind === 'project' ? 'projects' : 'ai-tools';
  return `${base}resources/${segment}/${entry.id}/`;
};

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(date);
