var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, x){
  var newArr = [x, ...array];
  return newArr;
  
}

function destructivelyAddElementToBeginningOfArray(array, y){
    
    return array.push(y);
}

function addElementToEndOfArray(array, x){
  var newArr = [ ...array, x];
  return newArr;
}


function destructivelyAddElementToEndOfArray(array, y){
  array.unshift(y);
  return array;
}
