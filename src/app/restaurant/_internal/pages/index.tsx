"use client"

import MyLayout from "@/main/layouts"
import ListItem from "../components/list-item"
import { useRestauran } from "../hooks/use-restauran"

export default function Restaurant() {
    const { _res: dataList, isLoading, error } = useRestauran()

    console.log("error", error)

    if (isLoading) return <p>Loading please</p>

    return (
        <MyLayout>
            <p>Daftart restauramt</p>

            <ListItem data={dataList} />
        </MyLayout>
    )
}