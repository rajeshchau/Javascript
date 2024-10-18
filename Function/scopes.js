function newdata(){
    const myname = "rajesh";

    function data(){
        let channel = "let's learn code";
        console.log(myname);
        console.log(channel);
        
    }
    
    data()
}

newdata()

if (true){
    const name = "rajesh";
    if (name === 'rajesh'){
        const platform = "youtube"
        console.log(`${name} is using ${platform}`);
    }
    //console.log(platform) //out of scope...
}

console.log(addone(10))

function addone(data){
    return data+1;

}



const addtwo = function(num){
    return num+2;
}

console.log(addtwo(10));//once it's  function is made in variable it can't writen above function it should be written to down to function only.. 
