import { redirect } from '@sveltejs/kit';

export const load = async ({cookies}) => {
    try {
        const sessionId = cookies.get('sessionId');
        if (sessionId) {
            return {
                sessionId
            };
        }
    } catch (error) {
        console.log(error)
    }
};

export const actions = {
    logout: async (event) => {
        event.cookies.delete('sessionId', {path: '/'});
        return redirect(302, '/');
    }
}