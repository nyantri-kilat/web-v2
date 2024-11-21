import { redirect, type Handle } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

const handleUnauthenticated: Handle = async ({ event, resolve }) => {
    const routeId = event.route.id
    const cookies = event.cookies.get('loginState');
    const session = event.cookies.get('sessionId');
    if (!session && routeId?.startsWith('/(app)')) {
        return redirect(302, '/');
    }
    if (cookies) {
        const phone_number_verified = JSON.parse(cookies);
        if (phone_number_verified.expired < new Date().getTime()) {
            console.log('phone number is expired');
            event.cookies.delete('loginState', {path: '/'});
        }
    }
	return resolve(event)
};

const handleAuthenticated: Handle = async ({ event, resolve }) => {
	const routeId = event.route.id
    const session = event.cookies.get('sessionId');
    if (session && routeId?.startsWith('/(app)')) {
        return resolve(event);
    }
    return resolve(event)
};

export const handle = sequence(handleUnauthenticated, handleAuthenticated)