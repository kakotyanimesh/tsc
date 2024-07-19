const message = "hello";
// // message() 
// // => if we run this : error will appear as message is not a function => typescript helps to find it while writing the code
// const annousment = "hello world"
console.log("its typescript");
// function greet(person, date){
//     console.log(`hello ${person}, today is ${date}`);
// }
// greet("animesh") => we got error as only one paramete is given & before running ts gives us that error => that's why need the typescript
// greet("animesh", 22)  to avoid that 2 para is given
// here we arenot properly defining the types of parameters ( person and date) => we have to do that
function greet(person, date) {
    console.log(`hello ${person}, today is ${date.toDateString()}`);
}
greet("animes", new Date());
export {};
