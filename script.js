var xhr = new XMLHttpRequest();
xhr.open('GET', "https://eda-te-reo.herokuapp.com/api/proverbs", false);
xhr.send();
var response = JSON.parse(xhr.responseText);
console.log(response);

var source_text = documenet.getElementById("source");
var translation_text = documenet.getElementById("translation");
