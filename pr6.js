class Animal{
    constructor(name){
        this.name = name
    }
    
    speak(){
        console.log(`${this.name} makes a noise.`)
    }
}


class Dog extends Animal{
    constructor(name){
        super(name)
    }
    speak(){
        console.log(`${this.name} barks.`)
    }
}

const animal = new Animal("animal")
const dog = new Dog("dog")
dog.speak()


let list = [1, 2, 3]

console.log(list.reduce((total, current) => { return total + current}))
console.log(list.map((item) => {return item*2}))
list.forEach((item) => {console.log(item)})
console.log(list.find((item) => true))

const User = {
    userName: "a",
    age: 1
}

let otherList = [...list]
const {userName, age} = User
console.log("OTHER LIST", otherList)
console.log(userName)
console.log(age)

export function aFunction(...params){
    console.log(params)
}

aFunction(1,2,3)

//module.exports = { aFunction }
export default User


