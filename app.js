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

   // Press a number
   if (target.className.includes("single number")) {
      operand = operand ? operand + target.value : target.value;
      console.log(operand);
      document.getElementById("screen").innerText = operand;
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

   // Press decimal
   if (target.id.includes("dot") && !decimalAdded) {
      operand = operand ? operand + "." : "0.";
      document.getElementById("screen").innerText = operand;
      decimalAdded = true;
   }

   // Press an operator
   if (
      target.className.includes("single op") &&
      !target.id.includes("equals")
   ) {
      decimalAdded = false;
      operand = Number(operand);
      operator = target.value;
      if (!previousTotal) {
         previousTotal = operand;
      } else {
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

   // Press equal
   if (target.id.includes("equals")) {
      operand = Number(operand);

      switch (operator) {
         case "+": {
            currentTotal = previousTotal + operand;
            previousTotal = currentTotal;
            // reset operator
            operator = null;
            document.querySelector("#screen").innerHTML = currentTotal;
            console.log(`Equals ${currentTotal}`);
            decimalAdded = false;
            break;
         }
         case "-": {
            currentTotal = previousTotal - operand;
            previousTotal = currentTotal;
            // reset operator
            operator = null;
            document.querySelector("#screen").innerHTML = currentTotal;
            console.log(`Equals ${currentTotal}`);
            decimalAdded = false;
            break;
         }
         case "*": {
            currentTotal = previousTotal * operand;
            previousTotal = currentTotal;
            // reset operator
            operator = null;
            document.querySelector("#screen").innerHTML = currentTotal;
            console.log(`Equals ${currentTotal}`);
            decimalAdded = false;
            break;
         }
         case "/": {
            currentTotal = previousTotal / operand;
            previousTotal = currentTotal;
            // reset operator
            operator = null;
            document.querySelector("#screen").innerHTML = currentTotal;
            console.log(`Equals ${currentTotal}`);
            decimalAdded = false;
            break;
         }
         default: {
            break;
         }
      }
   }
});
