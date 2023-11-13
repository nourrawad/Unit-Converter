/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inputNum = document.getElementById("num-el");
let convertBtn = document.getElementById("convert-btn");
let lengthEl = document.getElementById("length-el");
let massEl = document.getElementById("mass-el");
let volumeEl = document.getElementById("volume-el");

//action is trigerred by clicking on convert button
convertBtn.addEventListener("click", function () {
  conversionFunction();
});

//action is trigerred  by pressing enter on input
inputNum.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    conversionFunction();
    document.getElementById("myBtn").click();
  }
});
let errorMsg = `Please try again using a number`;

function conversionFunction() {
  if (isNaN(inputNum.value)) {
    lengthEl.innerHTML = errorMsg;
    massEl.innerHTML = errorMsg;
    volumeEl.innerHTML = errorMsg;
    return false;
  } else {
    //  calculating length in meters/feet
    lengthEl.innerHTML = `${inputNum.value} meters = ${(
      inputNum.value * 3.281
    ).toFixed(3)} feet |
        ${inputNum.value} feet = ${(inputNum.value / 3.281).toFixed(3)} meters`;

    //  calculating mass in liter/gallons
    massEl.innerHTML = `${inputNum.value} liters = ${(
      inputNum.value * 0.264
    ).toFixed(3)} gallons |
        ${inputNum.value} gallons = ${(inputNum.value / 0.264).toFixed(
      3
    )} liters`;

    //  calculating volume in kilogram/pound
    volumeEl.innerHTML = `${inputNum.value} kilograms = ${(
      inputNum.value * 2.204
    ).toFixed(3)} pounds |
        ${inputNum.value} pounds = ${(inputNum.value / 2.204).toFixed(
      3
    )} kilograms`;
    return true;
  }
}
