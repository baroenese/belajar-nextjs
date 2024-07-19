import { z } from "zod"
import { UserInputSchema } from "./schema"
import { MutationFetcher } from "swr/mutation"

export type UserInput = z.infer<typeof UserInputSchema>

export {
    UserInputSchema,
}

export const createUserMutation: MutationFetcher<any, string, UserInput> = async (url, { arg }) => {
    const body = arg
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body)
    })
    if (!res.ok) {
        throw new Error("Gagal simpan")
    }
    return await res.json()
}