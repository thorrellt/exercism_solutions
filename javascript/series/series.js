//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    if (series === '') throw Error ('series cannot be empty');
    
    this.length = series.length;
    this.series = series.split('').map(item => Number(item));
  }

  slices(sliceLength) {
    if (this.length < sliceLength) throw Error('slice length cannot be greater than series length');
    if(sliceLength === 0) throw Error('slice length cannot be zero');
    if(sliceLength < 0) throw Error('slice length cannot be negative');

    const loopNum = this.series.length - sliceLength + 1;
    const allSeries = [];
    
    for (let i = 0; i < loopNum; i++){
      allSeries.push(this.series.slice(i, i+sliceLength));
    }
    return allSeries;
  }
}
