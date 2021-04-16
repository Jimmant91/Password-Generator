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

// Password content as an Object with three Keys //
passwordCriteria = {
  specialChars: [" !#%$%&'()*+,-./:;<=>?@[\]^+`[]|~"],
  letters: ['abcdefghijklmnopqrstuvwxyz'],
  numbers: [1234567890]
}
  
// Uppercase Letters //
var upperLetters = passwordCriteria.letters.map(letters => letters.toUpperCase());

// User input variables //
var confNum;
var confChar;
var confUpper;
var confLower;
var selections = [] // Used for concatenating key values for password(s) //

// Variables within the function that can be redefined depending on placement within function //
var create;

// Defining function: generatePassword //
function generatePassword () {
  create = parseInt(prompt("Please provide a number between 8 and 128 for the number of characters you would like your password to be"))
  if (!create) {
    alert("You must create a password");
    generatePassword ();
  }
  else if (create < 8 || create > 128) {
    create = parseInt(prompt("You must choose a number between 8 and 128"));
    generatePassword ();
  }
  // Else statement for confirm prompts to select password criteria for user //
  else {
    confNum = confirm("Would you like to include numbers?"),
    confUpper = confirm("Would you like to incude uppercase letters?"),
    confLower = confirm("Would you like to include lowercase letters?"),
    confChar = confirm("Would you like to include special characters?")
  };

  // Starting with all negative selections first as this can only have one outcome //
  if (!confNum && !confUpper && !confLower && !confChar) {
    selection = alert("You must choose at least one critera");
    generatePassword ();
  }

  // All combinations of selections for else if...I know there is a way to push each selection to an array, but I could use a suggestion getting that code correct //
  
  else if (confNum && confUpper && confLower && confChar) {
    selections = passwordCriteria.specialChars + passwordCriteria.letters + passwordCriteria.numbers + upperLetters
  }

  else if (confNum && confUpper && confLower) {
    selections = passwordCriteria.letters + passwordCriteria.numbers + upperLetters
  }

  else if (confChar && confUpper && confLower) {
    selections = passwordCriteria.specialChars + passwordCriteria.letters + upperLetters
  }

  else if (confNum && confChar && confLower) {
    selections = passwordCriteria.numbers + passwordCriteria.specialChars + passwordCriteria.letters
  }

  else if (confNum && confChar && confUpper) {
    selections = passwordCriteria.numbers + passwordCriteria.specialChars + upperLetters
  }

  else if (confNum && confUpper) {
    selections = passwordCriteria.numbers + upperLetters
  }

  else if (confNum && confLower) {
    selections = passwordCriteria.numbers + passwordCriteria.letters
  }

  else if (confNum && confChar) {
    selections = passwordCriteria.numbers + passwordCriteria.specialChars
  }

  else if (confUpper && confLower) {
    selections = upperLetters + passwordCriteria.lower
  }

  else if (confUpper && confChar) {
    selections = upperLetters + passwordCriteria.specialChars
  }

  else if (confLower && confChar) {
    selections = passwordCriteria.lower + passwordCriteria.specialChars
  }

  else if (confNum) {
    selections = passwordCriteria.numbers
  }

  else if (confUpper) {
    selections = upperLetters
  }

  else if (confLower) {
    selections = passwordCriteria.lower
  }

  else {
    selections = passwordCriteria.specialChars
  };

  // Actualizing the password //
  
  const yourNewPassword = []

  // Math, Math, Math, Math, Math!!//
  
  for (var i = 0; i < create; i++) {
    var selectionsMade = selections[Math.floor(Math.random() * selections.length)];
    yourNewPassword.push(selectionsMade)
  };

  // Removing those commas! //
  var password = yourNewPassword.join("")

  return password
}