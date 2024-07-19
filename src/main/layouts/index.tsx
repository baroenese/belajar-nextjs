export default function MyLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container w-full max-w-2xl mx-auto bg-gray-50 min-h-screen rounded-xl p-12">
            {children}
        </div>
    )
}