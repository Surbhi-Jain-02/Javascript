var getInput = document.getElementById('passwd');
var upper = document.getElementById('upper');
var lower = document.getElementById('lower');
var digit = document.getElementById('digit');
var total = document.getElementById('total');
getInput.onfocus = function () {
    document.getElementById('container1').style.display = "block";
}
getInput.onblur = function () {
    document.getElementById('container1').style.display = "none";
}
getInput.onkeyup = function () {
    var lowerCase = /[a-z]/g;
    if (getInput.value.match(lowerCase)) {
        lower.classList.remove("incorrect");
        lower.classList.add("correct");
    }
    else {
        lower.classList.remove("correct");
        lower.classList.add("incorrect");
    }
    var upperCase = /[A-Z]/g;
    if (getInput.value.match(upperCase)) {
        upper.classList.remove("incorrect");
        upper.classList.add("correct");
    }
    else {
        upper.classList.remove("correct");
        upper.classList.add("incorrect");
    }
    var numeric = /[0-9]/g;
    if (getInput.value.match(numeric)) {
        digit.classList.remove("incorrect");
        digit.classList.add("correct");
    }
    else {
        digit.classList.remove("correct");
        digit.classList.add("incorrect");
    }
}