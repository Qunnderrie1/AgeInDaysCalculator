var age = document.getElementById("userAge");
var clickMe = document.getElementById("userClickMeBtn");
var reset = document.getElementById("resetBtn");
var userResults = document.getElementById("appResults");
var container = document.getElementById("resultsContainer");
var error = document.getElementById("errorMsg");

var currentYear = new Date().getFullYear();





reset.addEventListener('click' , () =>{

    userResults.textContent = 0;
})

clickMe.addEventListener('click' , () => {

    var myAge = (currentYear - age.value) * 365;

    if(NaN)
    {
        error.textContent = "Please enter a number.";
    }
    else{
        userResults.innerHTML = myAge;
    }
})
