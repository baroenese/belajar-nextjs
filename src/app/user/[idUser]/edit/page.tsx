export default function Page(props: any) {
    return (
        <div>
            <p>Edit user</p>
            <pre>
                {JSON.stringify(props, undefined, 2)}
            </pre>
        </div>
    )
}