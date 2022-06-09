//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//use object to store decoded values
export const DNA_TO_RNA = {
  G:'C',
  C:'G',
  T:'A',
  A:'U'
}

export const toRna = (dna) => {
  //decaire return string
  let retString = '';

  //loop and build return string
  for(let i = 0; i < dna.length; i++) {
    retString += DNA_TO_RNA[dna.at(i)] ? DNA_TO_RNA[dna.at(i)] : '';
  }
  
  return retString;
};
