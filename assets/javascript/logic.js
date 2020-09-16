// Allows the DOM to load before JavaScript is executed
window.onload = function () {

    // Selects the button elements with the classname number
    document.querySelectorAll('.number').forEach(item => {

        // Applies the eventListener to all elements with the classname number on click
        item.addEventListener('click', event => {

            // Changes the button with the id AC HTML from "AC" to "C"
            document.getElementById('AC').innerHTML = 'C';
        });
    });

    // Selects the button element with the id AC on click
    document.getElementById('AC').addEventListener('click', function () {

        // Clears all numbers input in the screen id
        document.getElementById('screen').innerHTML = '0';

        // Changes the button from "C" to "AC" after clearing all numbers
        document.getElementById('AC').innerHTML = 'AC';
    });








}



