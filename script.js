var button = document.getElementById("button");
var proverb = document.getElementById("source");
var translation = document.getElementById("translation");

button.addEventListener('click', getNewProverb);
window.onload = getNewProverb();

function getNewProverb() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', "https://eda-te-reo.herokuapp.com/api/proverbs", false);
  xhr.send();
  var response = JSON.parse(xhr.responseText);
  proverb.innerHTML = "<p><strong>Proverb:</strong> " + response.source + "</p>";
  translation.innerHTML = "<p><strong>Translation:</strong> " + response.translation + "</p>";
}
