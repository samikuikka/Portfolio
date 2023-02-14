import { defineCollection, z } from 'astro:content';
import { projectSchema } from '../schemas/projectSchame';

const projectCollection = defineCollection({
    schema: projectSchema
});

export const collections = {
    'project': projectCollection
}