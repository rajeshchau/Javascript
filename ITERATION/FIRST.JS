// for (let i = 0;i<=10;i++){
//     const element = i
//     if (element == 5){
//         console.log(`here is the ${element}`);
//     } 
//     else{
//         console.log(`${element}`);
//     }
// }

// for  (let i = 0;i<=10;i++){

//     const element = i
//     element == 5 ? console.log(`here is the ${element}`) : console.log(`${element}`)
// }

// for (let i = 0 ; i <= 9; i++){
//     let element = -1 ?? i ?? 3
//     console.log(element);
    
    
// }

// for (let i = 1;i<=10;i++){
//     // console.log(`outer loop values ${i}`);
//     console.log(" ");
    
//     for (let j = 1;j<=10;j++){
//         // console.log(`inner loop is ${j} and outer value ${i}`);
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }


// let superhero = ["batman","spiderman","flash"]

// console.log(superhero.length);

// for (let i = 0 ; i <= superhero.length ; i++){
//     console.log(superhero[i]);
    
// }
 
// for (let i = 0 ; i <= 10 ; i++){
//     if (i == 5){
//         console.log(`here is the ${i}`)
        
//     }else{
//      console.log(`${i}`);   
//     }
// }

// for (let i = 0 ; i <= 10 ; i++){
//     if (i == 5){
//         console.log(`here is the data ${i}`);
//         continue
//     }
//     console.log(`hey hey ${i}`);
    
// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}