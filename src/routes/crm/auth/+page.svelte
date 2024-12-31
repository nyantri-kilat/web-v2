<script lang="ts">
	import { enhance } from "$app/forms";
</script>

<section class="flex h-[85dvh] w-full items-center justify-center">
    <form action="/crm/auth?/login" method="POST" use:enhance class="bg-base-200 p-10 rounded-xl flex flex-col gap-y-4">
        <input type="password" placeholder="Token" name="token" class="input input-bordered w-full max-w-xs">
        <button type="submit" class="btn bg-white w-full">
            Login
        </button>
    </form>    
</section>