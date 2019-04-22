import {Person} from './4_2_Person';
import * as _ from 'lodash';

let aPerson = new Person('Test-FirstName', 'Test-LastName');
console.log(aPerson.firstName + ' ' + aPerson.lastName);

//loadasg sample

var array = [1,2,3,4,5];
console.log(_.reverse(array));