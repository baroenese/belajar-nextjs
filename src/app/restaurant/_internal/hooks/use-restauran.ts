import useSWR from "swr"
import { listRestaurantFetcher } from "../usecases/restaurant"

const API_KEY = "https://restaurant-api.dicoding.dev/list"

export const useRestauran = () => {
    const { data, isLoading, ...rest } = useSWR(API_KEY, listRestaurantFetcher)

    return {
        data,
        isLoading,
        _res: data?.restaurants,
        ...rest,
    }
}