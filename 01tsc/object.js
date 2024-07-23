"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "animesh",
    email: "animesh@gmail",
    isActive: true
};
// create object with function
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "animesh", isPaid: false, email: "h@gmail" };
createUser(newUser); // odd behaviour as no email in createUser function
// another way
function createCourse() {
    return { name: "reactjs", price: 499 };
}
console.log(createCourse());
// from docs
function sayMyName(_a) {
    var name = _a.name, age = _a.age;
    return "my name is ".concat(name, " and age is ").concat(age);
}
console.log(sayMyName({ name: "animesh", age: 21 }));
function printSomething(s) {
    console.log("name is ".concat(s.name));
    console.log("age is ".concat(s.age));
}
printSomething({ name: "kafka", age: 32 });
// lets create an object based on the props of User
var myUser = {
    _id: "abchde",
    name: "animesh",
    email: "a@gmail",
    isActive: true,
    // creditCard : 121212  we wont give this as obj can be created without it
};
console.log(myUser);
// want to update 
myUser.name = "kakt";
console.log(myUser);
