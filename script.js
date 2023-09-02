document.getElementById("content").style.display = "none";
document.getElementById("loading").style.display = "block";

randomMessage();
document.body.classList.remove("blurred");
document.body.classList.remove("animate");

// wait until webpage loaded
window.onload = () => {
	console.log("page is fully loaded");
	init();

	if (window.matchMedia) {
		const colorModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

		// is there any way we can use something that ISN'T deprecated?
		colorModeQuery.addListener((e) => {
			var image = new Image();

			image.src = getComputedStyle(document.body).getPropertyValue('--image-background-bg').slice(4, -1).replace(/["']/g, '');
			init_load_msg(true);

			// if i.complete is cache
			if (image.complete) {
				init_load_msg(false);
			} else {
				// no cache, wait for it to load
				image.onload = init_load_msg(false);
			}
		});
	}
};

function init() {
	document.getElementById("content").style.display = "block";

	init_load_msg(false);
	setTimeout(function() {
		document.body.classList.add("blurred");

		document.body.classList.add("animate"); // FIXME: loading text flashes because this one is triggering animation on everything.
		// document.getElementById("content").classList.add("animate");
	}, 300);

	checkColorMode();
}

function init_load_msg(show) {
	const loading=document.getElementById("loading");
	if (show) {
		randomMessage();
		loading.classList.remove("loadingout");
		loading.style.display = "block";
		loading.classList.add("loadingin");
		setTimeout(function() {
			loading.classList.remove("loadingin");
		}, 500);
	} else if (!show) {
		setTimeout(function() {
			loading.classList.add("loadingout");
			loading.classList.add("animate");
			setTimeout(function() {
				loading.style.display = "none";
			}, 450)
		}, 500)
	} else {
		console.warn("bad parameter for init_load_msg");
	}
}

function randomMessage() {
	let msgs = [
		"gimme a sec...",
		"loading...",
		"just a second...",
		"almost there...",
		"don't turn off your computer...",
		"loading assets...",
		"loading images...",
		"in a second...",
		"just a moment...",
		"caching content...",
		"downloading...",
		"loading in progress..."
	]
	document.getElementById("loadingtext").innerHTML=(msgs[Math.floor(msgs.length*Math.random())])
}

function checkColorMode() {
	if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
		console.log('Dark mode is enabled');
	} else {
		console.log('Light mode is enabled');
	}
}
