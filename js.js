let firstLegInput = document.getElementById("firstLeg");
let secondLegInput = document.getElementById("secondLeg");
let hypotenuseInput = document.getElementById("hypotenuse");
let validTriangleButton = document.querySelector("#validTriangle");
let randomLengthButton = document.querySelector("#randomLength");
let hypotenuseCalculatorButton = document.querySelector("#hypotenuseCalculator");


randomLengthButton.addEventListener("click", (e) => {
    firstLegInput.value = Math.floor((Math.random() * 91) + 10 )
    secondLegInput.value = Math.floor((Math.random() * 91) + 10 )
    hypotenuseInput.value  = Math.floor((Math.random() * 91) + 10 )
    e.preventDefault();
})

validTriangleButton.addEventListener("click", () => {
    if (Math.pow(firstLegInput.value, 2) + Math.pow(secondLegInput.value, 2) === Math.pow(hypotenuseInput.value, 2)){
        alert("A derékszögű háromszög megszerkeszthető!")
    } 
    else {
        alert(`A derékszögű háromszög NEM szerkeszthető meg! ${firstLegInput.value}`) 
    }

})
hypotenuseCalculatorButton.addEventListener("click", (e) => {
    hypotenuseInput.value = Math.sqrt(Math.pow(firstLegInput.value, 2) + Math.pow(secondLegInput.value, 2))
    e.preventDefault();
})