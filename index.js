// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}
function destructivelyRemoveFirstDriver(){
  drivers.shift();
}


function appendDriver(name){
  var newArray =drivers.slice(0);
  newArray.push(name);
  return newArray;
  
}

function prependDriver(name){
  var newArray =drivers.slice(0);
  newArray.unshift(name);
  return newArray;

}

function removeLastDriver(name){
  var newArray =drivers.slice(0);
  newArray.pop(name);
  return newArray;
}
function removeFirstDriver(name){
  var newArray =drivers.slice(0);
  newArray.shift(name);
  return newArray;

}