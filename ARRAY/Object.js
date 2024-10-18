const mySym = Symbol("key1")

const Jsuser = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
    location : "surat",
    mySym: mySym,
    email: "rajesh@google.com",
    isLoggedin: false,
    isVerified: false,
    [mySym]: "mykey1"
}

console.log(Jsuser.isLoggedin);
console.log(Jsuser["age"])

console.log(Jsuser.mySym)

console.log(typeof Jsuser[mySym]);


Jsuser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser)
Jsuser.email = "hitesh@microsoft.com"
console.log(Jsuser.email);


Jsuser.greeting = function(){
    console.log("Hello JS user");
}
Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

