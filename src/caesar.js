// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  //const alphabet = "abcdefghijklmnopqrstuvwxyz";
  //let newalpha = "";
 function encoder(input, shift) {
      let newInput = input.toLowerCase();
    const legend = 'abcdefghijklmnopqrstuvwxyz'
    let newMessage = ''
    for (let i = 0; i < newInput.length; i++) {
     
      const letter = newInput[i];
     
      if (!legend.includes(newInput[i])) {
        newMessage += newInput[i]
      } else {
      const letterNum = legend.indexOf(letter);
      let newIndex = letterNum + shift;
      
      if (newIndex >= 26) {
        newIndex = newIndex - 26
      }
      if (newIndex < 0) {
        newIndex = newIndex + 26
      }
      newMessage += legend[newIndex]
    }
    }
    return newMessage
    }
      function decoder (input, shift) {
  let newInput = input.toLowerCase();
  const legend = 'abcdefghijklmnopqrstuvwxyz'
  let newMessage = ''
  for (let i = 0; i < newInput.length; i++) {
    const letter = newInput[i];
    if (!legend.includes(newInput[i])) {
      newMessage += newInput[i]
    } else {
    const letterNum = legend.indexOf(letter);
    
    let newIndex = 0;
    
     
     if (shift >= 0) {
     newIndex = letterNum - shift;
      } else {
        newIndex = letterNum - (shift + 26);
      }
      
    if (newIndex < 0) {
      newIndex = newIndex + 26
    }
    
    newMessage += legend[newIndex]
  }
  }
  return newMessage
} 
  function caesar(input, shift, encode = true) {
    if (!shift || shift > 25 || shift < -25) return false;
    if (encode) {
      return encoder(input, shift)
    } else {
      return decoder(input, shift)
    }
   }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
