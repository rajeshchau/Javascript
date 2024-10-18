let date =new Date()

console.log(date.toString());// full date and time and standard
console.log(date.toDateString());//only full date not time and other thing
console.log(date.toLocaleDateString());//only date like: 10/9/2024
console.log(date.toLocaleString())//date and time like : 10/9/2024, 1:25:52 pm

let mycreateddate = new Date("10-2-2003")
console.log(mycreateddate.toLocaleString())
let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toLocaleString())
let newmyCreatedDate = new Date(2023, 0, 23, 5, 3)// 5, 3 are time ND OTHER FIRST 3 ARE daTE 
console.log(newmyCreatedDate.toLocaleString())


let newdate = Date.now()

console.log(newdate);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);//month index start  0.
console.log(newDate.getDay());

 
