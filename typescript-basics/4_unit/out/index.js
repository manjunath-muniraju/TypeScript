"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _4_2_Person_1 = require("./4_2_Person");
var _ = __importStar(require("lodash"));
var aPerson = new _4_2_Person_1.Person('Test-FirstName', 'Test-LastName');
console.log(aPerson.firstName + ' ' + aPerson.lastName);
//loadasg sample
var array = [1, 2, 3, 4, 5];
console.log(_.reverse(array));
