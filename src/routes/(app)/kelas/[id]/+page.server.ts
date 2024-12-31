export const load = async ({params}) => {
    const req = await fetch(`https://dummyjson.com/posts/${params.id}`)
    const data = await req.json()
    return {
        post: data
    }
}