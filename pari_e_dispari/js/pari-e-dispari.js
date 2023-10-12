function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function game() {

  let choice = prompt("Scegli ' pari ' o ' dispari '");


  let userNumber = prompt("Inserisci un numero da 1 a 5:");


  let computerNumber = getRandomNumber(1, 5);


  let sum = parseInt(userNumber) + parseInt(computerNumber);
  console.log(sum)


  let winner;
  if (choice === 'pari' && sum % 2 === 0) {
    winner = "user";
    document.querySelector(".result").innerHTML = `The winner is ${winner}!`;
  }
  else if (choice === 'dispari' && sum % 2 !== 0) {
    winner = "user";
    document.querySelector(".result").innerHTML = `The winner is ${winner}!`;
  }
  else {
    winner = "computer";
    document.querySelector(".result").innerHTML = `The winner is ${winner}!`;
  }
}

const playButton = document.querySelector("#playButton");
playButton.addEventListener("click", game);
