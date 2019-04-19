interface Person2 {
    firstName : string;
    lastName : string;

    getFullName() : string;
}

class Foo implements Person2 {
    firstName: string;    
    lastName: string;
    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}

// this fine, Foo type instance can be assigned to Person2 type
let aPerson2 : Person2 = new Foo();

//duck typing

// we will create a similar inline object which of type Person2 interface or Foo class

let someObj = {
    firstName : 'Test',
    lastName: 'test',
    getFullName: () => 'Test'
}

aPerson2 = someObj;

// here, someObj will get assigned to aPerson2 without any issues. This was possible because both the object were similar

// simple to put, which bird makes quak quak sound are Ducks :)
