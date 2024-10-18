// ARRAY

const myarray = [0,1,2,3,4,5]
const myHeros = ["saktiman","naagraj"]

const myarray2 = new Array(1,2,3,4) 
console.log(myarray2) // undefined

//array methods

myarray2.push(6)
myarray2.push(7)
myarray2.pop()

myarray2.unshift(9)//add data to first place not more used
myarray2.shift()//delete first data

console.log(myarray2.includes(9)) // [9, 1, 2, 3,
console.log(myarray2.indexOf(3)) // [0, 1, 2, 3, 4

const newarr = myarray2.join()//joint string and make string

console.log(myarray2)
console.log(newarr)

//slice and splice

console.log(" A",myarray2);

const myn1  = myarray2.slice(1,3)//make the data copy and keep it in new object

console.log(myn1)

console.log(" b" , myarray2)

const myn2 = myarray2.splice(1,3)//make the data transfer to the variable
console.log(" c",myn2)

console.log(myarray2)

