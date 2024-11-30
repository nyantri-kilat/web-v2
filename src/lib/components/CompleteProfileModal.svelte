<script lang="ts">
    import { enhance } from "$app/forms";
	import { onSubmit } from "$lib/functions/onSubmit.svelte";
</script>

<dialog id="completeProfileModal" class="modal">
	<div class="modal-box">
		<h3 class="text-lg font-bold pb-5">Lengkapi Profile</h3>
        <!-- This form action is pointed to / page actions -->
        <form action="/?/completeProfile" class="flex flex-col w-full gap-y-5" method="post" use:enhance={onSubmit}>
            <input type="text" name="name" class="input input-bordered w-full" placeholder="Nama"/>
            <input type="date" name="birthday" class="input input-bordered w-full" placeholder="Tanggal Lahir"/>
            <select name="occupation" id="pekerjaan" class="input input-bordered w-full" placeholder="Pekerjaan">
                <option value="mahasiswa" selected>Mahasiswa</option>
                <option value="siswa">Siswa</option>
                <option value="guru">Guru</option>
            </select>
            <button class="btn btn-primary text-black">Simpan</button>
        </form>
	</div>
</dialog>
