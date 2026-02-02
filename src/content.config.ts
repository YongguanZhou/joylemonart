import { defineCollection, z } from "astro:content";

const programs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    order: z.number().optional(),
  }),
});

const gallery = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const collections = {
  programs,
  gallery,
};
