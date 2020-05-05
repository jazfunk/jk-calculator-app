let number1 = "";
let number2 = "";
let operator = "";
let numberMemory = "";
let isDecimal = false;

const numberButtons = document.querySelectorAll(".number-btn");
numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonPressed = e.target.innerText;
    let valueToDisplay = "";

    if (buttonPressed === ".") {
      if (isDecimal) {
        return;
      }
      isDecimal = true;
    }

    if (operator === "") {
      !number1 ? (number1 = buttonPressed) : (number1 += buttonPressed);
      valueToDisplay = number1;
    } else {
      !number2 ? (number2 = buttonPressed) : (number2 += buttonPressed);
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

    if (!number2) {
      if (!inputDisplay.value) {
        return;
      } else {
        number1 = inputDisplay.value;
        operator = e.target.innerText;
        isDecimal = false;
      }
    } else {

      // There's some error with this whenever clicking the 
      // total/equals button in some cases.
      // find this tomorrow.

      inputDisplay.value = parseFloat(calculateInput().toFixed(11));
      number1 = inputDisplay.value;
      number2 = "";
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
          if (!number1) {
            number2 = numberMemory;
          }
        }
        break;
      case "M-":
        numberMemory = "";
        break;
    }
  });
});

const clearButtons = document.querySelectorAll(".clear-btn");
clearButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        return clearValues(true);
        // break;

      case "CE":
        return clearValues();
        // break;
    }
    document.getElementById("input-display").value = number1;

    // if (e.target.innerText === "C") {
    //   clearValues();
    //   document.getElementById("input-display").value = "";
    // }
  });
});

let clearValues = (clearAll) => {
  if (clearAll) {
    number1 = "";
    operator = "";
  }
  number2 = "";
  isDecimal = false;
  document.getElementById("input-display").value = "";
};

let calculateInput = () => {
  try {
    switch (operator) {
      case "x":
        return parseFloat(number1) * parseFloat(number2);
      case "/":
        return parseFloat(number1) / parseFloat(number2);
      case "+":
        return parseFloat(number1) + parseFloat(number2);
      case "-":
        return parseFloat(number1) - parseFloat(number2);
    }
  } catch (error) {
    console.log(error.message);
    return -1;
  }
};
