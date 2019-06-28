// function buttonMaker(str1, str2, str3, str4) {
//     str1 = document.createElement(str2);
//     str1.className = str3;
//     str1.innerHTML = str4
// }

// for (let i = 0; i <= 9; i++) {
//     buttonMaker("btn" + i,"button","btn",i)
// }

//Create all buttons
(function() {

let btn1 = document.createElement('button')
btn1.className = "btn"
btn1.innerHTML = "1";
let btn2 = document.createElement('button')
btn2.innerHTML = "2";
btn2.className = "btn"
let btn3 = document.createElement('button')
btn3.innerHTML = "3";
btn3.className = "btn"
let btn4 = document.createElement('button')
btn4.innerHTML = "4";
btn4.className = "btn"
let btn5 = document.createElement('button')
btn5.innerHTML = "5";
btn5.className = "btn"
let btn6 = document.createElement('button')
btn6.innerHTML = "6";
btn6.className = "btn"
let btn7 = document.createElement('button')
btn7.innerHTML = "7";
btn7.className = "btn"
let btn8 = document.createElement('button')
btn8.innerHTML = "8";
btn8.className = "btn"
let btn9 = document.createElement('button')
btn9.innerHTML = "9";
btn9.className = "btn"
let btn0 = document.createElement('button')
btn0.innerHTML = "0";
btn0.className = "btn"
let btn00 = document.createElement('button')
btn00.innerHTML = "00";
btn00.className = "btn"
let btnDecimal = document.createElement('button')
btnDecimal.innerHTML = "."
btnDecimal.className = 'btn'
let operatorAdd = document.createElement('button')
operatorAdd.innerHTML = "+"
operatorAdd.className = "operator"
let operatorSubtract = document.createElement('button')
operatorSubtract.innerHTML = "-"
operatorSubtract.className = "operator"
let operatorMultiply = document.createElement('button')
operatorMultiply.innerHTML = "*"
operatorMultiply.className = "operator"
let operatorDivide = document.createElement('button')
operatorDivide.innerHTML = "/"
operatorDivide.className = "operator"
let operatorEquals = document.createElement('button')
operatorEquals.innerHTML = "="
operatorEquals.className = "operator"
let operatorBalance = document.createElement('button')
operatorBalance.innerHTML = "TOTAL"
operatorBalance.className = "function"
let operatorDeposit = document.createElement('button')
operatorDeposit.innerHTML = "DEP"
operatorDeposit.className = 'function'
let operatorWithdraw = document.createElement('button')
operatorWithdraw.innerHTML = "W/D"
operatorWithdraw.className = 'function'
let operatorClear = document.createElement('button')
operatorClear.innerHTML = "CLR"
operatorClear.className = 'function'
let operatorDelete = document.createElement('button')
operatorDelete.innerHTML = "DEL"
operatorDelete.className = 'function'
let operatorPay = document.createElement('button')
operatorPay.innerHTML = "PAY"
operatorPay.className = 'function'

let findRows = document.getElementsByClassName("calcBtn")
//Row 1

findRows[0].appendChild(btn7)
findRows[0].appendChild(btn8)
findRows[0].appendChild(btn9)

//Row 2

findRows[1].appendChild(btn4)
findRows[1].appendChild(btn5)
findRows[1].appendChild(btn6)

//Row 3

findRows[2].appendChild(btn1)
findRows[2].appendChild(btn2)
findRows[2].appendChild(btn3)

//Row 4

findRows[3].appendChild(btn0)
findRows[3].appendChild(btn00)
findRows[3].appendChild(btnDecimal)

// Row 5

findRows[4].appendChild(operatorDeposit)
findRows[4].appendChild(operatorWithdraw)
findRows[4].appendChild(operatorBalance)
findRows[4].appendChild(operatorDelete)
findRows[4].appendChild(operatorClear)
findRows[4].appendChild(operatorPay)

//Operators

let findOperatorId = document.getElementById("operationBtns")

findOperatorId.appendChild(operatorAdd)
findOperatorId.appendChild(operatorSubtract)
findOperatorId.appendChild(operatorDivide)
findOperatorId.appendChild(operatorMultiply)
findOperatorId.appendChild(operatorEquals)

let findDisplay = document.getElementById("calcDisplay");
let findButtons = document.querySelectorAll(".btn")

//Display 1-9 on findDisplay div
console.log(findDisplay.innerHTML)
for (let i = 0; i < 12; i++) {
    findButtons[i].addEventListener("click", function(){
            findDisplay.innerHTML+=this.innerHTML
    })
}

//Operation buttons

let findOperators = document.querySelectorAll(".operator");
console.log(findOperators)
for (let i = 0; i < 4; i++) { //0 - 4 to target operators only
    // if (typeof findDisplay.innerHTML === "string")
    findOperators[i].addEventListener("click", function(){   
        let x = parseFloat(findDisplay.innerHTML)
        findDisplay.innerHTML = '';
        register.saveFirstNumber(x)
            if (this.innerHTML === "+") {
                register.saveOperator("+")
            } else if (this.innerHTML === "-") {
                register.saveOperator("-")
            } else if (this.innerHTML === "*") {
                register.saveOperator("*")
            } else if (this.innerHTML === "/") {
                register.saveOperator("/")
            }
    })
}

//Equals button

findOperators[4].addEventListener("click", function(){
    console.log('press equals')
    let secondNum = parseFloat(findDisplay.innerHTML);
    findDisplay.innerHTML = register.runEquation(secondNum);
})

// findOperators[5].di


/*======================function buttons====================*/

let findFunctions = document.querySelectorAll(".function")
console.log(findFunctions)

//Total button

findFunctions[2].addEventListener("click", function(){
    let x = findDisplay.innerHTML
    findDisplay.innerHTML = register.getBalance(x)
})

//Delete most recent entered button

findFunctions[3].addEventListener("click", function(){
    let z = findDisplay.innerHTML;
    let sliceNum = z.slice(0, z.length - 1)
    console.log(sliceNum)
    findDisplay.innerHTML = sliceNum

})

//Clear memory

findFunctions[4].addEventListener("click", function(){
    register.clearMemory()
    findDisplay.innerHTML = ''
})

//Deposit money from register

findFunctions[0].addEventListener("click", function(){
    let x = parseInt(prompt("How much do you want to Deposit?"))
    console.log(typeof x)
    findDisplay.innerHTML = register.depositCash(x)

})

//Withdraw money from register

findFunctions[1].addEventListener("click", function(){
    let x = parseFloat(prompt("How much do you want to Withdraw?"))
    findDisplay.innerHTML = register.withdrawCash(x)
})

// Pay button
//able to buy multiple items

findFunctions[5].addEventListener("click", function(){
    register.getBalance(parseFloat(findDisplay.innerHTML))
    register.orderFood()
    findDisplay.innerHTML = '';
})
  
//Drop downlist functionality

//Find a href buttons

let findahref = document.querySelectorAll("a")
console.log(findahref)

//find pics

let findPics = document.querySelectorAll("img")
console.log(findPics)

let picUrl = {
    0: "https://s3-media2.fl.yelpcdn.com/bphoto/4elgJ-sdvXARBrBfqC7iLg/o.jpg",
    1: "https://s3-media1.fl.yelpcdn.com/bphoto/0_W_nmHcNW1PUBcrOZwnaQ/o.jpg",
    2: "https://s3-media3.fl.yelpcdn.com/bphoto/_CkJQD-SGBYaZ32sNst02g/o.jpg",
    3: "https://s3-media2.fl.yelpcdn.com/bphoto/LOYKCYhpQhbO20bLwYxZbA/o.jpg",
    4: "https://s3-media3.fl.yelpcdn.com/bphoto/dvKTnBXtkUNpilzJBPl5Yw/o.jpg",
    5: "https://s3-media4.fl.yelpcdn.com/bphoto/9lN3DuAGOyUdZsX8kU3cHA/o.jpg",
}
console.log(picUrl[0])

//shows pic from object and also adds price to findMenuItem func

let findMenuItemPrices = document.querySelectorAll(".price")
console.log(parseInt(findMenuItemPrices[0].innerHTML))
for (let y = 0; y < findahref.length; y++) {
    findahref[y].addEventListener("click", function() {
        findPics[1].src = picUrl[y]
        console.log(findMenuItemPrices[y])
        let x = parseInt(findMenuItemPrices[y].innerHTML) //gets the price of item
        console.log(x)
        register.findMenuItem(x) //saves price of item into variable
    })
}

//adds price of menu item onto display

let findAddToBillBtn = document.getElementById("addItemToTotal");
console.log(findAddToBillBtn.innerHTML)
findAddToBillBtn.addEventListener("click", function() {
    findDisplay.innerHTML = register.returnMenuItemPrice()
})

})();