// this is my solution 
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver (myname) {
  drivers.push(myname);
}
// Yanni for music
function destructivelyPrependDriver (myname) {
  drivers.unshift(myname);
}

function destructivelyRemoveLastDriver () {
  drivers.pop();
}

function destructivelyRemoveFirstDriver () {
  drivers.shift();
}

function appendDriver (myname) {
  return [...drivers, myname];
}

function prependDriver (myname) {
  return [myname, ...drivers];
}

function removeFirstDriver () {
  return drivers.slice(1);
}

function removeLastDriver () {
  return drivers.slice(0, drivers.length - 1);
}