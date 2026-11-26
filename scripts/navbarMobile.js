// Mengambil tombol hamburger dan menu navigasi
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

// Memeriksa apakah elemen navbar tersedia
if (navToggle && navLinks) {
	// Membuka dan menutup menu ketika tombol diklik
	navToggle.addEventListener("click", () => {
		const isOpen = navLinks.classList.toggle("is-open");

		navToggle.classList.toggle("is-open", isOpen);

		navToggle.setAttribute("aria-expanded", isOpen);

		navToggle.setAttribute("aria-label", isOpen ? "Tutup menu" : "Buka menu");
	});

	// Menutup menu ketika salah satu link diklik
	navLinks.querySelectorAll("a").forEach((link) => {
		link.addEventListener("click", () => {
			navLinks.classList.remove("is-open");
			navToggle.classList.remove("is-open");
			navToggle.setAttribute("aria-expanded", "false");
			navToggle.setAttribute("aria-label", "Buka menu");
		});
	});

	// Menutup menu ketika pengguna klik di luar navbar
	document.addEventListener("click", (event) => {
		if (!navToggle.contains(event.target) && !navLinks.contains(event.target)) {
			navLinks.classList.remove("is-open");
			navToggle.classList.remove("is-open");
			navToggle.setAttribute("aria-expanded", "false");
			navToggle.setAttribute("aria-label", "Buka menu");
		}
	});
}
