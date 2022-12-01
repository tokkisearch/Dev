function loadsugdb() {
	keyword = "dog";
	sug.push(keyword);
	keyword = "Dog";
	sug.push(keyword);
	keyword = "dogs";
	sug.push(keyword);
	keyword = "Dogs";
	sug.push(keyword);
}

function showsug() {
	sugboxin.innerHTML = '';
	sugbox.style.display = "block";
	sugboxh = 1
	sugintxt = sugin.value;
	for (i = 0; i < sug.length; i++) {
		if (sug[i].includes(sugintxt)) {
			sugboxh += 32;
			sugbox.style.height = sugboxh + "px";
			sugboxin.innerHTML += '<p class="sugtxt">' + sug[i] + '</p';
		}
	}
}