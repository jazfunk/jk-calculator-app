
let number1 = 0;
let number2 = 0
let operator = "";

window.onload = () => {
  addButtonEventListeners();

}


function addButtonEventListeners() {

  const numberButtons = document.querySelectorAll(".number-btn");
  numberButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      // debugger;
      document.getElementById("input-display").value = e.target.innerText;
      console.log(e.target.innerText);
    });
  });

  const operatorButtons = document.querySelectorAll(".operator-btn");
  operatorButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      debugger;
      document.getElementById("show-operator").innerText = e.target.innerText;
      console.log(e.target.innerText);
    });
  });

  const memoryButtons = document.querySelectorAll(".memory-btn");
  memoryButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      debugger;
      document.getElementById("show-operator").innerText = e.target.innerText;
      console.log(e.target.innerText);
    });
  });

  const clearButtons = document.querySelectorAll(".clear-btn");
  clearButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      debugger;
      document.getElementById("show-operator").innerText = e.target.innerText;
      console.log(e.target.innerText);
    });
  });
}
