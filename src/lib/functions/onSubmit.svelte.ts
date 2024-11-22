import { applyAction } from '$app/forms';
import { invalidate } from '$app/navigation';
import type { SubmitFunction } from '@sveltejs/kit';
import Toastify from 'toastify-js';

export const onSubmit: SubmitFunction = async (event) => {
	return async ({ result, update }) => {
		if (result.type === 'success') {
			const status = await result.data?.status;
			const message = await result.data?.message;
			if (status == 200) {
				Toastify({
					text: message,
					duration: 3000,
					close: true,
					gravity: 'top', // `top` or `bottom`
					position: 'right', // `left`, `center` or `right`
					stopOnFocus: true, // Prevents dismissing of toast on hover
					style: {
						background: 'linear-gradient(to right, #00b09b, #96c93d)'
					},
					onClick: function () {} // Callback after click
				}).showToast();
				invalidate('/');
			} else {
				Toastify({
					text: "Something went wrong",
					duration: 3000,
					close: true,
					gravity: 'top', // `top` or `bottom`
					position: 'right', // `left`, `center` or `right`
					stopOnFocus: true, // Prevents dismissing of toast on hover
					style: {
						background: 'linear-gradient(to right, #ff0000, #ff7f00)'
					},
					onClick: function () {} // Callback after click
				}).showToast();
				update({ reset: true });
			}
		}
		await applyAction(result);
	};
};
