// currentTotal
// previousTotal = 12 // when press +
// operand
// operator
// operandClicks until operator (for 1s,10s, 100s,) //keep track within event listener - not global need
// css grid and hand code design from scratch

//no order of operations

const calculator = {
  currentTotal: 0,
  previousTotal: null,
  operand: null,
  operator: null
}
let {currentTotal, previousTotal, operand, operator} = calculator;

document.addEventListener('click', (event) => {
  //only allow click on button
  const {target} = event;

  if (!target.matches('button')) return;

  if (target.className.includes('single number')) {
    if (!operator){
      operand = operand ? operand + target.value: target.value;
      console.log(operand)
    } else {
      operand = target.value;
      console.log(operand)
      switch (operator) {
        case "+": {
          currentTotal = previousTotal + operand;
          previousTotal = currentTotal;
          // reset operator
          operator = null;
          console.log(currentTotal)
          break;
        }
        case "-": {
          currentTotal = previousTotal - operand;
          previousTotal = currentTotal;
          // reset operator
          operator = null;
          console.log(currentTotal)
          break;
        }
        case "*": {
          currentTotal = previousTotal * operand;
          previousTotal = currentTotal;
          // reset operator
          operator = null;
          console.log(currentTotal)
          break;
        }
        case "/": {
          currentTotal = previousTotal / operand;
          previousTotal = currentTotal;
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
    if (!previousTotal) previousTotal = operand;

    operand = null;
    console.log(operator);
  } 

  if (target.id.includes("equals")) {
    document.querySelector("#screen").innerHTML = currentTotal;
    console.log(`Equals ${currentTotal}`);
  }

})