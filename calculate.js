"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Calculate = void 0;

// InputValues : {
//  adults: [4,400],
//  kid02: [1,100],
//  kid35: [2,200],
//  kid611: [3,300],
// }
var Calculate = function Calculate(input) {
  if (input.hotelNights) {
    return calculateWithHotel(input);
  } else {
    return calculate(input);
  }
};

exports.Calculate = Calculate;

var calculate = function calculate(input) {
  var adults = input.adults[0] * input.adults[1];
  var kid02 = input.kid02[0] * input.kid02[1];
  var kid35 = input.kid35[0] * input.kid35[1];
  var kid611;

  if (input.kid611[1] > 0) {
    kid611 = input.kid611[0] * input.kid611[1];
  } else {
    kid611 = adults / 2;
  }

  var total = adults + kid02 + kid35 + kid611;
  var downpayment = total / 2;
  var balance = total - downpayment;
  var result = {
    "adults": adults,
    "kid02": kid02,
    "kid35": kid35,
    "kid611": kid611,
    "downpayment": downpayment,
    "total": total,
    "balance": balance
  };
  return result;
};

var calculateWithHotel = function calculateWithHotel(input) {
  var totalHotelPrice = input.hotelNights * input.hotelPricePerNight;
  var adults = input.basePrice.adults[0] * input.basePrice.adults[1] + totalHotelPrice;
  var kid02 = input.basePrice.kid02[0] * input.basePrice.kid02[1];
  var kid35 = input.basePrice.kid35[0] * input.basePrice.kid35[1];
  var kid611;

  if (input.basePrice.kid611[1] > 0) {
    kid611 = input.basePrice.kid611[0] * input.basePrice.kid611[1];
  } else {
    kid611 = adults / 2;
  }

  var total = adults + kid02 + kid35 + kid611;
  var downpayment = total / 2;
  var balance = total - downpayment;
  var result = {
    "adults": adults,
    "kid02": kid02,
    "kid35": kid35,
    "kid611": kid611,
    "downpayment": downpayment,
    "total": total,
    "balance": balance
  };
  return result;
};
