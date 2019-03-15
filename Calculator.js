
const calculateTotal = (input) => {
  let adult = input.adult[0]*input.adult[1]
  let kid02 = input.k02[0]*input.k02[1] 
  let kid35 = input.k35[0]*input.k35[1]
  let kid611 = input.k61[0]*input.k61[1] 
  let total = adult + kid02 + kid35 + kid611
  let downpayment = total/2
  let balance = total - downpayment
  
  let result = {
    "adult": adult,
    "kid02": kid02,
    "kid35": kid35,
    "kid611": kid611,
    "downpayment": downpayment,
    "total": total,
    "balance": balance,
    }
    
  return result
}

const calculatePriceWithHotel = (input) => {
  let firstLevelKeys = ["basePrice", "hotelNights", "hotelPricePerNight"]

  firstLevelKeys.forEach((key) => {
    if (!(input.hasOwnProperty(key))) {
      throw "Incomplete input parameters"
    }
  })

  return {
    "adult": 0,
    "kid02": 0,
    "kid35": 0,
    "kid611": 0,
  }
}
export {calculateTotal, calculatePriceWithHotel};
