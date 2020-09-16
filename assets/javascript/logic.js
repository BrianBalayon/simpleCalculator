// Allows the DOM to load before JavaScript is executed
window.onload = function () {

    // Selects the button elements with the classname number
    document.querySelectorAll('.number').forEach(item => {

        // Applies the eventListener to all elements with the classname number
        item.addEventListener('click', event => {

            // Changes the button with the id AC HTML from "AC" to "C"
            document.getElementById('AC').innerHTML = 'C';
        });
    });



}



