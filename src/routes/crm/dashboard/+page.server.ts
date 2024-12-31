import { redirect } from '@sveltejs/kit'

export const load = async (event) => {
    const adminSessionId = event.cookies.get("adminSessionId")?.toString() || ""
    if(!adminSessionId){
        return redirect(303, '/crm/auth')
    }
}