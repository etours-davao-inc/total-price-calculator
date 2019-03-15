// InputValues : {
//  adult: [4,400],
//  kid02: [1,100],
//  kid35: [2,200],
//  kid611: [3,300],
// }
const calculateTotal = (input) => {
  let adult = input.adult[0]*input.adult[1]
  let kid02 = input.kid02[0]*input.kid02[1] 
  let kid35 = input.kid35[0]*input.kid35[1]
  let kid611 = input.kid611[0]*input.kid611[1] 
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

export {calculateTotal};
