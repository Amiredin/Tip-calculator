"use strict";

const billInput = document.getElementById("bill");
const customTipInput = document.querySelector(".tips-btn input");
const peopleInput = document.getElementById("people");
const tipButtons = document.querySelectorAll(".tips-btn .btn-value");
const tipAmountEl = document.querySelector(".tip-amount");
const totalAmountEl = document.querySelector(".total-amount");
const errorEl = document.querySelector(".error-message");
const reset = document.querySelector(".reset");


//function to calculate the bill
const calcTip = function (bill, tip, people) {
  if (people === 0) {
    errorEl.textContent = "Can't be zero";
    errorEl.style.display = "block";
    return;
  }

  const tipAmount = bill * (tip / 100);
  const totalAmount = (bill + tipAmount) / people;

  tipAmountEl.textContent = "$" + tipAmount.toFixed(2);
  totalAmountEl.textContent = "$" + totalAmount.toFixed(2);
};


//collecting input values
const collectInputValues = function () {
  const bill = parseFloat(billInput.value) || 0;
  const customTip = parseFloat(customTipInput.value) || 0;
  const people = Number(peopleInput.value) || 1;

  console.log(people);

  calcTip(bill, customTip, people);
};

//collecting button values
const collectButtonValue = function () {
  const bill = parseFloat(billInput.value) || 0;
  const tipContent = parseFloat(this.textContent.replace("%", "")) || 0;
  const people = Number(peopleInput.value) || 1;

  calcTip(bill, tipContent, people);
};

//adding event listener to the dom
document.addEventListener("DOMContentLoaded", function () {
  billInput.addEventListener("input", collectInputValues);
  customTipInput.addEventListener("input", collectInputValues);
  peopleInput.addEventListener("input", collectInputValues);

  tipButtons.forEach((button) => {
    button.addEventListener("click", collectButtonValue);
  });
});

//resetting the input
reset.addEventListener("click", function () {
  billInput.value = "";
  customTipInput.value = "";
  peopleInput.value = "";
  tipAmountEl.textContent = "$0.00";
  totalAmountEl.textContent = "$0.00";
  errorEl.style.display = "none";
});
