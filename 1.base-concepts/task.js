"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;
  if (d > 0) {
    let root1 = (-b + Math.sqrt(d)) / (2 * a);
    let root2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(root1, root2);
  } else if (d === 0) {
    let root1 = -b / (2 * a);
    arr.push(root1);
  }
  console.log(arr);
  return arr;
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let bodyCredit;
  let monthPayment;
  let totalAmount;

  if (
    isNaN(percent) ||
    isNaN(contribution) ||
    isNaN(amount) ||
    isNaN(countMonths)
  ) {
    console.log("Данные введены некорректно");
    return false;
  }

  percent = percent / 100 / 12;
  bodyCredit = amount - contribution;
  monthPayment =
    bodyCredit * (percent + percent / (Math.pow(1 + percent, countMonths) - 1));
  totalAmount = parseFloat((monthPayment * countMonths).toFixed(2));

  return totalAmount;
}

