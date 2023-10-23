// Assignment Code
const characterLimitElement = document.getElementById("characterLimit");
const addUppercaseElement = document.getElementById("addUppercase");
const generatordetails = document.getElementById("generatordetails");
const generateBtn = document.getElementById("generate");
const addNumbersElement = document.getElementById("addNumbers");
const addSymbolsElement = document.getElementById("addSymbols");

const uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
const lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const symbolChars = ["!", "@", "#", "$", "%", "^", "&", "*",];
const numberChar = ["0","1","2","3","4","5","6","7","8","9"];

// function passwordBeingGenerated(
//   characterlimit,
//   addUppercase,
//   addnumbers,
//   addsymbols
// ) {
//   let charcodes = lowercase_CHAR_CODES;
//   if (addUppercase) charcodes = chardcodes.concat(uppercase_CHAR_CODES);
//   if (addnumbers) charcodes = charcodes(number_char_codes);
//   if (addsymbols) charcodes = chardcodes.concat(symbol_CHAR_CODES);
//   return charcodes 
// }

// function arraylowerandhigher(low, high) {
//   const array = [];
//   for (let i = low; i <= high; i++) {
//     array.push(i);
//   }
//   return array;
// }

// Add event listener to generate button
generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const limit = characterLimitElement.value;
  const symbolsincluded = addSymbolsElement.checked;
  const addUppercase = addUppercaseElement.checked;
  const numbersincluded = addNumbersElement.checked;
  const password = passwordBeingGenerated(
    limit,
    addUppercase,
    symbolsincluded,
    numbersincluded
  );
});
