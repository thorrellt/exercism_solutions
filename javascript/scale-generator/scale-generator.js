//
// This is only a SKELETON file for the 'Scale Generator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const scaleTypes = {
  C : "sharp",
  a : "sharp",
  G : "sharp",
  D : "sharp",
  A : "sharp",
  E : "sharp",
  B : "sharp",
  'F#' : "sharp",
  e : "sharp",
  b : "sharp",
  'f#' : "sharp",
  'c#' : "sharp",
  'g#' : "sharp",
  'd#' : "sharp",
  F : "flat",
  Bb : "flat",
  Eb : "flat",
  Ab : "flat",
  Db : "flat",
  Gb : "flat",
  d : "flat",
  g : "flat",
  c : "flat",
  f : "flat",
  bb : "flat",
  eb : "flat",
}
const scale ={
  sharp : ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'],
  flat : ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab']
}
String.prototype.formatNote = function(){
  return this.length === 1 ? this[0].toUpperCase() : this[0].toUpperCase() + this[1];
}
String.prototype.intervalSize = function(){
  switch(this) {
  case 'm':
    return 1;
  case 'M':
    return 2;
  default:
    return 3;
  }
}


export class Scale {
  #tonic;
  #scaleType
  #start
  constructor(tonic) {
    this.#tonic = tonic;
    this.#scaleType = scaleTypes[this.#tonic];
    this.#start = scale[this.#scaleType].indexOf(this.#tonic.formatNote());
  }

  chromatic() {
    const chromaticScale = [];
    
    for (let i = this.#start; i < this.#start + 12; i++){
      chromaticScale.push(scale[this.#scaleType][i % 12]);
    }
    return chromaticScale;
  }

  interval(intervals) {
    const returnScale = [];
    let currentNote = this.#start;

    for(let i = 0; i < intervals.length; i++) {
      returnScale.push(scale[this.#scaleType][currentNote % 12]);
      currentNote += intervals[i].intervalSize();
    }
    return returnScale;
  }
}
