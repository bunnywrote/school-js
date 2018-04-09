function getQuote() {
    var url = "https://web.ti.bfh.ch/~lhp2/js/services/quote.php";

	return new Promise(function(resolve, reject){
		resolve(get(url));
        reject(error);
	});
}

function toMorse(text) {
    var url = "https://web.ti.bfh.ch/~lhp2/js/services/morse.php";

	return new Promise(function(resolve, reject){
		resolve(get(`${url}?text=${text}`));
		reject(error);
	});
}

function get(url) {
	var  req = new XMLHttpRequest();
	req.open("GET", url, false);
	req.send(null);
	return req.responseText;
}

function addToList(quote, morse){
	var ul = document.getElementById("quotes");
	var li = document.createElement("li");

	li.appendChild(document.createTextNode(quote));
	li.appendChild(document.createElement("br"));
	li.appendChild(document.createTextNode(morse));

	ul.appendChild(li);
}

function convertToMorse(text){
	toMorse(text)
		.then(result => {
			addToList(text, result);
		})
		.catch(error => console.log(error));
}

function onLoading(){
	var loading = document.getElementById("loading");
	loading.setAttribute("display", "block");

	var ul = document.getElementById("quotes");
	ul.setAttribute("display", "none");
}

function afterLoading(){
	var loading = document.getElementById("loading");
	loading.setAttribute("style", "display: none;");

	var ul = document.getElementById("quotes");
	ul.setAttribute("style", "display: block;");
}

function getQuotes(){
	for(let i = 0; i < 4; i++){
		getQuote()
			.then(result => {
				convertToMorse(result);
			})
			.catch(error => console.error(error));
	}

	afterLoading();
}

//onLoading();

getQuotes();

//afterLoading();