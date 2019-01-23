module.exports = {
  calculateTotal: (input) => {
    let adult_total = input.adult[0]*input.adult[1]
    let k02_total = input.k02[0]*input.k02[1] 
    let k35_total = input.k35[0]*input.k35[1]
    let k61_total = input.k61[0]*input.k61[1] 
    let total = adult_total + k02_total + k35_total + k61_total
    let downpayment = total/2
    let balance = total - downpayment
    
    computedValues = {
      "adult_total": adult_total,
      "k02_total": k02_total,
      "k35_total": k35_total,
      "k61_total": k61_total,
      "downpayment": downpayment,
      "total": total,
      "balance": balance,
    }
    return computedValues
  }
}