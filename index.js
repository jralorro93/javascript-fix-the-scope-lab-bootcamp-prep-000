var animal = 'dog';

function myAnimal() {
  return animal;
}

function yourAnimal() {
  var animal = 'cat';
  return animal;
}

function add2(n) {
  const two = 2;
  return n + two;
}

var funkyFunction = function outerFunction() {
  return function innerFunction() {
    return "FUNKY!"
  }
}

<<<<<<< HEAD
var theFunk = funkyFunction()();

console.log(theFunk()());
=======
// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction();
theFunk();
>>>>>>> 3f27259abc35b6e54ed36f7f0988262ddb342b6b

