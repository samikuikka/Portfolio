import { z } from 'zod';

export const projectSchema = z.object({
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
});

export type ProjectType = z.infer<typeof projectSchema>;