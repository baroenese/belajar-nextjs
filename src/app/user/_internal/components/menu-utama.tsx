import Link from "next/link";

export default function MenuUtama() {
    return (
        <ul>
            <li>
                <Link href="/user/create">Create</Link>
            </li>
            <li>
                <Link href="/user/1234556/edit">Edit</Link>
            </li>
            <li>
                <Link href="/user/1234556/detail">Detail</Link>
            </li>
        </ul>
    )
}