// javascript way
function add(a, b) {
    return a + b;
}
var sum = add(10, 30);
console.log(sum);
var sum1 = add("foo", 30);
console.log(sum1);
//now how control string being passed to add() using typescript
function add_1(a, b) {
    return a + b;
}
var sum2 = add_1(10, 30);
console.log(sum2);
var sum3 = add_1("foo", 30);
console.log(sum3);
// the above code will work becasue valid in javascript but error will be thrown while compiling.
// Note:
// The number of argumrnts to functions in JavaScript do not have to match the function signature.
// you can pass in more or lesser argument than what's declared in the function.
// the extra arguments will be ignored
// the lesser arguments passed variable will be 'undefined'
// it is little different in typescript
// in type script number arguments should match.
// if it is lesser or more arguments TypeScrpt will throw error at compile time.
// add(1) // error
// add(1,2,3) // error
// add(1,2) // correct
// Now what if we need number of arrguments to be flexible
// So TypeScript allows variable arguments
// i.e optional argument using '?'
function add_3(a, b, c) {
    console.log(c);
    return a + b + c;
}
var sum_4 = add_3(1, 2, 3); // here, 3rd argument 3 is optional
console.log(sum_4);
var sum_4 = add_3(1, 2);
console.log(sum_4);
// Rule: the optional argument should be the last parameter in method signature. 
// It can't come before the required arguments.
// wrong, optional arguments can't come before the requirement.
function add_4(a, b, c) {
    return a + b;
}
// possible 
function add_5(a, b, c, d) {
    return a + b;
}
// Default values for optional arguments
function add_6(a, b, c) {
    if (c === void 0) { c = 0; }
    console.log('c = ' + c);
    return a + b + c;
}
// here we can remove '?' for argument 'c' and we can assign default value to it.
var sum_6 = add_6(1, 2);
console.log(sum_6);
var sum_6 = add_6(1, 2, 3);
console.log(sum_6);
