
// InputValues : {
//  adult: [4,400],
//  kid02: [1,100],
//  kid35: [2,200],
//  kid611: [3,300],
// }
const calculateTotal = (input) => {
  // Initialize Return Object Data Structure
  let returnObject = {total: 0, downpayment: 0, balance: 0}
  let objectKeys = Object.keys(input)
  // Iterates input & do computation on each item
  // Aggregate total, downpayment, balance
  objectKeys.forEach((key)=> {
    let item = input[key]
    let product = item[0] * item[1]
    returnObject[key] = product
    returnObject.total += product
    returnObject.downpayment = returnObject.total/2
    returnObject.balance = returnObject.total - returnObject.downpayment
  }) 
  return returnObject
}

export {calculateTotal};
