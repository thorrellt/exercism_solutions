//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.triangle = [...(new Set([...sides]))].sort();
    this.sides = this.triangle.length;
  }

  get isValid() {
    if (this.triangle.indexOf(0) >= 0) {
      return false;
      
    } else if (this.sides === 1) {
      return true;
      
    } else {
      return this.triangle[0] + this.triangle[this.sides - 2] > 
        this.triangle[this.sides - 1];
      
    }
  }

  get isEquilateral() {
    return (this.isValid && this.sides === 1);
  }

  get isIsosceles() {
    return (this.isValid && this.sides <= 2);
  }

  get isScalene() {
    return (this.isValid && this.sides === 3)

  }
}
