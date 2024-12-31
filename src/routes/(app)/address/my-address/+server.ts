import { useApiUrl } from '$lib/functions/useApiUrl';
import { json } from '@sveltejs/kit';

export const GET = async (event) => {
    const { cookies } = event;
    const apiUrl = useApiUrl()
    const sessionId = cookies.get("sessionId")?.toString() || ""
    try {
        const res = await fetch(`${apiUrl}/address`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${sessionId}`
            }
        })
        const { data } = await res.json()
        return json({
            status: 200,
            data: data
        })
    } catch (error) {
        return json({
            status: 500,
            message: "Terjadi kesalahan"
        })
    }
}