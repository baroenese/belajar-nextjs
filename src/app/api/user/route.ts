export const POST = async (req: Request) => {
    const body = await req.json()
    return Response.json({
        message: "Berhasil simdapn data",
        body,
    })
}