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
let btnAdd = document.createElement('button')
btnAdd.innerHTML = "+"
btnAdd.className = "btn"
let btnSubtract = document.createElement('button')
btnSubtract.innerHTML = "-"
btnSubtract.className = "btn"
let btnMultiply = document.createElement('button')
btnMultiply.innerHTML = "*"
btnMultiply.className = "btn"
let btnDivide = document.createElement('button')
btnDivide.innerHTML = "/"
btnDivide.className = "btn"
let btnEquals = document.createElement('button')
btnEquals.innerHTML = "="
btnEquals.className = "btn"
let btnBalance = document.createElement('button')
btnBalance.innerHTML = "Balance"
btnBalance.className = "btn"
let btnDeposit = document.createElement('button')
btnDeposit.innerHTML = "Deposit"
btnDeposit.className = 'btn'
let btnWithdraw = document.createElement('button')
btnWithdraw.innerHTML = "Withdraw"
btnWithdraw.className = 'btn'
let btnClear = document.createElement('button')
btnClear.innerHTML = "Clear"
btnClear.className = 'btn'
let btnPay = document.createElement('button')
btnPay.innerHTML = "Pay"
btnPay.className = 'btn'

let findRows = document.getElementsByClassName("calcBtn")
//Row 1

findRows[0].appendChild(btn7)
findRows[0].appendChild(btn8)
findRows[0].appendChild(btn9)
findRows[0].appendChild(btnDivide)
findRows[0].appendChild(btnClear)

//Row 2

findRows[1].appendChild(btn4)
findRows[1].appendChild(btn5)
findRows[1].appendChild(btn6)
findRows[1].appendChild(btnMultiply)
findRows[1].appendChild(btnBalance)

//Row 3

findRows[2].appendChild(btn1)
findRows[2].appendChild(btn2)
findRows[2].appendChild(btn3)
findRows[2].appendChild(btnSubtract)
findRows[2].appendChild(btnDeposit)

//Row 4

findRows[3].appendChild(btn0)
findRows[3].appendChild(btn00)
findRows[3].appendChild(btnDecimal)
findRows[3].appendChild(btnAdd)
findRows[3].appendChild(btnWithdraw)

//Row 5
findRows[4].appendChild(btnPay)

let findButtons = document.querySelectorAll(".btn")
console.log(findButtons)
})();