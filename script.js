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
  specialChars: ['"', '!', '#', '%', '$', '%', '&', '(', ')', '*', '+', "'", ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '^', '+', '`', '{' , '}', '|', '~' ],
  letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
}


// Uppercase Letters //
var upperLetters = passwordCriteria.letters.map(letters => letters.toUpperCase());

// User input variables //
var confNum;
var confChar;
var confUpper;
var confLower;
var selections; // Used for concatenating key values for password(s) //

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
  else if (confNum && confUpper && confLower && confChar) {
    selections = passwordCriteria.specialChars + passwordCriteria.letters + passwordCriteria.numbers + upperLetters
  };

  var password = []
 
  for (var i = 0; i < create; i++) {
    var selectionsMade = selections[Math.floor(Math.random() * selections.length)];
    password.push(selectionsMade)
  };

  return password
}