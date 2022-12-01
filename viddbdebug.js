function debugloadviddb() {
	console.log("Loading viddb");
	try {
		loadviddb()
		console.log("Done!");
		console.log("displaying result")
		setTimeout(() => {  
			dispvid("dogs");
			console.log("Done!");
			console.log("Clearing VidDB");
			clearviddb();
			console.log("Done!");
		}, 1500);
	}
	catch {
		console.log("Error loading sugdb");
	}
	
}

function debugvidcust(keyword) {
	resultboxin.innerHTML = '';
	console.log("Loading viddb");
	try {
		loadviddb()
		console.log("Done!");
		console.log("displaying result")
		setTimeout(() => {  
			dispvid(keyword);
			console.log("Done!");
			console.log("Clearing VidDB");
			clearviddb();
			console.log("Done!");
		}, 1500);
	}
	catch {
		console.log("Error loading sugdb");
	}
	
}