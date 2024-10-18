// const newpromise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log(`the new promise have generated`);
//         resolve()
//     },1000)
// })


// const mypromise = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log(`the promise have generated`)
//         resolve()
//     },1000)
// })

// mypromise.then(()=>{
//     console.log('huiiiiii');
    
// })


// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('me database hu bhai');
//         resolve()
//     },1000)
// }).then(()=>{
//     console.log('na re tu nahi hai');
// })

// new Promise((resolve,reject)=>{

//     setTimeout(() => {
//         eerror = false
//         if(!eerror){
//             resolve({username: "hitesh", password: "123"})
//         }else{
//             reject(`ERROR : Bhai tu nahi hai database`)
//         }
//     }, 1000);

// }).then((data)=>{
//     console.log(data)
// }).catch((eerror)=>{
//     console.log(eerror)
// })

// new Promise((resolve,reject)=>{

//     setTimeout(() => {
//         eerror = false
//         if(!eerror){
//             resolve({username: "hitesh", password: "123"})
//         }else{
//             reject(`ERROR : Bhai tu nahi hai database`)
//         }
//     }, 1000);

// }).then((data)=>{
//     console.log(data);
    
//     return data.password
// })
// .then((password)=>{
//     console.log(password)
// }).catch((eerror)=>{
//     console.log(eerror)
// })


// const newpromise = new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         eerror = true
//         if(!eerror){
//             resolve({username: "hitesh", password: "123"})
//         }else{
//             reject(`ERROR : Bhai tu nahi hai database`)
//     }
// },1000)
// })

// async function consumepromise(){
//     try{
//         const response = await newpromise
//         console.log(response)
//     }catch(eerror){
//         console.log(eerror)
//     }
// }


// consumepromise()


// async function newpromise() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data[0].phone);
//     }catch(error){
//         console.log(`E:${error}`)
//     }
    
// }

// newpromise()


// async function newpromise() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         // Find the user with id: 2
//         const user = data.find(user => user.id === 2);
//         if (user) {
//             console.log(user.phone);  // Logs the phone number for user with id 2
//         } else {
//             console.log("User with id 2 not found");
//         }
//     } catch (error) {
//         console.log(`Error: ${error}`);
//     }
// }

// newpromise();


fetch('https://api.github.com/users/hiteshchoudhary').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>{
    console.log('error',error)
})