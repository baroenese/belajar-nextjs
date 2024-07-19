import useSWRMutation from "swr/mutation"
import { createUserMutation } from "../usecases/user"

const ENPOINT_API = "/api/user"

export const useCreateUser = () => {
    const { data, trigger, error, isMutating, ...rest } = useSWRMutation(ENPOINT_API, createUserMutation)

    return {
        data,
        trigger,
        error,
        isMutating,
        ...rest
    }
}