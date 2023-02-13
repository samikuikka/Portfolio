import { defineCollection, z } from 'astro:content';

const projectCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        describtion: z.string(),
        type: z.string(),
        project: z.string(),
        github: z.string().url(),
        technologies: z.array(
            z.object({
                name: z.string(),
                logo: z.string().optional(),
                noLogo: z.boolean().optional()
            })
        ),
        screenshots: z.array(z.string()),
    }) 
});

export const collections = {
    'project': projectCollection
}