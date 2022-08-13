// calculate button setting
document
.getElementById("Calculate-button")
.addEventListener("click", function () {
  const foodAmount = document.getElementById("Food-input");
  const foodValue = foodAmount.value;
  const foodInput = parseFloat(foodValue);
  if (foodInput > 0) {
    foodInput;
  } else {
    foodAmount.value = "please add positive number";
  }

  const rentAmount = document.getElementById("Rent-input");
  const rentValue = rentAmount.value;
  const rentInput = parseFloat(rentValue);
  if (rentInput > 0) {
    rentInput;
  } else {
    rentAmount.value = "please add positive number";
  }
  const clothsAmount = document.getElementById("Cloths-input");
  const clothsValue = clothsAmount.value;
  const clothsInput = parseFloat(clothsValue);
  if (clothsInput > 0) {
    clothsInput;
  } else {
    clothsAmount.value = "please add positive number";
  }
  const incomeInput = document.getElementById("income-input");
  const incomeValue = incomeInput.value;
  const incomeAmount = parseFloat(incomeValue);
  if (incomeAmount > 0) {
    incomeAmount;
  } else {
    incomeInput.value = "please add positive number";
  }

  const plusExpences = foodInput + rentInput + clothsInput;

  const expencesTotal = document.getElementById("Expences-amount");
  expencesTotal.innerText = plusExpences;

  const balanceTotal = incomeValue - plusExpences;
  const balanceAmount = document.getElementById("balance-amount");
  balanceAmount.innerText = balanceTotal;
});
// save button setting
document
.getElementById("save-button")
.addEventListener("click", function () {
  const saveAmount = document.getElementById("save-amount");
  const saveValue = saveAmount.value / 100;
  const incomeInput = document.getElementById("income-input");
  const incomeValue = incomeInput.value;
  const incomeAmount = parseFloat(incomeValue);
  const saveTotal = incomeAmount * saveValue;
  const savingAmount = document.getElementById("saving-amount");
  savingAmount.innerText = saveTotal;

  const foodAmount = document.getElementById("Food-input");
  const foodValue = foodAmount.value;
  const foodInput = parseFloat(foodValue);
  if (foodInput > 0) {
    foodInput;
  } else {
    foodAmount.value = "please add positive number";
  }

  const rentAmount = document.getElementById("Rent-input");
  const rentValue = rentAmount.value;
  const rentInput = parseFloat(rentValue);
  if (rentInput > 0) {
    rentInput;
  } else {
    rentAmount.value = "please add positive number";
  }
  const clothsAmount = document.getElementById("Cloths-input");
  const clothsValue = clothsAmount.value;
  const clothsInput = parseFloat(clothsValue);
  if (clothsInput > 0) {
    clothsInput;
  } else {
    clothsAmount.value = "please add positive number";
  }

  if (incomeAmount > 0) {
    incomeAmount;
  } else {
    incomeInput.value = "please add positive number";
  }

  const plusExpences = foodInput + rentInput + clothsInput;

  const expencesTotal = document.getElementById("Expences-amount");
  expencesTotal.innerText = plusExpences;

  const balanceTotal = incomeValue - plusExpences;
  const balanceAmount = document.getElementById("balance-amount");
  //balanceAmount.innerText = balanceTotal;
  const remainingAmount = document.getElementById("remaining-amount");
  const remainingTotal = balanceTotal - saveTotal;
  remainingAmount.innerText = remainingTotal;
});