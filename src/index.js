/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation

  var counter = 0;

  for(let i = 0; i < preferences.length; i++){
    
    var firstNumber = preferences[i] - 1;
    var secondNumber = preferences[firstNumber] - 1;
    var thirdNumber = preferences[secondNumber] - 1;

    if(firstNumber == i ||
       firstNumber == secondNumber ||
       secondNumber == thirdNumber) continue;

    if(thirdNumber == i){
      counter++;
    }

  }

  return counter/3;
};