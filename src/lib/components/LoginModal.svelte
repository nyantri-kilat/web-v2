<script lang="ts">
    import { enhance } from "$app/forms";
	import { onSubmit, isLoading } from "$lib/functions/onSubmit.svelte"; 
    let { number_is_verified } = $props()
    const phone_number_verified = $derived(number_is_verified ? JSON.parse(number_is_verified) : null)
</script>

<dialog id="loginModal" class="modal">
	<div class="modal-box">
		<h3 class="text-lg font-bold">Daftar / Masuk</h3>
		<p class="py-4 md:text-base text-sm">Gunakan Nomor Whatsapp (WA) untuk melanjutkan</p>
        <!-- This form action is pointed to / page actions -->
        <form action="/?/login" class="flex w-full" method="post" use:enhance={onSubmit}>
            <select name="country_code" id="country_code" class="input input-bordered rounded-l-xl rounded-none focus:outline-none" disabled={number_is_verified}>
                <option value="62">+62</option>
            </select>
            <input type="number" name="phone_number" class="input input-bordered w-full rounded-none {number_is_verified ? "focus:outline-none" : ""}" placeholder="Nomor Whatsapp" value="{number_is_verified ? phone_number_verified.phone_number : ''}" readonly={number_is_verified} required/>
            <button class="btn btn-primary rounded-r-xl rounded-none text-black" disabled={number_is_verified}>
                {
                    isLoading() ? "Mengirim OTP" : "Kirim OTP"
                }
            </button>
        </form>
        <small>Masukkan nomor WA tanpa awalan 0</small>
        {#if number_is_verified}
            <form action="/?/verify" class="flex w-full mt-2" method="post" use:enhance={onSubmit}>
                <input type="number" name="otp" class="input input-bordered w-full rounded-l-xl rounded-none" placeholder="Kode OTP" />
                <button class="btn btn-success rounded-r-xl rounded-none text-white">Verifikasi</button>
            </form>
        {/if}
		<div class="modal-action">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
		</div>
	</div>
</dialog>
