<script lang="ts">
	import nProgress from 'nprogress';
	import { navigating, page } from '$app/stores';

	import 'nprogress/nprogress.css';
	import 'toastify-js/src/toastify.css';

	nProgress.configure({
		minimum: 0.16,
		showSpinner: false
	});

	$effect(() => {
		if ($navigating) {
			nProgress.start();
		}
		if (!$navigating) {
			nProgress.done();
		}
	});

	import Navbar from '$lib/components/Navbar.svelte';
	import NavbarCrm from '$lib/components/crm/Navbar.svelte';
	import Seo from '$lib/components/SEO.svelte';
	import '../app.css';
	import CompleteProfileModal from '$lib/components/CompleteProfileModal.svelte';
	let { children, data } = $props();
	let routeId = $page.route.id;

	$effect(() => {
		if (data.isNewUser == 'true') {
			// @ts-ignore
			document.getElementById('completeProfileModal')?.showModal();
			// Disable escape key
			document.getElementById('completeProfileModal')?.addEventListener('keydown', (e) => {
				if (e.key === 'Escape') {
					e.preventDefault();
				}
			});
		} else {
			// @ts-ignore
			document.getElementById('completeProfileModal')?.close();
		}
	});
</script>

<Seo />
{#if !routeId?.startsWith('/crm')}
	<section class="mx-auto max-w-screen-md p-5">
		<Navbar number_is_verified={data.phone_number_verified} sessionId={data.sessionId} />
		{#if data.isNewUser == 'true' ? true : false}
			<CompleteProfileModal />
		{/if}
		<section class="w-full">
			{@render children()}
		</section>
	</section>
{:else}
	<section>
		{#if routeId !== '/crm/auth'}
			<NavbarCrm />
		{/if}
		<section class="lg:px-32 lg:py-10">
			{@render children()}
		</section>
	</section>
{/if}
