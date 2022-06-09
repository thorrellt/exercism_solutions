//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

String.prototype.doesntMatch = function(symbol) {
  return Math.abs(symbol.charCodeAt(0) - this.charCodeAt(0)) > 2;
}

String.prototype.isCloser = function(){
  return new Set([']', ')', '}']).has(this);
}

String.prototype.notValid = function(){
  return !(new Set([']', ')', '}', '[', '(', '{']).has(this));
}

export const isPaired = (input) => {
  const stack = [];

  for (let i = 0; i < input.length; i++){
    if(input[i].notValid()){
      continue;
    } 
    
    if(input[i].isCloser()){
      if (stack.length === 0 || stack.pop().doesntMatch(input[i])) {
        return false;
      } 

    } else {
      stack.push(input[i])
    }
  }
  return stack.length === 0;
}