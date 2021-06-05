//I worked with Dana on this code in a study group. 

var btn = document.getElementById('generate');


var length;
var upper;
var lower;
var numeric;
var character;
var charset = "";

btn.onclick = function(writePassword) 
{
  var retVal="";
    length=prompt("Choose a length. Passwords must be between 8-128 characters");
       /*//choose a length

       if (promptLength >= 8 && promptLength <= 128) {
        generatePassword ();
              }
            else {
              window.alert("Please select a valid length.");
            }*/
    lower = confirm ("Do you want to include lowercase letters?");
    upper = confirm ("Do you want to include uppercase letters?");
    numeric = confirm ("Do you want to include numbers?");
    special = confirm ("Do you want to include special characters?");


if (lower === true ) {
  charset += "abcdefghijklmnopqrstuvwxyz";
}

if (lower === true ) {
  charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

if (lower === true ) {
  charset += "123456789";
}

if (lower === true ) {
  charset += "!@#$%^&*-+_=";
}

for (var i = 0, n = charset.length; i < length; ++i) {
  retVal += charset.charAt(Math.floor(Math.random() * n));
}


document.getElementById("password").innerHTML=retVal;
console.log(retVal)
}

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("password");

  passwordText.value = password;
}

/*GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page*/


//generate random 
// var randomNumber = function (min, max) {
//   var value = Math.floor(Math.random() * (max - min + 1) + min);

//   return value;
// };

// Get references to the #generate element
/*
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var writePassword = function() {
//var password = generatePassword();
 //var passwordText = document.querySelector("#password");
  generateBtn = window.alert("Valid passwords must contain at least one uppercase letter, number, and special character and must be 8-128 characters. Click OK to continue.");
 var promptCriteria = window.prompt("Please include at least one UPPERCASE, NUMBER, and SPECIAL CHARACTER. Enter AGREE to continue.");

  if (promptCriteria === "agree" || promptCriteria === "AGREE") {
    var promptLength = window.prompt("Please enter the length of your password. Passwords must be 8-128 characters.");
}
  else {
    window.alert("Please enter AGREE to continue");
  }
    
    //choose a length

    if (promptLength >= 8 && promptLength <= 128) {
generatePassword ();
      }
    else {
      window.alert("Please select a valid length.");
    }

  passwordText.value = password;

};

// function generatePassword(passwordLength) {
//   var numberChars = "0123456789";
//   var upperChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
//   var lowerChars = "qwertyuiopasdfghjklzxcvbnm";
//   var specicalCharacters = ["!","@","#","%","$","&","*","=","+","-"];
//   var allChars = numberChars + upperChars + lowerChars + specicalCharacters;
//   var randPasswordArray = Array(passwordLength);
//   randPasswordArray[0] = numberChars;
//   randPasswordArray[1] = upperChars;
//   randPasswordArray[2] = lowerChars;
//   randCharacterArray[3] = specialCharacters

// }

// function randomArray(array) {
//   for (var i = array.length - 1; i > 0; i-- ) {
//     var j = Math.floor(Math.random() * (i + 1 ));
//     var temp = array[i];
//     array[i] = array[j]
//     array[j] = temp;
//   }
//   return array;
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// var passwordCombination = ["alpha, number, special"];
/*
var alpha = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];
var number = [0,1,2,3,4,5,6,7,8,9]
var special = ["!","@","#","%","$","&","*","=","+","-"]

// for (var i=0; i < 26; i++) 

// Assignment Code
var generateBtn = document.querySelector("#generate");
alert("Would you like to include uppercase letters?")


// Math.floor((Math.random() * 10) + 1);
//   return randomNumber;

// Write password to the #password input
function writePassword() {
  var password = generatePassword(length, characters) => {
    for (i=0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return password;
  };

  function CheckLength(passwordText) {
    var password = document.getElementById().value
  }


  function passwordText = passwordCombination()
  var passwordText = document.querySelector("#password") {
      if(passwordText.length >= minlength && passwordText.length <= maxlength)

  }

  passwordText.value = password;

}

var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
function generate () {
  for (i = 0; i < 10; i++) {
    var randomLetter = arr[Math.floor(arr.length * Math.random())];
    document.write(randomLetter); 
  } 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//var promptwritePassword = click 


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

var specicalCharacters = ["!","@","#","%","$","&","*","=","+","-"];
console.log(specicalCharacters);
for (i=0; i < specicalCharacters.length; i++) {
  console.log(specicalCharacters[i])
}

var passwordCombination = [lowerLetters, upperLetters, randomNumber, specicalCharacters];
console.log(passwordCombination);

// var generate = function(passwordCombination) {

// }

//return a random number between 1 and 10: m
//Math.floor((Math.random() * 10) + 1);
// return value;

//var randomNumber = function(0,9) {
// var value = Math.floor(Math.random() * (60 - 40 + 1)) + 40;
// return value;
//};

// reset() method

//math.max() prevents values from going negativer

//objects: document
          // query selector */

          //run function
//writePassword();

