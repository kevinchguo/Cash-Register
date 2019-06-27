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
    let registerTotal = 0;
    let calculator = {};
    
    calculator.getBalance = function() {
        balance = memory;
        return balance;
    }

    calculator.load = function(x) {
        this.validations(x)
        total = x
        console.log(total)
        return total;
    }

    calculator.saveMemory = function() {
        memory = total
        console.log(memory)
        return memory
    }

    calculator.clearMemory = function() {
        memory = '';
        total = '';
        console.log(memory)
    }

    calculator.getRegisterTotal = function() {
        console.log("You have " + registerTotal + " left in your register")
        return registerTotal;
    }

    calculator.depositCash = function(x) {
        this.validations(x)
        registerTotal+= x
        return registerTotal;
    }

    calculator.withdrawCash = function (x) {
        this.validations(x)
        registerTotal = registerTotal - x
        return registerTotal;
    }

    calculator.add = function(x) {
        this.validations(x)
        console.log("added " + x)
        total += x;
    }

    calculator.subtract = function(x) {
        this.validations(x)
        console.log("subtracted " + x)
        total -= x;
    }

    calculator.multiply = function(x) {
        this.validations(x)
        console.log("multiplied " + x)
        total *= x;
    }

    calculator.divide = function(x) {
        this.validations(x)
        console.log("divided " + x)
        total /= x;
    }

    calculator.orderFood = function() {
        console.log("i bought " + balance + " of items")
        registerTotal+=balance
    }
     
    calculator.validations = function(x) {
        if (typeof x !== "number") {
            return "Error"
        }
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