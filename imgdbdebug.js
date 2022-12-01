function debugloadimgdb() {
	console.log("Loading imgdb");
	try {
		loadimgdb()
		console.log("Done!");
		console.log("displaying result")
		setTimeout(() => {  
			dispimg("dogs");
			console.log("Done!");
			console.log("Clearing ImgDB");
			clearimgdb();
			console.log("Done!");
		}, 1500);
	}
	catch {
		console.log("Error loading sugdb");
	}
	
}