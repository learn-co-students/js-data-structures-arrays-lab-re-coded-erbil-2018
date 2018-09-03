// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  return drivers.push(name);
}

destructivelyAppendDriver(Ralph);

function destructivelyPrependDriver(name) {
  return drivers.unshift(name)
}

destructivelyPrependDriver(Hedi);

function destructivelyRemoveLastDriver() {
  return drivers.pop()
}

destructivelyRemoveLastDriver();

function destructivelyRemoveFirstDriver() {
  return drivers.shift()
}

destructivelyRemoveFirstDriver();

function appendDriver(name)
{
  const newName=[...drivers];
  newName.push(name);
  return newName;
}
function prependDriver(name)
{
  const newName = [...drivers];
  newName.unshift(name);
  return newName;
}
function removeLastDriver()
{
  const newName=[...drivers];
   newName.pop();
   return newName;
}
function removeFirstDriver()
{
  const newName=drivers.slice();
  newName.shift();
  return newName;
}









