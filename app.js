// currentTotal
// previousTotal = 12 // when press +
// operand
// operator
// operandClicks until operator (for 1s,10s, 100s,) //keep track within event listener - not global need
// css grid and hand code design from scratch

//no order of operations

const calculator = {
  currentTotal: 0,
  previousTotal: 0,
  operand: null,
  operator: null
}
let {currentTotal, previousTotal, operand, operator} = calculator;

document.addEventListener('click', (event) => {
  //only allow click on button
  const {target} = event;

  if (!target.matches('button')) return;
  debugger
  if (target.className.includes('single number')) {
    if (!operator){
      operand = operand ? operand + target.value: target.value;
      console.log(operand)
    } else {
      console.log(operand)
      switch (operator) {
        case "+": {
          currentTotal = previousTotal + operand;
          // reset operator
          operator = null;
          console.log(currentTotal)
          break;
        }
        case "-": {
          currentTotal = previousTotal - operand;
          // reset operator
          operator = null;
          console.log(currentTotal)
          break;
        }
        case "*": {
          currentTotal = previousTotal * operand;
          // reset operator
          operator = null;
          console.log(currentTotal)
          break;
        }
        case "/": {
          currentTotal = previousTotal / operand;
          // reset operator
          operator = null;
          console.log(currentTotal)
          break;
        }
        default: {
          break;
        }
      }
    }
    
    
  }
  if (target.className.includes('single op') && target.value !== "=") {
    operator = target.value;
    previousTotal = operand;
    console.log(operator);
  }

  //Need Fix
  // if (target.className.includes('single op') && target.value === "=") {

  //   console.log(`Equals ${currentTotal}`);
  // }

})