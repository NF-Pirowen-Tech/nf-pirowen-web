import { defineCollection, z } from "astro:content";

const players = defineCollection({
    schema: z.object({
        name: z.string(),
        age: z.number(),
        position: z.enum(["PORTEROS", "DEFENSAS", "CENTROCAMPISTAS", "DELANTEROS"]),
        dorsal: z.string(),
        goodLeg: z.enum(["LEFT", "RIGHT"]),
        img: z.string(), 
    })
})

export const collections = { players }