export const Calculate = (input) => {
  let {adults_item, adults_total} = setAdultItemAndTotal(input)
  let kid02 = input.kid02[0] * input.kid02[1]
  let kid35 = input.kid35[0] * input.kid35[1]
  let kid611_item; 
  let kid611_total;
  if ((input.kid611[1] > 0) && (input.kid611[0] > 0)) {
    kid611_item = input.kid611[1]
    kid611_total = input.kid611[0] * kid611_item
  } else if (input.kid611[0] > 0) {
    kid611_item = adults_item / 2
    kid611_total = input.kid611[0] * kid611_item
  }
  let total = adults_total + kid02 + kid35 + kid611_total
  let downpayment = total / 2
  let balance = total - downpayment

  let result = {
    item: {
      adults: adults_item,
      kid02: input.kid02[1],
      kid35: input.kid35[1],
      kid611: kid611_item
    },
    total: {
      adults: adults_total,
      kid02: kid02,
      kid35: kid35,
      kid611: kid611_total,
      downpayment: downpayment,
      total: total,
      balance: balance
    }
  }
  return result
}

const setAdultItemAndTotal = (input) => {
  let returnItems = {};
  if (input.hotel) {
    let totalHotelPrice = input.tourDates.hotelNights * input.hotel.price
    returnItems.adults_item = input.adults[1] + totalHotelPrice
  } else {
    returnItems.adults_item = input.adults[1]
  }
  returnItems.adults_total = input.adults[0] * returnItems.adults_item
  return returnItems;
}

