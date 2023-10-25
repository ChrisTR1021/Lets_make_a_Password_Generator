// Assignment Code
const characterLimitElement = document.getElementById("characterLimit");
const addUppercaseElement = document.getElementById("addUppercase");
const addLowercaseElement = document.getElementById("addLowercase");
const generatordetails = document.getElementById("generatordetails");
const generateBtn = document.getElementById("generate");
const addNumbersElement = document.getElementById("addNumbers");
const addSymbolsElement = document.getElementById("addSymbols");

const uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
const lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const symbolChars = ["!", "@", "#", "$", "%", "^", "&", "*",];
const numberChar = ["0","1","2","3","4","5","6","7","8","9"];


function generatePassword() {
  const limit = characterLimitElement.value;
  const symbolsincluded = addSymbolsElement.checked;
  const addUppercase = addUppercaseElement.checked;
  const addLowercase = addLowercaseElement.checked;
  const numbersincluded = addNumbersElement.checked;
  
  let possible_password = const symbolChars = ["!", "@", "#", "$", "%", "^", "&", "*"];
  if (symbolsincluded === true) {
    possible_password = possible_password.concat(symbolChars);
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const password = generatePassword()
  passwordElement = document.querySelector("#password")
  passwordElement.value = password;
});
