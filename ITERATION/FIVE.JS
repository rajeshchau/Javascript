const array1 = ["python","java","php","javascipt"]

// array1.forEach(function(val){
//     console.log(val);
    
// })

// array1.forEach((val)=>{
//     console.log(val);

// })

// function printme(value){
//     console.log(value);
// }

// array1.forEach(printme)


// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const languages = [
    {
        name: "Python",
        filename : "py"
    },
    {
        name:"java",
        filename : "java"
    },
    {
        name:"php",
        filename :"php"
    }
]

languages.forEach((val)=>{
    console.log(`the name of language ${val.name},${val.filename}`);

})