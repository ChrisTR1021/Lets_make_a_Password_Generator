// Assignment Code
const characterlimit = document.getElementById('characterlimit');
const adduppercaseElement = document.getElementById('adduppercase');
const generatordetails = document.getElementById('generatordetails');
const addnumbers = document.getElementById('addnumbers');
const addsymbols = document.getElementById('addsymbols')


// Write password to the #password input

function synccharacterlimit(e) {
  const value = e.target.value
  characterlimit.value = value
}


// Add event listener to generate button
characterlimit.addEventListener("input", synccharacterlimit);
generatordetails.addEventListener('submit', e => {
  e.preventDefault();
  const limit = characterlimit.value; // Use a different name for the local variable
  const addUppercase = adduppercaseElement.checked
  const numbersincluded = addnumbersElement.checked
  const symbolsincluded = addsymbolsElement.checked 
  const password = passwordbeinggenerated(limit, addUppercase, symbolsincluded, numbersincluded);
});