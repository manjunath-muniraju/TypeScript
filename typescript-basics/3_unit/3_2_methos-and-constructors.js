var PersonNew = /** @class */ (function () {
    function PersonNew(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    PersonNew.prototype.getFullName = function () {
        // here just 'firstName + lastName', will not work, you have to use 'this' keyword
        return this.firstName + ' ' + this.lastName;
    };
    return PersonNew;
}());
var oPersonNew = new PersonNew('Manjunath', 'Muniraju');
console.log(oPersonNew.getFullName());
