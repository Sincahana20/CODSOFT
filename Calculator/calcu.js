let display = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operation = null;
function appendNumber(number) {
  if (currentOperand.length < 10) {
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
  }
}
function chooseOperation(op){
  if (currentOperand === '') return;
  if (previousOperand !== '') {
    calculateResult();
  }
  operation = op;
  previousOperand = currentOperand;
  currentOperand = '';
}
function updateDisplay() {
  display.innerText = currentOperand || previousOperand || '0';
}
function calculateResult() {
  let result;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;
  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return;
  }
  currentOperand = result;
  operation = null;
  previousOperand = '';
  updateDisplay();
}
function clearDisplay() {
  currentOperand = '';
  previousOperand = '';
  operation = null;
  updateDisplay();
}
