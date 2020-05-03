let number1 = "0";
let number2 = "0";
let operator = "";
let numberMemory = "0";
let isDecimal = false;

window.onload = () => {
  addButtonEventListeners();
};

const numberButtons = document.querySelectorAll(".number-btn");
numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonPressed = e.target.innerText;
    let displayValue = "0";

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
      displayValue = number1;
    } else {
      if (number2 === "0") {
        number2 = buttonPressed;
      } else {
        number2 += buttonPressed;
      }
      displayValue = number2;
    }

    document.getElementById("input-display").value = displayValue;
  });
});

let clearValues = () => {
  number1 = "0";
  number2 = "0";
  isDecimal = false;
  operator = "";
}

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
    }
  } catch (error) {
    return -1;
  }
};

const operatorButtons = document.querySelectorAll(".operator-btn");
operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (number2 === "0") {
      operator = e.target.innerText;
      isDecimal = false;
    } else {
      document.getElementById("input-display").value = calculateInput();
      clearValues();
      number1 = document.getElementById("input-display").value;
    }
  });
});

const memoryButtons = document.querySelectorAll(".memory-btn");
memoryButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // debugger;
    if (e.target.innerText === "M+") {
      numberMemory = document.getElementById("input-display").value;
      console.log(numberMemory);
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
    // debugger;
    if (e.target.innerText === "C") {
      clearValues();
    }
  });
});
