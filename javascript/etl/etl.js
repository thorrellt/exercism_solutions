//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (letters) => {
  const retObj = {};
  
  for (const [key, value] of Object.entries(letters)) {
    for (let i = 0; i < value.length; i++){
      retObj [value[i].toLowerCase()] = Number(key);
    }
  }
  return retObj;
};
