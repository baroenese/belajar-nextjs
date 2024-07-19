import type { Restaurant } from "../usecases/restaurant"


interface ListItemProps {
    data?: Restaurant[]
}

export default function ListItem({ data: dataList }: ListItemProps) {
    return (
        <ul className="flex flex-col space-y-2">
            {dataList?.map((item) => {
                return (
                    <li className="p-2 rounded-lg bg-gray-100 text-black hover:bg-white text-xs" key={item.id}>{item.name}</li>
                )
            })}
        </ul>
    )
}