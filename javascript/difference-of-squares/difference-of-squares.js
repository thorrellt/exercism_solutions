//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  #num;
  
  constructor(num) {
    this.#num = num;
  }

  get sumOfSquares() {
    let sum = 0;
    
    for (let i = this.#num; i > 0; i--){
      sum += i * i;
    }
    return sum;
  }

  get squareOfSum() {
    let sum = 0
    for (let i = this.#num; i > 0; i--){
      sum += i;
    }
    return sum * sum;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
