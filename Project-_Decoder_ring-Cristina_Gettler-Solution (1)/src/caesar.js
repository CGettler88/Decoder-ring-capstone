// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
 const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 
   function caesar(input, shift, encode = true) {
  
     //error handling and constraints and rules.
     if (!shift || shift === 0 || shift>=25 || shift<= -25)
       {
         return false;
       } 
      if (encode === false) 
    { 
      shift = shift * -1; 
    };
     //input to lower case
      input = input.toLowerCase()
     let inputMessage = "";
     for (let i = 0; i < input.length; i++)
     {
       let char = input[i]
       if(!alphabet.includes(input[i]))
       {
         inputMessage = inputMessage + input[i]
       }
       for (let i=0; i < alphabet.length; i++ )
         {
         if (char === alphabet[i])
         {
          if(i+shift >= alphabet.length)
          {
            inputMessage += alphabet[(i+shift)-alphabet.length];
          }
          else if (shift+i<0)
          {
     inputMessage += alphabet[26+(shift+i)] 
         }      
        else
       {
        inputMessage += alphabet[shift+i]
     }
            }
          }
      } 
    return inputMessage;
    
}

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
