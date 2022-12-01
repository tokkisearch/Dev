function debugloadsugdb() {
	console.log("Loading sugdb");
	try {
		loadsugdb()
		console.log("Done!");
	}
	catch {
		console.log("Error loading sugdb");
	}
}

function debugshowsug() {
	sugintxt = sugin.value;
	console.log(sugintxt + " has be typed");
	console.log("looking for suggestions for: " + sugintxt);
	showsug();
}