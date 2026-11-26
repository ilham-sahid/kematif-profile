const sidebar = document.querySelectorAll(".sidebar-about");

sidebar.forEach((element) => {
	element.addEventListener("click", () => {
		sidebar.forEach((e) => {
			e.classList.remove("about-v2-toc-active");
		});
		element.classList.add("about-v2-toc-active");
	});
});
