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

// Password Content as an Object with three keys //
passwordCriteria = {
  specialChars: ['"', '!', '#', '%', '$', '%', '&', '(', ')', '*', '+', "'", ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '^', '+', '`', '{' , '}', '|', '~' ],
  letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
};

// Variables within the function that can be renamed depending on placement within function //
var create;

// Defining function: generatePassword //
function generatePassword () {
  var create = Number(prompt("Please provide a number between 8 and 128 for the number of characters you would like your password to be."))
};
  function decision () {
    if (create < 8 || create > 128) {
      create = Number(prompt("You must choose a number between 8 and 128"))
    }
    else if (!create) {
      alert("You must create a password")
    }
    else (create >= 8 || create <= 128) {
      
    }
  }