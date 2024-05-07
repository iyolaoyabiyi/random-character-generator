const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let options = {
  type: "ad",
  numOfAlpha: 2,
  numOfDig: 5
}

function generateRandomNumber(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const rep = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[rep]] = [arr[rep], arr[i]];
  }
  return arr;
}
function randomCharacters({type, numOfAlpha, numOfDig}) {
  type = type.toLowerCase();
  let output = "";
  function setOutput(arr) {
    let random = generateRandomNumber(0,arr.length - 1);
      output += arr[random];
  }
  function randomAlpha() {
    for (let i = 0; i < numOfAlpha; i++) {
      setOutput(letters);
    }
  }
  function randomDig() {
    for (let i = 0; i < numOfDig; i++) {
      setOutput(digits);
    }
  }
  function randomMixed() {
    randomAlpha();
    randomDig();
    let newChars = output.split("");
    let newCharsLnt = newChars.length;
    output = "";
    newChars = shuffleArray(newChars);
    for (let i = 0; i < newCharsLnt; i++) {
      output += newChars[i];
    }
  }
  function randomChar() {
    for (let i = 0; i < generateRandomNumber(5, 10); i++) {
      setOutput([...letters, ...digits]);
    }
  }
  switch (type) {
    case "alpha":
    case "a":
      randomAlpha();
      break;
    case "digit":
    case "d":
      randomDig();
      break;
    case "alphadigit":
    case "ad":
      randomAlpha();
      randomDig();
      break;
    case "digitalpha":
    case "da":
      randomDig();
      randomAlpha();
      break;
    case "mixed":
    case "m":
      randomMixed();
      break;
    case "all":
    default:
      randomChar();
      break;
  }
  
  return output;
}
let randomCharacter = randomCharacters(options);
console.log(randomCharacter);