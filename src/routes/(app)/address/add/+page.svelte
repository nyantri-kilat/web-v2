<script lang="ts">
    import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
    import { debounce } from '$lib/functions/debounce';
	import { onSubmit } from '$lib/functions/onSubmit.svelte';
	import type {Address} from '$lib/types/address';

    let step = $state(1);
    let alamat = $state('');
	let addressData: Address[] = $state([]);
	let loading = $state(false);
    let empty = $state(false);
    let selectedAddress: Address | null = $state(null);

    // Form data for additional details
    let additionalDetails = $state({
        contactName: '',
        contactPhone: '',
        note: '',
        label: ''
    });

	const debouncedInput = debounce(async (value: string) => {
		const req = await fetch('/address?keyword=' + value);
		const res = await req.json();
		addressData = res.data;
        if(addressData.length === 0){
            empty = true;
        }
        loading = false;
	}, 500);

	const handleSearch = async () => {
        if (alamat === '') {
            addressData = [];
            empty = false;
            return;
        };
        loading = true;
		debouncedInput(alamat);
	};

    const selectAddress = (address: Address) => {
        selectedAddress = address;
        step = 2;
    };

    const goBack = () => {
        step = 1;
        selectedAddress = null;
    };

    // Fungsi untuk membuat string alamat lengkap
    const formatFullAddress = (address: Address) => {
        return [
            address.address,
            address.administrative_division_level_3_name,
            address.administrative_division_level_2_name,
            address.administrative_division_level_1_name,
            `Kode Pos: ${address.postal_code}`,
            address.country_name
        ].filter(Boolean).join(', ');
    };
</script>

<section class="flex flex-col gap-y-3">
    <button onclick={()=>goto('/address')} class="text-gray-700 flex items-center gap-x-4 w-32" aria-label="Kembali">
        <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
        </svg>
        Kembali
    </button>

    {#if step === 1}
        <input type="text" bind:value={alamat} oninput={handleSearch} placeholder="Ketikkan di sini, alamat akan muncul otomatis" class="input input-bordered w-full" />
        
        {#if loading}
            <div class="flex justify-center items-center">
                <svg class="animate-spin h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </div>
        {/if}

        {#if addressData.length > 0}
            <h2>Hasil:</h2>
            <section class="flex flex-col gap-4">
                {#each addressData as address}
                    <button 
                        class="w-full bg-gray-100 px-3 py-2 text-black hover:bg-gray-200 rounded-lg text-left"
                        onclick={() => selectAddress(address)}
                    >
                        <div class="flex items-center">
                            <svg class="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            </svg>
                            <ul class="list-inside list-disc">
                                <li>
                                    {address.administrative_division_level_3_name}, {address.administrative_division_level_2_name},
                                    {address.administrative_division_level_1_name}, {address.postal_code}
                                </li>
                            </ul>
                        </div>
                    </button>
                {/each}
            </section>
        {:else}
            {#if empty}
                <p>Tidak ada hasil yang ditemukan</p>
            {/if}
        {/if}
    {:else if step === 2}
        {#if selectedAddress}
            <div class="bg-gray-100 p-4 rounded-lg mb-4">
                <h2 class="text-lg font-semibold mb-2">Alamat Terpilih:</h2>
                <div class="flex items-start">
                    <svg class="w-6 h-6 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <div>
                        <p class="font-medium">
                            {formatFullAddress(selectedAddress)}
                        </p>
                        <button 
                            onclick={goBack} 
                            class="text-sm text-blue-600 hover:underline mt-2"
                        >
                            Ubah Alamat
                        </button>
                    </div>
                </div>
            </div>

            <form method="POST" use:enhance={onSubmit}>
                <!-- Hidden inputs for selected address -->
                <input type="hidden" name="biteship_id" value={selectedAddress.id} />
                <input type="hidden" name="name" value={selectedAddress.name} />
                <input type="hidden" name="country_name" value={selectedAddress.country_name} />
                <input type="hidden" name="country_code" value={selectedAddress.country_code} />
                <input
                    type="hidden"
                    name="administrative_division_level_1_name"
                    value={selectedAddress.administrative_division_level_1_name}
                />
                <input
                    type="hidden"
                    name="administrative_division_level_1_type"
                    value={selectedAddress.administrative_division_level_1_type}
                />
                <input
                    type="hidden"
                    name="administrative_division_level_2_name"
                    value={selectedAddress.administrative_division_level_2_name}
                />
                <input
                    type="hidden"
                    name="administrative_division_level_2_type"
                    value={selectedAddress.administrative_division_level_2_type}
                />
                <input
                    type="hidden"
                    name="administrative_division_level_3_name"
                    value={selectedAddress.administrative_division_level_3_name}
                />
                <input
                    type="hidden"
                    name="administrative_division_level_3_type"
                    value={selectedAddress.administrative_division_level_3_type}
                />
                <input type="hidden" name="postal_code" value={selectedAddress.postal_code} />

                <!-- Additional details inputs -->
                <div class="space-y-4">
                    <h2 class="text-xl font-bold">Detail Tambahan</h2>
                    
                    <div>
                        <label for="label" class="block mb-2">Label Alamat <span class="text-sm text-red-500">*</span></label>
                        <input 
                            type="text" 
                            name="label" 
                            bind:value={additionalDetails.label}
                            placeholder="Contoh: Rumah, Kantor" 
                            class="input input-bordered w-full" 
                        />
                    </div>

                    <div>
                        <label for="label" class="block mb-2">Alamat Jalan <span class="text-sm text-red-500">*</span></label>
                        <input 
                            type="text" 
                            name="address" 
                            bind:value={selectedAddress.address}
                            placeholder="Contoh: Jl. Kelurahan, Kab. Kota"
                            class="input input-bordered w-full" 
                        />
                    </div>


                    <div>
                        <label for="destination_contact_name" class="block mb-2">Nama Kontak <span class="text-sm text-red-500">*</span></label>
                        <input 
                            type="text" 
                            name="destination_contact_name" 
                            bind:value={additionalDetails.contactName}
                            placeholder="Nama lengkap" 
                            class="input input-bordered w-full" 
                            required 
                        />
                    </div>

                    <div>
                        <label for="destination_contact_phone" class="block mb-2">Nomor Telepon <span class="text-sm text-red-500">*</span></label>
                        <input 
                            type="number" 
                            name="destination_contact_phone" 
                            bind:value={additionalDetails.contactPhone}
                            placeholder="Nomor telepon" 
                            class="input input-bordered w-full" 
                            required 
                        />
                    </div>

                    <div>
                        <label for="note" class="block mb-2">Catatan Tambahan</label>
                        <textarea 
                            name="note" 
                            bind:value={additionalDetails.note}
                            placeholder="Catatan tambahan (opsional)" 
                            class="textarea textarea-bordered w-full" 
                        ></textarea>
                    </div>
                    
                    <div class="flex items-center">
                        <input 
                            id="is_default" 
                            type="checkbox" 
                            name="is_default" 
                            value="true" 
                            bind:checked={selectedAddress.is_default} 
                            class="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
                        />
                        <label for="is_default" class="ml-3 block text-sm text-gray-900 select-none cursor-pointer">
                            Jadikan Alamat Utama
                        </label>
                    </div>

                    <button type="submit" class="btn btn-primary w-full">
                        Simpan Alamat
                    </button>
                </div>
            </form>
        {/if}
    {/if}
</section>