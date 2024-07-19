import { Fetcher } from "swr";
import { RestaurantResponseSchema, RestaurantSchema } from "./schema"
import { z } from "zod";

export type Restaurant = z.infer<typeof RestaurantSchema>

type RestaurantResponse = z.infer<typeof RestaurantResponseSchema>

type KeyMutation = string

export const listRestaurantFetcher: Fetcher<RestaurantResponse, KeyMutation> = async (url) => {
    const res = await fetch(url, {
        method: "GET",
        cache: "no-store",
    })

    if (!res.ok) {
        throw new Error("Data tidak ditemukan")
    }

    try {
        const validate = RestaurantResponseSchema.parse(await res.json())
        return validate
    } catch (_error) {}

    throw new Error("Data tidak ditemukan")
}