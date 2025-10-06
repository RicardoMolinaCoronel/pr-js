


const containerDiv = document.getElementById("main-div")
const containerTitle = document.querySelector(".main-title")
const paragraph = document.querySelector("p")

console.log(containerTitle.textContent)
console.log(containerDiv.style.backgroundColor)

containerTitle.textContent = "QUE ONDA"
containerTitle.style.color = "red"
containerTitle.style.backgroundColor = "#000"

const button = document.querySelector("a")
if (button) {
    button.setAttribute("href", "https://google.com")
    button.style.color = "blue"
}

const anotherButton = document.getElementById("another-button")
if (anotherButton) {
    anotherButton.addEventListener('click', function() {
        if (this.style.color == "blue"){
            this.style.color = "red"
        }else{
            this.style.color = "blue"
        }
        console.log("Im the pressed button")
    })

    anotherButton.style.color = "blue"
}







