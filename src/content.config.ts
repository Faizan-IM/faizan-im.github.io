import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    headline: z.string(), // one-line, public
    summary: z.string(), // 2–4 sentences, public
    status: z.string(), // exact label from the brief
    category: z.enum(['production', 'active', 'research-tool', 'planned']),
    role: z.string(),
    stack: z.array(z.string()),
    highlights: z.array(z.string()),
    metrics: z.array(z.string()), // e.g. "98% phone fill rate"
    pullQuote: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number(), // display order, lower = first
    links: z
      .object({
        // usually empty — project repos are private
        repo: z.string().url().optional(),
        demo: z.string().url().optional(),
        video: z.string().url().optional(),
      })
      .optional(),
  }),
});

export const collections = { projects };
