<script lang="ts">
	import { goto } from "$app/navigation";
    let { contentfulDataEntries, assets } = $props()
</script>

<div class="grid grid-cols-2 md:grid-cols-3 gap-5 md:pt-5">
    {#each contentfulDataEntries as content}
        {#key content.sys.id}
            <button onclick={() => goto(`/blog/${content.fields.slug}`)}>
                <div class="card card-compact bg-[#FDF2E1] cursor-pointer hover:-translate-y-3 duration-300 ease-in-out shadow-lg">
                    <figure>
                        <img src={`https:${assets?.[content?.fields?.banner?.sys.id]?.fields?.file?.url}`} alt="Banner" class="object-cover"/>
                    </figure>
                    <div class="card-body text-start">
                        <p class="line-clamp-3 text-sm font-medium">{ content?.fields?.title }</p>
                    </div>
                </div>
            </button> 
        {/key}
    {/each}
  </div>