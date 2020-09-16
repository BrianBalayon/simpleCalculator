function getStoredNumber() {
    console.log(document.getElementById('screen').innerText);
    return document.getElementById('screen').innerText;
}

var singleNumber = document.getElementsByClassName("single number");
for (var i = 0; i < singleNumber.length; i++) {
    singleNumber[i].addEventListener('click', function () {
        document.getElementById("screen").innerText = this.id;
    });
}