// const coding = ["java","javascript","cpp","c","c#"]

// const valueS= coding.forEach((items)=>{
//     console.log(items);
//     // return items
    
// })

// console.log(valueS);

const values = [1,2,3,4,5,6,7,8,9,10]

// const fillter = values.filter((data)=>{
//     return data % 2 === 0
// })

// console.log(fillter);


// const newNums = values.filter( (num) => {
//     return num > 4
// } )

// console.log(newNums);

// const newNums = []

// values.forEach((data)=>{
//     if (data <=6){
//         newNums.push(data)
//     }
// })

// console.log(newNums);


const books = [
    {
        book:"book1",
        gener:"scify",
        year:2003
    },
    {
        book:"book2",
        gener:"historic",
        year:1994
    },
    {
        book:"book1",
        gener:"comedy",
        year:1988
    },
    {
        book:"book1",
        gener:"historic",
        year:1999
    },
    {
        book:"book1",
        gener:"comedy",
        year:2000
    },
    {
        book:"book1",
        gener:"historic",
        year:1996
    },
    {
        book:"book1",
        gener:"comedy",
        year:1969
    },
    {
        book:"book1",
        gener:"historic",
        year:2001
    },
    {
        book:"book1",
        gener:"comedy",
        year:2004
    },
    {
        book:"book1",
        gener:"historic",
        year:2006
    },
]

// let usersinfo  = books.filter((data)=>{
//     return data.gener === "comedy"
// })

// console.log(usersinfo);

let userinfo = books.filter((data)=>
{
    return data.gener==="comedy" && data.year ===2004;
})

console.log(userinfo);




