const message: string = "Hello from!"
const num: number = 5
const boo: boolean = true
const types: number[] = [0, 5]

let n: null = null
let und: undefined = undefined 
let id: string | number = "a"
id = 5

console.log(message);
console.log(und)
console.log(n)
console.log(types)
console.log(id)


interface User{
    name: string,
    age: number,
    isMonster?: boolean
}

const user: User = {
    name: "booo",
    age: 0,
    isMonster: false
}

function updateUser(id: number, user: Partial<User>){

    console.log(user)

}

updateUser(1, {name: "booo"})

type UserPreview = Pick<User, "name" | "age">

const userPreview: UserPreview = {
    name: "booo",
    age: 0
}

const userConfig: Readonly<User> = {
    name: "booo",
    age: 0,
    isMonster: false
}


let anyType: any = 5
anyType = true
type sn = string | number
let news: sn = "dsds"


function greet(name: string): string {
    return "Hello " + name
}

function getFirstElement<T>(elements: T[]): string{
    return "Im the boss"
}

console.log(greet("booo"))
console.log(getFirstElement(["DDD"]))

enum Role{
    ADMIN = "ADMINN",
    USER = "USER",
    GUEST = "GUEST"
}

console.log(Role.ADMIN)

// keyof

type UserKeys = keyof User

let userType: UserKeys = "name"

console.log(userType)


let arrayT: number[] = [1, 2, 3]
arrayT.splice(2, 0, 4)
console.log(arrayT)

let userTuple: [string, number, string] = ["booo", 0, "a"]
userTuple[1] = 1
console.log(userTuple)

const newArray: User[] = [
    {name: "booo", age: 0, isMonster: false},
    {name: "booo", age: 0, isMonster: false}
]

for(const user of newArray){
    console.log(user)
}

let disordedArray = [3,5,1]
disordedArray.sort((a, b) => b - a)

console.log(disordedArray)
//toSorted() exactly the same as "sort()" but it doesnt modify the array itself. instead of that it returns a new array