<script lang="ts">
	import { goto } from '$app/navigation';
    let { data } = $props()
    let y: any = $state(0)
    function goTop() {
        document.body.scrollIntoView();
    }
</script>
<svelte:window bind:scrollY={y} />

<section class="pt-5 pb-20 relative">
    {#if y > 200}
        <button class="btn btn-sm btn-accent fixed bottom-5 right-8 opacity-90 text-white" onclick={()=>goTop()} aria-label="Back to top">
            <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v13m0-13 4 4m-4-4-4 4"/>
            </svg>
        </button>
    {/if}
    <button onclick="{()=>goto("/")}" class="btn btn-sm border border-gray-300 btn-outline">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-left" width="24"
          height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
          stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M5 12l14 0"></path>
          <path d="M5 12l4 4"></path>
          <path d="M5 12l4 -4"></path>
        </svg>
        <span>Kembali</span>
    </button>
    <section class="flex gap-x-4">
        <h1 class="text-3xl font-bold max-w-xl my-5 text-amber-700">
            |
        </h1>
        <h1 class="text-3xl font-bold max-w-5xl my-5 text-yellow-600">
            {data.contentfulDataEntries?.items[0]?.fields?.title}
        </h1>
    </section>
    <h2>Diupload pada: {new Date(data.contentfulDataEntries?.items[0]?.sys?.createdAt).toLocaleString('id-ID', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</h2>
    <div class="divider"></div>
    <div>
        <img src={`https:${data.contentfulDataEntries?.includes?.Asset[0]?.fields?.file?.url}`} alt="" class="w-full object-cover shadow-xl rounded-xl">
    </div>
    <section class="mt-5 flex flex-col gap-y-1">
        {#each data.contentfulDataEntries?.items[0]?.fields?.content?.content as item}
            <p class="text-md text-gray-800 indent-7 text-justify">
                {#if item.nodeType === 'paragraph'}
                    {#each item.content as content}
                        <span>
                            { content.value }
                        </span> 
                    {/each}
                {/if}
            </p>
        {/each}
    </section>
</section>
