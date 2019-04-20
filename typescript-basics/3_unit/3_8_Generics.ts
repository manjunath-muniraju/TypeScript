function echo<T>(arg : T) : T {
    return arg;
}

let myStr : string = echo(1);

// here, echo function is 'generic function' becuase we have used <T>.
// now once pass number in echo(1) the same type has to returned becasue we have used T in return type. so myStr variable can't take integer becasue is it declared as string type.

// to fix it
let myInt : number = echo(1);

// or just

let myInt1 = echo(1);
// here it assumes the return type is number and it myInt1 will be of type number

//we can apply it for classes as well

class Student {
    firstName : string;
    lastName : string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;

    }

    getFullName() {
        // here just 'firstName + lastName', will not work, you have to use 'this' keyword
        return this.firstName +  ' ' + this.lastName;
    }
}

class Admin extends Student {

}

class Manager extends Student {

}

let admin = new Admin('a', 'a');
let manager = new Manager('a', 'a');

function studentEcho<T>(person: T) : T {
    return person;
}

var foo = studentEcho(admin);

// now this is good, it allows anything in T, now how can we restrict the T should be of type Student or sub-class of student only. So that no other types are allowed.

function studentEcho1<T extends Student>(person: T) : T {
    return person;
}

var boo = studentEcho1(admin);

