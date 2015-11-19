function toggleMenu(menu) {
	var menu = document.getElementById(menu);
	if (menu.dataset.opened == "no") {
		menu.style.transform = "perspective(800px) rotateX(0deg)";
		menu.dataset.opened = "yes";
	} else {
		menu.style.transform = "perspective(800px) rotateX(90deg)";
		menu.dataset.opened = "no";
	}
}