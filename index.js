// InputValues : {
//  adults: [4,400],
//  kid02: [1,100],
//  kid35: [2,200],
//  kid611: [3,300],
// }

const Calculate = (input) => {
  if (input.hotel) {
    return calculateWithHotel(input)
  } else {
    return calculate(input)
  }
}

const calculate = (input) => {
  let adults = input.adults[0] * input.adults[1]
  let kid02 = input.kid02[0] * input.kid02[1]
  let kid35 = input.kid35[0] * input.kid35[1]
  let kid611 = 0
  if ((input.kid611[1] > 0) && (input.kid611[0] > 0)) {
    kid611 = input.kid611[0] * input.kid611[1]
  } else if (input.kid611[0] > 0) {
    kid611 = adults / 2
  }
  let total = adults + kid02 + kid35 + kid611
  let downpayment = total / 2
  let balance = total - downpayment

  let result = {
    "adults": adults,
    "kid02": kid02,
    "kid35": kid35,
    "kid611": kid611,
    "downpayment": downpayment,
    "total": total,
    "balance": balance,
  }
  // console.log(result)
  return result
}

const calculateWithHotel = (input) => {
  let totalHotelPrice = input.tourDates.hotelNights * input.hotel.price
  let adults = input.adults[0] * input.adults[1] + totalHotelPrice
  let kid02 = input.kid02[0] * input.kid02[1]
  let kid35 = input.kid35[0] * input.kid35[1]
  let kid611
  if (input.kid611[1] > 0) {
    kid611 = input.kid611[0] * input.kid611[1]
  } else {
    kid611 = adults / 2
  }
  let total = adults + kid02 + kid35 + kid611
  let downpayment = total / 2
  let balance = total - downpayment

  let result = {
    "adults": adults,
    "kid02": kid02,
    "kid35": kid35,
    "kid611": kid611,
    "downpayment": downpayment,
    "total": total,
    "balance": balance,
  }
  console.log(result)
  return result
}

export { Calculate };
