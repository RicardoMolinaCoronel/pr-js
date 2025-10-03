console.log("hola")
let counter = 1
counter = 2

const counter1 = 0

var counter2 = 0
counter2+=1

console.log(counter1)
console.log(counter2)

f1()

function f1(){
    console.log("F1")
}


//TYPES
let number = 5
let otherNumber = 5
let numberString = '5'
let string = "hi"
let boolean = true
let nullVar = null
let undefinedVar
let object = {}
let array = []
let newFunction = () => {}

console.log(typeof number)
console.log(typeof undefinedVar)
console.log(nullVar)
console.log(typeof object)
console.log(typeof array)
console.log(typeof newFunction)
console.log(typeof boolean)
console.log(typeof string)

console.log("COMPARISON OPERATORS")
console.log(number===numberString)
console.log(number==numberString)
console.log(number!==numberString)
console.log(number==otherNumber)


const constFunction = () => {
    console.log("constFunction")
}

const otherConstFunction = function() {
    console.log("broooo")
}


otherConstFunction()
constFunction()


const myObject = {
    name: "a",
traditional: function(){
    console.log("arguments: " + arguments[0])
    console.log("traditional: "+this.name)
},
newer: () => {
    console.log("newer: "+this.name)

}
    
}
myObject.traditional(1,2,3)
myObject.newer()


const sumAllNewer = (...numbers) => {

return numbers.reduce((total, current) => total + current, 0)
    
}

function Car(model){
    this.model = model
    this.speed = 0
    this.accelerate = function(amount){
        this.speed += amount
        console.log(this.model + " " + this.speed)
        return this.speed
    } 
}


console.log(sumAllNewer(1,2,3,4,5))

let car = new Car("A")
console.log(car.accelerate(10))


let array1 = [1,2,3,4,5]

array1.forEach((item) => {
    console.log(item)
})

let mapArray1 = array1.map((item) => {
    return item*2
})



let filterArray1 = array1.filter((item) => {
    return item % 2 == 0
})

//setTimeout(() => {
//    console.log("setTimeout")
//}, 1000)

let reduceArray1 = array1.reduce((total, reduce) => total + reduce, 0)

console.log(mapArray1)
console.log(filterArray1)
console.log(reduceArray1)



function fetchUser(user, callback){
    console.log("Fetching user: " + user)
    setTimeout(() => {
        callback({name: user})
    }, 2000)
}


fetchUser("John", (user) => {
    console.log(`User fetched: ${user.name}`)
})


function pFetchUser(user){
    return new Promise((resolve, reject) => {
        console.log("Fetching user: " + user)
        setTimeout(() => {
            if (user === "Kenny"){
                resolve({name: user, age: 30})
            }else{
                reject("Error: User not found")
            }
        }, 2000)
    })
}

pFetchUser("Kenny").then((data) => {
    console.log("User fetched: " + data.name)
}).catch((error) => {
    console.log(error)
})

async function getUser(user){
    console.log("Fetching one last user...")
    try{
        let data = await pFetchUser(user)
        console.log("User fetched: " + data.name)
    }catch(error){
        console.log(error)
    }
    
}

getUser("Kenny")


