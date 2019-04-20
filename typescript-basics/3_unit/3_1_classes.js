var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var aPerson = new Person();
//console.log('Before assign for firstName is : ' + aPerson);
console.log(aPerson);
console.log('Before assign for firstName is : ' + aPerson.firstName);
aPerson.firstName = 'Manjunath';
//console.log('Before assign for firstName is : ' + aPerson);
console.log();
console.log(aPerson);
console.log(aPerson.firstName);
