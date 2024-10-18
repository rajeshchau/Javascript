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

new Promise((resolve,reject)=>{

    setTimeout(() => {
        eerror = false
        if(!eerror){
            resolve({username: "hitesh", password: "123"})
        }else{
            reject(`ERROR : Bhai tu nahi hai database`)
        }
    }, 1000);

}).then((data)=>{
    console.log(data)
}).catch((eerror)=>{
    console.log(eerror)
})