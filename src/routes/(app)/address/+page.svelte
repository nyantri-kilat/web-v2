<script lang="ts">
	import Seo from '$lib/components/SEO.svelte';
	import { useSWR } from "sswr";

	// Fetcher function can be defined in the options
    const options = {
        fetcher: async (url: string) => {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);
            return await response.json();
        },
        dedupingInterval: 1000 * 60 * 60 * 24,
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
        focusThrottleInterval: 1000 * 60 * 60 * 24,
    };

	const { data: addrDatas, error, isLoading } = useSWR("/address/my-address", options);
</script>

<Seo title="Nyantri Kilat | Alamat" />
<section>
	<section class="flex justify-between items-center mb-5">
		<h1 class="text-lg">List Alamat:</h1>
		<a href="/address/add" class="btn btn-sm btn-primary">Tambah Alamat</a>
	</section>
	<section class="flex flex-col gap-4">
		{#if $isLoading}
			<span class="loading loading-spinner loading-md"></span>
		{:else if $error}
			<p>Error: {$error.message}</p>
		{:else}
			{#if $addrDatas.data.length === 0}
				<p class="text-center pt-52">Belum ada alamat</p>
			{/if}
			{#each $addrDatas.data as address}
				<section class="card w-full border border-gray-300 bg-white hover:shadow-xl hover:bg-gray-200 ease-in-out duration-300">
					<div class="card-body relative">
						<section class="flex gap-x-3">
							<section class="flex flex-col gap-2">
								<section class="flex gap-x-3">
									<h2 class="card-title">{address.label}</h2>
									{#if address.is_default}
										<div class="bg-green-500 text-white px-4 py-1 rounded-full">
											<h2 class="card-title text-sm">Utama</h2>
										</div>
									{/if}
								</section>
								<p class="font-semibold">{address.destination_contact_name}</p>
								<p><span class="font-medium">{`${address.note ? '('+address.note+')'+"," : ""}`}</span> {`${address.address ? address.address+"," : ""}`} {address.administrative_division_level_3_name}, {address.administrative_division_level_2_name}, {address.administrative_division_level_1_name}, {address.postal_code}</p>
								<p>+{address.destination_contact_phone}</p>
							</section>
						</section>
					</div>
				</section>
			{/each}
		{/if}
	</section>
</section>
