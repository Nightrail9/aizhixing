import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const common = z.object({
  title: z.string().min(2),
  description: z.string().min(10),
  publishedAt: z.coerce.date(),
  updatedAt: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  cover: z.string(),
  coverAlt: z.string(),
  draft: z.boolean().default(false),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: common.extend({
    category: z.enum(['AI 思考', '技术解析', '学习方法', '开发实践', '工具推荐']),
    featured: z.boolean().default(false),
    views: z.number().int().nonnegative().optional(),
  }),
});

const courses = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/courses' }),
  schema: common.extend({
    level: z.enum(['入门', '进阶']),
    category: z.enum(['基础开发', '模型原理', 'Prompt 工程', 'RAG', 'Agent 应用', '工程部署']),
    featured: z.boolean().default(false),
  }),
});

const lessons = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/lessons' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    course: z.string(),
    module: z.string(),
    moduleTitle: z.string(),
    order: z.number().int().positive(),
    duration: z.number().int().positive(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const resourceBase = common.extend({
  featured: z.boolean().default(false),
  url: z.url(),
});

const resources = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/resources' }),
  schema: z.discriminatedUnion('kind', [
    resourceBase.extend({
      kind: z.literal('paper'),
      authors: z.array(z.string()).min(1),
      venue: z.string(),
    }),
    resourceBase.extend({
      kind: z.literal('project'),
      owner: z.string(),
      repository: z.string(),
      language: z.string(),
      license: z.string(),
      stars: z.string().optional(),
    }),
    resourceBase.extend({
      kind: z.literal('tool'),
      developer: z.string(),
      platforms: z.array(z.string()),
      pricing: z.string(),
    }),
  ]),
});

export const collections = { articles, courses, lessons, resources };
