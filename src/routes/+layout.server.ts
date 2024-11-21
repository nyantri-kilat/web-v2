import { useApiUrl } from '$lib/functions/useApiUrl.js';
import type { User } from '$lib/types/user.js'; 

export const load = async (event) => {
    event.depends('/')
    const apiUrl = useApiUrl()
    const phone_number_verified = event.cookies.get('loginState')
    const sessionId = event.cookies.get('sessionId') || false
    const request = await fetch(`${apiUrl}/auth/user`, {
        headers: {
            'Authorization': `Bearer ${sessionId}`
        }
    })
    const { data } : { data: User } = await request.json();
    return {
        phone_number_verified,
        sessionId,
        user: data
    }
}