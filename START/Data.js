'use strict';

const num = 101
const num2 = 1110.1

const val = "rajesh"
const bolo = false

const nnul =null
let dataa;

console.log(num,num2,val,bolo,nnul);

console.log(typeof num)


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// heap memory and stack memory

// heap memory are used in non-primitive data 
// stack memory are used in primitive data
// primitive data are number, string, boolean, null, undefined, symbol
// non-primitive data are object, array, function, etc.

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//example
let name = "rajesh"
let newname = name
console.log(name,newname)

newname = "vaibhav"
console.log(name,newname)

let address = {
    street: "street1",
    city: "city1",
    state: "state1",
    }

console.log(address.city);

address.city = "vadodara"

console.log(address.city);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
