class Person1 {
    firstName : string;
    lastName : string;

    greet() {
        console.log('Hey there');
    }
}

class Programmer extends Person1 {
    greet() {
        console.log('greet overridden');
    }

    callGreetOfSuperClass() {
        super.greet();
    }
}

var aProgrammer : Person1 = new Programmer();
aProgrammer.greet();