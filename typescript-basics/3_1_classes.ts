class Person {
    firstName;
    lastName;
}

var aPerson = new Person();

console.log('Before assignment for firstName is : ' + aPerson.firstName);
console.log(aPerson); // to print objects itself

console.log();

aPerson.firstName = 'Manjunath';
console.log('After assignment for firstName is : ' + aPerson.firstName);
console.log(aPerson);


var aPerson1 : Person = new Person();
