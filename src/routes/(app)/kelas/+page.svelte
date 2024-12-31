<script lang="ts">
	import { goto } from "$app/navigation";
	import Seo from "$lib/components/SEO.svelte";
	import { onMount } from "svelte";

	interface Post {
		id: number;
		title: string;
		body: string;
	}
	interface Kelas {
		posts: Post[];
		total: number;
	}

	let data_kelas: Kelas | null = $state(null);
	let limit = $state(3);
	let skip = $state(0);
	let total = $state(0);
	let errorMessage = $state("");

	const getData = async (limit: number = 3, skip: number = 0) => {
		try {
			const response = await fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`);
			if (!response.ok) throw new Error(`Failed to fetch: ${response.statusText}`);
			return await response.json();
		} catch (error) {
			console.error(error);
			errorMessage = "Failed to fetch data. Please try again later.";
			return null;
		}
	};

	onMount(async () => {
		const result = await getData(limit, skip);
		if (result) {
			data_kelas = result;
			total = result.total;
		}
	});

	const updateData = async (newSkip: number) => {
		const result = await getData(limit, newSkip);
		if (result) {
			data_kelas = result;
			total = result.total;
			skip = newSkip;
		}
	};
</script>

<section class="flex flex-col gap-y-4">
	<Seo title="Kelas" />
	<h1 class="text-xl font-medium">Pilihan Kelas yang Tersedia</h1>
	{#if errorMessage}
		<p class="text-red-500">{errorMessage}</p>
	{/if}
	<section class="flex flex-col gap-y-4">
		{#if data_kelas}
			{#each data_kelas.posts as kelas}
				<div class="card w-full bg-base-100 shadow-xl">
					<div class="card-body">
						<section>
							<h2 class="card-title line-clamp-1">{kelas.title}</h2>
							<p class="card-text line-clamp-2">{kelas.body}</p>
						</section>
						<div class="card-actions justify-end">
							<a href="/kelas/{kelas.id}" class="btn btn-primary">Lihat Kelas</a>
						</div>
					</div>
				</div>
			{/each}
			<div class="flex justify-between mt-4">
				<button onclick={() => updateData(skip - limit)} class="btn btn-primary" disabled={skip === 0}>
					Previous
				</button>
				<button onclick={() => updateData(skip + limit)} class="btn btn-primary" disabled={skip + limit >= total}>
					Next
				</button>
			</div>
		{:else}
			<p>Loading kelas...</p>
		{/if}
	</section>
</section>
