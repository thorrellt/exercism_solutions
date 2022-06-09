//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const yearMultiplier = {
  mercury:(1/0.2408467),
  venus:(1/0.61519726),
  earth:1.0,
  mars:(1/1.8808158),
  jupiter:(1/11.862615),
  saturn:(1/29.447498),
  uranus:(1/84.016846),
  neptune:(1/164.79132)
}

function secToYear(seconds){
  return seconds / 31557600;  
}

export const age = (planet, seconds) => {
  return Number((secToYear(seconds) * yearMultiplier[planet]).toFixed(2));
};
