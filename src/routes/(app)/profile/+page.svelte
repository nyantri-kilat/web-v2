<script>
    import Seo from "$lib/components/SEO.svelte";
    let { data } = $props();
    let { user } = data;
</script>

<Seo title="Nyantri Kilat | Profile" />
<section class="flex flex-col gap-y-5">
    <label for="id" class="flex flex-col gap-y-2">
        <span class="label-text">Registration Number</span>
        <input id="id" type="text" value="{user?.registration_number}" class="input input-bordered w-full rounded-xl focus:outline-none" placeholder="Id" disabled/>
    </label>
    <label for="name" class="flex flex-col gap-y-2">
        <span class="label-text">Nama Lengkap</span>
        <input id="name" type="text" value="{user?.name}" class="input input-bordered w-full rounded-xl focus:outline-none" placeholder="Nama Lengkap" />
    </label>
    <label for="birthdate" class="flex flex-col gap-y-2">
        <span class="label-text">Tanggal Lahir</span>
        <input id="birthdate" type="datetime" value="{new Date(user ? user.birth_date : '').toLocaleDateString()}" class="input input-bordered w-full rounded-xl focus:outline-none" placeholder="Nama Lengkap" />
    </label>
    <label for="birthdate" class="flex flex-col gap-y-2">
        <span class="label-text">Pekerjaan</span>
        <input id="occupation" type="text" value="{user?.occupation}" class="input input-bordered w-full rounded-xl focus:outline-none" placeholder="Pekerjaan" disabled />
    </label>
    <form action="?/logout" method="POST">
        <button type="submit" class="btn btn-error rounded-xl text-white w-full">
            <svg class="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/>
            </svg>
            Keluar
        </button>
    </form>
</section>