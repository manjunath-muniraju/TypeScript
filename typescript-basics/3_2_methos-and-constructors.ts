class PersonNew {
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

var oPersonNew = new PersonNew('Manjunath','Muniraju');

console.log(oPersonNew.getFullName());