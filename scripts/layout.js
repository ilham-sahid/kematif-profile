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
			  <div class="footer-logo">
    <img src="${BASE_URL}/assets/img/foto-lainnya/kematif_logo.webp" alt="Logo KEMATIF" />
    <div class="footer-logo-text">
      <span class="brand-title">Keluarga Mahasiswa<br />Teknik Informatika</span>
      <span class="brand-subtitle">JTI • POLITEKNIK NEGERI JEMBER</span>
    </div>
  </div>

  <!-- 2. Deskripsi Singkat -->
  <p class="footer-desc">
    Wadah aspirasi, pengembangan minat bakat, dan kolaborasi mahasiswa
    Program Studi Teknik Informatika dalam berproses di era digital.
  </p>

  <!-- 3. Ikon Media Sosial dengan Border Tipis -->
  <div class="footer-socials">
    <a href="https://instagram.com/kematif_polije" target="_blank" aria-label="Instagram">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
    </a>
    <a href="https://youtube.com/@kematif.polije" target="_blank" aria-label="YouTube">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
    </a>
    <a href="https://www.tiktok.com/@kematif_polije" target="_blank" aria-label="TikTok">
			<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
				<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
			</svg>
    </a>
    <a href="mailto:kematif.polije@gmail.com" aria-label="Email">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    </a>
  </div>
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

      <!-- Bagian Baru untuk Deretan Logo -->
      <div class="footer-affiliations">
        <span class="section-label section-label-light">BERAFILIASI DENGAN</span>
        <div class="affiliation-logos">
          <img src="${BASE_URL}/assets/img/foto-lainnya/polije.webp" alt="Politeknik Negeri Jember" />
          <img src="${BASE_URL}/assets/img/foto-lainnya/polije_teks.webp" alt="Jurusan Teknologi Informasi" />
          <img src="${BASE_URL}/assets/img/foto-lainnya/jti.webp" alt="HMJTI" />
          <img src="${BASE_URL}/assets/img/foto-lainnya/hmjti.webp" alt="Teknik Informatika" />
          <img src="${BASE_URL}/assets/img/foto-lainnya/prodi_tif.webp" alt="KEMATIF" />
        </div>
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
