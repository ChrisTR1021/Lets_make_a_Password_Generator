// Assignment Code
const characterlimit = document.getElementById('characterlimit');
const adduppercaseElement = document.getElementById('adduppercase');
const generatordetails = document.getElementById('generatordetails');
const addnumbers = document.getElementById('addnumbers');
const addsymbols = document.getElementById('addsymbols')


const uppercase_char_codes = arraylowerandhigher(65, 90)
const lowercase_char_codes = arraylowerandhigher(97, 122)
const symbol_char_codes = arraylowerandhigher(33, 47).concat(
  arraylowerandhigher(58, 64)
)
const number_char_codes = arraylowerandhigher(48, 57)

function synccharacterlimit(e) {
  const value = e.target.value
  characterlimit.value = value
}
function passwordgenerated(characterlimit, addUppercase, addnumbers, 
  addsymbols) {
   String.fromCharCode(65)
  }

  function arraylowerandhigher(low, high) {
    for (let i = low; i <= high; i++) {

    }
    return array
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