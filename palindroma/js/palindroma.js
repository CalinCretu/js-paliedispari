function askForWord() {
  var givenWord = prompt("Write a WORD:");
  document.getElementById("word").innerHTML = givenWord;
}

document.getElementById("button").addEventListener("click", askForWord);