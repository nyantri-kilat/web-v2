<script>
    let { children } = $props();
    import Menus from '$lib/components/Menus.svelte';
</script>

<section class="flex flex-col">
    <Menus/>
    {@render children()}
</section>