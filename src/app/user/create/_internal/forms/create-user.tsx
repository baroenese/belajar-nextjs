"use client"

import { SubmitHandler, useForm } from "react-hook-form"
import { type UserInput, UserInputSchema } from "../usecases/user"
import { zodResolver } from "@hookform/resolvers/zod"

interface FormCreateUserProps {
    onSubmit: SubmitHandler<UserInput>
    isLoading: boolean
}

export default function FormCreateUser({ onSubmit, isLoading }: FormCreateUserProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserInput>({
        resolver: zodResolver(UserInputSchema),
    })

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex flex-col gap-2 mb-2">
                    <label>Full Name</label>
                    <input
                        {...register("full_name")}
                        id="full_name"
                        placeholder="Full Name"
                        className="p-2 rounded-lg border shadow"
                    />
                    {errors.full_name?.message ? (
                        <p className="text-xs text-red-500">{errors.full_name.message}</p>
                    ) : null}
                </div>
                <div className="flex flex-col gap-2 mb-3">
                    <label>Email</label>
                    <input
                        {...register("email")}
                        id="email"
                        placeholder="Email"
                        className="p-2 rounded-lg border shadow"
                    />
                    {errors.email?.message ? (
                        <p className="text-xs text-red-500">{errors.email.message}</p>
                    ) : null}
                </div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-blue-500 text-white rounded-xl px-4 py-2"
                >Simpan{isLoading ? "....": null}</button>
            </form>
        </>
    )
}