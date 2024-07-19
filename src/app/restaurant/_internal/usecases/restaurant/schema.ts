import { z } from "zod"

export const RestaurantSchema = z.object({
    id: z.string(),
    name: z.string(),
    description: z.string().nullable(),
    pictureId: z.string().nullable(),
    city: z.string().nullable(),
    rating: z.number()
})

export const RestaurantResponseSchema = z.object({
    error: z.boolean(),
    message: z.string().nullable(),
    count: z.number(),
    restaurants: z.array(RestaurantSchema)
})
