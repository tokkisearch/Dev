function debugloadwebdb() {
	console.log("Loading webdb");
	try {
		loadwebdb()
		console.log("Done!");
		console.log("displaying result")
		setTimeout(() => {  
			dispweb("dogs");
			console.log("Done!");
			console.log("Clearing WebDB");
			clearwebdb();
			console.log("Done!");
		}, 1500);
	}
	catch {
		console.log("Error loading sugdb");
	}
	
}