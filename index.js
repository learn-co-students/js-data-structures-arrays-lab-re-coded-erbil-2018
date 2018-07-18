// Write your solution here!
const drivers= ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name)
{
   drivers.push("Ralph")
}
function destructivelyPrependDriver(name)
{
  drivers.unshift("Bob")
}
function destructivelyRemoveLastDriver()
{
  drivers.pop();
}
function destructivelyRemoveFirstDriver()
{
  drivers.shift();
}
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