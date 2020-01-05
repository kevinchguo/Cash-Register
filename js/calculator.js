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
  let firstNum = null;
  let operator = null;
  let secondNum = null;
  let menuItem = null;
  let update = null;

  calculator.getBalance = function(num) {
    if (isNaN(num)) {
      return balance;
    } else {
      balance += num;
      return balance;
    }
  };

  calculator.saveFirstNumber = function(num) {
    firstNum = num;
  };

  calculator.returnFirstNumber = function() {
    return firstNum;
  };

  calculator.saveOperator = function(oper) {
    operator = oper;
  };

  calculator.returnUpdate = function() {};

  calculator.runEquation = function(secondNum) {
    if (operator === "+") {
      total = firstNum + parseFloat(secondNum);
      return total;
    } else if (operator === "-") {
      total = firstNum - parseFloat(secondNum);
      return total;
    } else if (operator === "x") {
      total = firstNum * parseFloat(secondNum);
      return total;
    } else if (operator === "÷") {
      total = firstNum / parseFloat(secondNum);
      return total;
    }
  };

  calculator.clearMemory = function() {
    firstNum = "";
    secondNum = "";
    update = "";
  };

  calculator.getRegisterTotal = function() {
    return registerTotal;
  };

  calculator.depositCash = function(x) {
    if (isNaN(x)) {
      return registerTotal;
    } else {
      registerTotal += x;
      return registerTotal;
    }
  };

  calculator.withdrawCash = function(x) {
    if (isNaN(x)) {
      return registerTotal;
    } else {
      registerTotal -= x;
      return registerTotal;
    }
  };

  calculator.add = function(x) {
    this.validations(x);
    total += x;
  };

  calculator.subtract = function(x) {
    this.validations(x);
    total -= x;
  };

  calculator.multiply = function(x) {
    this.validations(x);
    total *= x;
  };

  calculator.divide = function(x) {
    this.validations(x);
    total /= x;
  };

  calculator.orderFood = function() {
    registerTotal += balance;
  };

  calculator.validations = function(x) {
    if (typeof x !== "number") {
      return "Error";
    }
  };

  calculator.findMenuItem = function(menuItemPrice) {
    menuItem = menuItemPrice;
  };

  calculator.returnMenuItemPrice = function() {
    return menuItem;
  };

  return calculator;
})();
