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
  const {target} = event;
  
  // Ensure only button clicks
  if (!target.matches('button')) return;

  // Number buttons
  if (target.className.includes('single number')) {
    // Sets operand variable if null - otherwise concatenates
    operand = operand ? operand + target.value: target.value;
    console.log(operand)
    // Change screen text to show current operand after each click
    document.getElementById("screen").innerText = operand;
  }

  // Press decimal
  if (target.id.includes("dot") && !decimalAdded) {
    operand = operand ? operand + "." : "0.";
    document.getElementById("screen").innerText = operand;
    decimalAdded = true;
  }
  
  // Operation buttons that are not "Equals"
  if (target.className.includes('single op') && !target.id.includes("equals")) {
    operator = target.value;
    // Previous total will only equal currentTotal after "Equals" button is clicked
    if (currentTotal === previousTotal) {
      operand = null
      return;
    }

    // Default behavior - updates previousTotal assuming operations(+-/*) are being chained
    operand = Number(operand);
    if (!previousTotal) {
      // First time set previousTotal to be operand
      previousTotal = operand;
    } else {
      // Otherwise operate on previousTotal based on operand
      switch (operator) {
        case "+": {
          previousTotal = previousTotal + operand;
          document.querySelector("#screen").innerHTML = currentTotal;
          break;
        }
        case "-": {
          previousTotal = previousTotal - operand;
          document.querySelector("#screen").innerHTML = currentTotal;
          break;
        }
        case "*": {
          previousTotal = previousTotal * operand;
          document.querySelector("#screen").innerHTML = currentTotal;
          break;
        }
        case "/": {
          previousTotal = previousTotal / operand;
          document.querySelector("#screen").innerHTML = currentTotal;
          break;
        }
        
      }
    }

    operand = null;
    console.log(operator);
  } 

  // Press AC
  if (target.className.includes("single gray")) {
    if (target.id.includes("AC")) {
      document.getElementById("screen").innerHTML = "0";

      // Changes the button from "C" to "AC" after clearing all numbers
      document.getElementById("AC").innerHTML = "AC";

      // Clears the number input history
      currentTotal = 0;
      previousTotal = null;
      operand = null;
      operator = null;
      decimalAdded = false;
    }
  }


  if (target.id.includes("equals")) {
    // Pressing = repeatedly will repeat the same operation
    operand = Number(operand);

    switch (operator) {
      case "+": {
        currentTotal = previousTotal + operand;
        previousTotal = currentTotal;
        document.querySelector("#screen").innerHTML = currentTotal;
        console.log(`Equals ${currentTotal}`);
        break;
      }
      case "-": {
        currentTotal = previousTotal - operand;
        previousTotal = currentTotal;
        document.querySelector("#screen").innerHTML = currentTotal;
        console.log(`Equals ${currentTotal}`);
        break;
      }
      case "*": {
        currentTotal = previousTotal * operand;
        previousTotal = currentTotal;
        document.querySelector("#screen").innerHTML = currentTotal;
        console.log(`Equals ${currentTotal}`);
        break;
      }
      case "/": {
        currentTotal = previousTotal / operand;
        previousTotal = currentTotal;
        document.querySelector("#screen").innerHTML = currentTotal;
        console.log(`Equals ${currentTotal}`);
        break;
      }
      default: {
        break;
      }

    }
  }

})