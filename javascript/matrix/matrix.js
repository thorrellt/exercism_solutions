//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {

  constructor(rawInput) {

    //split at line breaks
    //now each matrix index is a row as a string
    this.matrix = rawInput.split('\n');

    //iterate through each row
    //now each row is a [] of nums
    this.matrix.forEach((row, i) =>{
      this.matrix[i] = row.split(' ').map(Number);
    })
  }


  get rows() {
    return this.matrix;
  }

  get columns() {
    return this.matrix[0].map((_, colIndex) => this.matrix.map(row => row[colIndex]));
  }
}
