// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// my pseudo code below
// gonna need to create randomness and returns from LESSON FOUR

var lowerLetters = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
console.log(lowerLetters);
for (i=0; i < lowerLetters.length; i++) {
  console.log(lowerLetters[i])
}

var upperLetters = ["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Z","X","C","V","B","N","M"];
console.log(upperLetters);
for (i=0; i < upperLetters.length; i++) {
  console.log(upperLetters[i])
}

var randomNumber = [1,2,3,4,5,6,7,8,9];
console.log(randomNumber);
for (i=0; i < randomNumber.length; i++) {
  console.log(randomNumber[i])
}

var specicalCharacters = ["!","@","#","%","$","&","*","?"];
console.log(specicalCharacters);
for (i=0; i < specicalCharacters.length; i++) {
  console.log(specicalCharacters[i])
}

var passwordCombination = [lowerLetters, upperLetters, numbers, specicalCharacters];
console.log(passwordCombination);

// var generate = function(passwordCombination) {

// }

//math
//enemyHealth = Math.floor(Math.random() * 9)
// return value;

//var randomNumber = function(0,9) {
// var value = Math.floor(Math.random() * (60 - 40 + 1)) + 40;
// return value;
//};

// reset() method

//math.max() prevents values from going negativer