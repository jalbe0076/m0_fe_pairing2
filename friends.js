var arrays = ["Harold", "Jeremy", "Danny", "Carter", "Jim"];

console.log(arrays['0']);
console.log(arrays['4']);
console.log(arrays['2']);

var vehicles = ["Car", "Bike", "Motorcycle", "Boat", "Plane"];

var firstElement = vehicles.shift();
var count = vehicles.push(firstElement);

console.log(vehicles);
console.log(count);