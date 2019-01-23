const assert = require('chai').assert
const expect = require('chai').expect
const calculateTotal = require('../calculateTotal.js').calculateTotal
const requiredReturnKeys = require('../Configurations.js').requiredReturnKeys
const exampleInputValues = require('../Configurations.js').exampleInputValues

var returnValue = calculateTotal(exampleInputValues)

describe('Compute', ()=> {
  it("Module Imported", ()=> {
    assert.exists(calculateTotal)
  })
  describe("Check return value", ()=> {
    it("Returned a value", ()=> {
      expect(returnValue).to.be.ok
    })
    it("Returned required fields", () => {
      expect(returnValue).to.have.keys(requiredReturnKeys)
    })
  })
  describe("Computations are correct", () => {
    let total = (4*400) + (3*300) + (2*200) + (1*100)
    let downpayment = total/2
    let balance = total - downpayment
    it("Adult total is correct", () => {
      expect(returnValue.adult_total).to.be.equal(4*400)
    })
    it("k02 total is correct", () => {
      expect(returnValue.k02_total).to.be.equal(1*100)
    })
    it("k35 total is correct", () => {
      expect(returnValue.k35_total).to.be.equal(2*200)
    })
    it("k61 total is correct", () => {
      expect(returnValue.k61_total).to.be.equal(3*300)
    })
    it("Total is correct", () => {
      expect(returnValue.total).to.be.equal(total)
    })
    it("Downpayment is correct", () => {
      expect(returnValue.downpayment).to.be.equal(downpayment)
    })
    it("Balance is correct", () => {
      expect(returnValue.balance).to.be.equal(balance)
    })           
  })
})

