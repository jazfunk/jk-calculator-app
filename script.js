const numberButtons = document.querySelectorAll('.number-btn');

numberButtons.forEach(button => {  
  button.addEventListener('click', (e) => {
    debugger;
    document.getElementById('input-display').value = e.target.innerText;
    console.log(e.target.innerText);
  });
});

const operatorButtons = document.querySelectorAll('.operator-btn');

operatorButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    debugger;
    document.getElementById('input-display').value = e.target.innerText;
    console.log(e.target.innerText);
  })
})