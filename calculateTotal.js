
const calculateTotal = (input) => {
  let adult = input.adult[0]*input.adult[1]
  let kid02 = input.k02[0]*input.k02[1] 
  let kid35 = input.k35[0]*input.k35[1]
  let kid611 = input.k61[0]*input.k61[1] 
  let total = adult + kid02 + kid35 + kid611
  let downpayment = total/2
  let balance = total - downpayment
  
  let computedValues = {
    "adult": adult,
    "kid02": kid02,
    "kid35": kid35,
    "kid611": kid611,
    "downpayment": downpayment,
    "total": total,
    "balance": balance,
    }
    
  return computedValues
}

export default calculateTotal;
