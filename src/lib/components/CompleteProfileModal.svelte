<script lang="ts">
    import { enhance } from "$app/forms";
	import { onSubmit } from "$lib/functions/onSubmit.svelte"; 
    let { isNewUser } = $props()
    const isNew = $derived(isNewUser)
</script>

<dialog id="completeProfileModal" class="modal">
	<div class="modal-box">
		<h3 class="text-lg font-bold">Daftar / Masuk</h3>
		<p class="py-4 md:text-base text-sm">Gunakan Nomor Whatsapp (WA) untuk melanjutkan</p>
        <!-- This form action is pointed to / page actions -->
        <form action="/?/login" class="flex w-full" method="post" use:enhance={onSubmit}>
            <select name="country_code" id="country_code" class="input input-bordered rounded-l-xl rounded-none focus:outline-none">
                <option value="62">+62</option>
            </select>
            <input type="number" name="phone_number" class="input input-bordered w-full rounded-none" placeholder="Nomor Whatsapp"/>
            <button class="btn btn-primary rounded-r-xl rounded-none text-black" >Kirim OTP</button>
        </form>
        <small>Masukkan nomor WA tanpa awalan 0</small>
		<div class="modal-action">
            <form method="dialog">
                <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
		</div>
	</div>
</dialog>
