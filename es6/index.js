// swap
let a = 'world', b = 'hello';
	[a, b] = [b, a];
console.log(a); // -> hello
console.log(b); // -> world
// Yes, it's magic

// await promises
async function a (){
	const [user, account] = await Promise.all([
		fetch('/user'),
		fetch('/account')
	])
}

// new console debugging
const a = 5, b = 6, c = 7
console.log({ a, b, c })
// outputs this nice object:
// {
//    a: 5,
//    b: 6,
//    c: 7
// }


// in ONE LINE!!
// Find max value
const max = (arr) => Math.max(...arr);
max([123, 321, 32]) // outputs: 321
// Sum array
const sum = (arr) => arr.reduce((a, b) => (a + b), 0)
sum([1, 2, 3, 4]) // output: 10

//Concatenation
const one = ['a', 'b', 'c']
const two = ['d', 'e', 'f']
const three = ['g', 'h', 'i']
// Old way #1
const result = one.concat(two, three)
// Old way #2
const result = [].concat(one, two, three)
// New
const result = [...one, ...two, ...three]

// cloning
const obj = { ...oldObj }
const arr = [ ...oldArr ]


// naming
const getStuffNotBad = (id, force, verbose) => {
 //do stuff
}
const getStuffAwesome = ({ id, name, force, verbose }) => {
 //do stuff
}
// Somewhere else in the codebase... WTF is true, true?
getStuffNotBad(150, true, true)
// Somewhere else in the codebase... I ❤ JS!!!
getStuffAwesome({ id: 150, force: true, verbose: true })
