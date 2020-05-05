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
      number1 === "0" ? (number1 = buttonPressed) : (number1 += buttonPressed);
      valueToDisplay = number1;
    } else {
      number2 === "0" ? (number2 = buttonPressed) : (number2 += buttonPressed);
      valueToDisplay = number2;
    }

    if (isDecimal) {
      valueToDisplay += "0";
    }

    document.getElementById("input-display").value = parseFloat(valueToDisplay);
  });
});

const operatorButtons = document.querySelectorAll(".operator-btn");
operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const inputDisplay = document.getElementById("input-display");

    if (number2 === "0") {
      if (!inputDisplay.value) {
        return;
      } else {
        number1 = inputDisplay.value;
        operator = e.target.innerText;
        isDecimal = false;
      }
    } else {
      inputDisplay.value = parseFloat(calculateInput().toFixed(11));
      number1 = inputDisplay.value;
      number2 = "0";
      operator = e.target.innerText;
      isDecimal = false;
    }
  });
});

const memoryButtons = document.querySelectorAll(".memory-btn");
memoryButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const button = e.target.innerText;
    const inputDisplay = document.getElementById("input-display");

    switch (button) {
      case "M+":
        numberMemory = inputDisplay.value;
        break;
      case "MR":
        if (numberMemory !== "0") {
          inputDisplay.value = numberMemory;
          if (number1 !== "0") {
            number2 = numberMemory;
          }
        }
        break;
      case "M-":
        numberMemory = "0";
        break;
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
    console.log(error.message);
    return -1;
  }
};
