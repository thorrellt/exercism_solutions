//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const protienMap = {
  AUG :	'Methionine',
  UUU : 'Phenylalanine',
  UUC : 'Phenylalanine',
  UUA : 'Leucine',
  UUG : 'Leucine',
  UCU : 'Serine',
  UCC : 'Serine',
  UCA : 'Serine',
  UCG : 'Serine',
  UAU : 'Tyrosine',
  UAC : 'Tyrosine',
  UGU : 'Cysteine',
  UGC : 'Cysteine',
  UGG : 'Tryptophan',
}
const stopCodons = ['UAA', 'UAG', 'UGA'];
function rnaToCodons(rna){return rna.match(/.{1,3}/g);}
function codonsToProtien(codons) {
  let retArr = new Array();
  
  for(let i = 0; i < codons.length; i++){
    if (stopCodons.find(stopCodon => stopCodon === codons[i])) break;
    if (!protienMap[codons[i]]) throw new Error('Invalid codon');
    retArr.push(protienMap[codons[i]]);
  }
  
  return retArr;  
}

export const translate = (rna) => {
  if(!rna || rna === '') return new Array();
  const codons = rnaToCodons(rna);
  return codonsToProtien(codons);
};
