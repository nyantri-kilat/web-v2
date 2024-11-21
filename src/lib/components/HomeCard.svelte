<script>
	import calendarImage from '$lib/images/calendar.png';
	import meet from '$lib/images/meet.png';
	import privat from '$lib/images/private.png';
	import whatsapp from '$lib/images/whatsapp.png';
	const cardData = [
		{
			name: 'Waktu Fleksibel',
			description: 'Durasi Pertemuan 1 Jam',
			image: calendarImage,
			alt: 'calendar'
		},
		{
			name: 'Privat',
			description: 'Satu ustadz satu santri',
			image: privat,
			alt: 'privat'
		},
		{
			name: 'Online',
			description: 'via Google Meet',
			image: meet,
			alt: 'meet'
		},
		{
			name: 'Contact Center',
			description: 'WA: 0895-2920-4422',
			image: whatsapp,
			alt: 'whatsapp'
		}
	];
</script>

<section class="grid grid-cols-2 gap-3 md:grid-cols-4">
    {#each cardData as data}
        <div class="card bg-[#FDF2E1] shadow-xl">
            <figure class="px-5 pt-5">
                <img src={data.image} alt={data.alt} class="h-14 w-14 rounded-xl" />
            </figure>
            <div class="card-body items-center px-2 py-2 text-center">
                <h2 class="card-title text-base">{data.name}</h2>
                <p>{data.description}</p>
            </div>
        </div>
    {/each}
</section>
