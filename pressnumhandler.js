/**
 * @param currentOperand: The number currently in the calculator being entered
 * @param pressedNum: The number corresponding to the button pressed
 * @return The resulting number after entering the new digit
 */
function pressedNum(currentOperand, pressedNum) {
    let retVal = currentOperand * 10;
    retVal = retVal + pressedNum;
    return retVal;
}