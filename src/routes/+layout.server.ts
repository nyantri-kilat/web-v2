import { env } from '$env/dynamic/private';
import type { User } from '$lib/types/user.js'; 

export const load = async (event) => {
    event.depends('/')
    const phone_number_verified = event.cookies.get('loginState')
    const sessionId = event.cookies.get('sessionId') || false
    const request = await fetch(`${env.API_URL}/auth/user`, {
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