// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  return drivers.push(name)
}

function destructivelyPrependDriver(name){
  return drivers.unshift(name)
}

function destructivelyRemoveLastDriver(){
  return drivers.pop(name)
}

function destructivelyRemoveFirstDriver(){
  return drivers.shift(name)
}

function appendDriver(name){
  apDriverArray = [...drivers,name]
  return apDriverArray
}

function prependDriver(name){
  prDriverArray = [name,...drivers]
  return prDriverArray
}

function removeLastDriver(){
  newArray = drivers.slice(0,drivers.length - 1)
  return newArray
}

function removeFirstDriver(){
  newArray = drivers.slice(1,drivers.length)
  return newArray
}