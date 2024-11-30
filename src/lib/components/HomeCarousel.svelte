<script lang="ts">
	import guru1 from '$lib/images/asatidz/AsatidzMasAlkaff.png';
	import guru2 from '$lib/images/asatidz/AsatidzMbakAyim.png';
	import guru3 from '$lib/images/asatidz/AsatidzMbakFidza.png';
	import guru4 from '$lib/images/asatidz/AsatidzMbakRere.png';
	import guru5 from '$lib/images/asatidz/AsatidzMbakSalma.png';
	import guru6 from '$lib/images/asatidz/AsatidzMbakWiwik.png';
	const datas = [
		{
			src: guru1,
			alt: 'Banner 1'
		},
		{
			src: guru2,
			alt: 'Banner 2'
		},
		{
			src: guru3,
			alt: 'Banner 3'
		},
		{
			src: guru4,
			alt: 'Banner 4'
		},
		{
			src: guru5,
			alt: 'Banner 5'
		},
		{
			src: guru6,
			alt: 'Banner 6'
		}
	];
</script>

<div>
	<div class="my-5">
		<h4 class="text-md font-semibold">Pengajar Qur'an Nyantri Kilat</h4>
		<p class="text-xs text-gray-500">
			Pengajar nyantri kilat merupakan alumni Pesantren yang Hafal Qur'an, jelas sanad keilmuannya
			dan kredibel di bidangnya.
		</p>
	</div>
	<div class="carousel gap-3">
		{#each datas as data}
			<div class="carousel-item">
				<img src="{data.src}" alt="{data.alt}" class="w-72 rounded-md" />
			</div>
		{/each}
	</div>
</div>
