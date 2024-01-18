console.log("js ok");

let userNum;
do {
  userNum = parseInt(prompt("inserisci un numero compreso tra 1 e 5"));
} while (isNaN(userNum) || userNum > 5 || userNum < 1);

console.log(`il numero del user è: ${userNum}`);
let userChoice;
do {
  userChoice = prompt("scegli 'pari' o 'dispari'");
  userChoice = userChoice.toLowerCase();
} while (!(userChoice != "pari" || userChoice != "dispari"));

let cpuNum = randomiseNum(1, 5);
if (isNaN(cpuNum)) console.warn("il valore del numero generato non è corretto");
console.log(`il numero del cpu è: ${cpuNum}`);
let sum = userNum + cpuNum;
console.log(`la somma dei due numeri è: ${sum}`);
const evenOrOdd = isEven(sum);
if (evenOrOdd == true) {
  if (userChoice == "pari") {
    alert("ha vinto il user");
  } else {
    alert("ha vinto il cpu");
  }
} else {
  if (userChoice == "dispari") {
    alert("ha vinto il user");
  } else {
    alert("ha vinto il cpu");
  }
}

function randomiseNum(min = 1, max = 100) {
  if (isNaN(max) || isNaN(min)) {
    console.error("i valori dei parametri non sono corretti");
    return;
  }
  if (min > max) {
    console.error(
      "il valore del limite minore e superiore a valore del limite massimo"
    );
    return;
  }
  let randNum = Math.floor(Math.random() * (max - min) + min);
  return randNum;
}

function isEven(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return;
  }
}
