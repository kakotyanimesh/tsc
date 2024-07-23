const message: string = "hello"

// // message() 
// // => if we run this : error will appear as message is not a function => typescript helps to find it while writing the code


// const annousment = "hello world"


console.log("its typescript")

// function greet(person, date){
//     console.log(`hello ${person}, today is ${date}`);
    
// }


// greet("animesh") => we got error as only one paramete is given & before running ts gives us that error => that's why need the typescript
// greet("animesh", 22)  to avoid that 2 para is given
// here we arenot properly defining the types of parameters ( person and date) => we have to do that


function greet(person : string, date: Date){
    console.log(`hello ${person}, today is ${date.toDateString()}`);
    
}

greet("animes", new Date())

// types in typescript : string , number (no s), boolean
const name: string = "aniesh" 
let age: number = 21
let isDead: boolean = true
 // sometime it required to write the primitives types but not everytime 
 // ts automatically got to know what is string or number or boolean (all are in small letters)
 
// another is the any type : when we dont know the type we dont write it and ts makes it any to way out from errors => dont use it 



function addFour(num: number){
    return num + 4
}

addFour(12)

function signUp(name: string, email: string, isLoggedIn: boolean = false){
    return `the ${name} with ${email} is not loggedin yet`
}

console.log(signUp("anime", "anie@gfa"));

// we are giving default value to isLoggedIn with = default value 

function getVAL(myVAL: number): number{
    return myVAL
}

console.log(getVAL(22));


const hellow = (s: string): string => {
    return s
}


const heros =["thor", "ironman"]

heros.map((hero) :string => {  // we just add the type of return statement
    return `hero is ${hero}`
})


function consoleError(errText: string) {
    console.log(errText);
    
} 

// contexual typing => we dont have to explicitely give types
heros.forEach((s) => { // in 69 : we said return value must be string but we can write without saying => ts can do that
    console.log(s.toUpperCase()); 
    
})


// function type expressions => giving type to function 

/*
    assign type to a function like void means that function wont return anything
*/
function greetNew(fn: (a: string) => void) { 
    fn("hello world")   // here input is a string
}

function print(s: string): void {
    console.log(s);
    
}

greetNew(print) // hello world 
// we passed print fn inside greetNew => fn => print and "hello world" => s 

function voidfn(n: number) : void{
    console.log(n);
    
}

//  NEVER type => use it when we want to throw an error

function handleError(errorText: string): never{
    throw new Error(errorText)
}





export {} 


