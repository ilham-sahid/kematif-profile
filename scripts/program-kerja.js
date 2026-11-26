const PROGRAM_KERJA = {
	BPH: {
		title: "Badan Pengurus Harian",
		deskripsi:
			"Badan Pengurus Harian (BPH) merupakan tim kepemimpinan inti yang bertanggung jawab atas pengelolaan organisasi secara menyeluruh, perencanaan strategis, serta koordinasi antar divisi.",
		program: [
			{
				title: "Pembuatan Kalender Program Kerja",
				content:
					"Pengumpulan data rencana jadwal dari seluruh divisi, sinkronisasi dengan kalender akademik Politeknik Negeri Jember, serta pembuatan desain visual kalender (fisik dan digital) yang memuat rangkaian kegiatan KEMATIF. ",
			},
			{
				title:
					"Pembuatan PDH (Pakaian Dinas Harian) dan ID CARD anggota KEMATIF ",
				content:
					"Pembuatan PDH (Pakaian Dinas Harian) dan ID Card untuk setiap anggota yang ada dalam organisasi KEMATIF. ",
			},
			{
				title: "Iuran Rutin Pengurus Organisasi",
				content:
					"Pembayaran iuran rutin pengurus sebesar Rp5.000,00 per anggota KEMATIF yang dibayarkan setiap dua minggu sekali. ",
			},
			{
				title: "Pengarsipan Dokumen Masuk dan Keluar",
				content:
					"Pendataan setiap dokumen yang masuk dan keluar dalam organisasi KEMATIF. ",
			},
			{
				title: "Pembuatan Struktur Organisasi",
				content:
					"Penyusunan struktur organisasi KEMATIF agar pembagian tugas, tanggung jawab, dan koordinasi setiap pengurus dapat berjalan dengan jelas. ",
			},
			{
				title: "Notulensi dan Pembuatan Presensi Rapat",
				content:
					"Pencatatan poin-poin penting yang telah dihasilkan dalam setiap rapat, serta pembuatan presensi untuk mendokumentasikan kehadiran peserta. ",
			},
		],
	},

	HUMAS: {
		title: "Hubungan Masyarakat",
		deskripsi:
			"Divisi Humas berfokus pada komunikasi, hubungan internal dan eksternal, serta penyampaian informasi kegiatan KEMATIF.",
		program: [
			{
				title: "Menjalin Hubungan Internal dan Eksternal",
				content:
					"Membangun komunikasi dan kerja sama dengan pihak internal maupun eksternal organisasi.",
			},
			{
				title: "Penyebaran Informasi Kegiatan",
				content:
					"Menyampaikan informasi kegiatan dan agenda KEMATIF kepada anggota secara jelas dan terarah.",
			},
			{
				title: "Koordinasi dengan Organisasi Lain",
				content:
					"Melakukan komunikasi dan koordinasi untuk mendukung kegiatan serta kolaborasi antarorganisasi.",
			},
		],
	},

	KOMINFO: {
		title: "Komunikasi dan Informasi",
		deskripsi:
			"Divisi Kominfo mengelola media informasi, publikasi, dan dokumentasi untuk mendukung komunikasi digital KEMATIF.",
		program: [
			{
				title: "Pengelolaan Media Sosial",
				content:
					"Mengelola akun media sosial sebagai sarana penyampaian informasi dan aktivitas KEMATIF.",
			},
			{
				title: "Desain Konten dan Publikasi",
				content:
					"Membuat materi visual untuk publikasi informasi, agenda, dan dokumentasi kegiatan.",
			},
			{
				title: "Dokumentasi Kegiatan",
				content:
					"Mendokumentasikan kegiatan organisasi dalam bentuk foto maupun video.",
			},
			{
				title: "Pengarsipan Konten Digital",
				content:
					"Menyimpan dan mengelompokkan materi desain, foto, video, serta hasil publikasi.",
			},
		],
	},

	KEWIRAUSAHAAN: {
		title: "Kewirausahaan",
		deskripsi:
			"Divisi Kewirausahaan mengembangkan kegiatan usaha dan pendanaan untuk mendukung kebutuhan serta kegiatan organisasi.",
		program: [
			{
				title: "Penjualan Produk KEMATIF",
				content:
					"Mengelola penjualan produk organisasi sebagai salah satu kegiatan usaha divisi.",
			},
			{
				title: "Bazar dan Kegiatan Usaha",
				content:
					"Mengadakan kegiatan usaha atau bazar untuk mendukung pendanaan organisasi.",
			},
			{
				title: "Pencatatan Hasil Penjualan",
				content:
					"Mencatat pemasukan dan pengeluaran dari kegiatan usaha secara teratur.",
			},
		],
	},
	PSDM: {
		title: "Pengembangan Sumber Daya Mahasiswa",
		deskripsi:
			"Divisi PSDM berfokus pada pengembangan minat, bakat, keterampilan, dan potensi mahasiswa Teknik Informatika.",
		program: [
			{
				title: "Pengembangan Minat dan Bakat",
				content:
					"Mendukung anggota untuk mengenali dan mengembangkan minat serta bakat melalui kegiatan yang sesuai.",
			},
			{
				title: "Pelatihan dan Pengembangan Keterampilan",
				content:
					"Mengadakan kegiatan pelatihan untuk meningkatkan keterampilan dan kemampuan anggota.",
			},
		],
	},
};

const divisionTabs = document.querySelectorAll(".work-division-tab");
const divisionPanel = document.querySelector(".work-division-panel");
const programKerjaEl = document.querySelector(".work-program-list");

divisionTabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		const selectedDivision = tab.dataset.division;

		// Mengatur tab aktif dan atribut aksesibilitasnya.
		divisionTabs.forEach((item) => {
			const isActive = item === tab;
			item.classList.toggle("is-active", isActive);
			item.setAttribute("aria-selected", String(isActive));
			item.tabIndex = isActive ? 0 : -1;
		});

		tampilProgramKerja(selectedDivision.toUpperCase());
	});
});

function tampilProgramKerja(programKerja) {
	const divisi = PROGRAM_KERJA[programKerja];
	document.getElementById("work-summary-title").textContent = divisi.title;
	document.getElementById("work-summary-desc").textContent = divisi.deskripsi;
	document.getElementById("work-summary-stat").textContent =
		divisi.program.length;

	programKerjaEl.innerHTML = "";
	divisi.program.forEach((program, index) => {
		programKerjaEl.innerHTML += `
			<article class="work-program-card">
				<span class="work-program-number">${index + 1}</span>
				<div class="work-program-copy">
					<h3>${program.title}</h3>
					<p>
						${program.content}
					</p>
				</div>
			</article>
			`;
	});
}

document.addEventListener("DOMContentLoaded", () => {
	tampilProgramKerja(divisionPanel.dataset.panel.toUpperCase());
	divisionTabs.forEach((tab) => {
		const key = tab.dataset.division.toUpperCase();
		const dataDivisi = PROGRAM_KERJA[key]?.[0];
		const labelJumlah = tab.querySelector(".work-tab-text small");

		if (dataDivisi && labelJumlah) {
			labelJumlah.textContent = `${dataDivisi.program.length} program`;
		}
	});
});