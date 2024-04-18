import { defineCollection, z } from 'astro:content'
const founderMessageCollection = defineCollection({})
export const collections = {
    type: 'content', // v2.5.0 and later
    schema: z.object({
        name: z.string(),
        title: z.string(),
    }),
    foundMessage: founderMessageCollection,
}
