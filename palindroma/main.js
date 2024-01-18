console.log("js ok");

const text = prompt("inserisci il testo da verificare se palindromo");

const palindrom = isPalindrom(text);
if (palindrom == true) {
  alert(`il tuo testo inserito "${text}" è palindromo`);
} else {
  alert(`il tuo testo inserito "${text}" NON è palindromo`);
}

/**
 *
 * @param {string} msg
 * @returns {boolean}
 */
function isPalindrom(msg) {
  msg = msg.toLowerCase();
  msg = msg.trim();
  console.log(msg);
  let reversedMsg = "";
  for (let i = msg.length - 1; i >= 0; i--) {
    reversedMsg += msg[i];
  }
  // console.log(reversedMsg);
  for (let i = 0; i < msg.length; i++) {
    if (msg[i] == reversedMsg[i]) {
      continue;
    } else {
      return;
    }
  }
  return true;
}
