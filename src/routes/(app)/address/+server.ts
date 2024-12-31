import { json } from "@sveltejs/kit";

export async function GET(event) {
    const { cookies, url } = event;
    const sessionId = cookies.get("sessionId")?.toString() || ""
    const alamat = url.searchParams.get("keyword")?.toString() || ""
    const request = await fetch(`http://localhost:3001/address/search?keyword=${alamat}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${sessionId}`
        }
    })
    const data = await request.json()
	return json(data)
}
