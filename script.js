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

