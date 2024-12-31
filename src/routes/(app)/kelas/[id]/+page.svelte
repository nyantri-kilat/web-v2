<script>
	let { data } = $props();
	const test = {
		id: 1,
		title: 'His mother had always taught him',
		body: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
		tags: ['history', 'american', 'crime'],
		reactions: { likes: 192, dislikes: 25 },
		views: 305,
		userId: 121
	};
</script>

<nav class="border-b-2 border-base-200 flex justify-between items-center lg:pb-[16px] lg:mb-[16px] pb-[12px] mb-[12px]">
    <a href="/kelas" aria-label="Go back home" class="lg:w-[20%] w-[10%] hover:text-gray-600">
        <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
        </svg>
    </a>
    <h2 class="lg:w-[60%] w-[80%] text-center font-semibold lg:text-base text-sm">
        Kelas {data.post.title}
    </h2>
    <div class="lg:w-[20%] pb-[16px]"></div>
</nav>
<section class="p-6 space-y-6 rounded-lg shadow-lg">
	<div class="text-center">
		<h1 class="text-3xl font-bold text-gray-700">{data.post.title}</h1>
		<p class="text-sm text-gray-500">Post ID: {data.post.id} | User ID: {data.post.userId}</p>
	</div>

	<div class="space-y-4">
		<p class="text-lg text-gray-700">{data.post.body}</p>
	</div>

	<div>
		<h2 class="text-xl font-semibold">Tags</h2>
		<div class="flex flex-wrap gap-2 mt-2">
			{#each data.post.tags as tag}
				<span class="badge badge-primary">{tag}</span>
			{/each}
		</div>
	</div>

	<div class="flex justify-between items-center mt-4">
		<div class="space-x-4">
			<span class="badge badge-success">👍 {data.post.reactions.likes}</span>
			<span class="badge badge-error">👎 {data.post.reactions.dislikes}</span>
		</div>
		<p class="text-gray-500">Views: {data.post.views}</p>
	</div>
</section>