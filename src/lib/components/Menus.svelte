<script lang="ts">
	import { goto } from "$app/navigation";
    import { page } from '$app/stores';
    const activeClass = "bg-primary"
    const inActiveClass = "hover:bg-primary"
    const pathname = $derived($page.url.pathname)
    const menus = [
        // { name: 'Beranda', path: '/' },
        { name: 'Kelas', path: '/kelas' }, 
        { name: 'Riwayat', path: '/course' },
        { name: 'Alamat', path: '/address' },
        { name: 'Profil', path: '/profile' },
    ]
</script>

<section class="flex gap-x-3 justify-between mt-5 border-b-2 border-gray-200 px-2 mb-[16px]">
    {#each menus as menu}
        <!-- {#if menu.path === '/'}
            <button class="rounded-t-xl" onclick="{() => goto(menu.path)}">
                {menu.name}
            </button>
        {:else}
            <button class="rounded-t-xl w-32 text-center py-1 duration-500 ease-in-out {pathname.toString()?.startsWith(menu.path) ? activeClass : inActiveClass}" onclick="{() => goto(menu.path)}">
                {menu.name}
            </button>
            {/if} -->
        <button class="rounded-t-xl w-32 text-center py-1 duration-500 ease-in-out {pathname.toString()?.startsWith(menu.path) ? activeClass : inActiveClass}" onclick="{() => goto(menu.path)}">
            {menu.name}
        </button>
    {/each}
</section>