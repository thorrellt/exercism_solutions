//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (count) => {
  switch (count){
    case 0:
      return [];
    case 1:
      return[[1]];
    case 2:
      return [[1], [1, 1]];
  }

  let retTri = [[1], [1, 1]];

  for (let i = 2; i < count; i++) {
    retTri[i] = [1];
    for (let k = 1; k < retTri[i-1].length; k++){
      retTri[i].push(retTri[i-1][k-1] + retTri[i-1][k]);
    }
    retTri[i].push(1);
  }

  return retTri;

};
