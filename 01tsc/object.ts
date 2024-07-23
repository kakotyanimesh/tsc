const user =  {
    name: "animesh",
    email: "animesh@gmail",
    isActive: true
}
// create object with function
function createUser({name: string, isPaid: boolean}) {
    
}

let newUser = {name: "animesh", isPaid: false, email: "h@gmail"}

createUser(newUser) // odd behaviour as no email in createUser function

// another way

function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 499}
}

console.log(createCourse());

// from docs

function sayMyName({name, age}:{name: string, age: number}): string{
    return `my name is ${name} and age is ${age}`
}

console.log(sayMyName({name: "animesh", age: 21}));

// type => helps to define object 

type nameOfObject = {
	name: string;
	age: number;
}

function printSomething(s: nameOfObject): void{
	console.log(`name is ${s.name}`)
	console.log(`age is ${s.age}`)

}

printSomething({name: "kafka", age: 32})



type User = {
    readonly _id: string  // we cant change it 
    name: string
    email: string
    isActive: boolean
    creditCard ?: number  // this field can also be let emapty as use of ?
}

// lets create an object based on the props of User
let myUser: User = {
    _id: "abchde",
    name: "animesh",
    email: "a@gmail",
    isActive: true,
    // creditCard : 121212  we wont give this as obj can be created without it
}

console.log(myUser); // { _id: 'abchde', name: 'animesh', email: 'a@gmail', isActive: true }
// want to update 
myUser.name = "kakt"
console.log(myUser);  // { _id: 'abchde', name: 'kakt', email: 'a@gmail', isActive: true }

// myUser._id = "assas" we cant do this as its readonly


// & 

type cardNums = {
    creditnumber: number
}

type cardDate = {
    cardDate: number
}

type cardDetails = cardNums & cardDate // we combining both with & parameter

type cardDetails2 = cardNums & cardDate & {  // not good practice
    cvv: number
}





export {}