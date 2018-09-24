/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

  let counter = 0;

  for(let i = 0, len = preferences.length; i < len; i++){
    
    const firstNumber = preferences[i] - 1;
    const secondNumber = preferences[firstNumber] - 1;
    const thirdNumber = preferences[secondNumber] - 1;

    if(firstNumber == i ||
       firstNumber == secondNumber ||
       secondNumber == thirdNumber) continue;

    if(thirdNumber == i){
      counter++;
    }

  }

  return counter/3;
};