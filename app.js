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
    operand = operand ? operand + target.value: target.value;
    console.log(operand)
    
  }

  if (target.className.includes('single op') && !target.id.includes("equals")) {
    operator = target.value;
    if (!previousTotal) previousTotal = operand;

    operand = null;
    console.log(operator);
    // debugger
  } 

  if (target.id.includes("equals")) {

    operand = target.value;
    console.log(operand)
    switch (operator) {
      case "+": {
        currentTotal = previousTotal + operand;
        previousTotal = currentTotal;
        // reset operator
        operator = null;
        document.querySelector("#screen").innerHTML = currentTotal;
        console.log(`Equals ${currentTotal}`);
        break;
      }
      case "-": {
        currentTotal = previousTotal - operand;
        previousTotal = currentTotal;
        // reset operator
        operator = null;
        document.querySelector("#screen").innerHTML = currentTotal;
        console.log(`Equals ${currentTotal}`);
        break;
      }
      case "*": {
        currentTotal = previousTotal * operand;
        previousTotal = currentTotal;
        // reset operator
        operator = null;
        document.querySelector("#screen").innerHTML = currentTotal;
        console.log(`Equals ${currentTotal}`);
        break;
      }
      case "/": {
        currentTotal = previousTotal / operand;
        previousTotal = currentTotal;
        // reset operator
        operator = null;
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

var singleNumber = document.getElementsByClassName("single number");
for (var i = 0; i < singleNumber.length; i++) {
    singleNumber[i].addEventListener('click', function () {
        document.getElementById("screen").innerText = currentTotal;
    });
}

function getStoredNumber() {
  console.log(document.getElementById('screen').innerText);
  return document.getElementById('screen').innerText;
}