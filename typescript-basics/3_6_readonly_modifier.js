var Animal = /** @class */ (function () {
    function Animal() {
        this.name = 'tiger';
    }
    return Animal;
}());
var aAnimal = new Animal();
console.log(aAnimal.name);
//aAnimal.name = 'lion'
// this is wrong we can assgin a value to read only variable
var Animal1 = /** @class */ (function () {
    function Animal1(name) {
        this.name = name;
    }
    return Animal1;
}());
var aAnimal1 = new Animal1('lion');
console.log(aAnimal1.name);
// So there are only two ways to assign value to readonly modifiers 
// 1. while declaring a variable - that is inline assignment
// 2. through constructors
