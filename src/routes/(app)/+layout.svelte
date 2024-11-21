<script>
    let { children } = $props();
    import Menus from '$lib/components/Menus.svelte';
</script>

<section class="flex flex-col gap-y-10">
    <Menus/>
    {@render children()}
</section>