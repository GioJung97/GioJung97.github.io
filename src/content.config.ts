import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      title_ko: z.string().optional(),
      summary: z.string(),
      summary_ko: z.string().optional(),
      kind: z.string(),
      kind_ko: z.string().optional(),
      year: z.number().optional(),
      cover: image(),
      order: z.number(),
      pinned: z.boolean().default(false),
      tags: z.array(z.string()).default([]),
    }),
});

export const collections = { projects };
