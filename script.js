let number1 = null;
let number2 = null;
let operator = null;
let numberMemory = null;

const numberButtons = document.querySelectorAll(".number-btn");
numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonPressed = e.target.innerText;

    if (operator === null) {
      number1 = !number1 ? buttonPressed : number1 + buttonPressed;
      document.getElementById("input-display").value = number1;
    } else {
      number2 = !number2 ? buttonPressed : number2 + buttonPressed;
      document.getElementById("input-display").value = number2;
    }
  });
});

const decimalButton = document.querySelector("#btn-decimal");
decimalButton.addEventListener("click", (e) => {
  if (operator === null) {
    if (number1 && number1.includes(".")) {
      return;
    }
    number1 = number1 === null ? "0." : number1 + ".";
    document.getElementById("input-display").value = number1;
  } else {
    if (number2 && number2.includes(".")) {
      return;
    }
    number2 = number2 === null ? "0." : number2 + ".";
    document.getElementById("input-display").value = number2;
  }
});

const operatorButtons = document.querySelectorAll(".operator-btn");
operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const inputDisplay = document.getElementById("input-display");

    if (number2 === null) {
      if (!inputDisplay.value) {
        return;
      }
    } else {
      number1 = parseFloat(calculateInput().toFixed(10));
      inputDisplay.value = number1;
      number2 = null;
    }

    operator = e.target.innerText;
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
        if (numberMemory) {
          inputDisplay.value = numberMemory;
          if (number1) {
            number2 = numberMemory;
          }
        }
        break;
      case "MC":
        numberMemory = null;
        break;
    }
  });
});

const clearButtons = document.querySelectorAll(".clear-btn");
clearButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        return resetValues(true);
      case "CE":
        return resetValues();
    }

    document.getElementById("input-display").value = !number1 ? "0" : number1;
  });
});

let resetValues = (resetAll) => {
  if (resetAll) {
    number1 = null;
    operator = null;
  }

  number2 = null;

  document.getElementById("input-display").value = !number1 ? "0" : number1;
};

let calculateInput = () => {
  switch (operator) {
    case "\xD7":
      return parseFloat(number1) * parseFloat(number2);
    case "\xF7":
      return parseFloat(number1) / parseFloat(number2);
    case "+":
    case "=":
      return parseFloat(number1) + parseFloat(number2);
    case "\u2212":
      return parseFloat(number1) - parseFloat(number2);
    default:
      throw new Error("no matching operators found");
  }
};
