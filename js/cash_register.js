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
operatorBalance.innerHTML = "Balance"
operatorBalance.className = "operator"
let operatorDeposit = document.createElement('button')
operatorDeposit.innerHTML = "Deposit"
operatorDeposit.className = 'operator'
let operatorWithdraw = document.createElement('button')
operatorWithdraw.innerHTML = "Withdraw"
operatorWithdraw.className = 'operator'
let operatorClear = document.createElement('button')
operatorClear.innerHTML = "Clear"
operatorClear.className = 'operator'
let operatorPay = document.createElement('button')
operatorPay.innerHTML = "Pay"
operatorPay.className = 'operator'

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

//Row 5
findRows[4].appendChild(operatorAdd)
findRows[4].appendChild(operatorWithdraw)
findRows[4].appendChild(operatorSubtract)
findRows[4].appendChild(operatorDeposit)
findRows[4].appendChild(operatorMultiply)
findRows[4].appendChild(operatorBalance)
findRows[4].appendChild(operatorDivide)
findRows[4].appendChild(operatorClear)
findRows[4].appendChild(operatorPay)

let findDisplay = document.getElementById("calcDisplay");
let findOperatorIcon = document.getElementById("operator")
let findButtons = document.querySelectorAll(".btn")
console.log(findOperatorIcon)

for (let i = 0; i < 12; i++) {
    findButtons[i].addEventListener("click", function(){
            findDisplay.innerHTML+=this.innerHTML

    })
}


let findOperators = document.querySelectorAll(".operator");
console.log(findOperators)

for (let x = 0; x < findOperators.length; x++) {
    findOperators[x].addEventListener("click", function(){
        findOperatorIcon.innerHTML = ""
        findOperatorIcon.innerHTML = this.innerHTML
        // if(findOperatorIcon.innerHTML.includes("+")) {
        //     console.log(findDisplay)
        //     // let y = parseInt(findDisplay.innerHTML)
        //     // register.load(y)
        // }
    })
}

})();