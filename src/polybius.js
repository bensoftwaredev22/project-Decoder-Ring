// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
let polybiusSquare = { "a": 11, "b": 21, "c": 31, "d": 41, "e": 51, "f": 12, "g": 22, "h": 32, "i": 42, "j": 42, "k": 52, "l": 13, "m": 23, "N": 33, "o": 43, "p": 53, "q": 14, "r": 24, "s": 34, "t": 44, "u": 54, "v": 15, "w": 25, "x": 35, "y": 45, "z": 55}
let newPolybius = Object.keys(polybiusSquare);
let valuesPolybius = Object.values(polybiusSquare)

  function encoder(input) {
    let result = ""
    for (let i = 0; i < input.length; i++) {
      if (newPolybius.includes(input[i])) {
        for (let value in polybiusSquare) {
          if (value === input[i]) {
            result += polybiusSquare[value]
          }
        }
      } else {
        result += input[i];
      }
    }
    console.log(input)
    console.log(result)
    return result
  }
  function decoder(input) {

 let newInput = input.replace(/ /g, '00')
 if (newInput.length % 2 != 0) return false;
 let inputArray = newInput.match(/../g);
 
 console.log(inputArray)
 let message = '';
 for (let i = 0; i < inputArray.length; i++) {
 if (inputArray[i] == '00') {
   message += ' ';
 } else if (inputArray[i] == '42') {
   message += "(i/j)"
 } else {
 let alphabetIndex = valuesPolybius.indexOf(Number(inputArray[i]))
 message += newPolybius[alphabetIndex]
 }
 }
    console.log(message)
 return message
  }
  

  function polybius(input, encode = true) {
    // your solution code here
        if (encode) {
      return encoder(input)
    } else {
      return decoder(input)
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
