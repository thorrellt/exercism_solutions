//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {

  #roster = {};

  isDuplicate(name) {
    let duplicate = false;
    
    Object.values(this.#roster).forEach(gradeLevel => {
      if (gradeLevel.find(student => student === name)){
        console.log("return true");
        duplicate = true;
      }
    });
    
    return duplicate;
  }

  deepCopyOf(grade){
    return JSON.parse(JSON.stringify(this.#roster[grade].sort()));
  }

  remove(name){
    const keys = Object.keys(this.#roster);
    keys.forEach(key => {
      const studentIndex = this.#roster[key].find(student => student === name);
      if (studentIndex){
        this.#roster[key].splice(studentIndex, 1);
      }
    })
  }
  
  roster() {
    const grades = Object.keys(this.#roster).sort();
    const orderedRoster = {}
    
    grades.forEach(grade => {
      orderedRoster[grade] = this.grade(grade);
    });

    return orderedRoster;
  }

  add(name, grade) {
    if(this.isDuplicate(name)) this.remove(name);
    if(!this.#roster[grade]) this.#roster[grade] = [];
    this.#roster[grade].push(name);
  }

  grade(grade) {
    if(!this.#roster[grade]) return [];
    return this.deepCopyOf(grade);
  }
}
