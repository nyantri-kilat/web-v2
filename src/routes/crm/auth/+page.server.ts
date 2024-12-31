import { redirect } from '@sveltejs/kit';

export const load = async (event) => {
    const { cookies } = event;
    const adminSessionId = cookies.get("adminSessionId")?.toString() || ""
    if(adminSessionId){
        return redirect(303, '/crm/dashboard')
    }
}

export const actions = {
    login: async ( event ) => {
        const { request, cookies } = event;
        const data = await request.formData();
        const password = data.get('token');
        if(password === "adminGanteng12345"){
            cookies.set('adminSessionId', "adminSessionId", {
                path: '/crm'
            })
            return redirect(303, '/crm/dashboard')
        }
    },
    logout: async ( event ) => {
        const { cookies } = event;
        cookies.delete('adminSessionId', {
            path: '/crm'
        })
        return redirect(303, '/crm/auth')
    }
}