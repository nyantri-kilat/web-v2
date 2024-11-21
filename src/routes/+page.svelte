<script lang="ts">
	import HomeCard from '$lib/components/HomeCard.svelte';
    import bannerImage from '$lib/images/banner-private-quran.png';
	import Seo from "$lib/components/SEO.svelte";
</script>

<Seo title="Nyantri Kilat" />
<section class="flex flex-col gap-y-5 py-5">
	<h1 class="text-sm md:text-base">
		<b>Program Privat Qur'an</b> - Dengan Pengajar Hafal 30 Juz
	</h1>
	<section class="rounded-md">
		<img src={bannerImage} alt="" class="rounded-md" />
	</section>
	<h1 class="font-semibold">Pilihan Kelas</h1>
	<section class="flex flex-col gap-y-1">
		<div class="collapse collapse-arrow rounded-lg bg-[#FDF2E1]">
			<input type="checkbox" name="my-accordion-2" />
			<div class="text-md collapse-title font-medium">Qur'an Dasar/Tajwid Makhorijul Huruf</div>
			<div class="collapse-content">
				<p>
					Kelas Qur'an Dasar bertujuan untuk mengetahui makhorijul huruf dan memahami ilmu tajwid
					(ilmu cara baca alqur'an). Kegiatannya berisi dengan Ustadz/Ustadzah menyampaikan materi
					disertai dengan peserta praktek membacanya.<br /><br />
					Dengan mengikuti program ini peserta dapat memahami ilmu tajwid dan makhorijul huruf sehingga
					dapat membaca alqur'an dengan baik dan benar. Pencapaian materi yang disampaikan menyesuaikan
					kemampuan peserta. Materi yang disampaikan :
				</p>
				<ul class="list-inside list-disc ps-5">
					<li>Ta'awudz</li>
					<li>Basmalah</li>
					<li>Hukum Nun Mati atau Tanwin</li>
					<li>Idhar Mutlaq</li>
					<li>Hukum Mim Sukun</li>
					<li>Ghunnah Musyaddadah</li>
					<li>Idghom</li>
					<li>Hukum Al Ta'rif</li>
					<li>Qolqolah</li>
					<li>Huruf Isti'la'</li>
					<li>Lam Jalalah</li>
					<li>Hukum Ro'</li>
					<li>Hukum Mad</li>
					<li>Takbir</li>
					<li>Ayat Sajdah</li>
					<li>Makhorijul Huruf</li>
					<li>Sifat-Sifat Huruf</li>
					<li>Waqof</li>
					<li>Bacaan-bacaan pada ayat atau di akhir surat</li>
				</ul>
				<p>
					* urutan materi yang dipelajari menyesuaikan kebutuhan peserta yang dapat diketahui
					melalui konsultasi/arahan Ustadz/Ustadzah
				</p>
				<br />
				<p>
					<b>Pertemuan Screening</b> Perkenalan, konsultasi, menyusun jadwal dan melihat kemampuan peserta.
				</p>
			</div>
		</div>
		<div class="collapse collapse-arrow rounded-lg bg-[#FDF2E1]">
			<input type="checkbox" name="my-accordion-2" />
			<div class="text-md collapse-title font-medium">Click to open this one and close others</div>
			<div class="collapse-content">
				<p>hello</p>
			</div>
		</div>
		<div class="collapse collapse-arrow rounded-lg bg-[#FDF2E1]">
			<input type="checkbox" name="my-accordion-2" />
			<div class="text-md collapse-title font-medium">Click to open this one and close others</div>
			<div class="collapse-content">
				<p>hello</p>
			</div>
		</div>
	</section>
    <HomeCard/>
</section>
