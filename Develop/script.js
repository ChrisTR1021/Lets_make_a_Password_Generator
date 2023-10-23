// Assignment Code
const characterlimit = document.getElementById ('characterlimit')
const generatordetails = document.getElementById
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
characterlimit.addEventListener("input", synccharacterlimit);
generatordetails.addEventListener('submit', e => {
  e.preventDefault()
})