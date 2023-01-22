let firstLegInput = parseFloat(document.getElementById("firstLeg"));
let secondLegInput = parseFloat(document.getElementById("secondLeg"));
let hypotenuseInput = parseFloat(document.getElementById("hypotenuse"));
let validTriangleButton = document.querySelector("#validTriangle");
let randomLengthButton = document.querySelector("#randomLength");
let hypotenuseCalculatorButton = document.querySelector("#hypotenuseCalculator");

validTriangleButton.addEventListener("click", () => {
    if (Math.pow(firstLegInput, 2) + Math.pow(secondLegInput, 2) == Math.pow(hypotenuseInput, 2)){
        alert("A derékszögű háromszög megszerkeszthető!")
    } 
    else {
        alert(`A derékszögű háromszög NEM szerkeszthető meg! ${Math.pow(firstLegInput, 2)}`) 
    }

})
