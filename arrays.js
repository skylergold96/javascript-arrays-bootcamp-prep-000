var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]
 
 
function destructivelyAddElementToBeginningOfArray(array, element ) {
 return array.unshift(element);
}

function addElementToBeginningOfArray (array,element){
const array1 = [element,...array];
return array1;
}

function destructivelyAddElementToEndOfArray (array, element) {
 return array.push(element);
}

function addElementToEndOfArray (array,element){
const array1 = [...array, element];
return array1;
}

function accessElementInArray (array,index){
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray (array, element) {
  return array.shift(element)
}
function removeElementFromBeginningOfArray (array, element) {
  const begArray = array.slice(element);
  return begArray;
}
function destructivelyRemoveElementFromEndOfArray (array, element) {
  return array.pop(element)
}
function removeElementFromEndOfArray (array, element) {
  let lastArray = [array];
  
  
}