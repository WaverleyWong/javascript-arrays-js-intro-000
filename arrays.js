var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, element) {
  return[element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
    array.unshift(element)
    return array
}

function addElementToEndOfArray(array, element) {
  return[...array, element]
}

<<<<<<< HEAD
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return(array[index])
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
=======
function destructivelyAddElementToEndofArray(array, element) {
    array.push(element)
    return array
>>>>>>> e4ac55ced55a0d0dde06e2ea375626d5a6c995f2
}