<script lang="ts">
	import HomeCards from '$lib/components/HomeCards.svelte';
	import bannerImage from '$lib/images/banner-private-quran.png';
	import Seo from '$lib/components/SEO.svelte';
	import HomeCarousel from '$lib/components/HomeCarousel.svelte';
	import HomeBlogCard from '$lib/components/HomeBlogCard.svelte';
	let { data } = $props();
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
			<div class="text-md collapse-title font-medium">Tahsin Al-Qur'an</div>
			<div class="collapse-content">
				<section class="flex flex-col gap-y-5 text-justify">
					<p>
						Kegiatan tahsin qur'an bertujuan untuk memperbagus atau memperbaiki dan memperlancar
						bacaan Al Qur'an peserta. Kegiatannya berisi dengan melakukan setoran ngaji atau membaca
						al qur'an dengan disimak/didengarkan oleh Ustadz/Ustadzah dan akan dibetulkan atau
						diperbaiki apabila ada kesalahan atau kekurangan dalam melafadzkan ayat qur'an.
					</p>
					<p>
						Dengan mengikuti program ini peserta dapat mencapai bacaan al qur'an yang lebih baik,
						benar dan lancar. Mendapat sanad bacaan qur'an dari ustadz/ustadzah sampai Rosulullah
						SAW. Sedikit atau banyaknya pencapaian mengaji menyesuaikan dengan kemampuan peserta.
					</p>
					<section>
						<h1 class="font-semibold">Pertemuan Screening</h1>
						<p>
							Perkenalan, konsultasi, menyusun jadwal dan melihat kemampuan peserta. Jika lancar dan
							tidak ada kendala bisa langsung mempersiapkan untuk pertemuan pertama. Mendapat arahan
							dari ustadz/ustadzah memulai setoran dari surat yang dipilih. Jika ada hal yang perlu
							diperhatikan akan diberikan arahan/saran dari ustadz/ustadzah. Bisa berupa naik kelas
							atau turun kelas.
						</p>
					</section>
					<section>
						<h1 class="font-semibold">Pertemuan Pertama dan seterusnya</h1>
						<p>
							Menyetorkan bacaan al qur'an dan disimak/didengarkan ustadz/ustadzah. Dilanjutkan
							materi tambahan jika diperlukan.
						</p>
					</section>
				</section>
			</div>
		</div>
		<div class="collapse collapse-arrow rounded-lg bg-[#FDF2E1]">
			<input type="checkbox" name="my-accordion-2" />
			<div class="text-md collapse-title font-medium">Tahfidz Juz 30</div>
			<div class="collapse-content">
				<section class="flex flex-col gap-y-5 text-justify">
					<p>
						Kegiatan tahfidz juz 30 bertujuan untuk peserta yang sudah mampu membaca Al Qur'an dengan baik, benar dan lancar. Kemudian ingin meningkatkan ngajinya dengan menghafalkan juz 'amma/juz 30 dengan disetorkan kepada Ustadz/Ustadzah yang kompeten dan sanad tahfidz qur'annya bersambung sampai ke Rosulullah SAW.
					</p>
					<p>
						Dengan mengikuti program ini peserta dapat hafal surat-surat dalam juz 30 dan mendapat sanad hafalan qur'an dari ustadz/ustadzah sampai Rosulullah SAW. Sedikit atau banyaknya pencapaian mengaji menyesuaikan dengan kemampuan peserta.
					</p>
					<section>
						<h1 class="font-semibold">Pertemuan Screening</h1>
						<p>
							Perkenalan, konsultasi, menyusun jadwal dan melihat kemampuan peserta. Jika lancar dan tidak ada kendala bisa langsung mempersiapkan untuk pertemuan pertama. Mendapat arahan dari ustadz/ustadzah memulai setoran dari surat yang dipilih.
							Jika ada hal yang perlu diperhatikan akan diberikan arahan/saran dari ustadz/ustadzah. Bisa berupa naik kelas atau turun kelas.
						</p>
					</section>
					<section>
						<h1 class="font-semibold">Pertemuan Pertama dan seterusnya</h1>
						<p>
							Isi kegiatannya yaitu dengan menyetorkan hafalan yang sudah dihafalkan (bisa beberapa ayat atau halaman yang sudah dihafalkan sendiri) kemudian disetorkan kepada ustadz/ustadzah. Dilanjutkan materi tambahan jika diperlukan dan membaca surat/ayat yang akan dihafalkan sendiri (sebagai pekerjaan rumah) dan akan disetorkan di pertemuan selanjutnya.
						</p>
					</section>
				</section>
			</div>
		</div>
		<div class="collapse collapse-arrow rounded-lg bg-[#FDF2E1]">
			<input type="checkbox" name="my-accordion-2" />
			<div class="text-md collapse-title font-medium">Tahfidz Surat-Surat Penting</div>
			<div class="collapse-content">
				<section class="flex flex-col gap-y-5 text-justify">
					<p>
						Kegiatan tahfidz surat-surat penting bertujuan untuk peserta yang sudah mampu membaca Al Qur'an dengan baik, benar, dan lancar. Kemudian ingin menghafalkan surat-surat penting dengan disetorkan kepada Ustadz/Ustadzah yang kompeten dan sanad tahfidz qur'annya bersambung sampai ke Rosulullah SAW.
					</p>
					<p>
						Surat-surat penting terdiri dari :
					</p>
					<ul class="list-disc list-inside ps-3">
						<li>Surat Yasin</li>
						<li>Surat Ar Rahman</li>
						<li>Surat Al Waqi'ah</li>
						<li>Surat Al Mulk</li>
						<li>Surat pilihan lain sesuai keinginan peserta</li>
					</ul>
					<section>
						<h1 class="font-semibold">Pertemuan Screening</h1>
						<p>
							Perkenalan, konsultasi, menyusun jadwal dan melihat kemampuan peserta. Jika lancar dan tidak ada kendala bisa langsung mempersiapkan untuk pertemuan pertama. Mendapat arahan dari ustadz/ustadzah memulai setoran dari surat yang dipilih.
							Jika ada hal yang perlu diperhatikan akan diberikan arahan/saran dari ustadz/ustadzah. Bisa berupa naik kelas atau turun kelas.
						</p>
					</section>
					<section>
						<h1 class="font-semibold">Pertemuan Pertama dan seterusnya</h1>
						<p>
							Isi kegiatannya yaitu dengan menyetorkan hafalan yang sudah dihafalkan (bisa beberapa ayat atau halaman yang sudah dihafalkan sendiri) kemudian disetorkan kepada ustadz/ustadzah. Dilanjutkan materi tambahan jika diperlukan dan membaca surat/ayat yang akan dihafalkan sendiri (sebagai pekerjaan rumah) dan akan disetorkan di pertemuan selanjutnya.
						</p>
					</section>
				</section>
			</div>
		</div>
		<div class="collapse collapse-arrow rounded-lg bg-[#FDF2E1]">
			<input type="checkbox" name="my-accordion-2" />
			<div class="text-md collapse-title font-medium">Tahfidz 30 Juz</div>
			<div class="collapse-content">
				<section class="flex flex-col gap-y-5 text-justify">
					<p>
						Kegiatan tahfidz 30 juz bertujuan untuk peserta yang sudah mampu membaca Al Qur'an dengan baik, benar, dan lancar dan sudah menghafalkan juz 30/ juz 'amma. Kemudian ingin menghafalkan al qur'an dimulai dari juz 1 dst. dengan disetorkan kepada Ustadz/Ustadzah yang kompeten dan sanad tahfidz qur'annya bersambung sampai ke Rosulullah SAW.
					</p>
					<p>
						Dengan mengikuti program ini peserta dapat hafal alquran dan mendapat sanad hafalan qur'an dari ustadz/ustadzah sampai Rosulullah SAW. Sedikit atau banyaknya pencapaian mengaji menyesuaikan dengan kemampuan peserta.
					</p>
					<section>
						<h1 class="font-semibold">Pertemuan Screening</h1>
						<p>
							Perkenalan, konsultasi, menyusun jadwal dan melihat kemampuan peserta. Jika lancar dan tidak ada kendala bisa langsung mempersiapkan untuk pertemuan pertama. Mendapat arahan dari ustadz/ustadzah memulai setoran dari surat yang dipilih.
							Jika ada hal yang perlu diperhatikan akan diberikan arahan/saran dari ustadz/ustadzah. Bisa berupa naik kelas atau turun kelas.
						</p>
					</section>
					<section>
						<h1 class="font-semibold">Pertemuan Pertama dan seterusnya</h1>
						<p>
							Isi kegiatannya yaitu dengan menyetorkan hafalan yang sudah dihafalkan (bisa beberapa ayat atau halaman yang sudah dihafalkan sendiri) kemudian disetorkan kepada ustadz/ustadzah. Dilanjutkan materi tambahan jika diperlukan dan membaca surat/ayat yang akan dihafalkan sendiri (sebagai pekerjaan rumah) dan akan disetorkan di pertemuan selanjutnya.
						</p>
					</section>
				</section>
			</div>
		</div>
		<div class="collapse collapse-arrow rounded-lg bg-[#FDF2E1]">
			<input type="checkbox" name="my-accordion-2" />
			<div class="text-md collapse-title font-medium">Muroja'ah</div>
			<div class="collapse-content">
				<section class="flex flex-col gap-y-5 text-justify">
					<p>
						Kegiatan muroja'ah bertujuan untuk peserta yang sudah mempunyai hafalan alqur'an, baik baru 1 juz, 2 juz atau seterusnya. Kemudian ingin menjaga hafalannya dengan menyetorkan hafalan yang sudah pernah dicapainya kepada Ustadz/Ustadzah yang kompeten dan sanad tahfidz qur'an bersambung sampai ke Rosulullah SAW.
					</p>
					<p>
						Dengan mengikuti program ini peserta dapat menjaga hafalan alqurannya dan mendapat sanad hafalan qur'an dari ustadz/ustadzah sampai Rosulullah SAW. Sedikit atau banyaknya pencapaian mengaji menyesuaikan dengan kemampuan peserta.
					</p>
					<section>
						<h1 class="font-semibold">Pertemuan Screening</h1>
						<p>
							Perkenalan dan konsultasi metode, jadwal ngaji, dll
						</p>
					</section>
					<section>
						<h1 class="font-semibold">Pertemuan Pertama dan seterusnya</h1>
						<p>
							Menyetorkan hafalannya kepada Ustadz/Ustadzah. Bisa menambah materi tambahan jika dan atau konsultasi, apabila diperlukan.
						</p>
					</section>
				</section>
			</div>
		</div>
	</section>
	<HomeCards />
	<section class="flex flex-col gap-y-5">
		<div class="align-center flex justify-between">
			<div>
				<p class="mt-2">Ingin Info Lebih lanjut?</p>
			</div>
	
			<a
				class="btn btn-primary normal-case"
				target="_blank"
				href="https://api.whatsapp.com/send?phone=6289529204422&text=Assalamualaikum,%20saya%20ingin%20tanya%20tentang%20program%20privat%20quran%20di%20Nyantri%20Kilat"
			>
				Hubungi Kami
			</a>
		</div>
		<div class="align-center flex justify-between">
			<div>
				<div class="text-xl font-extrabold text-[#4E1909]">Rp 600.000</div>
				<div class="flex gap-2">
					<span class="text-sm font-semibold text-gray-800">Untuk 10 Kali Pertemuan</span>
				</div>
			</div>
	
			<a
				class="btn btn-secondary normal-case"
				target="_blank"
				href="https://forms.gle/ovSxiJuCJvEnPHfo6"
			>
				Daftar Sekarang
			</a>
		</div>
	</section>
	<section>
		<div class="divider"></div>
		<HomeCarousel />
	</section>
	<section>
		<div class="divider"></div>
		<h1 class="font-semibold">Nyantri Kilat Terbaru</h1>
		<HomeBlogCard contentfulDataEntries={data.contentfulDataEntries} assets={data.assets} />
	</section>
</section>
