import { fail } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { useApiUrl } from '$lib/functions/useApiUrl.js';
import type { ContentfulDataEntries } from '$lib/types/contentful.js';

export const load = async (event) => {
	try {
		const request = await fetch(
			`https://cdn.contentful.com/spaces/5oq77dxq7dlu/environments/master/entries`,
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer -Ina06gEQUicZbUV2O9fAmVFdXrvXqK-PBIxhPNL-Is`
				}
			}
		);
		const contentfulRequest = await request.json();
		let assets = {};
		const contentfulDataEntries: ContentfulDataEntries[] = contentfulRequest.items.map((data: any) => {
			return {
				sys: data.sys,
				fields: data.fields
			}
		});
		contentfulRequest.includes.Asset.forEach((asset: any) => {
			// @ts-ignore
			assets[asset.sys.id] = asset
		})
		return {
			contentfulDataEntries,
			assets
		}
	} catch (error) {
		console.error(error);
	}
};

export const actions = {
	login: async (event) => {
		const apiUrl = useApiUrl()
		const data = await event.request.formData();
		const phone_number = data.get('phone_number')?.toString() || '';
		const country_code = data.get('country_code')?.toString() || '';
		if (!phone_number || !country_code) {
			return fail(400, {
				error: 'Invalid phone number'
			});
		}
		// Clean phone number from leading zero
        const phone_number_clean = phone_number.replace(/^0+/, '');
		const full_phone_number = `${country_code}${phone_number_clean}`;

		// TODOS: send otp to phone number
		const newData = {
			phoneNumber: full_phone_number,
		}
		try {
			const request = await fetch(`${apiUrl}/auth/send-otp`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newData),
			})
			if(request.status == 400) {
				throw new Error("Invalid phone number")
			}
			const response = await request.json();
			const message = response.message
			const to_be_verified_number = {
				phone_number: phone_number_clean,
				full_phone_number: full_phone_number,
				expired: new Date().getTime() + 1000 * 60
			};
			event.cookies.set('loginState', JSON.stringify(to_be_verified_number), { path: '/' });
	
			return {
				status: 200,
				message
			}
		} catch (error) {
			return {
				status: 500,
			}
		}
	},
	verify: async (event) => {
		const apiUrl = useApiUrl()
		const loginState = JSON.parse(event.cookies.get('loginState') || "");
		const data = await event.request.formData();
		const otp = data.get('otp')?.toString() || '';
		try {
			const request = await fetch(`${apiUrl}/auth/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					phoneNumber: loginState?.full_phone_number,
					otp: otp,
				}),
			})
			const response = await request.json();
			const { accessToken, isNewUser } = response.data
			const message = response.message
			event.cookies.set('sessionId', accessToken, {path: '/'});
			event.cookies.set('isNewUser', isNewUser.toString(), {path: '/'});
			event.cookies.delete('loginState', {path: "/"})
			return {
				status: 200,
				message
			}
		} catch (error) {
			return {
				status: 500,
			}
		}
	},
	completeProfile: async (event) => {
		const apiUrl = useApiUrl()
		const sessionId = event.cookies.get('sessionId') || false
		const data = await event.request.formData();
		const name = data.get('name')?.toString() || '';
		const birthday = data.get('birthday')?.toString() || '';
		const occupation = data.get('occupation')?.toString() || '';
		try {
			const request = await fetch(`${apiUrl}/auth/complete-profile`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${sessionId}`
				},
				body: JSON.stringify({
					name,
					birthDate: birthday,
					occupation
				}),
			})
			if(request.status === 400 || request.status === 401){
				const response = await request.json();	
				throw new Error(response.message)
			}
			const response = await request.json();
			event.cookies.delete('isNewUser', {path: '/'});
			return {
				status: 200,
				message: response.message
			}
		} catch (error) {
			return {
				status: 500,
				message: error
			}
		}
	}
};
