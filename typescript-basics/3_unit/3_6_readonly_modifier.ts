class Animal {
    readonly name = 'tiger';
}

var aAnimal = new Animal()
console.log(aAnimal.name);

//aAnimal.name = 'lion'
// this is wrong we can assgin a value to read only variable

class Animal1 {
    readonly name;
    
    constructor(name : string) {
        this.name = name;
    }
}

var aAnimal1 = new Animal1('lion')
console.log(aAnimal1.name);

// So there are only two ways to assign value to readonly modifiers 
// 1. while declaring a variable - that is inline assignment
// 2. through constructors

//Another shortcut for above program
class Animal2 {
    constructor(readonly name : string) {

    }
}