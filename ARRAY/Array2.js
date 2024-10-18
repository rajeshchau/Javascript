const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)//combine only two array
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]//can combine as many array we want

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)//make all data of array in single array from multiple array.
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))//is hitesh there in array
console.log(Array.from("Hitesh"))//make an array of hitesh with single-single character. 
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//make data inside array