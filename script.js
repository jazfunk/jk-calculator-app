let number1 = "0";
let number2 = "0";
let operator = "";
let numberMemory = "0";
let isDecimal = false;

const numberButtons = document.querySelectorAll(".number-btn");
numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonPressed = e.target.innerText;
    let valueToDisplay = "0";

    if (buttonPressed === ".") {
      if (isDecimal) {
        return;
      }
      isDecimal = true;
    }

    if (operator === "") {
      if (number1 === "0") {
        number1 = buttonPressed;
      } else {
        number1 += buttonPressed;
      }
      valueToDisplay = number1;
    } else {
      if (number2 === "0") {
        number2 = buttonPressed;
      } else {
        number2 += buttonPressed;
      }
      valueToDisplay = number2;
    }

    document.getElementById("input-display").value = valueToDisplay;
  });
});

const operatorButtons = document.querySelectorAll(".operator-btn");
operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    debugger;

    if (number2 === "0") {
      if (document.getElementById("input-display").value === "") {
        return;
      } else {
        number1 = document.getElementById("input-display").value;
      }
      operator = e.target.innerText;
      isDecimal = false;
    } else {
      if (number1 === "0") {
        number1 = document.getElementById("input-display").value;
      }
      document.getElementById("input-display").value = calculateInput();
      // clearValues();
      number2 = "0";
      number1 = document.getElementById("input-display").value;
      operator = e.target.innerText;
      isDecimal = false;
    }
  });
});

const memoryButtons = document.querySelectorAll(".memory-btn");
memoryButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText === "M+") {
      numberMemory = document.getElementById("input-display").value;
    }

    if (e.target.innerText === "MR") {
      document.getElementById("input-display").value = numberMemory;
    }

    if (e.target.innerText === "MC") {
      numberMemory = "0";
    }
  });
});

const clearButtons = document.querySelectorAll(".clear-btn");
clearButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerText === "C") {
      clearValues();
      document.getElementById("input-display").value = "0";
    }
  });
});

let clearValues = () => {
  number1 = "0";
  number2 = "0";
  isDecimal = false;
  operator = "";
};

let calculateInput = () => {
  try {
    switch (operator) {
      case "X":
        return parseFloat(number1) * parseFloat(number2);
      case "/":
        return parseFloat(number1) / parseFloat(number2);
      case "+":
        return parseFloat(number1) + parseFloat(number2);
      case "-":
        return parseFloat(number1) - parseFloat(number2);
      default:
        return -1;
    }
  } catch (error) {
    console.log(error);
    return -1;
  }
};
