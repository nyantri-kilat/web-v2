<script lang="ts">
	import nProgress from 'nprogress'
	import { navigating } from '$app/stores';

	import 'nprogress/nprogress.css';
	import "toastify-js/src/toastify.css"

	nProgress.configure({
		minimum: 0.16,
		showSpinner: false,
	});

	$effect(()=>{
		if ($navigating) {
			nProgress.start();
		}
		if (!$navigating) {
			nProgress.done();
		}
	})

	import Navbar from '$lib/components/Navbar.svelte';
	import Seo from '$lib/components/SEO.svelte';
	import '../app.css';
	let { children, data } = $props();
</script>

<Seo />
<section class="mx-auto max-w-screen-md p-5">
	<Navbar number_is_verified={data.phone_number_verified} sessionId={data.sessionId} isNewUser={data.isNewUser}/>
	<section class="w-full">
		{@render children()}
	</section>
</section>
