//string interpolation is using ``

const name  = "rajesh"
const repocount = 50

console.log(`My name is ${name} and I have ${repocount} repositories`)

const gameName = new String('hitesh-hc-com')

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase)

console.log(gameName.charAt(2))
console.log(gameName.indexOf("t"))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringone ="            rajesh       "
console.log(newStringone.trim())
console.log(newStringone)

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20','-'))

console.log(url.includes('sunday'))

console.log(gameName.split("-"))