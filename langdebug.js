function langcheck() {
	if (langsel.value.toString() == "en") {
		loadlangen();
	}
	if (langsel.value.toString() == "jp") {
		loadlangjp();
	}
}

function loadlangen() {
	console.log("Loading language");
	try {
		loadlang("en")
		console.log("Done!");
		console.log("Setting Language")
		setTimeout(() => {  
			langtext.innerText = lang[0];
			console.log("Done!");
		}, 1500);
	}
	catch {
		console.log("Error loading sugdb");
	}
	
}

function loadlangjp() {
	console.log("Loading language");
	try {
		loadlang("jp")
		console.log("Done!");
		console.log("Setting Language")
		setTimeout(() => {  
			langtext.innerText = lang[0];
			console.log("Done!");
		}, 1500);
	}
	catch {
		console.log("Error loading sugdb");
	}
	
}