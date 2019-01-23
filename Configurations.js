module.exports = {
  validTypeInputValues:  ["daytour", "multiday"],
  requiredReturnKeys: [
    'adult_total',
    'k02_total',
    'k35_total',
    'k61_total',
    'downpayment',
    'total',
    'balance'
  ],
  exampleInputValues : {
  type: "daytour",
  adult: [4,400],
  k02: [1,100],
  k35: [2,200],
  k61: [3,300],
  }
}