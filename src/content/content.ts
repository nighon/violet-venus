import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  posts,
};
