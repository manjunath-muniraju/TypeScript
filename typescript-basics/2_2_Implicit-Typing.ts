var a = 10;
var b = true;
var s = 'Hello';

function greet() : String {
    return 'Good Morning'
}

var greeting = greet();

// return type, but still is considers as STring as return type.
function greet1() {
    return 'Good Morning'
}

var greeting2 = greet1();

//
function greet3() {
    return 'Good Morning'
}

var greeting3;
greeting3 = greet3();
greeting3 = 10;
