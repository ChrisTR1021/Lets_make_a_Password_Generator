// Assignment Code
const characterlimit = document.getElementById ('characterlimit')
const adduppercaseElement = document.getElementById ('adduppercase')
const generatordetails = document.getElementById


// Write password to the #password input

function synccharacterlimit(e) {
  const value = e.target.value
  characterlimit.value = value
}


// Add event listener to generate button
characterlimit.addEventListener("input", synccharacterlimit);
generatordetails.addEventListener('submit', e => {
  e.preventDefault()
  const characterlimit = characterlimit.value
  const adduppercase = adduppercaseElement
  const password = passwordbeinggenerated(characterlimit, uppercaseincluded,
    symbolsincluded, numbersincluded)
})