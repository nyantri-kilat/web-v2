import { fail } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const load = async (event) => {
	// const loginState = JSON.parse(event.cookies.get('loginState') || "");
};

export const actions = {
	login: async (event) => {
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
		const request = await fetch(`${env.API_URL}/auth/send-otp`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newData),
		})
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
	},
	verify: async (event) => {
		const loginState = JSON.parse(event.cookies.get('loginState') || "");
		const data = await event.request.formData();
		const otp = data.get('otp')?.toString() || '';
		const request = await fetch(`${env.API_URL}/auth/login`, {
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
		const { accessToken } = response.data
		const message = response.message
		event.cookies.set('sessionId', accessToken, {path: '/'});
		event.cookies.delete('loginState', {path: "/"})
		return {
			status: 200,
			message
		}
	}
};
