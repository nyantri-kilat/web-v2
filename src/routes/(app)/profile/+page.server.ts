import { redirect } from '@sveltejs/kit';

export const load = async () => {
    //
};

export const actions = {
    logout: async (event) => {
        event.cookies.delete('sessionId', {path: '/'});
        return redirect(302, '/');
    }
}