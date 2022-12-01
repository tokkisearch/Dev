function debugloadnewsdb() {
	console.log("Loading newsdb");
	try {
		loadnewsdb()
		console.log("Done!");
		console.log("displaying result")
		setTimeout(() => {  
			dispnews("dummy");
			console.log("Done!");
			console.log("Clearing NewsDB");
			clearnewsdb();
			console.log("Done!");
		}, 1500);
	}
	catch {
		console.log("Error loading sugdb");
	}
	
}