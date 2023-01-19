const result = document.querySelector("#result");
const firstInput = document.querySelector("#first-input");
const secondInput = document.querySelector("#second-input");
const calculateBtn = document.querySelector("#calculateBtn");
const selectInput = document.querySelector("#select-sign");

const firstError = document.querySelector("#firstError");
const secError = document.querySelector("#secError");
const operatorError = document.querySelector("#operatorError");

firstError.style.display = "none";
secError.style.display = "none";
operatorError.style.display = "none";

function checkValidation(firstNumber, secNumber, selectSign) {
  if(firstNumber == "" || firstNumber == NaN || firstNumber == undefined) {
    firstError.style.display = "block";
  } else {
    firstError.style.display = "none";
  }
  if(secNumber == "" || secNumber == NaN || secNumber == undefined) {
    secError.style.display = "block";
  } else {
    secError.style.display = "none";
  }
  if(selectSign == "empty") {
    operatorError.style.display = "block";
  } else {
    operatorError.style.display = "none";
  }

  if(firstError.style.display == "none" && secError.style.display == "none" && operatorError.style.display == "none") {
    const changedFirstNumberToInt = parseInt(firstNumber);
  const changedSecNumberToInt = parseInt(secNumber);

  switch (selectSign) {
    case "+":
      result.value = changedFirstNumberToInt + changedSecNumberToInt;
      break;
    case "-":
      result.value = changedFirstNumberToInt - changedSecNumberToInt;
      break;
    case "*":
      result.value = changedFirstNumberToInt * changedSecNumberToInt;
      break;
    case "/":
      result.value = changedFirstNumberToInt / changedSecNumberToInt;
      break;
    case "%":
      result.value = changedFirstNumberToInt % changedSecNumberToInt;
      break;     
  }
  }
}

const calculate = () => {
  const firstNumber = firstInput.value;
  const secNumber = secondInput.value;
  const selectSign = selectInput.value;

  checkValidation(firstNumber, secNumber, selectSign); 
};

calculateBtn.addEventListener("click", calculate);
