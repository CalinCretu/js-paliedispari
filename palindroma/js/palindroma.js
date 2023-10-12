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

  resultDOMElement.innerHTML = "The word is a palindrome";

} else {

  resultDOMElement.innerHTML = "The word is not a palindrome";

}