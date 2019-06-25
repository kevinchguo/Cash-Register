/*make '+-/*' and = operators buttons
    make clear, balance, deposit, widthraw button
    [________________] <-----( display )

    [7] [8]  [9]   [÷]  [clear]
    [4] [5]  [6]   [×]  [get balance]
    [1] [2]  [3]   [-]  [deposit cash]
    [0] [00] [.]   [+]  [withdraw cash]
                   [=]
    */

var register = (function() {
    let balance = 0; //what you see on the calculator
    let total = 0;
    let memory = 0; //what the balance totals to
    let clearBalance = 0;
    let registerTotal = 0;
    let calculator = {};
    
    calculator.getBalance = function() {
        balance = memory;
        return balance;
    }

    calculator.load = function(x) {
        total = x
        console.log(total)
        return total;
    }

    calculator.saveMemory = function() {
        memory = total
    }

    calculator.clearMemory = function() {
        memory = 0;
    }

    calculator.getRegisterTotal = function() {
        console.log("You have " + registerTotal + " left in your register")
        return registerTotal;
    }

    calculator.clearBalance = function() {
        console.log("I cleared my balance of " + balance)
        balance = clearBalance;
        return total;
    }

    calculator.depositCash = function(x) {
        registerTotal = registerTotal + x
        return registerTotal;
    }

    calculator.withdrawCash = function (x) {
        registerTotal = registerTotal - x
        return registerTotal;
    }

    calculator.add = function(x) {
        console.log("added " + x)
        memory += x;
    }

    calculator.subtract = function(x) {
        console.log("subtracted " + x)
        memory -= x;
    }

    calculator.multiply = function(x) {
        console.log("multiplied " + x)
        memory *= x;
    }

    calculator.divide = function(x) {
        console.log("divided " + x)
        memory /= x;
    }

    calculator.orderFood = function() {
        console.log("i bought " + balance + " of items")
        registerTotal -= balance
    }

    return calculator;

})();

// register.depositCash(250)
// console.log(register.add(50))
// console.log(register.add(50))
// console.log(register.getBalance())
// // register.clearBalance()
// register.orderFood()
// console.log(register.getRegisterTotal())