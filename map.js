// Put your zillow.com API key here
var zwsid = "X1-ZWz17lummk7oqz_77v70";

var request = new XMLHttpRequest();

function initialize () {
}

// function displayResult () {
    // if (request.readyState == 4) {
        // var xml = request.responseXML.documentElement;
        // var value = xml.getElementsByTagName("zestimate")[0].getElementsByTagName("amount")[0].innerHTML;
	// document.getElementById("output").innerHTML = value;
    // }
// }

function sendRequest () {
    request.onreadystatechange = displayResult;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zipcode = document.getElementById("zipcode").value;
    request.open("GET","proxy.php?zws-id="+zwsid+"&address="+address+"&citystatezip="+city+"+"+state+"+"+zipcode);
    request.withCredentials = "true";
    request.send(null);
	xhr.setRequestHeader("Accept","application/json");
	xhr.onreadystatechange = function () {
		if (this.readyState == 4 && this.status==200) 
		{
			var xVar = this.responseText;
			var json = JSON.parse(this.responseText);
			var str = JSON.stringify(json,undefined,2);
			document.getElementById("output").innerHTML = "<pre>" + str + "</pre>";
}
xhr.send(null);

