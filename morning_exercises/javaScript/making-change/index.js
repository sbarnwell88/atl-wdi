// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

var makeChange = function(price, payment) {
  price = price * 100;
  payment = payment * 100;
  var change = Math.floor(payment - price);

  if (change <= 0){
    console.log("No Change")
    return [0,0,0,0];
  }
  //60 
  var quarters = Math.floor(change/25); //2
  change = change % 25; //10

  var dimes = Math.floor(change / 10);
  change = change % 10; //0

  var nickels = Math.floor(change / 5);
  change = change % 5;//0

  var pennies = Math.floor(change);
  
  var coins = [quarters, dimes, nickels, pennies];

  return coins;
};
  
  // Your Code Here
  // get both amounts
  // change into denominations
  //subtract the payment from the price
  //round both and multiply


/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  makeChange: makeChange
};
