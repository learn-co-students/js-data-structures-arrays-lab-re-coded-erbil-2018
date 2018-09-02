// Write your solution here!
const drivers=["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(e){
  drivers.push(e);
}
function destructivelyPrependDriver(e){
  drivers.unshift(e);
}
function destructivelyRemoveLastDriver(e){
  drivers.pop(e);
}
function destructivelyRemoveFirstDriver(e){
  drivers.shift(e);
}
function appendDriver(n){
  const newAray=drivers.slice()
  newAray.push(n)
  return newAray
}
function prependDriver(n){
  const newAray =drivers.slice()
  newAray.unshift(n)
  return newAray
}
function removeLastDriver(){
  const newAray=drivers.slice(0,-1)
  return newAray
}
function removeFirstDriver(){
  const newAray=drivers.slice(1)
  return newAray
}
