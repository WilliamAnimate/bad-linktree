document.getElementById("content").style.display = "none";
document.getElementById("loading").style.display = "block";

// setTimeout(function() {
// 	document.getElementById("loading").classList.add("loadingout");
// 	setTimeout(function() {
// 		document.getElementById("loading").remove();
// 	}, 450)
// }, 1000)

// wait until webpage loaded
window.onload = () => {
	// setTimeout(function() {
	init();
	// }, 3000); // stall loading
};

function init() {
	console.log("page is fully loaded");
	document.getElementById("content").style.display = "block";
	setTimeout(function() {
		document.getElementById("loading").classList.add("loadingout");
		setTimeout(function() {
			document.getElementById("loading").remove();
		}, 450)
	}, 500)

	document.body.classList.add("animate"); // FIXME: loading text flashes because this one is triggering animation on everything.
	document.body.classList.add("blurred");
}