var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person1 = /** @class */ (function () {
    function Person1() {
    }
    Person1.prototype.greet = function () {
        console.log('Hey there');
    };
    Person1.prototype.getFullName = function () {
        return this.firstName + this.lastName;
        // this is possible becasue we are accessing private members inside the class
        // so we are encapsulating (securing) few members of the class using private keyword
        // Here is where getters and setters method comes into picture. Using getters and setters you will provide control on data.
    };
    return Person1;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.greet = function () {
        console.log('greet overridden');
    };
    Programmer.prototype.callGreetOfSuperClass = function () {
        _super.prototype.greet.call(this);
    };
    return Programmer;
}(Person1));
var aProgrammer = new Programmer();
aProgrammer.greet();
aProgrammer.firstName; // not accessable becasue firstName is marked as private
