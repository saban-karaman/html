let randomNumber = Math.floor((Math.random())*100)
while(true){
    const inputNumber = parseInt(document.getElementById("text"))
    if (inputNumber ===""){
        document.getElementById("result").innerHTML = "Enter less number"
        break
    if (randomNumber > inputNumber){
        document.getElementById("result").innerHTML = "Enter less number"
    } else if (randomNumber < inputNumber){
        document.getElementById("result").innerHTML = "Enter bigger number"
    } else if (randomNumber === inputNumber) {
        document.getElementById("result").innerHTML = "you win"
        break
    }
}