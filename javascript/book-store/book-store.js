//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  let rawPrice = books.length *800,
  discounts = {5: .25, 4: .2, 3: .1, 2: .05},
  books_set = [];

  //makes array that contains the count in each
  //set of discounted books
  while (books.length>0){
    books_set.push(new Set(books).size)
    for(let b of new Set(books)){
      books.splice(books.indexOf(b), 1)
    }
  }

  //balances any pair of 5,3 to 4,4 in set
  //for max discount
  while (books_set.includes(3) && books_set.includes(5)){
    books_set.splice(books_set.indexOf(3), 1)
    books_set.splice(books_set.indexOf(5), 1)
    books_set.push(4, 4)
  }

  // return raw price minus all discounts
  return rawPrice - books_set.reduce((prev, curr) => prev +  (discounts[curr]||0) * 800 * curr, 0)
};
