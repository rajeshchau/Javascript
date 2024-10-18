let data = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }

}

let myHeros = ["thor", "spiderman"]


//object is father of all types
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}
//array is a son so object can give properys but array can't give to object
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

myHeros.hitesh()
myHeros.heyHitesh()
//data.heyHitesh()//not work because of papa is more imp then bhai
data.hitesh()



