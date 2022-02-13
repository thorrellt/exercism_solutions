/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 */
 export function cookingStatus(timeLeft = -1) {
     switch (true) { 
        case timeLeft < 0:
            return 'You forgot to set the timer.';
        case timeLeft > 0:
            return 'Not done, please wait.';
        default:
            return 'Lasagna is done.';
     }
   
 }
 
 export function preparationTime(layers, avgTime = 2){
     return layers.length * avgTime;
 }

 export function quantities(layers) {
    let noodles = 0;
    let sauce = 0;
    for (const i in layers) {
        switch (layers[i]){
            case 'noodles':
                noodles += 50;
                console.log('made it here: ' + layers[i]);
                break;
            case 'sauce':
                sauce += 0.2;
                console.log('made it here: ' + layers[i]);
                break;
        }
    }
    return {
        noodles:noodles,
        sauce:sauce
    }


 } 

 export function addSecretIngredient(friendsList, myList){
    myList.push(friendsList[friendsList.length - 1]);
 }

 export function scaleRecipe(recipe, servingSize = 2){
    const scale = servingSize / 2;
    const recipeCopy = {};
    
    for (const item in recipe) {
        recipeCopy[item] = recipe[item] * scale;
    }

    return recipeCopy;

 }