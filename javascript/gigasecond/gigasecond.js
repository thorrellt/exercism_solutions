//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (originalDate) => {
  const gigasecond = 10 ** 12;
  return new Date(originalDate.getTime() + gigasecond);
};
