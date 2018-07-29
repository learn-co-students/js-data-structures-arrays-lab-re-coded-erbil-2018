// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(item){
  drivers.push(item);
}

function destructivelyPrependDriver(item){
  drivers.unshift(item);
}

function  destructivelyRemoveLastDriver(){
  drivers.pop();
}

function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(item){
  return newArr = [...drivers,  item];
}

function prependDriver(item){
  return newArr = [item, ...drivers];
}

function removeFirstDriver(){
  return drivers.slice(1);
}

function removeLastDriver(){
  return drivers.slice(0,drivers.length-1);
}





