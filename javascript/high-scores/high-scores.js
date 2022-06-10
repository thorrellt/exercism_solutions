//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(scores) {
    this.scores = scores;
  }

  get scores() {
    return this._scores;
  }

  set scores(newScores){
    this._scores = newScores;
  }

  get latest() {
    return this._scores[this._scores.length - 1];
  }

  get personalBest() {
    let highScore = this._scores[0];
    this._scores.forEach(score => score > highScore ? highScore = score : false);
    return highScore;
  }

  get personalTopThree() {
    let sortedScores = this._scores.sort((a,b) => a>b ? -1 : 1);
    return sortedScores.slice(0,3);
  }
}
