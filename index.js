// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]


function destructivelyAppendDriver(Ralph){
  drivers.push(Ralph);
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
return [...drivers, name]
}

function prependDriver(name){
  return [name, ...drivers]
}


function removeLastDriver(){
let x = [...drivers]
x.pop(); return x
}

function removeFirstDriver(){
  let y = [...drivers]
  y.shift();
  return y
}
