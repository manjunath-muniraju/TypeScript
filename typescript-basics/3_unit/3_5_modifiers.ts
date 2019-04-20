class Person1 {
    private firstName : string;
    private lastName : string;

    greet() {
        console.log('Hey there');
    }

    getFullName() {
        return this.firstName + this.lastName
        // this is possible becasue we are accessing private members inside the class
        // so we are encapsulating (securing) few members of the class using private keyword
        // Here is where getters and setters method comes into picture. Using getters and setters you will provide control on data.
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
aProgrammer.firstName // not accessable becasue firstName is marked as private