import { redirect } from '@sveltejs/kit'

export const load = async (event) => {
    const slug = event.params.slug
    try {
        const request = await fetch(`https://cdn.contentful.com/spaces/5oq77dxq7dlu/entries?content_type=pages&fields.slug=${slug}&access_token=-Ina06gEQUicZbUV2O9fAmVFdXrvXqK-PBIxhPNL-Is`)
        const contentfulRequest = await request.json();
        return {
            contentfulDataEntries: contentfulRequest
        }
    } catch (error) {
        return redirect(302, '/')
    }
}