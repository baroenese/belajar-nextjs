import { z } from "zod";

export const UserInputSchema = z.object({
    full_name: z.string().min(3, { message: "Minimal 3 karakter bosku" }),
    email: z.string()
        .min(3, { message: "minimal 3 bosku" })
        .email({ message: "Lu harus masukin email dong" })
})