<script lang="ts">
	import { goto } from "$app/navigation";
    import image from "$lib/logo-navbar.svg"
	import CompleteProfileModal from "./CompleteProfileModal.svelte";
	import LoginModal from "./LoginModal.svelte";
    function showLogin(){
        if(typeof document !== 'undefined'){
            // @ts-ignore
            document.getElementById('loginModal')?.showModal();
        }
    }
    function closeLogin(){
        if(typeof document !== 'undefined'){
            // @ts-ignore
            document.getElementById('loginModal')?.close()
        }
    }
    function showCompleteProfile(){
        if(typeof document !== 'undefined'){
            // @ts-ignore
            document.getElementById('loginModal')?.showModal();
        }
    }

    let { number_is_verified, sessionId, isNewUser }: { number_is_verified: string | undefined, sessionId: String | boolean, isNewUser: string | undefined } = $props();

    $effect(()=>{
        sessionId ? closeLogin() : ""
        isNewUser == "true" ? true : false ? showCompleteProfile() : ""
    })
</script>
<LoginModal {number_is_verified}/>
<CompleteProfileModal {isNewUser}/>
<div class="navbar bg-[#FDF2E1] rounded-xl">
	<div class="navbar-start">
		<a href="/" class="btn btn-ghost text-xl">
            <img src="{image}" alt="Nyantrikilat" class="" />
        </a>
	</div>
	<div class="navbar-end">
        {#if sessionId}
            <button onclick="{() => goto('/profile')}" class="btn btn-ghost">Akun Anda</button>
        {:else}
		    <button onclick={()=>showLogin()} class="btn btn-ghost">Daftar / Masuk</button>
        {/if}
	</div>
</div>
