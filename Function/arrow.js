const user = {
    name:'rajesh',
    price:999,
    
    welcomemessage: function(){
        console.log(`${this.name},welcome to website`);
        console.log(this)//here this will display the full user object.
        
    }
}

//console.log(user.welcomemessage());
///console.log(user.name);
//user.name = "vishwash";
//console.log(user.name);
//console.log(user.welcomemessage());

//console.log(this);//{}

// function chai(){
//     //let user = "rajesh"
//     console.log(this);

// }
//chai()

// const friend = function () {
//     let user = "darshana"
//     console.log(this.user);//so here the function can not find objects etc..

// }
// friend()

const chai =() =>{
    let username = "hitesh"
    console.log(this);
}

chai()

const sumoftwo = (num1 , num2) =>{
    return num1 + num2

}

//console.log(sumoftwo(10,20))

const sumvalues = (num1,num2) => num1 + num2

sumvalues(10,20)



