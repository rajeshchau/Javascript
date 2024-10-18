
function saymyname(){
    console.log("R");
    console.log("A");
    console.log("J");
    console.log("E");
    console.log("S");
    console.log("H");
    
}

saymyname()

function addition(a,b){
    console.log(`The total of all is ${a+b}`)
}

addition(10,20)

function adding(num1,num2){
    let sum = num1 + num2;
    return sum;
}

const total = adding(10,20)

console.log(`total:${total}`);


function myaccount(username="rajesh"){
    if(!username){
        console.log("username is not provided");
        return
    }
    console.log("you have logged in !");
    
}

myaccount("")

function calculateCartPrice(val1, val2, ...num1){//Here the ... is used for making the values come infinity but val1 and val2 will also have value.
    return num1
    //return typeof(num1)  //here the num1 will be considered as a string of values but val1 and val2 will be same as number.
    //once the values is given in ...num formate 

}

console.log(calculateCartPrice(200, 400, 500, 2000))

console.log(calculateCartPrice(10))

const account={
    name:"rajesh",
    age:25,
    address:{
        street:"street1",
    }
}
console.log(account.address.street) //this will give the output of street1

function greeting(anybody){
    console.log(`Hey , Welcome ${anybody.username} in ${anybody.cource}`);// don't be confuse it's just a type that any object wich is given in function.
}

greeting({username:"rajesh",cource:"python"})

const arrayone = [10,20,30,40]

function findarray(dataarray){
    return dataarray[1];
}

console.log(findarray([1,2,3,4,5]));
 




