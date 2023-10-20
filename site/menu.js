function expandMenu() {
	$(".dropdown-menu").addClass("open");
	$("#dropdownMenuButton").attr("aria-expanded", true);
}

function collapseMenu() {
	$(".dropdown-menu").removeClass("open");
	$("#dropdownMenuButton").attr("aria-expanded", false);
}

$(document).ready( () => {
	$("#dropdownMenuButton").click( evt => {
		let expanded = $("#dropdownMenuButton").first().attr("aria-expanded") == "true"; // value is a String
		
		if (expanded) {
			collapseMenu();
		} else {
			expandMenu();
		}
	});
});
