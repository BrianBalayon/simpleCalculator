// currentTotal
// previousTotal = 12 // when press +
// operand
// operator
// operandClicks until operator (for 1s,10s, 100s,) //keep track within event listener - not global need
// css grid and hand code design from scratch

//no order of operations

// Allows the DOM to load before JavaScript is executed
window.onload = function () {
   // Selects the button elements with the classname number
   document.querySelectorAll(".number").forEach((item) => {
      // Applies the eventListener to all elements with the classname number on click
      item.addEventListener("click", (event) => {
         // Changes the button with the id AC HTML from "AC" to "C"
         document.getElementById("AC").innerHTML = "C";
      });
   });

   // Selects the button element with the id AC on click
   document.getElementById("AC").addEventListener("click", function () {
      // Clears all numbers input in the screen id
      document.getElementById("screen").innerHTML = "0";

      // Changes the button from "C" to "AC" after clearing all numbers
      document.getElementById("AC").innerHTML = "AC";

      // Clears the number input history
      operand = 0;
   });

   const calculator = {
      currentTotal: 0,
      previousTotal: null,
      operand: null,
      operator: null,
      decimalAdded: false,
   };

   let {
      currentTotal,
      previousTotal,
      operand,
      operator,
      decimalAdded,
   } = calculator;

   document.addEventListener("click", (event) => {
      //only allow click on button
      const { target } = event;

      if (!target.matches("button")) return;

      if (target.className.includes("single number")) {
         operand = operand ? operand + target.value : target.value;
         console.log(operand);
         document.getElementById("screen").innerText = operand;
      }

      if (target.id.includes("dot") && !decimalAdded) {
         operand = operand ? operand + "." : "0.";
         document.getElementById("screen").innerText = operand;
         decimalAdded = true;
      }

      if (
         target.className.includes("single op") &&
         !target.id.includes("equals")
      ) {
         operator = target.value;
         if (!previousTotal) previousTotal = operand;

         operand = null;
         console.log(operator);
         // debugger
      }

      if (target.id.includes("equals")) {
        decimalAdded = false;
         operand = target.value;
         console.log(operand);
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
   });
};
