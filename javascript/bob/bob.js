//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (testStr) => {
  let message = testStr.trim();

  if(message === ''){
    return 'Fine. Be that way!';

  } else if (message === message.toUpperCase() && 
  message != message.toLowerCase()){
    
    if (message[message.length-1] === '?'){
      return `Calm down, I know what I'm doing!`; 
    } else {
      return 'Whoa, chill out!';
    }

  } else if (message[message.length-1] === '?'){
    return 'Sure.';

  } else {
    return 'Whatever.';
  }
};
