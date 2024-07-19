import { SubmitHandler } from "react-hook-form"
import FormCreateUserComponent from "../forms/create-user"
import { UserInput } from "../usecases/user"
import { useCreateUser } from "../hooks/create-user"

export default function FormCreateUser() {
    const { trigger, isMutating: isLoading } = useCreateUser()

    const toSubmit: SubmitHandler<UserInput> = async (data) => {
        console.log(data)
        await trigger(data)
    }

    return (
        <>
            <FormCreateUserComponent
                onSubmit={toSubmit}
                isLoading={isLoading}
            />
        </>
    )
}