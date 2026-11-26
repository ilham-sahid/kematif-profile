const BASE_URL = "/kematif-profile";

document.getElementById("header-placeholder").innerHTML = `
		<header class="navbar-wrap">
			<nav class="navbar container" aria-label="Navigasi utama">
				<!-- Logo KEMATIF -->
				<a class="brand" href="${BASE_URL}/" aria-label="KEMATIF Beranda">
					<img src="${BASE_URL}/assets/logo-kematif.png" alt="Logo KEMATIF" />
				</a>

				<!-- Tombol hamburger untuk HP -->
				<button
					class="nav-toggle"
					type="button"
					aria-label="Buka menu"
					aria-expanded="false"
					aria-controls="primary-navigation"
				>
					<span></span>
					<span></span>
					<span></span>
				</button>

				<!-- Link navigasi -->
				<div class="nav-links" id="primary-navigation">
					<a href="${BASE_URL}/" data-page="index">Beranda</a>
					<a href="${BASE_URL}/pages/tentang-kami.html" data-page="tentang-kami">Tentang</a>
					<a href="${BASE_URL}/pages/struktur.html" data-page="struktur">Struktur</a>
					<a href="${BASE_URL}/pages/program-kerja.html" data-page="program-kerja">Program Kerja</a>
					<a href="${BASE_URL}/pages/keanggotaan.html" data-page="keanggotaan">Keanggotaan</a>
					<a href="${BASE_URL}/pages/kontak.html" data-page="kontak">Kontak</a>
				</div>
			</nav>
		</header>
`;

document.getElementById("footer-placeholder").innerHTML = `
  <footer class="footer" id="kontak">
    <div class="footer-inner container">
      <div class="footer-brand">
        <p>
          Keluarga Mahasiswa Teknik Informatika bersama berproses dan
          berkembang pada era digital.
        </p>
      </div>
      <div class="footer-nav">
      		<span class="section-label section-label-light">NAVIGASI</span>
					<a href="${BASE_URL}/">Beranda</a>
					<a href="${BASE_URL}/pages/tentang-kami.html">Tentang</a>
					<a href="${BASE_URL}/pages/struktur.html">Struktur</a>
					<a href="${BASE_URL}/pages/program-kerja.html">Program Kerja</a>
					<a href="${BASE_URL}/pages/keanggotaan.html">Keanggotaan</a>
					<a href="${BASE_URL}/pages/kontak.html">Kontak</a>
      </div>
      <div class="footer-contact">
        <span class="section-label section-label-light">KONTAK</span>
        <p>
          Jl. Mastrip, Kec. Sumbersari, Jember, Jawa Timur<br />Politeknik
          Negeri Jember
        </p>
        <p>kematif.polije@gmail.com</p>
        <p>08.00 - 16.00</p>
      </div>
      <div class="footer-bottom">
        © 2026 KEMATIF - Keluarga Mahasiswa Teknik Informatika. All rights
        reserved.
      </div>
    </div>
  </footer>
`;

const path = window.location.pathname;
const fileName = path.split("/").pop().replace(".html", "");
const currentPage = fileName === "" ? "index" : fileName;
const navbarPage = document.querySelectorAll("[data-page]");

navbarPage.forEach((page) => {
	page.classList.remove("active");
	if (page.dataset.page === currentPage) {
		page.classList.add("active");
	}
});
