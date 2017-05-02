var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";
var animal = "Zielone słonie";

var animalUpper = animal.toUpperCase();

console.log(animalUpper);


var greenElephants = text.replace('Papugi', animalUpper);

console.log(greenElephants);
console.log((greenElephants.length)/2);