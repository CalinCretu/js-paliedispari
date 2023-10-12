function refreshPage() {
  window.location.reload();
}

document.getElementById("button").addEventListener("click", refreshPage);

let word = prompt("Enter a word:");

function isPalindrome(word) {

  word = word.toLowerCase();

  const reversedWord = word.split("").reverse().join("");

  return word === reversedWord;

}

let resultDOMElement = document.getElementById("result");

if (isPalindrome(word)) {

  resultDOMElement.innerHTML = `La parola ${word}` + ' é palindroma';

} else {

  resultDOMElement.innerHTML = `La parola ${word}` + ' non é palindroma';

}