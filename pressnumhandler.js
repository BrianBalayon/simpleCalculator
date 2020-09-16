/**
 * @param currentOperand: The number currently in the calculator being entered
 * @param pressedNum: The number corresponding to the button pressed
 * @return number after entering the new digit
 */
export function pressedNum(currentOperand, pressedNum) {
    let retVal = currentOperand * 10;
    retVal = retVal + pressedNum;
    return retVal;
}

/**
 * @param currentOperand: The number currently in the calculator being entered
 * @param pressedNum: The number corresponding to the button pressed
 * @param decimals: The number of decimal places in the number
 * @return number after entering the new digit
 */
export function pressedNumDecimal(currentOperand, pressedNum, decimals) {
    let power = Math.pow(10, decimals+1);
    let retVal = currentOperand * power;
    retVal = retVal + pressedNum;
    return retVal / power;
}