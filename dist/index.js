"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message = "Hello from!";
const num = 5;
const boo = true;
const types = [0, 5];
let n = null;
let und = undefined;
let id = "a";
id = 5;
console.log(message);
console.log(und);
console.log(n);
console.log(types);
console.log(id);
const user = {
    name: "booo",
    age: 0,
    isMonster: false
};
function updateUser(id, user) {
    console.log(user);
}
updateUser(1, { name: "booo" });
const userPreview = {
    name: "booo",
    age: 0
};
const userConfig = {
    name: "booo",
    age: 0,
    isMonster: false
};
let anyType = 5;
anyType = true;
let news = "dsds";
function greet(name) {
    return "Hello " + name;
}
function getFirstElement(elements) {
    return "Im the boss";
}
console.log(greet("booo"));
console.log(getFirstElement(["DDD"]));
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMINN";
    Role["USER"] = "USER";
    Role["GUEST"] = "GUEST";
})(Role || (Role = {}));
console.log(Role.ADMIN);
let userType = "name";
console.log(userType);
let arrayT = [1, 2, 3];
arrayT.splice(2, 0, 4);
console.log(arrayT);
let userTuple = ["booo", 0, "a"];
userTuple[1] = 1;
console.log(userTuple);
const newArray = [
    { name: "booo", age: 0, isMonster: false },
    { name: "booo", age: 0, isMonster: false }
];
for (const user of newArray) {
    console.log(user);
}
let disordedArray = [3, 5, 1];
disordedArray.sort((a, b) => b - a);
console.log(disordedArray);
//# sourceMappingURL=index.js.map