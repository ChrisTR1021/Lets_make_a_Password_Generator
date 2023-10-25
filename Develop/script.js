// Assignment Code
var characterLimitElement = document.getElementById("characterLimit");
var addUppercaseElement = document.getElementById("addUppercase");
var addLowercaseElement = document.getElementById("addLowercase");
var generatordetails = document.getElementById("generatordetails");
var generateBtn = document.getElementById("generate");
var addNumbersElement = document.getElementById("addNumbers");
var addSymbolsElement = document.getElementById("addSymbols");

var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var symbolChars = ["!", "@", "#", "$", "%", "^", "&", "*",];
var numberChar = ["0","1","2","3","4","5","6","7","8","9"];
var possible_password = []
function generatePassword() {
  console.log(addSymbolsElement.checked);
  var limit = Number(characterLimitElement.value);
  var symbolsincluded = addSymbolsElement.checked;
  var addUppercase = addUppercaseElement.checked;
  var addLowercase = addLowercaseElement.checked;
  var numbersincluded = addNumbersElement.checked;
  console.log(symbolsincluded);
  if (symbolsincluded === true) {
    console.log("before", possible_password)
    possible_password = possible_password.concat(symbolChars);
    console.log("after", possible_password)
  }
  if (addUppercase === true) {
    possible_password = possible_password.concat(uppercaseChars);
  }
  if (addLowercase === true) {
    possible_password = possible_password.concat(lowercaseChars);
  }
  if (numbersincluded === true) {
    possible_password = possible_password.concat(numberChar);
  }
  let newPassword = [];
  for (let i = 0; i < limit; i++) {
    let random_number = Math.floor(Math.random() * possible_password.length);
    let character = possible_password[random_number];
    newPassword.push(character);
  }
  return newPassword;
}
  // Add event listener to generate button
generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  var password = generatePassword()
  passwordElement = document.querySelector("#password")
  passwordElement.value = password;
});