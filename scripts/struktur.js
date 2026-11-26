const DATA_DIVISI = {
	BPH: {
		title: "bph",
		deskripsi: "teast1",
		ketua: "Muhammad Thoriq Firdaus",
		fotoKetua: "ketuaBPH.jpg",
		anggota: [
			{
				nama: "Adelia Hanifah Saharani",
				posisi: "Wakil Ketua",
				foto: "AdeliaHanifahSaharani.jpg",
			},
			{
				nama: "Herdiansyah Hidayatullah",
				posisi: "Sekretaris 1",
				foto: "HerdiansyahHidayatullah.jpg",
			},
			{
				nama: "Sukma Arum Dwike Putri",
				posisi: "Sekretaris 2",
				foto: "SukmaArumDwikePutri.jpg",
			},
			{
				nama: "Nur Azizah Supriyanto",
				posisi: "Bendahara 1",
				foto: "NurAzizahSupriyanto.jpg",
			},
			{
				nama: "Anindya Zuhrah Ardiningrum",
				posisi: "Bendahara 2",
				foto: "AnindyaZuhrahArdiningrum.jpg",
			},
		],
	},

	HUMAS: {
		title: "humas",
		deskripsi: "teast2",
		ketua: "Farel Manalif Habibie",
		fotoKetua: "ketuaHumas.jpg",
		anggota: [
			{ nama: "Saiful Rizal" },
			{ nama: "Orlin Larisa Azaria" },
			{
				nama: "Fahmi Achmad Syahdan",
				foto: "FahmiAchmadSyahdan.jpg",
			},
			{
				nama: "Muhammad Rizki",
				foto: "MuhammadRizki.jpg",
			},
			{
				nama: "Nabila Windy Maretta",
				foto: "NabilaWindyMaretta.jpg",
			},
			{
				nama: "Muhammad Irfan Ar-Rafi",
				foto: "MuhammadIrfanAr-Rafi.jpg",
			},
		],
	},

	KOMINFO: {
		title: "kominfo",
		deskripsi: "teast4",
		ketua: "Nuril Aisyahroni",
		fotoKetua: "ketuaKominfo.jpg",
		anggota: [
			{
				nama: "Rayhan Riyadhul Jinan",
				foto: "RayhanRiyadhulJinan.jpg",
			},
			{
				nama: "Abhista yusuf cannavaro",
				foto: "AbhistaYusufCannavaro.jpg",
			},
			{
				nama: "Holifiatul Nadifa",
				foto: "HolifiatulNadifa.jpg",
			},
			{
				nama: "Sa'dan Arya Diputra",
				foto: "Sa'danAryaDiputra.jpg",
			},
		],
	},

	KWU: {
		title: "kewirausahaan",
		deskripsi: "teast3",
		ketua: "Ananta Widayani",
		fotoKetua: "ketuaKWU.jpg",
		anggota: [
			{
				nama: "Talitha Syahla Salsabila",
				foto: "TalithaSyahlaSalsabila.jpg",
			},
			{
				nama: "Iqbal Kamali Alpan",
				foto: "IqbalKamaliAlpan.jpg",
			},
			{
				nama: "Puri Septia Maharani",
				foto: "PuriSeptiaMaharani.jpg",
			},
			{
				nama: "Madentra Gilardino Firmansyah",
				foto: "MadentraGilardinoFirmansyah.jpg",
			},
			{
				nama: "Chairunisya Cici Wahyuningtyas",
				foto: "ChairunisyaCiciWahyuningtyas.jpg",
			},
			{
				nama: "Febrina Eka Damayanti",
				foto: "FebrinaEkaDamayanti.jpg",
			},
		],
	},

	PSDM: {
		title: "psdm",
		deskripsi:
			"Menumbuhkan minat dan bakat mahasiswa Teknik Informatika sesuai bidang yang diminati.",
		ketua: "Amanda Anissa Adatud-darain",
		fotoKetua: "ketuaPSDM.jpg",
		anggota: [
			{ nama: "Sheva Carvey Adi Reswara" },
			{ nama: "Muhammad Naufal Rafi Iqbal" },
			{
				nama: "Mohammad Yassir Thoriq Fathirrurizqy",
				foto: "MohammadYassirThoriqFathirurrizqy.jpg",
			},
			{ nama: "Aditya Fadni Athaullah" },
			{
				nama: "Shahru Namzha Pratama Agusriani",
				foto: "ShahruNamzhaPratamaAgusriani.jpg",
			},
			{
				nama: "Intan Anggraini Putri",
				foto: "IntanAnggrainiPutri.jpg",
			},
			{
				nama: "Ajeng Elsa Fitriyani",
				foto: "AjengElsaFitriyani.jpg",
			},
			{
				nama: "Raihan Abrar Hartama",
				foto: "RaihanAbrarHartama.jpg",
			},
			{
				nama: "Muhammad Ghani Ghazali",
				foto: "MuhammadGhaniGhazali.jpg",
			},
		],
	},
};

const divisionTabs = document.querySelectorAll(".structure-division-tab");
const divisionPanels = document.querySelector("[data-division-panel]");
const structureMember = document.querySelector(".structure-member-grid");
const leaderPhoto = document.getElementById("photo-leader-division");

divisionTabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		const selectedDivision = tab.dataset.division;

		// Ubah tampilan tab aktif
		divisionTabs.forEach((item) => {
			const isActive = item === tab;
			item.classList.toggle("is-active", isActive);
			item.setAttribute("aria-pressed", isActive);
		});

		// Tampilkan panel divisi yang dipilih
		divisionPanels.dataset.divisionPanel = selectedDivision;
		console.log(divisionPanels);
		tampilDataDivisi(selectedDivision.toUpperCase());
	});
});

function tampilDataDivisi(divisiData) {
	divisi = DATA_DIVISI[divisiData];
	document.getElementById("title-division").textContent =
		`Divisi ${divisi.title.toUpperCase()}`;
	document.getElementById("description-division").textContent =
		`${divisi.deskripsi}`;
	document.getElementById("title-leader-division").textContent =
		`KETUA DIVISI ${divisi.title.toUpperCase()}`;
	document.getElementById("leader-division").textContent = `${divisi.ketua}`;

	leaderPhoto.innerHTML = `
    <img
        src="../assets/img/${divisi.fotoKetua}"
        alt="Foto ${divisi.ketua}"
    >	
	`;
	structureMember.innerHTML = "";
	divisi.anggota.forEach((anggota) => {
		structureMember.innerHTML += `
      <article class="structure-member-item">
        <span class="structure-member-avatar"
          >
					${
						anggota.foto
							? `<img
              src="../assets/img/foto-anggota/${anggota.foto}"
              alt="Foto ${anggota.nama}"
            `
							: `
						<svg viewBox="0 0 24 24">
							<circle cx="12" cy="7.5" r="3.1"></circle>
							<path
								d="M5.8 20v-1.8a6.2 6.2 0 0 1 12.4 0V20"
							></path>
						</svg
						`
					}
        ></span>
        <span
          ><strong>${anggota.nama}</strong
          ><small>${anggota.posisi ? anggota.posisi : `Anggota ${divisi.title.toUpperCase()}`}</small></span
        >
      </article>
    `;
	});
}

document.addEventListener("DOMContentLoaded", () => {
	tampilDataDivisi(divisionPanels.dataset.divisionPanel.toUpperCase());
});
